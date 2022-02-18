import React from 'react'

interface IProps {
    people: {
        name: string
        dob: number
        quote: string
        optional?: string // ? optional
    }[]
}

const List: React.FC<IProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (
                <li key={index} className='list-group-item'>
                    {person.name}
                    <img
                        src='https://pbs.twimg.com/profile_images/733491103794503680/YKvAxWrr_400x400.jpg'
                        alt=''
                    />
                </li>
            )
        })
    }

    return <ul className='list-group'>{renderList()}</ul>
}

export default List
