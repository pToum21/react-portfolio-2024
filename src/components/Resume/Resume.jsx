import React, { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import './resume.css';
import Button from 'react-bootstrap/Button';
import { pdfjs } from 'react-pdf';
import resumePdf from '../../assets/Peyton Touma Resume_8.7.24_1.pdf';

function Resume() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [pageWidth, setPageWidth] = useState(window.innerWidth);

    // Set the worker source to be the pdf.worker.js located in the public folder
    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.js',
        import.meta.url,
    ).toString();

    useEffect(() => {
        const handleResize = () => {
            setPageWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePdf;
        link.download = 'Peyton_Touma_-_Web_Developer.pdf';
        link.click();
    };

    return (
        <div className='resume-div'>
            <div className='resume-header'>
                <p className='resume-title'>Resume</p>
                <Button onClick={handleDownload} variant="info">
                    Download As PDF
                </Button>
            </div>
            <div className="pdf-container">
                <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.apply(null, Array(numPages))
                        .map((x, i) => i + 1)
                        .map(page => (
                            <div key={page} className="pdf-page-container">
                                <Page
                                    pageNumber={page}
                                    width={pageWidth}
                                    renderTextLayer={false}
                                    renderAnnotationLayer={false}
                                />
                            </div>
                        ))}
                </Document>
            </div>
        </div>
    );
}

export default Resume;
