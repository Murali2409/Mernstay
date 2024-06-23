import React from 'react';
import "../../CSS/Home.css";

const Footer = () => {
  return (
    <div>
        <footer className='fixed-bottom p-2'>
            <p>© 2023 frzn. All Rights Reserved.</p>
            <ul className='footerlist'>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Sitemap</li>
                <li>Company Details</li>
            </ul>

            <p>English(US) $ USD</p>

        </footer>
    </div>
  )
}

export default Footer