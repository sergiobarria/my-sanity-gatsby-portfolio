import * as React from "react";
import PropTypes from "prop-types";

import SocialLinks from "../ui/SocialLinks";

const Header = ({ siteTitle }) => {
  return (
    <div className="max-w-lg mx-auto my-20 ">
      <p className="mb-4 text-2xl font-semibold tracking-widest">
        Hi, I'm Sergio!
      </p>
      <p className="text-lg tracking-wide">
        I'm a Full-stack Web Developer. Ever since I discover programming I've
        become addicted to learning. I'd like to share with you all the
        knowledge I've been adquiring and work together in order to keep
        improving and becoming a better developer every day.
      </p>
      <SocialLinks />
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
