import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./../components/Layout";
const FileUpload = ({ label, name, required, accept, setFileUploaded }) => {
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setIsFileUploaded(!!file);
    setFileUploaded(name, !!file);
  };

  return (
    
    <div className="form-group d-flex">
      <label htmlFor={name} style={{ width: '50%' }}>
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <input
        type="file"
        name={name}
        required={required}
        className={`form-control ${isFileUploaded ? 'is-valid' : ''} ${!isFileUploaded && required ? 'is-invalid' : ''}`}
        accept={accept}
        onChange={handleFileChange}
      />
      {/* {isFileUploaded && <div className="valid-feedback">File uploaded ✓</div>}
      {!isFileUploaded && required && <div className="invalid-feedback">File is required *</div>} */}
    </div>
  );
};

function CertificatePdf() {
  const [fileUploadStatus, setFileUploadStatus] = useState({
    file1: false,
    file2: false,
    file3: false,
    file4: false,
    file5: false,
    file6: false,
    file7: false,
    file8: false,
    file9: false,
    file10: false,
    file11: false,
    file12: false,
    file13: false,
    file14: false,
    file15: false,
    file16: false,
    // ... add other file states as needed
  });

  const setFileUploaded = (name, value) => {
    setFileUploadStatus((prevStatus) => ({ ...prevStatus, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if all required files are uploaded
    const allFilesUploaded = Object.values(fileUploadStatus).every((status) => status);

    if (allFilesUploaded) {
      // Perform your form submission logic here
      console.log('Form submitted successfully!');
    } else {
      console.log('Please upload all required files.');
    }
  };

  return (
    <Layout>
    <div className="container" style={{ marginLeft: '8%' }}>
      <h1 className="text-center" style={{ color: 'black' }}>
        CERTIFICATE UPLOAD
      </h1>
      <br />
         <form action="http://localhost:5000/api/v1/user/convert" method="post" enctype="multipart/form-data" className='d-flex flex-column'>
        <FileUpload label="Allotment Order (Final Phase)" name="file1" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} />
        <FileUpload label="Joining Report (Final Phase)" name="file2" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} />
        <FileUpload label="Convener Fee Paid Challan (if applicable)" name="file3" accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} />
        <FileUpload label="TSEAMCET-23 Hall Ticket" name="file4" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} />
        <FileUpload label="TSEAMCET-23 Rank Card" name="file5" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Receipt of Certificates received from the convener TSEAMCET-23" name="file6" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="S.S.C or its equivalent Marks memo" name="file7" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Intermediate or its equivalent Memo-Cum-Pass Certificate (Long Memo/Short Memo)" name="file8" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Study Certificates (VI TO XII)" name="file9" multiple required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Transfer Certificate (TC)" name="file10" multiple required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="EWS/Income Certificate issued by Tahsildar valid for the year 2023-24 (if applicable)" name="file11" accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Caste Certificate issued by competent authority (if applicable)" name="file12" accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Any other certificate (PHC, CAP, NCC, SG(Sports)) (if applicable)" name="file13" accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Aadhar Card" name="file14" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Passport Size Photo" name="file15" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <FileUpload label="Miscellaneous fee in Demand Draft (only) for Rs. 8,500/- for B.E - CIV, CSE, ECE, EEE, INF, MECH and Rs. 5,500/- for CSM, CIC, AID, AIM, CHE, BIO in favour of 'CBIT FEE COLLECTION & OTHER RECEIPTS' payable at Hyderabad in any Bank." name="file16" required accept=".jpg, .jpeg, .png" setFileUploaded={setFileUploaded} /> 
        <div className="form-group" style={{ marginLeft: '50%', marginTop: '10px' }}>
          <button className="btn btn-danger btn-block">
            Convert to PDF
          </button>
        </div>
      </form>
    </div>
    </Layout>
  );
}

export default CertificatePdf;
