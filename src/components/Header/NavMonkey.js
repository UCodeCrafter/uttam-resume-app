import React from 'react';

const NavMonkey = () => {
  return (
    <div style={{ position: 'relative', width: '50px', height: '65px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* Hanging Rope */}
      <svg
        width="8"
        height="65"
        viewBox="0 0 8 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}
      >
        {/* Rope braided texture */}
        <line x1="4" y1="0" x2="4" y2="65" stroke="#b45309" strokeWidth="4" strokeDasharray="3 2" strokeLinecap="round" />
        <line x1="4" y1="0" x2="4" y2="65" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
      </svg>

      {/* Monkey Holding Rope */}
      <svg
        width="44"
        height="52"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          filter: 'drop-shadow(0px 6px 12px rgba(0,0,0,0.6))'
        }}
      >
        {/* Monkey Tail wrapping behind */}
        <path
          d="M20 48C14 52 10 46 12 40C13 36 18 38 16 42"
          stroke="#78350F"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Monkey Ears */}
        <circle cx="12" cy="26" r="9" fill="#78350F" stroke="#451A03" strokeWidth="2"/>
        <circle cx="12" cy="26" r="5.5" fill="#FDE68A"/>
        <circle cx="52" cy="26" r="9" fill="#78350F" stroke="#451A03" strokeWidth="2"/>
        <circle cx="52" cy="26" r="5.5" fill="#FDE68A"/>

        {/* Head */}
        <ellipse cx="32" cy="28" rx="19" ry="17" fill="#78350F" stroke="#451A03" strokeWidth="2"/>
        
        {/* Face Mask */}
        <path
          d="M22 24C22 19 27 17 32 20C37 17 42 19 42 24C42 33 37 38 32 38C27 38 22 33 22 24Z"
          fill="#FDE68A"
        />

        {/* Eyes */}
        <circle cx="27" cy="24" r="3.5" fill="#0F172A"/>
        <circle cx="28" cy="23" r="1.2" fill="#FFFFFF"/>
        <circle cx="37" cy="24" r="3.5" fill="#0F172A"/>
        <circle cx="38" cy="23" r="1.2" fill="#FFFFFF"/>

        {/* Nose & Smile */}
        <ellipse cx="32" cy="29" rx="2.5" ry="1.5" fill="#451A03"/>
        <path d="M27 32C29 35 35 35 37 32" stroke="#451A03" strokeWidth="2" strokeLinecap="round"/>

        {/* Cheeks Blush */}
        <circle cx="23" cy="29" r="2" fill="#FCA5A5" opacity="0.7"/>
        <circle cx="41" cy="29" r="2" fill="#FCA5A5" opacity="0.7"/>

        {/* Monkey Body */}
        <ellipse cx="32" cy="46" rx="13" ry="11" fill="#78350F" stroke="#451A03" strokeWidth="2"/>
        <ellipse cx="32" cy="46" rx="8" ry="7" fill="#FDE68A"/>

        {/* Hands / Paws Gripping the Rope in Center */}
        <ellipse cx="28" cy="10" rx="4.5" ry="4" fill="#78350F" stroke="#451A03" strokeWidth="1.5"/>
        <ellipse cx="36" cy="10" rx="4.5" ry="4" fill="#78350F" stroke="#451A03" strokeWidth="1.5"/>
        
        {/* Feet Gripping Bottom of Rope */}
        <ellipse cx="26" cy="56" rx="4.5" ry="3.5" fill="#78350F" stroke="#451A03" strokeWidth="1.5"/>
        <ellipse cx="38" cy="56" rx="4.5" ry="3.5" fill="#78350F" stroke="#451A03" strokeWidth="1.5"/>
      </svg>
    </div>
  );
};

export default NavMonkey;
