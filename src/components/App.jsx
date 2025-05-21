import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Preview from './Preview';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Modal from './Modal';
import templatesJSONFile from '../templates.json';
import Header from "../components/Header";
import { v4 as uuidv4 } from 'uuid';
import { useUser } from "@clerk/clerk-react";
import { ClerkProvider } from "@clerk/clerk-react";





export default function App() {
  const [templates, setTemplates] = useState(templatesJSONFile);
  const [template, setTemplate] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(templatesJSONFile[0]);
  const [editorContent, setEditorContent] = useState('JSON content here');
  const [modalOpen, setModalOpen] = useState(true);
  const [aiContent, setAiContent] = useState('');
  const [aiTemplate, setAiTemplate] = useState(null);
  const [selectedTab, setSelectedTab] = useState("template");
  const PUBLISHABLE_KEY = import.meta.env.PUBLIC_CLERK_PUBLISHABLE_KEY;
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    if (template) {
      setEditorContent(JSON.stringify(template, null, 2));
    }
  }, [template]);

  const handleEditorChange = (value) => {
    try {
      const updatedProducts = JSON.parse(value);
      setProductsData(updatedProducts);

    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  const handleTemplateChange = (templateId) => {
    event.preventDefault();
    const selected = templates.find((template) => template.id === templateId)
    setSelectedTemplate(selected);
  }

  const handleTemplateApply = (aiData) => {
    if (selectedTab === "template") {

      setTemplate(selectedTemplate);
    } else if (selectedTab === "ai") {

      setTemplate(aiData);
    }
    handleModalClose();
  }

  const handleModalClose = () => {
    setModalOpen(!modalOpen);
  }

  const handleAiContentChange = (value) => {
    setAiContent(value);
  }

  const generateMockAPI = async (description) => {
    const response = await fetch('https://chat-gpt-mock-api-generator.onrender.com/generate-mock-api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ description })
    });
    return await response.json();
  }

  const handleTemplateSave = async () => {
    try {
      const res = await fetch('https://hzkdveydelrziyomqjbq.supabase.co/rest/v1/APIS', {
        method: 'POST',
        headers: {
          'apikey': import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${import.meta.env.PUBLIC_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: JSON.stringify({
          id: uuidv4().split('-')[0], 
          created_at: new Date().toISOString(), 
          username: userID,
          slug: 'test-api',
          name: template.templateName,
          description: template.templateDescription,
          json_data: {template}, 
          is_public: true
        })
      })
      const text = await res.text();
      console.log(res.status, text);

      if (!res.ok) throw new Error('Error al insertar');

      const data = JSON.parse(text);
      console.log('Datos insertados:', data);
      alert('API save successfully, go to My APIs to see it');
      return data;


    } catch (err) {
      console.error('Error:', err);
      throw err; // para que el que llame a esta función también pueda manejar el error
    }

  }



  return (
  
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      
      <Header handleModalClose={handleModalClose} currentPath="/create" handleTemplateSave={handleTemplateSave} setUserID={setUserID} />
      <Modal
        handleTemplateChange={handleTemplateChange}
        templates={templates} selectedTemplate={selectedTemplate}
        handleTemplateApply={handleTemplateApply}
        modalOpen={modalOpen}
        handleAiContentChange={handleAiContentChange}
        aiContent={aiContent}
        generateMockAPI={generateMockAPI}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        setAiTemplate={setAiTemplate} />
      <PanelGroup direction="horizontal" style={{ height: '550px' }}>
        <Panel defaultSize={50} minSize={20}>
          <Editor
            height="100%"
            defaultLanguage="json"
            value={editorContent}
            theme="vs-dark"
            onChange={handleEditorChange}
          />
        </Panel>
        <PanelResizeHandle style={{ width: "20px", backgroundColor: "var(--dark-bg)", display: "grid", placeItems: "center" }}>
          <svg class="OG5fOa_Icon AzW8qW_ResizeHandleThumb" viewBox="0 0 24 24" data-direction="horizontal"><path fill="currentColor" d="M11 18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2m-2-8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"></path></svg>
        </PanelResizeHandle>

        <Panel defaultSize={50} minSize={20}>
          <Preview template={template} />
        </Panel>
      </PanelGroup>
    </ClerkProvider>


      

   

  );
}