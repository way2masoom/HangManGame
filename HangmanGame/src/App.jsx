import './App.css'
import Button from './components/button/button'


function App() {
  return (
    <div>
      <Button text='Click me'  styleType='error' onClickHandler={() => { console.log("Click me"); }} />
      <Button text='Click me 2'  onClickHandler={() => { console.log("Click me 2"); }} />
      <Button text='Click me 3' styleType='success' onClickHandler={() => { console.log("Click me 3"); }} />
    </div>
  )
}

export default App
