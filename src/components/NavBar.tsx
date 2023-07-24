import Link from 'next/link';

import navLinks from 'utils/navLinks';

const navBarStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  // paddingTop: '10px', // Optional padding for top space
  // paddingRight: '10px', // Optional padding for right space
};

export default function NavBar() {
  return (
    <nav style={navBarStyle}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        {navLinks.map((link, index) => {
          return (
            <li
              key={index}
              style={{
                display: 'inline',
                padding: '6px',
              }}
            >
              <Link href={link.path}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
