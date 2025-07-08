import React from 'react';

function Header() {
  return (
    <header
      style={{
        position: 'fixed', // <- ubah ini dari 'relative' ke 'fixed'
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(10px)',
        padding: '15px 0',
        zIndex: 1000,
        borderBottom: '1px solid #334155',
      }}
    >
      <nav
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '30px',
          padding: '0 20px',
        }}
      >
        {['Home', 'About', 'Resume', 'Skills', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              color: 'white',
              fontWeight: '500',
              textDecoration: 'none',
              fontSize: '16px',
              scrollBehavior: 'smooth',
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Header;
