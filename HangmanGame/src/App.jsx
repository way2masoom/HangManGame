import { Route, Routes } from 'react-router-dom';
import './App.css'
import StartGame from './pages/StartGame'
import PlayGame from './pages/PlayGame';

// import TextInputFormContainer from './components/TextInputForm/TextInputFormContainer';

function App() {
  return (
    <Routes>

      <Route path='/start' element={<StartGame />} />
      <Route path='/play' element={<PlayGame />} />
      <Route path='/' element={
        <div className="... flex items-center justify-center text-6xl m-16">
          <h1>HOME</h1>
        </div>
      } />

    </Routes>




    // <div>
    //   {/* Importing Text Input Form */}
    //   <TextInputFormContainer/>
    // </div>


  )
}

export default App
