import React from 'react';
import { node, string } from 'prop-types';

const IconBox = ({ icon, title, desc, className }) => (
  <div
    className={`flex flex-col items-center justify-center text-center ${className}`}
  >
    <div className="text-corporative-color w-20 h-20">{icon}</div>
    <h4 className="text-corporative-color m-2">{title}</h4>
    <span className="text-corporative-color">{desc}</span>
  </div>
);

IconBox.proptypes = {
  icon: node.isRequired,
  className: string.isRequired
};

export default IconBox;
