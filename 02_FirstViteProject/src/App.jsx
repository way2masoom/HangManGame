import './App.css'
// Default Import
import MyButton from './MyButton'

// Naming import from same component
import { SecondaryButton } from './MyButton'

function App() {
  return (<div>Hello World <br />

    {/* /* Calling button component  */}
    <div id="buttons">
      <MyButton />
      <MyButton />
      <MyButton />
      <MyButton />

      <SecondaryButton />
    </div>

  </div>
  )
}

export default App
