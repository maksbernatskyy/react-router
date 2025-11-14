import { BrowserRouter, Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import Products from "./pages/Products"

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ChiSiamo" element={<ChiSiamo />} />
          <Route path="/Products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
