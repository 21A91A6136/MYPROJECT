import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Link } from 'react-router-dom';
import './certificate.css';

const Certificate = () => {
  const [formData, setFormData] = useState({
    name: '',
    course: '',
  });

  const [certificateData, setCertificateData] = useState(null);
  const certificateRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const generateCertificate = () => {
    const certificateContent = (
      <div className="certificate" ref={certificateRef}>
        <div className="certificate-header">
          <img src="Logo.jpg" alt="Seal" className="seal" />
          <h2>Certificate of Completion</h2>
        </div>
        <p>This is to certify that</p>
        <p className="name">{formData.name}</p>
        <p>has successfully completed the course</p>
        <p className="course">{formData.course}</p>
        <p>at</p>
        <p className="institution">EduQuest</p>
        <div className="signature">
          <img src="signature.jpg" alt="Signature" style={{ height: 100 }} />
        </div>
        <div className="qr-code">
          <img src="qr.jpg" alt="QR Code" style={{ height: 100 }} />
        </div>
      </div>
    );

    setCertificateData(certificateContent);
  };

  const printCertificate = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Certificate</title></head><body>');
    printWindow.document.write('<div class="certificate-print">');
    printWindow.document.write('<style type="text/css">');
    printWindow.document.write('@media print { .form-container, .download-button { display: none; } }');
    printWindow.document.write('</style>');
    printWindow.document.write(certificateRef.current.innerHTML);
    printWindow.document.write('</div>');
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
    printWindow.close();
  };

  const downloadCertificate = () => {
    html2canvas(certificateRef.current).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 277);
      pdf.save('certificate.pdf');
    });
  };

  return (
    <div>
      <header className="header">
        <img
          src="https://eduquest.org.in/wp-content/uploads/2020/11/logo40.png"
          alt="Logo"
          className="logo"
        />
        <nav className="links">
          <Link to="/Second">Menu</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/Feedback">Feedback</Link>
          <Link to="/Assignment">Assignment</Link>
          <Link to="/Certificate">Certificate</Link>
        </nav>
      </header>
    
    <div className="certificate-generator">
      <h1 className='headi'>Certificate Generator</h1>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="course">Course:</label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
            />
          </div>
          <button type="button" onClick={generateCertificate}>
            Generate Certificate
          </button>
          <button type="button" onClick={printCertificate}>
            Print Certificate
          </button>
          <button type="button" onClick={downloadCertificate} className="download-button">
            Download Certificate
          </button>
        </form>
      </div>
      {certificateData && <div className="certificate-preview">{certificateData}</div>}
    </div>
    </div>
  );
};

export default Certificate;