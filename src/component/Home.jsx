import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const Home = () => {
    const [user, setuser] = useState([])
    console.log(user);


    let datafetch = async () => {
        let res = await axios.get(`http://localhost:3003/users`)
        setuser(await res.data)
        // console.log(user);
    }
    datafetch()

    useEffect(() => {
        datafetch()
    }, [])
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:3003/users/${id}`)
        console.log("hj");
        datafetch()
    }
    return (
        <div className='container mt-2'>
            <table class="table table-striped border shadow mt-4">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Email</th>
                        <th scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map((val, index) => {
                            return (
                                <tr>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{val.name}</td>
                                    <td>{val.username}</td>
                                    <td>{val.email}</td>
                                    <td>
                                        <Link className="btn btn-primary ml-2" to={`/view/${val.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary ml-2"
                                            to={`/edit/${val.id}`}>Edit</Link>

                                        <Link className="btn btn-outline-danger" onClick={() => { deleteUser(val.id) }}>Delete</Link>
                                    </td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home