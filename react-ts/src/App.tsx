import { useState } from 'react'
import './App.scss'

function App() {
    const [number, setNumber] = useState<number | string>(5)

    const changeNumber = () => {
        setNumber('sjfn')
    }
    return (
        <div className='App'>
            <h1 className="text-center mb-4">Philosophers Party</h1>
            <header className='App-header'>
                <div className='hero text-center'>Immanuel Kant</div>
            </header>
        </div>
    )
}

export default App
