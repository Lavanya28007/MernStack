'use client'
import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';

const UploadImage = () => {

   const uploadFile=(e) => {
     const file= e.target.files[0];
        console.log(file);
        const formData= new FormData();
        formData.append('file',file);
        formData.append('cloud_name',"dq2ngjyzo");
        formData.append('upload_preset',"Lavanya");

        axios.post("https://api.cloudinary.com/v1_1/dq2ngjyzo/image/upload",formData)
        .then((result) => {
            console.log(result.data);
            toast.success("Image Uploaded Successfully");
            
            
        }).catch((err) => {
            console.log(err);
            toast.error("Failed to upload image");
            
            
        });

   }

  return (
    <div className=' container mx-auto p-10'>
      <h1 className='text-3xl font-bold '>Uploading Images</h1>
      <label htmlFor="image" className='block w-1/2 p-5 border-2 mx-auto'>Upload your image here</label>
      <input type="file"  id='image' accept='image/*' className='hidden' onChange={uploadFile} />
    </div>
  )
}

export default UploadImage;