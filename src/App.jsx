
import './App.css'
import InputAge from './components/InputAge'
function App() {


  return (
    <div className="App">
      <div className="container">
          <div className="title"><h1>Age <span className='span-styled'>Calculator</span></h1></div>
          
          <div className='input'>
            <InputAge />
          </div>

      </div>
    </div>
      
  )
}

export default App;
