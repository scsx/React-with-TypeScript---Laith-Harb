import { useEffect, useState } from 'react'
import './App.scss'
import List from './components/List'

interface IPeople {
    people: {
        name: string
        dob: number
        quote: string
        optional?: string // ? optional
    }[]
}

const philosophers = [
    {
        name: 'Dante Alighieri',
        dob: 1265,
        quote: 'The wisest are the most annoyed at the loss of time.'
    },
    {
        name: 'Blaise Pascal',
        dob: 1623,
        quote: 'I have made this letter longer than usual, only because I have not had the time to make it shorter.',
        optional: 'Was also a mathematician.'
    },
    {
        name: 'John Locke',
        dob: 1632,
        quote: 'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.',
        optional: 'Father of Liberalism.'
    }
]

const App = () => {
    const [people, setPeople] = useState<IPeople['people']>([])

    useEffect(() => {
        setPeople(philosophers)
        people.map((person) => {
            console.log(person.name)
        })
    }, [people])

    return (
        <div className='App'>
            <h1 className='text-center mb-4'>Philosophers Party</h1>
            <header className='App-header'>
                <div className='hero text-center'>
                    <List people={people} />
                </div>
            </header>
        </div>
    )
}

export default App
