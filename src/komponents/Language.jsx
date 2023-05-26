import React, { useEffect, useState } from "react";

const Language = ({ setLanguage }) => {
  const [language] = useState("se");
  const [selectedImage, setSelectedImage] = useState(
    "https://i.imgur.com/nzNijYZ.jpg"
  );

  const toggleLanguage = () => {
    console.log(language);
    if (language === "en") {
      setLanguage("se");
      setSelectedImage("https://i.imgur.com/nzNijYZ.jpg");
    } else {
      setLanguage("se");
      setSelectedImage("https://i.imgur.com/nzNijYZ.jpg");
    }
  };

  useEffect(() => {
    toggleLanguage();
  }, []);

  return (
    <div className="absolute top-5 sm:top-auto right-2">
      <button className="bg-transparent border-none" onClick={toggleLanguage}>
        <img
          src={selectedImage}
          height={18}
          width={30}
          alt={language === "en" ? "English" : "Swedish"}
          className="aspect-video mt-1"
          onClick={() => {
            setLanguage(language === "en" ? "se" : "en");
            setSelectedImage(
              language === "en"
                ? "https://i.imgur.com/nzNijYZ.jpg"
                : "https://i.imgur.com/uPmowmp.jpg"
            );
          }}
        />
      </button>
    </div>
  );
};

export default Language;
