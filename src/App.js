import react from 'react'
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
function App() {
  
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar/>
      <Banner/>
      {/* Banner */}
      <Row 
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow={true} 
      />
       <Row 
            title="Tranding Now"
            fetchUrl={requests.fetchTrending} 
      />
        <Row 
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies} 
      />
        <Row 
            title="Comedy Movies"
            fetchUrl={requests.fetchComedyMovies} 
      />
      <Row 
            title="Horror Movies"
            fetchUrl={requests.fetchHorrorMovies} 
      />
       <Row 
            title="Romance Movies"
            fetchUrl={requests.fetchRomanceMovies} 
      />
      <Row 
            title="Documentaries Movies"
            fetchUrl={requests.fetchDocumantaries} 
      />
    </div>
  );
}

export default App;
