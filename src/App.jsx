import React from 'react'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Layout />}>

            <Route path="/" element={<Home />} />
            {/*<Route path="/browse/:category" element={<BrowseBook />} />
            <Route path="/details/:id" element={<BookDetail />} />
            <Route path="/add" element={<AddBook />} />
            <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
