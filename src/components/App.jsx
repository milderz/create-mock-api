import { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import Preview from './Preview';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import Modal from './Modal';
import templatesJSONFile from '../templates.json';
import Header from "../components/Header";




export default function App( { currentPath} ) {
  const [templates, setTemplates] = useState(templatesJSONFile);
  const [template, setTemplate] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(templatesJSONFile[0]);
  const [editorContent, setEditorContent] = useState('JSON content here');
  const [modalOpen, setModalOpen] = useState(true);

  useEffect(() => {
    if (template) {
      setEditorContent(JSON.stringify(template, null, 2));
    }
  }, [template]);

  const handleEditorChange = (value) => {
    try {
      const updatedProducts = JSON.parse(value);
      setProductsData(updatedProducts);
      console.log(productsData)
    } catch (error) {
      console.error("Invalid JSON:", error);
    }
  };

  const handleTemplateChange = (templateId) => {
    event.preventDefault();
    const selected = templates.find((template) => template.id === templateId)
    setSelectedTemplate(selected);
  }

  const handleTemplateApply = () => {
    setTemplate(selectedTemplate);
    handleModalClose();
  }

  const handleModalClose = () => {
    setModalOpen(!modalOpen);
  }

 



  return (
    <>
    <Header  currentPath={currentPath} handleModalClose={handleModalClose} />
      <Modal 
      handleTemplateChange={handleTemplateChange} 
      templates={templates} selectedTemplate={selectedTemplate} 
      handleTemplateApply={handleTemplateApply} 
      modalOpen={modalOpen} />
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
    </>

  );
}