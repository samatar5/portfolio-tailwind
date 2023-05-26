import React from "react";
import RoomIcon from "@mui/icons-material/Room";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PhoneIcon from "@mui/icons-material/Phone";
import { IconButton } from "@mui/material";
import FadeIn from "./Fadein";

const contacts = [
  {
    icon: <RoomIcon style={{ color: "#1DB954" }} />,
    name: "ADRESS",
    content: "Sweden, Stockholm",
  },
  {
    icon: <AlternateEmailIcon style={{ color: "#1DB954" }} />,
    name: "MAIL",
    content: "samatar5mohamed@gmail.com",
  },
  {
    icon: <PhoneIcon style={{ color: "#1DB954" }} />,
    name: "PHONE",
    content: "+46 73 916 16 26",
  },
];

const Contact = ({}) => {
  return (
    <FadeIn>
      <div
        id="contact"
        className="flex flex-col items-center justify-center bg-lightBackground shadow-md shadow-background pt-4 p-4 aniamte-fade"
      >
        <h3 className="text-white text-headline text-xl font-bold  pb-4">
          Kontakta Mig
        </h3>
        <p className="text-paragraph text-sm text-center max-w-2xl">
          Om du är intresserad av att anställa mig, vänligen kontakta mig via
          e-post eller telefon. Jag ser fram emot att höra från dig och
          diskutera hur jag kan hjälpa till.
        </p>
        <div className="flex flex-wrap justify-evenly w-full  p-4 max-w-2xl">
          {contacts.map((item, i) => (
            <div key={i} className="flex flex-col text-center p-2">
              <div>
                <IconButton className="text-greenText">{item.icon}</IconButton>
              </div>
              <p className="text-lg text-headline font-medium">{item.name}</p>
              <p className="text-xs text-paragraph">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default Contact;
