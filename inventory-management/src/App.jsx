import { Outlet } from 'react-router-dom'
import './App.css'
// import Home from './pages/Home/Home'

function App() {

  return (
    <>
      <div>
        {/* <h2>This is app components</h2> */}
        {/* <Home></Home> */}
        <Outlet></Outlet>
      </div>

    </>
  )
}

export default App
