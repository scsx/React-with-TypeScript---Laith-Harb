import { useState } from 'react'
import { IPeople as Props } from '../App'

interface IProps {
    propsPeople: Props['people']
    propsSetPeople: React.Dispatch<React.SetStateAction<Props['people']>>
    somestring: string
}

const AddToList: React.FC<IProps> = (props) => {
    const [input, setInput] = useState({
        name: '',
        dob: '',
        quote: '',
        img: ''
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.name || !input.quote) {
            return
        }

        props.propsSetPeople([
            ...props.propsPeople,
            {
                name: input.name,
                dob: 1723,
                img: 'generic',
                quote: input.quote
            }
        ])

        console.log(props.propsPeople)
        // Clear after
        setInput({
            name: '',
            dob: '',
            quote: '',
            img: ''
        })
    }

    return (
        <div className='add'>
            <div className='row mt-4'>
                <div className='col'>
                    <input
                        type='text'
                        name='name'
                        className='form-control'
                        placeholder='Name'
                        value={input.name}
                        onChange={handleChange}
                    />
                </div>
                <div className='col'>
                    <input
                        type='text'
                        name='dob'
                        className='form-control'
                        placeholder='Date of Birth'
                        value={input.dob}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className='row mt-4'>
                <div className='col-8'>
                    <textarea
                        className='form-control'
                        name='quote'
                        value={input.quote}
                        onChange={handleChange}
                        placeholder='Quote'></textarea>
                </div>
                <div className='col'>
                    <button className='btn btn-light' onClick={handleClick}>
                        Add
                    </button>
                </div>
            </div>
            <small className='d-block mt-2 text-center text-muted'>
                {props.somestring}
            </small>
        </div>
    )
}

export default AddToList
