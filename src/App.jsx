import './App.css'
import "./components/person.css"
import PersonCard from './components/PersonCard';

function App() {
  const users = [
    {
      name: "Hericles",
      age: "20",
      student: true
    },
    {
      name: "Valentina",
      age: "7",
      student: true
    },
    {
      name: "Noah",
      age: "2",
      student: false
    },
    {
      name: "Maikol",
      age: "20",
      student: false
    }
  ]

  return (
    <div className="App">
      <div className="App-header">
        {users.map(({name, age, student}) => {
          if(!student) {
            return <PersonCard nameUser key = {name} ageUser = {age} studentUser = {"Trabalhadorrr"} />
          } else if (student) {
            return <PersonCard nameUser key = {name} ageUser = {age} studentUser = {"É estudante"} />
          }
        })}
      </div> 
    </div>
  )
}

export default App
