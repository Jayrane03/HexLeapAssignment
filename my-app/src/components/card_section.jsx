import React, { useState } from 'react';
import "../Styles/cards.css"; 
import SliderSection from './slider'; // Changed component name to PascalCase

const CardSection = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const cardData = [
    { id: 2, title: "Las Vegas Aviators", totalEvents: 28, sport: "Baseball", image: "/Images/img2.jpg" },
    { id: 3, title: "New Jersey Devils", totalEvents: 15, sport: "Ice Hockey", image: "/Images/img_3.jpg" },
    { id: 4, title: "Las Vegas Aviators", totalEvents: 28, sport: "Baseball", image: "/Images/img2.jpg" },
    { id: 5, title: "Advertisement", image: "/Images/img_4.jpg", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];

  return (
    <div className={`card-section ${darkMode ? 'dark' : ''}`}>
      <h1 className="heading">Sports</h1>
      <div className="container">
        {cardData.map(card => (
          <div className="card shadow-xl rounded-lg" key={card.id}>
            <img className="rounded-t-lg" src={card.image} alt={`Card ${card.id}`} />
            <div className="card-content p-4">
              {card.id !== 5 && (
                <>
                  <h3 className="text_head">{card.title}</h3>
                  <div className=" desc-box grid grid-cols-2 gap-4 mt-2">
                    <div className='t-events'>
                      <p className="text-green-600">Total Events <span>{card.totalEvents}</span></p>
                    </div>
                    <div className='sport-type'>
                      <p className="text-purple-600">Sport <span> {card.sport}</span></p>
                    </div>
                  </div>
                </>
              )}
              {card.id === 5 && (
                <>
                  <h3 className="text-2xl font-bold mb-2 text_add">Advertisement Title</h3>
                  <p className="text_ad">{card.desc}</p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <button className={`see_more ${darkMode ? 'dark' : ''}`} onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <SliderSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
};

export default CardSection;
