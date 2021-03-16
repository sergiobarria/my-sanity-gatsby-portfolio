import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function SocialLinks() {
  const socials = [
    {
      text: "instagram",
      url: "https://www.instagram.com/thecodingscript",
    },
    {
      text: "github",
      url: "https://github.com/sergiobarria",
    },
    {
      text: "twitter",
      url: "https://twitter.com/thecodingscript",
    },
  ];

  const styles = {
    icon: "text-4xl transition-all duration-300 ease-linear cursor-pointer",
    instagram: "text-red-600 hover:text-red-800",
    github: "text-gray-700 hover:text-gray-900",
    twitter: "text-lightBlue-500 hover:text-lightBlue-800",
  };

  return (
    <ul className="flex my-4">
      {socials.map((social, index) => {
        let icon;
        if (index === 0) {
          icon = <FaInstagram />;
        }
        if (index === 1) {
          icon = <FaGithub />;
        }
        if (index === 2) {
          icon = <FaTwitter />;
        }
        return (
          <li
            className="mr-4 transition-all duration-300 transform hover:scale-110"
            key={index}
          >
            <a
              className={`${styles.icon} ${styles[social.text]}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Link to ${social}`}
              href={social.url}
            >
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
