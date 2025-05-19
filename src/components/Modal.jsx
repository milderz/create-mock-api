import React, { useState } from 'react';
import './styles/Modal.css';

const Modal = ({handleTemplateChange, templates, handleTemplateApply, selectedTemplate, modalOpen}) => {
    const [selectedTab, setSelectedTab] = useState('template');

    

    const handleTabSelect = (tab) => {
        setSelectedTab(tab);
    };
   


    return (
        <div className="modal-overlay" style={ modalOpen ? { display: 'flex' } : { display: 'none' }}>
            <div className="modal">
                <div className="modal-body">
                    <header className="modal-header">
                        <h2>Choose API Template</h2>
                        <div className="tabs">
                            <button
                                className={`tab-button ${selectedTab === 'template' ? 'active' : ''}`}
                                onClick={() => handleTabSelect('template')}
                            >
                                Use Template
                            </button>
                            <button
                                className={`tab-button ${selectedTab === 'ai' ? 'active' : ''}`}
                                onClick={() => handleTabSelect('ai')}
                            >
                                Generate with AI
                            </button>
                        </div>
                    </header>

                    <div className="tab-content">
                        {selectedTab === 'template' && (
                            <div className="template-content">
                                <ul className='templates-list'>
                                    {templates.map((template, index) => (
                                        <li key={index} className='template-card'>
                                            <button
                                                onClick={() => handleTemplateChange(template.id)}
                                                className={selectedTemplate && template.id === selectedTemplate.id ? 'focused' : ''}

                                            >
                                                <h3>{template.templateName}</h3>
                                                <p>{template.templateDescription}</p>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {selectedTab === 'ai' && (
                            <div className="ai-content">
                                <textarea
                                    className="ai-input"
                                    placeholder="Describe the API you want to generate..."
                                    rows="4"
                                    onChange={(e) => console.log(e.target.value)}
                                />
                            </div>
                        )}
                    </div>

                </div>

                <button
                    className="apply-button"
                    onClick={handleTemplateApply}
                    disabled={!selectedTemplate}
                >
                    Apply Template
                </button>
            </div>
        </div>
    );
};

export default Modal;