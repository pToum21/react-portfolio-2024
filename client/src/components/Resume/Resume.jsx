import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './resume.css';
import Button from 'react-bootstrap/Button';

import resumePdf from '../../assets/Peyton_Touma_-_Web_Developer.pdf';

function Resume() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Peyton_Touma_Web_Developer_Resume.pdf';
        link.click();
    };

    return (
        <div className='resume-div'>
            <div className='resume-header'>
                <p className='resume-title'>Resume</p>
                <Button onClick={handleDownload} className="custom-submit-btn">
                    Download As PDF
                </Button>
            </div>
            <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
                {Array.apply(null, Array(numPages))
                    .map((x, i) => i + 1)
                    .map(page => (
                        <Page
                            key={page}
                            pageNumber={page}
                            renderTextLayer={false}
                            renderAnnotationLayer={false}
                        />
                    ))}
            </Document>
        </div>
    );
}

export default Resume;
