import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Main from './components/shared/Main';
import Locations from './components/shared/location/Locations'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css';

function App() {
  // const searchOptions = {
  //   key: process.env.REACT_APP_API_KEY,
  //   api: 'https://api.openchargemap.io/v3/poi',
  //   endpoint: "/openapi",
  // }

  const [stations, setStations] = useState([])

  function getStations() {
    const url = `https://api.openchargemap.io/v3/poi/openapi?key=3d636052-e9ab-4daa-82ec-8a16bec907bb/?output=json&countrycode=US&maxresults=10`
    // const url = `${searchOptions.api}${searchOptions.endpoint}?key=${searchOptions.key}/?output=json&countrycode=US&maxresults=5`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStations(data)
        console.log(data)
        console.log(`${data[0].AddressInfo.Latitude} ${data[0].AddressInfo.Longitude} ${data[0].AddressInfo.Title}`)
      })
      .catch(console.error)
  }
  
useEffect(() => {
  getStations()
}, [])

if(!stations) {
  return <h2>loading</h2>
}
  return (
    <div className="App">
      <h1> Hello EVoos</h1>
      
         {/* name={stations[0].AddressInfo.Title} */}
      <ul style ={{listStyle:'none'}}>
       {stations.map(station => {
         console.log(station)
          return (
          <li className="LocDiv"
              key={station.AddressInfo.ID}>

            < Locations 
            name={station.AddressInfo.Title}
          
            />
          </li>
          )
        })}
      </ul>
      

    </div>
  );
}

export default App;
