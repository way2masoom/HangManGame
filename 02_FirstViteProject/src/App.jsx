import './App.css'

function App() {
  return (<div>Hello World <br />
    {/* /* Calling button component  */}
    <div id="buttons">
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  </div>
  )
}


// Crating an button component
function MyButton() {
  return <button>Click Me</button>
}

export default App
