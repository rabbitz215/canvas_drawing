import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import EditImageModal from "./components/EditImageModal";
import photo1 from "./img/photo1.jpg";
import photo2 from "./img/photo2.jpg";
import photo3 from "./img/photo3.jpg";

function App() {
  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState("");
  const [images, setImages] = useState([
    {
      url: photo1,
    },
    {
      url: photo2,
    },
    {
      url: photo3,
    },
  ]);

  const handleSaveChanges = (editedImageUrl) => {
    const updatedImages = images.map((image) => {
      if (image.url === selectedImage) {
        return {
          ...image,
          url: editedImageUrl,
        };
      } else {
        return image;
      }
    });
    setImages(updatedImages);
  };

  const handleClose = () => setShow(false);
  const handleShow = (url) => {
    setSelectedImage(url);
    setShow(true);
  };

  return (
    <div className="container">
      {images.map((img, index) => (
        <div key={index} className="mt-2 mb-3" style={{ cursor: "pointer" }}>
          <img
            key={img.url}
            src={`${img.url}`}
            alt={img.url}
            width={200}
            onClick={() => handleShow(img.url)}
          ></img>
        </div>
      ))}
      <EditImageModal
        show={show}
        handleClose={handleClose}
        selectedImage={selectedImage}
        onSaveChanges={handleSaveChanges}
      />
    </div>
  );
}

export default App;
