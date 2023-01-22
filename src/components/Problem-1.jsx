import React, { useState } from 'react';

const Problem1 = () => {

    const [show, setShow] = useState('all');

    const [users, setUsers] = useState([
        { name: "Raihan Gazi", status: "active" },
        { name: "Mamun", status: "active" },
        { name: "Borhan Ashrafi", status: "completed" },
        { name: "Shawon", status: "active" },
        { name: "Shahadat", status: "completed" },
        { name: "Shakib", status: "active" },
    ]);
    const handleUsers = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let status = e.target.status.value;
        setUsers([...users, { name, status }]);
    }
    const [usersType, setUsersType] = useState([]);

    const handleClick = val => {
        if (val === 'all') {
            setShow('all')
            setUsersType(users)
        }
        else if (val === 'active') {
            setShow('active')
            setUsersType(users.filter(user => user.status.includes('active')))
        } else if (val === 'completed') {
            setUsersType(users.filter(user => user.status.includes('completed')))
        }
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleUsers} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" name='name' className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text" name='status' className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersType.length > 1 ? <>
                                    {usersType.map((user, i) => <tr key={i}>
                                        <td scope="col">{user.name}</td>
                                        <td scope="col">{user.status}</td>
                                    </tr>)}
                                </> : <>
                                    {users.map((user, i) => <tr key={i}>
                                        <td scope="col">{user.name}</td>
                                        <td scope="col">{user.status}</td>
                                    </tr>)}
                                </>
                            }
                        </tbody>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;