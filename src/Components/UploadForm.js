// import { useState } from "react";
// import { storage } from "./firebase";
// import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
// import { v4 } from "uuid";
// import { useEffect } from "react";

// export default function UploadForm() {
//   const [imageUpload, setImageUpload] = useState(null);
//   const [imageList, setImageList] = useState([]);
//   const imageListRef = ref(storage, "images/");
//   const handleUpload = () => {
//     console.log("handleUpload");
//     if (imageUpload === null) return;

//     const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

//     uploadBytes(imageRef, imageUpload).then((snapshot) => {
//       getDownloadURL(snapshot.ref).then((url) => {
//         setImageList((prev) => [...prev, url]);
//         alert("Images uploaded successfully");
//       });
//     });
//   };
//   useEffect(() => {
//     listAll(imageListRef).then((response) => {
//       console.log(response);
//       response.items.forEach((item) => {
//         getDownloadURL(item).then((url) => {
//           setImageList((prev) => [...prev, url]);
//         });
//       });
//     });
//   }, []);
//   console.log(imageList);
//   return (
//     <>
//       <div className="flex justify-center">
//         <div>
//           <label htmlFor="fileInput">File:</label>
//           <input
//             type="file"
//             id="fileInput"
//             accept=".jpg,.png,.pdf"
//             onChange={(event) => {
//               setImageUpload(event.target.files[0]);
//             }}
//           />
//         </div>
//         <button type="submit" onClick={handleUpload}>
//           Upload
//         </button>
//       </div>
//       <div>
//         {imageList.map((url) => {
//           return (
//             <a href={url} target="_blank" download>
//               {/* <img src={url} alt="..." className="h-96"></img> */}
//               <h1 className="px-30 py-2 border-2 border-solid"></h1>
//             </a>
//           );
//         })}
//       </div>
//     </>
//   );
// }
import { useState } from "react";
import { storage } from "./firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useEffect } from "react";

export default function UploadForm() {
  const [imageUpload, setImageUpload] = useState(null);
  const [imageList, setImageList] = useState([]);
  const imageListRef = ref(storage, "images/");

  const handleUpload = () => {
    console.log("handleUpload");
    if (imageUpload === null) return;

    const fileName = `${imageUpload.name}_${v4()}`;
    const imageRef = ref(storage, `images/${fileName}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageList((prev) => [...prev, { url, name: fileName }]);
        alert("file uploaded successfully");
      });
    });
  };

  useEffect(() => {
    listAll(imageListRef).then((response) => {
      console.log(response);
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          const fileName = item.name;
          setImageList((prev) => [...prev, { url, name: fileName }]);
        });
      });
    });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div>
          <label htmlFor="fileInput">File:</label>
          <input
            type="file"
            id="fileInput"
            accept=".jpg,.png,.pdf"
            onChange={(event) => {
              setImageUpload(event.target.files[0]);
            }}
          />
        </div>
        <button type="submit" onClick={handleUpload}>
          Upload
        </button>
      </div>
      <div>
        {imageList.map((image) => {
          const originalFileName = image.name.split("_")[0];
          return (
            <a href={image.url} target="_blank" download>
              {/* <img src={image.url} alt="..." className="h-96" /> */}
              <h1 className="px-30 py-2 border-2 border-solid">{originalFileName}</h1>
            </a>
          );
        })}
      </div>
    </>
  );
}
