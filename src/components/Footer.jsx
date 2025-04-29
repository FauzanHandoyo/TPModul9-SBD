import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white p-4"> {/* Reduce padding by changing `p-4` to `p-2` or another smaller value */}
        <div className="container mx-auto flex justify-between items-center">
            <div>© 2025 Fauzan Handoyo | All rights reserved.</div>
        </div>
    </footer>
  );
};

export default Footer;
