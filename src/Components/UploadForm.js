import { useState } from "react";
import { storage } from "./firebase";
import {ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";

export default function UploadForm() {
    const [imageUpload ,setImageUpload] = useState(null);   
    const handleUpload =() => {
        console.log("handleUpload");
        if(imageUpload === null) return;

        const imageRef = ref(storage , `images/${imageUpload.name + v4()}`);

        uploadBytes(imageRef, imageUpload).then(()=>{
            alert("Images uploaded successfully");
        })
    }
  return (
    <>
      <div className="flex justify-center">
        <div>
          <label htmlFor="fileInput">File:</label>
          <input
            type="file"
            id="fileInput"
            accept=".jpg,.png,.pdf"
            onChange={(event)=>{setImageUpload(event.target.files[0])}}
          />
        </div>
        <button type="submit" onClick={handleUpload} >Upload</button>
      </div>
    </>
  );
}
