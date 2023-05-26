import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const navigation = [
  {
    icon: <GitHubIcon style={{ color: "#1DB954" }} fontSize="large" />,
    href: "https://github.com/samatar5",
  },
  {
    icon: <LinkedInIcon style={{ color: "#1DB954" }} fontSize="large" />,
    href: "https://www.linkedin.com/in/samatar-mohamed-686242264/",
  },
];

const Footer = ({}) => {
  return (
    <div className='flex bg-[url("https://www.transparenttextures.com/patterns/cartographer.png")] bg-black border-t-2 justify-center p-6'>
      <nav>
        {navigation.map((link, i) => (
          <a key={i} href={link.href} target="_blank">
            <IconButton className="text-greenText transition-colors duration-300 mx-4 hover:text-highlight">
              {link.icon}
            </IconButton>
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Footer;
