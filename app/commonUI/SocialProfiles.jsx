import React from "react";
//  icon & images
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaFirefoxBrowser,
} from "react-icons/fa";

export default function () {
  const profileLinks = [
    {
      icon: <FaFirefoxBrowser className="icn_socials" />,
      link: "https://masumk081.web.app",
    },
    {
      icon: <FaGithub className="icn_socials" />,
      link: "https://github.com/masumkhan081",
    },
    {
      icon: <FaLinkedin className="icn_socials" />,
      link: "https://www.linkedin.com/in/masumkhan",
    },
    {
      icon: <FaFacebook className="icn_socials" />,
      link: "https://www.facebook.com/fanofnietzsche",
    },
    {
      icon: <FaInstagram className="icn_socials" />,
      link: "https://www.instagram.com/masumkhan081",
    },
    {
      icon: <FaTwitter className="icn_socials" />,
      link: "https://twitter.com/MasumKhan081",
    },
  ];

  return (
    <>
      {profileLinks.map((profile) => {
        return (
          <a href={profile.link} target="_blank">
            {profile.icon }
          </a>
        );
      })}
    </>
  );
}
