import { useState } from 'react'
import "./App.css"

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function registerUser() {
    const response = await fetch('http://localhost:1337/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    })

    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <body className='appmedium'>
        <form onSubmit={registerUser} classname="back">
          <header>
            <div className='div1'>
              <h1>Registro</h1>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nome"
              />
              <br />
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder='Senha'
              />
              <br />
              <button onclick='myFunction()'> registrar </button>
            </div>
          </header>
        </form>
      </body>
    </div>
  )
}

export default App;
