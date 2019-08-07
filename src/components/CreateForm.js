import React from 'react';
import AddImages from './AddImages';

export default function CreateForm() {
  const fileToDataUrl = file => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
    
      fileReader.addEventListener('load', evt => {
        resolve(evt.currentTarget.result);
      });
      
      fileReader.addEventListener('error', evt => {
        reject(new Error(evt.currentTarget.error));
      });
      
      fileReader.readAsDataURL(file);
    });
  }

  const handleSelect = async (evt) => {
    const files = [...evt.target.files];
    const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
    // У вас в массиве - dataUrl, можете использовать в качестве значения атрибута src тега img
    
    setImages([
      ...images,
      ...urls,
    ]);
  }

  const [images, setImages] = React.useState([]);

  const deleteImg = (id) =>{
    images.splice(id, 1); 
    setImages([
      ...images
    ]);
  };

  return (
    <>
      <form className="imgForm">
        <div className="file-container">
          <span className="overlap">Click to select</span>
          <input className="overlapped" type="file" accept="image/*" multiple onChange={handleSelect}/>
        </div>
      </form>
      
      <div className="imagesContainer">
        <AddImages images={images} deleteImg={deleteImg} />
      </div>
    </>
  );
}
