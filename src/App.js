import './App.css';
import { useState } from 'react';

function App() {

  // const [isAnimating, setIsAnimating] = useState(false);
  // const handleMouseEnter = () => {
  //   setIsAnimating(true);
  // };
  // const handleMouseLeave = () => {
  //   setIsAnimating(false);
  // };

  const poster = [
    {name: "poster1", url: "https://via.placeholder.com/250x400.png?text=Poster+1"},
    {name: "poster2", url: "https://via.placeholder.com/250x400.png?text=Poster+2"},
    {name: "poster3", url: "https://via.placeholder.com/250x400.png?text=Poster+3"},
    {name: "poster4", url: "https://via.placeholder.com/250x400.png?text=Poster+4"},
    {name: "poster5", url: "https://via.placeholder.com/250x400.png?text=Poster+5"},
    {name: "poster6", url: "https://via.placeholder.com/250x400.png?text=Poster+6"},
  ];

  const tournaments = [{
    name : "Miracle Game",
    url: "https://via.placeholder.com/300x200.png?text=Poster+1",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game2",
    url: "https://via.placeholder.com/300x200.png?text=Poster+2",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game3",
    url: "https://via.placeholder.com/300x200.png?text=Poster+3",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game4",
    url: "https://via.placeholder.com/300x200.png?text=Poster+4",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game5",
    url: "https://via.placeholder.com/300x200.png?text=Poster+5",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game6",
    url: "https://via.placeholder.com/300x200.png?text=Poster+6",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game7",
    url: "https://via.placeholder.com/300x200.png?text=Poster+7",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game8",
    url: "https://via.placeholder.com/300x200.png?text=Poster+8",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game9",
    url: "https://via.placeholder.com/300x200.png?text=Poster+9",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game10",
    url: "https://via.placeholder.com/300x200.png?text=Poster+10",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game11",
    url: "https://via.placeholder.com/300x200.png?text=Poster+11",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },{
    name : "Miracle Game12",
    url: "https://via.placeholder.com/300x200.png?text=Poster+12",
    date : new Date().toLocaleDateString(),
    dolor : 1000,
  },];
  
  return (
  <div className='App'>
    {/* nav바 */}
    <nav>
      <div className='nav_left'>
        <img className='nav_left_img' src='https://github.com/user-attachments/assets/0d256f86-bb9b-4d3d-98ea-56d47bc586fa'/>
      </div>

      <a href='#'>MAIN</a>
      <a href='#'>GAME</a>
      <a href='#'>SHOP</a>
      <a href='#'>EXPLORER</a>
      <a href='#'>CLUB</a>
      <a href='#'>EARN</a>

      <div className='nav_right'>
      <a href='#'>LOG</a>
      <a href='#'>ENG</a>
      </div>
    </nav>

    <div className='container'>
      {}
      <div className='available-games'>
        <div className='header'>
          <h1>AVAILABLE GAMES</h1>
          <p>Today Schedule</p>
          <button className='available-games_btn'>See All</button>
        </div>

        <div className='available-games_posters'>
          {poster.map((item, index) => (
            <div
            key={index}
            // className={`available-games_posters_detail ${isAnimating ? 'animate' : ''}`}
            // onMouseEnter={handleMouseEnter}
            // onMouseLeave={handleMouseLeave}
            >
              <img src={item.url} alt={item.name} />
            </div>
          ))};
        </div>
      </div>

      {/* Upcoming Tournaments */}
      <div className='upcoming-tournaments'>
        <div className='header'>
          <h1>UPCOMING TOURNAMENTS</h1>
        </div>

        <div className='upcoming-tournaments_games'>
          {tournaments.map((item, index) => (
            <div key={index} className='upcoming-tournaments_games_card'>

              {/* Upcoming Tournaments - card 상단 */}
              <div className='upcoming-tournaments_games_image'>
                <img src={item.url} alt={item.name} />
              </div>

              {/* Upcoming Tournaments - card 하단 */}
              <div className='upcoming-tournaments_games_detail'>
                <h1>{item.name}</h1>
                <p>{item.date}</p>
                <p>${item.dolor}</p>
              </div>
            </div>
          ))}
        </div>    
      </div>

    </div>
  </div>
  );
}

export default App;
