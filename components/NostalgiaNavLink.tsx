'use client';

import { useState } from 'react';

const defaultLinkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '10px',
  fontWeight: 'normal',
  cursor: 'pointer',
  padding: '2px 4px',
};

const dropdownMessage = 'Sorry, this is just here for the MySpace nostalgia.';

type NostalgiaNavLinkProps = {
  label: string;
  style?: React.CSSProperties;
};

export function NostalgiaNavLink({ label, style = {} }: NostalgiaNavLinkProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <span
        style={{
          ...defaultLinkStyle,
          ...style,
          display: 'inline-block',
          color: showDropdown ? '#ffcc00' : (style?.color ?? '#fff'),
        }}
      >
        {label}
      </span>
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            marginTop: '4px',
            padding: '6px 10px',
            background: '#c0c0c0',
            border: '2px solid',
            borderColor: '#808080 #dfdfdf #dfdfdf #808080',
            fontSize: '10px',
            fontFamily: "'MS Sans Serif', Arial, sans-serif",
            color: '#000',
            whiteSpace: 'nowrap',
            zIndex: 1000,
            boxShadow: '2px 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          {dropdownMessage}
        </div>
      )}
    </div>
  );
}
