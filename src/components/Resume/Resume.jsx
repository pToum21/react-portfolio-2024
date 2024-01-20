import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './resume.css';
import Button from 'react-bootstrap/Button';
import { pdfjs } from 'react-pdf';
import resumePdf from '../../assets/Peyton_Touma_-_Web_Developer.pdf';

function Resume() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Peyton_Touma_-_Web_Developer.pdf';
        link.click();
    };

    // figure out how to resize the resume to fit on phone screen
    return (
        <div className='resume-div'>
            <div className='resume-header'>
                <p className='resume-title'>Resume</p>
                <Button onClick={handleDownload} className="custom-download-btn">
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
