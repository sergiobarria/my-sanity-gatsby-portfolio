import * as React from 'react';

import SocialLinks from '../ui/SocialLinks';

const Header = () => (
  <div className="max-w-xl mx-auto my-20 ">
    <p className="mb-4 text-2xl font-semibold tracking-widest">
      Hi, I&#39;m Sergio!
    </p>
    <p className="text-lg tracking-wide">
      I&#39;m a Full-stack Web Developer. Ever since I discover programming
      I&#39;ve become addicted to learning. I&#39;d like to share with you all
      the knowledge I&#39;ve been adquiring and work together in order to keep
      improving and becoming a better developer every day.
    </p>
    <SocialLinks />
  </div>
);

export default Header;
