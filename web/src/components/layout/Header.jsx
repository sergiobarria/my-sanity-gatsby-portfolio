import * as React from 'react';

import SocialLinks from '../ui/SocialLinks';

const Header = () => (
  <div className="max-w-lg mx-auto my-20 ">
    <p className="mb-4 text-2xl font-semibold tracking-widest">
      Hi, I&aposm Sergio!
    </p>
    <p className="text-lg tracking-wide">
      I&aposm a Full-stack Web Developer. Ever since I discover programming
      I&aposve become addicted to learning. I&aposd like to share with you all
      the knowledge I&aposve been adquiring and work together in order to keep
      improving and becoming a better developer every day.
    </p>
    <SocialLinks />
  </div>
);

export default Header;
