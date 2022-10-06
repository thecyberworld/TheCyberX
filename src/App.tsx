import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/thecyberworld-green01.png" className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src="/thecyberworld-green01.png" className="logo" alt="React logo"/>
                </a>
            </div>
            <h1>Thecyberhub </h1>
            <div className="card">
                <code>Coming soon.</code>
            </div>
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
        </div>
    )
}

export default App
