import {useState} from 'react'
import "./App.css"

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  async function registerUser() {
    await fetch('http://localhost:1337/api/register', {
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify ({
        name,
        email,
        password,
      }),
    }
  }
  
  const data = await response.json()
  
  
  
  
  
  
  return (
    <div className="App">
      <header>
          <div className='div1'>
          <h1>Registro</h1>
          <form onSubmit={registerUser}>
          <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text" 
          placeholder= "Nome" 
          />
          <br/>
          <input 
          onChange={(e) => setEmail(e.target.value)}
          type="email" 
          placeholder= "Email" 
          />
          <br/>
          <input 
          onChange={(e) => setPassword(e.target.value)}
          type="password" 
          />
          <br/>
          <button onclick='myFunction()'> registrar </button>
          </form>
          </div>
      </header>
    </div>
  );
}

export default App;
