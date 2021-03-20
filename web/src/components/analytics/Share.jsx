import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
  RedditShareButton,
  RedditIcon,
} from 'react-share';

const Share = ({ url, title }) => (
  <div className="fixed left-0 flex-col hidden h-screen md:flex top-1/2">
    <TwitterShareButton url={url} title={title} className="focus:outline-none">
      <TwitterIcon size={35} round={false} />
    </TwitterShareButton>
    <FacebookShareButton url={url} className="focus:outline-none">
      <FacebookIcon size={35} round={false} />
    </FacebookShareButton>
    <WhatsappShareButton url={url} className="focus:outline-none">
      <WhatsappIcon size={35} round={false} />
    </WhatsappShareButton>
    <RedditShareButton url={url} className="focus:outline-none">
      <RedditIcon size={35} round={false} />
    </RedditShareButton>
    <LinkedinShareButton url={url} className="focus:outline-none">
      <LinkedinIcon size={35} round={false} />
    </LinkedinShareButton>
  </div>
);

export default Share;
