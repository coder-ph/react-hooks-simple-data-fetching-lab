import React, { useEffect, useState } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false); 
  const [images, setImages] = useState(null);

  useEffect(() => {
    
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setImages(data.message);
        setIsLoaded(true); 
      })
      .catch((error) => {
        console.error("Error:", error);
        
      });
  }, []);

  return (
    <div>
      {!isLoaded ? (
        <p>Loading...</p> 
      ) : (
        <img src={images} alt="A Random Dog" /> 
      )}
    </div>
  );
}

export default App;
