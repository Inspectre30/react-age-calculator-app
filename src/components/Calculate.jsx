
import '../App.css'
const Calculate = ({day, month, year}) => {
  
  

  return (
    <div className='calculate-container'>
        <h1><span className='number'>{year}</span> years</h1>
        <h1><span className='number'>{month}</span> months</h1>
        <h1><span className='number'>{day}</span> days</h1>
    </div>
  )
}

export default Calculate
