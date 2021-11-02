import * as React from 'react';

function Plus(props) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="22px"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <style>
          {
            '.prefix__cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}'
          }
        </style>
      </defs>
      <g id="prefix__plus">
        <path className="prefix__cls-1" d="M16 7v18M7 16h18" />
      </g>
    </svg>
  );
}

export default Plus;
