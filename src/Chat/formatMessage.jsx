const formatMessage = ( message ) => {
    const lines = message.split('\n');
    const formattedLines = [];

    let inCodeBlock = false;
    let codeBlock = [];

    const specialKeywords = ["import", "function", "trim"];

    for (let line of lines) {
        if (line.trim().startsWith('```') || line.trim().startsWith('#')) {
            if (inCodeBlock) {
                formattedLines.push(
                    <div key={formattedLines.length} className="code-line">
                        <div className="codeName">code</div>
                        {codeBlock.map((codeLine, index) => (
                            <div key={index}>{codeLine}</div>
                        ))}
                    </div>
                );
                inCodeBlock = false;
                codeBlock = [];
            } else {
                inCodeBlock = true;
            }
        } else {
            let spaceAddedLine = line.split('').map(char => char === ' ' ? '\u00a0' : char).join('');
            if (inCodeBlock) {
                codeBlock.push(spaceAddedLine);
            } else {
                specialKeywords.forEach(keyword => {
                    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
                    spaceAddedLine = spaceAddedLine.replace(regex, `<span class="special-keyword">${keyword}</span>`);
                });
                formattedLines.push(<div key={formattedLines.length} dangerouslySetInnerHTML={{ __html: spaceAddedLine }} />);
            }
        }
    }

    if (inCodeBlock) {
        formattedLines.push(
            <div key={formattedLines.length} className="code-line">
                <div className="codeName">code</div>
                {codeBlock.map((codeLine, index) => (
                    <div key={index}>{codeLine}</div>
                ))}
            </div>
        );
    }

    return formattedLines;
}

export default formatMessage;
