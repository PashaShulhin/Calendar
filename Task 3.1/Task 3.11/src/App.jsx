import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("/photos.json")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((error) => console.error("Error loading photos:", error));
  }, []);

  return (
    <div className="App">
      <h1>Gallery</h1>
      <div className="gallery">
        {photos.map((photo) => (
          <div key={photo.id} className="photo-item">
            <img src={photo.url} alt={photo.title} />
            <p>{photo.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
