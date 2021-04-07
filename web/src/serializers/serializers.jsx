/* eslint-disable */
import React from 'react';
import { GatsbyImage, MainImage } from 'gatsby-plugin-image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  synthwave84,
  materialOceanic,
  duotoneDark,
  dracula,
  darcula,
  tomorrow,
} from 'react-syntax-highlighter/dist/cjs/styles/prism';

export default {
  types: {
    code: props => (
      <SyntaxHighlighter
        language={props.node.language || 'text'}
        style={dracula}
      >
        {props.node.code}
      </SyntaxHighlighter>
    ),
    mainImage: props => (
      <MainImage src={props.node.asset.url} alt={props.node.alt} />
    ),
  },
};
