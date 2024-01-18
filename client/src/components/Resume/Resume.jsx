import { useState } from 'react';
import { Document, Page } from 'react-pdf';
import './resume.css'

import resumePdf from '../../assets/resume.pdf'

function Resume() {
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return (
        <div className='resume-div'>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>

                <button>Download PDF</button>
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
