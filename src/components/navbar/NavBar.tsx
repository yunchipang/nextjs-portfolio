import Link from 'next/link';

import navLinks from 'utils/navLinks';

const navBarStyle = {
  display: 'flex',
  // justifyContent: 'flex-end',
  justifyContent: 'center',
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
                padding: '7px',
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
