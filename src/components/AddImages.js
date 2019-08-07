import React from 'react';

export default function AddImages(props) {
  const {images, deleteImg} = props;

  return (
    (images || []).map((item, id) => {
      return (
        <div key={id} className="imgHolder">
          <div className="deleteBtn" onClick={() => {deleteImg(id)}}></div>
          <img className="img" src={item} alt={`img_${id}`} />
        </div>
      );
    })
  );
}
