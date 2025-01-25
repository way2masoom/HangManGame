import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame';
import Home from './pages/Home';

// import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';

function App() {
  return (
    <Routes>

      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='/' element={<Home text="Single Player" />}
      />

    </Routes>




    // <div>
    //   {/* Importing Text Input Form */}
    //   <TextInputFormContainer/>
    // </div>


  )
}

export default App
