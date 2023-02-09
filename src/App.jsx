import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TripList from './components/TripList'

function App() {
  const [showTrips, setShowTrips] = useState(true)

  return (
    <div>
      <button onClick={() => setShowTrips(false)}>Hide Trips</button>
      <button onClick={() => setShowTrips(true)}>Show Trips</button>
      {showTrips && <TripList />}
    </div>
  )
}

export default App
