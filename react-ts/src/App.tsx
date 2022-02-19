import { useState } from 'react'
import './App.scss'
import AddToList from './components/AddToList'
import List from './components/List'

export interface IPeople {
    people: {
        name: string
        dob: number
        quote: string
        img: string
        optional?: string // ? optional
    }[]
}

const App = () => {
    const [people, setPeople] = useState<IPeople['people']>([
        {
            name: 'Dante Alighieri',
            dob: 1265,
            img: 'dante',
            quote: 'The wisest are the most annoyed at the loss of time.'
        },
        {
            name: 'Blaise Pascal',
            dob: 1623,
            img: 'pascal',
            quote: 'I have made this letter longer than usual, only because I have not had the time to make it shorter.',
            optional: 'Was also a mathematician'
        },
        {
            name: 'John Locke',
            dob: 1632,
            img: 'locke',
            quote: 'Reading furnishes the mind only with materials of knowledge; it is thinking that makes what we read ours.',
            optional: 'Father of Liberalism'
        }
    ])

    return (
        <div className='App'>
            <h1 className='text-center mb-4'>Philosophers Party</h1>
            <header className='App-header'>
                <div className='hero text-center'>
                    <List people={people} />
                </div>
                <AddToList
                    propsPeople={people}
                    propsSetPeople={setPeople}
                    somestring={'SCSX2022'}
                />
            </header>
        </div>
    )
}

export default App
