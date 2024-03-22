import React from 'react';
import '../Styles/index.css';
import "../../node_modules/boxicons/css/boxicons.min.css";

import ticketImg from "../Images/light_ticket.png"
import darkTicket from "../Images/ticket.png"
import topImage1 from "../Images/ticket_1.png"
import topImage2 from "../Images/ticket_2.png"

const Slider_Section = ({ darkMode }) => {
  return (
    <div className={`main-container ${darkMode ? 'dark' : ''}`}>
      <div className="arrow-box left-arrow"><i class='bx bxs-chevron-left' ></i></div>
      <div className="arrow-box right-arrow"><i class='bx bxs-chevron-right' ></i></div>
      <h1 className='slider_heading'>Collection Spotlight</h1>
      <h5 className='sub_head'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</h5>
      <div className="card_new-container">
        {/* card_new 1 */}
        <div className="card_new">
          <div className="top-image-container">
            <img src={topImage1} alt="Top Image 1" />
            <hr className={`dotted-line ${darkMode ? 'dark' : ''}`} />
          </div>
          <img src={darkMode ? darkTicket : ticketImg} alt="card_new 1" />
          <div className="card_new-content">
            <h3 className={darkMode ? 'dark-text' : ''}>Las Vegas Aviators</h3>
            <p className={darkMode ? 'dark-text' : ''}>Date and Time</p>
            <button className={darkMode ? 'dark-button' : ''}>Take Flight Collection</button>
          </div>
        </div>
        {/* card_new 2 */}
        <div className="card_new">
          <div className="top-image-container">
            <img src={topImage2} alt="Top Image 2" />
            <hr className={`dotted-line ${darkMode ? 'dark' : ''}`} />
          </div>
          <img src={darkMode ? darkTicket : ticketImg} alt="card_new 2" />
          <div className="card_new-content">
            <h3 className={darkMode ? 'dark-text' : ''}>Sacramento River Cats</h3>
            <p className={darkMode ? 'dark-text' : ''}>Date and Time</p>
            <button className={darkMode ? 'dark-button' : ''}>Orange Collection</button>
          </div>
        </div>
        {/* card_new 3 */}
        <div className="card_new">
          <div className="top-image-container">
            <img src={topImage1} alt="Top Image 3" />
            <hr className={`dotted-line ${darkMode ? 'dark' : ''}`} />
          </div>
          <img src={darkMode ? darkTicket : ticketImg} alt="card_new 3" />
          <div className="card_new-content">
            <h3 className={darkMode ? 'dark-text' : ''}>Las Vegas Aviators</h3>
            <p className={darkMode ? 'dark-text' : ''}>Date and Time</p>
            <button className={darkMode ? 'dark-button' : ''}>Take Flight Collection</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider_Section;
