import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import React, { useEffect } from "react";

const Banner = () => {
  // const title = "Hi I am  Samater, A Full Stack Developer";
  // const introText = "Intro text goes here";

  return (
    <div className="w-full bg-black border-b-2 border-lightBackground overflow-hidden pt-12 min-h-[60vh]">
      <div className="flex flex-col items-center sm:flex-row py-10 px-4 max-w-5xl mx-auto gap-6">
        <div className="flex flex-col items-start justify-center flex-1 gap-4 ">
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-headline pt-2 pb-2 animate-fade animate-once text-cyan-50">
            ☆ Hej, jag är Samatar, en fullstack utvecklare ☆
          </h1>
          <p className="text-xl text-paragraph animate-fade animate-once text-cyan-50">
            Jag brinner för att skapa användbara lösningar och älskar att utmana
            mig själv med nya projekt. Att se mina idéer ta form ger mig stor
            tillfredsställelse och motivation. Jag tror på att alltid sträva
            efter att utvecklas och lära mig nya saker för att bli en bättre.
          </p>
        </div>

        <div className="relative flex-1 flex mx-auto items-center justify-center on animate-fade max-w-80">
          <img
            className=" rounded drop-shadow-xl max-h-96  mx-auto "
            // src="https://i.imgur.com/E3KpdN7.png"
            src="./sam.JPG"
            alt="samatar"
          />

          <a
            target="_blank"
            href={"https://www.linkedin.com/in/samatar-mohamed-686242264/"}
            className="absolute top-0 left-0 border-2 border-paragraph p-4 rounded-full cursor-pointer hover:animate-jump hover:animate-once hover shadow-xl bg-white"
          >
            <LinkedIn
              className=" text-headline drop-shadow-md"
              fontSize="large"
            />
          </a>
          <a
            href={"https://github.com/samatar5"}
            target="_blank"
            className="absolute bottom-0 right-10 border-2 border-paragraph p-4 rounded-full cursor-pointer hover:animate-jump hover:animate-once hover shadow-xl bg-white"
          >
            <GitHub
              className=" text-headline drop-shadow-md"
              fontSize="large"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
