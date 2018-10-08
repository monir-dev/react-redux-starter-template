import React from 'react';

const footer = {
    left: 0,
    bottom: 0,
}

const Footer = () => {
  return (
    <footer className="app-footer" style={footer}>
      <div>
        <a href="https://coreui.io/pro/">CoreUI Pro</a>
        <span>© 2018 creativeLabs.</span>
      </div>
      <div className="ml-auto">
        <span>Powered by</span>
        <a href="https://coreui.io/pro/">CoreUI Pro</a>
      </div>
    </footer>
  )
}

export default Footer;
