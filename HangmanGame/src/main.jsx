import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { WordContext } from './Context/WordContext.js'


createRoot(document.getElementById('root')).render(
  <WordContext.Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </WordContext.Provider>
)
