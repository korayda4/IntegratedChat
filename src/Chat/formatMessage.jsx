import React from 'react';
import { Copy } from 'lucide-react';

const formatMessage = (message) => {
  const lines = message.split('\n');
  const formattedLines = [];

  let inCodeBlock = false;
  let codeBlock = [];

  const handleCopy = (text) => {
    text ? navigator.clipboard.writeText(text.target.parentElement.parentElement.parentElement.children[1].innerText) : null;
  };

  for (let line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('```')) {
      if (inCodeBlock) {
        formattedLines.push(
          <div key={formattedLines.length} className="code-block">
            <div className="code-header">
              code 
              <div className="copy" style={{ cursor: "pointer" }} onClick={(e) => handleCopy(e)}>
                <Copy size={16} />
              </div>
            </div>
            <div className="code-content">
              {codeBlock}
            </div>
          </div>
        );
        inCodeBlock = false;
        codeBlock = [];
      } else {
        inCodeBlock = true;
      }
    } else {
      if (inCodeBlock) {
        const currentIndentation = line.match(/^\s*/)[0];
        codeBlock.push(
          <pre key={codeBlock.length} style={{ marginLeft: currentIndentation }}>
            {line}
          </pre>
        );
      } else {
        formattedLines.push(
          <div
            key={formattedLines.length}
            className={trimmedLine.startsWith('#') ? "header-line" : "regular-line"}
          >
            {trimmedLine}
          </div>
        );
      }
    }
  }

  if (inCodeBlock && codeBlock.length > 0) {
    formattedLines.push(
      <div key={formattedLines.length} className="code-block">
        <div className="code-header">
          code
          <div className="copy" onClick={handleCopy}>
            <Copy size={16} />
          </div>
        </div>
        <div className="code-content">
          {codeBlock}
        </div>
      </div>
    );
  }

  return formattedLines;
};

export default formatMessage;
