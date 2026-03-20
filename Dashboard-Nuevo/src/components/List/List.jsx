import './List.css';

function List({title, data, dataKeyX, dataKeyY, dataKeyZ, dataKeyW, dataKeyV}) {
    return (
        <>
            <h2>{title}</h2>
            <table className="lista-table">
                <thead>
                    <tr>
                        <th>{dataKeyX}</th>
                        <th>{dataKeyY}</th>
                        <th>{dataKeyZ}</th>
                        <th>{dataKeyW}</th>
                        <th>{dataKeyV}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.date}</td>
                        <td>{item.concept || item.client}</td>
                        <td>{item.category || item.amount}</td>
                        <td>{item.amount}</td>
                        <td className={item.status === 'Pending' ? 'pending' : item.status === 'Cancelled' ? 'cancelled' : 'completed'}>
                            <p>{item.status}</p>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default List;