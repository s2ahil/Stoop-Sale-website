import { useState } from 'react'
import Front from './components/Front';
import Invitation from './pages/Invitation';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router >

        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/:user/invitation" element={<Invitation/>} />
       
        </Routes>
      </Router>

    </>
  )
}

export default App
