'use client'

import React, { useState } from 'react';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { stateToHTML } from 'draft-js-export-html'; // Import stateToHTML function from draft-js-export-html
import '../../app/styles/cms-globals.css'; // Import CSS file for styling

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onChange = newEditorState => {
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  const onStyleClick = style => {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  };

  const onBulletPointClick = () => {
    onChange(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
  };

  const onNewLineClick = () => {
    onChange(EditorState.push(editorState, EditorState.createEmpty()));
  };

  const onIndentClick = () => {
    onChange(RichUtils.onTab(editorState, 4));
  };

  const onLinkClick = () => {
    const selection = editorState.getSelection();
    if (!selection.isCollapsed()) {
      const url = window.prompt('Enter the URL for the link:');
      if (url) {
        const contentState = editorState.getCurrentContent();
        const contentStateWithEntity = contentState.createEntity('LINK', 'MUTABLE', { url });
        const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        const newEditorState = EditorState.set(editorState, { currentContent: contentStateWithEntity });
        onChange(RichUtils.toggleLink(newEditorState, selection, entityKey));
      }
    }
  };

  // Custom style function to apply link color
  const customStyleFn = (style) => {
    if (style === 'LINK') {
      return {
        color: 'rgb(59, 130, 246)',
        textDecoration: 'underline'
      };
    }
  };

  const blockRendererFn = (contentBlock) => {
    const entityType = contentBlock.getEntityAt(0);
    if (entityType) {
      const entity = editorState.getCurrentContent().getEntity(entityType);
      if (entity) {
        const type = entity.getType();
        if (type === 'LINK') {
          const data = entity.getData();
          if (data) {
            const href = data.url;
            return {
              component: 'a',
              props: {
                href,
                target: '_blank',
                style: {
                  color: 'rgb(59, 130, 246)',
                  textDecoration: 'underline'
                }
              }
            };
          }
        }
      }
    }
  };

  // Convert editor content to HTML
  const htmlContent = stateToHTML(editorState.getCurrentContent());

  return (
    <div className="text-editor-container">
      <div className="text-editor-controls">
        {/* Style buttons */}
        <button className="text-editor-button" onClick={() => onStyleClick('BOLD')}>
          <strong>B</strong>
        </button>
        <button className="text-editor-button" onClick={() => onStyleClick('UNDERLINE')}>
          <u>U</u>
        </button>
        <button className="text-editor-button" onClick={() => onBulletPointClick()}>
          <span>&#8226;</span>
        </button>
        <button className="text-editor-button" onClick={() => onNewLineClick()}>
          <span>&#182;</span>
        </button>
        <button className="text-editor-button" onClick={() => onIndentClick()}>
          <span>&rarr;</span>
        </button>
        <button className="text-editor-button" onClick={() => onLinkClick()}>
          <span>Link</span>
        </button>
      </div>
      <div className="text-editor-content">
        {/* Text editor */}
        <Editor
          editorState={editorState}
          onChange={onChange}
          handleKeyCommand={handleKeyCommand}
          placeholder="Enter your text here..."
          customStyleFn={customStyleFn}
          blockRendererFn={blockRendererFn}
        />
      </div>
      <div className="text-editor-preview">
        {/* Preview section */}
        <h3>Preview</h3>
        <div className="preview-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    </div>
  );
};

export default TextEditor;
