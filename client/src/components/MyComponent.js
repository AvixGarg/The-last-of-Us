import React, { useState } from 'react';
import folderimg from './Images/Folder.jpg';

const MyComponent = () => {
  const [toggle, setToggle] = useState(false);
  const [fileContent, setFileContent] = useState('');

  const handleClick = () => {
    setToggle(!toggle);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
  
    if (file) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const content = e.target.result;
  
        // Send the content to the backend
        fetch('YOUR_BACKEND_API_ENDPOINT', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ htmlContent: content }),
        })
          .then((response) => {
            if (response.ok) {
              // Handle success, e.g., show a success message
              console.log('HTML content successfully sent to the backend');
            } else {
              // Handle errors, e.g., show an error message
              console.error('Failed to send HTML content to the backend');
            }
          })
          .catch((error) => {
            console.error('An error occurred:', error);
          });
  
        setFileContent(content);
      };
  
      reader.readAsText(file);
    }
  };
  

  return (
    <div className='p-10 text-center h-screen flex flex-col items-center'>
      <h1 className='text-7xl text-white font-extrabold opacity-75'>HTML to DOCX Converter</h1>
      <div className='p-5 bg-slate-300 flex rounded-xl border shadow-2xl mt-16'>
        <div className='p-5 w-[45%]'>
          <img src={folderimg} alt='folderImg' className='rounded-2xl w-[80%]' />
        </div>
        <div className='p-10 text-center'>
          {toggle ? (
            <>
              <h2 className='text-5xl font-semibold m-5'>Upload an HTML file</h2>
              <div className='mb-10'>
                <input onChange={handleFileChange} type="file" accept=".html" />
              </div>
              <button onClick={handleClick} className='bg-blue-300 w-full p-2 hover:bg-blue-600 text-lg hover:font-semibold hover:text-white hover:scale-110 transition ease-in-out duration-700'>Upload</button>
            </>
          ) : (
            <>
            <h2 onClick={handleClick} className='text-5xl font-semibold m-5'>Hurray! Your Doc is</h2>
            
            </>
            
          )}
          <div id="result-container"></div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
