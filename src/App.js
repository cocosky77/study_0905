import './App.css';

function App() {

  const poster = [
    {name: "poster1", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+1"},
    {name: "poster2", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+2"},
    {name: "poster3", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+3"},
    {name: "poster4", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+4"},
    {name: "poster5", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+5"},
    {name: "poster6", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+6"},
    {name: "poster7", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+7"},
    {name: "poster8", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+8"},
    {name: "poster9", imageUrl: "https://via.placeholder.com/150x225.png?text=Poster+9"},

  ];

  const array = [{
    name : "Miracle Game",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+1",
    value : 1000,
    dolor : 1000.51,
  },{
    name : "Miracle Game2",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+2",
    value : 2000,
    dolor : 2000.51,
  },{
    name : "Miracle Game3",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+3",
    value : 3000,
    dolor : 3000.51,
  },{
    name : "Miracle Game4",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+4",
    value : 4000,
    dolor : 4000.51,
  },{
    name : "Miracle Game5",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+5",
    value : 5000,
    dolor : 5000.51,
  },{
    name : "Miracle Game6",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+6",
    value : 6000,
    dolor : 6000.51,
  },{
    name : "Miracle Game7",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+7",
    value : 7000,
    dolor : 7000.51,
  },{
    name : "Miracle Game8",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+8",
    value : 8000,
    dolor : 8000.51,
  },{
    name : "Miracle Game9",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+9",
    value : 9000,
    dolor : 9000.51,
  },{
    name : "Miracle Game10",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+10",
    value : 10000,
    dolor : 10000.51,
  },{
    name : "Miracle Game11",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+11",
    value : 11000,
    dolor : 11000.51,
  },{
    name : "Miracle Game12",
    imageUrl: "https://via.placeholder.com/225x150.png?text=Poster+12",
    value : 12000,
    dolor : 12000.51,
  },];
  
  return (

  <div className='App'>
    <div className='header'>
      <h1>AVAILABLE GAMES</h1>
      <p>Today Schedule</p>
      <button className='header_btn'>See All</button>
    </div>

    <div className='games'>
      {poster.map((item, index) => (
        <div key={index} className='image'>
            <img src={item.imageUrl} alt={item.name} />
        </div>
      ))}
    </div>

    <div className='header'>
      <h1>UPCOMING TOURNAMENTS</h1>
    </div>

    <div className='tournaments-grid'>
      {array.map((item, index) => (
          <div className='tournament-card' key={index}>
              <div className='tournament-image'>
                <img src={item.imageUrl} alt={item.name}/>
              </div>

              <div className='tournament-details'>
                <h2>{item.name}</h2>
                <p>{item.value} points</p>
                <p>${item.dolor}</p>
              </div>
          </div>
      ))}
    </div>

  </div>
  );
}

export default App;
