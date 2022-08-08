import React from 'react';
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column 1 */}
            <div className="column">
              <h4>Contact</h4>
              <ul className="list">
              <li>Twin Cities,</li>
                <li>Minnesota</li>
                <li>ctvradiomn@gmail.com </li>
              </ul>
            </div> 
            {/* Column 1 */}
            <div className="column">
              <h4>Navigation</h4>
              <ul className="list">
                <li><a href='#hero'>Home</a></li>
                <li><a href='#catalog'>Catalog</a></li>
                <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSfv8BOmk0Vfwtot5YTauNWYUWdbPkqqxna4D5atp3Q8ff-nUA/viewform'>Submit A Song</a></li>
              </ul>
            </div> 
            {/* Column 2 */}
            <div className="column">
              <h4>Support</h4>
              <ul className="list">
                <li><a href='https://beacons.ai/bestllc?fbclid=IwAR14xZXSDflVzS6z-65QLScEMg_-z2Zi8FS-XoOg5g4ySY3sJrCj7542Pxo#email'>Subscribe</a></li>
                <li><a href='https://www.tiktok.com/@ctvradio'>TikTok</a></li>
                <li><a href='https://t.me/+k6KPiIj1bmg0YWUx'>Telegram</a></li>
                <li><a href='https://www.instagram.com/ctvradiomn/'>Instagram</a></li>
                <li><a href='https://twitter.com/ctvradio'>Twitter</a></li>
                <li><a href='https://www.youtube.com/channel/UC-rK-SkGWEMDhzVzzuE3VEw'>YouTube</a></li>
                <li><a href='https://www.twitch.tv/ctvradio'>Twitch</a></li>
                <li><a href='https://cash.app/$ctvradiomn'>Cash App</a></li>
              </ul>
            </div> 
            {/* Column 3 */}
            <div className="column">
              <h4>Policies</h4>
              <ul className="list">
                <li><a href='/'>Return Policy</a></li>
                <li><a href='/'>Privacy Policy</a></li>
              </ul>
            </div> 
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <p className="bottom">
              &copy;{new Date().getFullYear()} CTV Radio Website - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
