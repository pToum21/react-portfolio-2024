import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import resumePdf from '../../assets/Peyton_Touma_Resume.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageWidth, setPageWidth] = useState(Math.min(window.innerWidth - 48, 900));

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(Math.min(window.innerWidth - 48, 900));
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Peyton_Touma_Resume.pdf';
    link.click();
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-6 md:px-12">
      {/* Page header */}
      <div className="max-w-5xl mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs tracking-widest text-accent uppercase mb-3 block">/ Resume</span>
          <h1
            className="font-display font-extrabold text-text leading-none"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            Peyton Touma
          </h1>
          <p className="font-mono text-sm text-muted mt-2">Frontend Software Engineer</p>
        </div>
        <button
          onClick={handleDownload}
          className="self-start md:self-end font-mono text-xs tracking-widest uppercase px-6 py-3 border border-border text-text hover:border-accent hover:text-accent transition-all duration-300"
        >
          Download PDF ↓
        </button>
      </div>

      {/* PDF viewer */}
      <div className="max-w-5xl mx-auto border border-border">
        <Document
          file={resumePdf}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          className="w-full"
        >
          {Array.from({ length: numPages || 0 }, (_, i) => (
            <div key={i + 1} className="border-b border-border last:border-b-0">
              <Page
                pageNumber={i + 1}
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
