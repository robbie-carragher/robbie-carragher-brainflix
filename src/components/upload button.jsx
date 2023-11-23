// import './YourComponentStyles.css';

const FileUploadComponent = () => {
  // Function to handle file selection
  const handleFileChange = (event) => {
    // Handle the file change event here
    console.log(event.target.files[0]); // Log the selected file
  };

  return (
    <div>
      <input
        type="file"
        id="fileUpload"
        name="file"
        className="header__upload"
        onChange={handleFileChange}
      />
      <label htmlFor="fileUpload" className="header__upload-btn">
        <img src="./../../src/assets/images/Icons/upload.svg" alt="Upload Button" />
        <p className="header__upload-btn-text">Upload</p></label>
     
    </div>
  );
};

export default FileUploadComponent;
