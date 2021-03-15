import React from "react";
import { Link } from "gatsby";

import SocialLinks from "../ui/SocialLinks";

export default function Navbar() {
  return (
    <footer className="mt-10 tracking-widest text-center border-t border-gray-300 ">
      <div className="flex flex-col items-center justify-center">
        <SocialLinks />
        <p className="font-normal md:text-lg">
          &copy; Copyright {new Date().getFullYear()}. All rights reserved.{" "}
          <br />
          Built with{" "}
          <span className="font-medium text-gradient my-gradient">
            <a
              href="https://www.gatsbyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby js
            </a>
          </span>{" "}
          and{" "}
          <span className="font-normal text-gradient my-gradient">
            <a
              href="https://www.sanity.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sanity.io
            </a>
          </span>{" "}
        </p>
      </div>
    </footer>
  );
}
