import { IPeople as IProps } from '../App'

const List: React.FC<IProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person, index) => {
            return (
                <li key={index}>
                    <div className={`thumb ${person.img}`}></div>
                    <h4>{person.name}</h4>
                    <h6>
                        {person.dob} <i>{person.optional}</i>
                    </h6>
                    <p>{person.quote}</p>
                </li>
            )
        })
    }

    return <ul>{renderList()}</ul>
}

export default List
