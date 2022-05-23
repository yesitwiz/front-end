//Main Page for this app will have folder of sublevel components
function Main(props) {

  let chargerName = props.stations.town
  console.log(chargerName)

  if(chargerName) {
    return <h2>{props.stations.town}</h2>
  }else {
    return <h2>Loading...</h2>
  }

  
}

export default Main