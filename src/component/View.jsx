import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import axios from 'axios'

const View = () => {
    const { id } = useParams()

    let [user, setuser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })

    let loaduser = async () => {
        let res = await axios.get(`http://localhost:3003/users/${id}`)
        console.log(res);
        setuser(res.data)
    }
    useEffect(() => {
        loaduser()
    }, [])
    return (
        <div className='container'>
            <Link className="btn btn-info mt-4" to="/home">Back to Home</Link>
            <h1 className='display-4'>User Id:{id}</h1>
            <ul className='list-group w-50'>
                <li className='list-group-item'>name:{user.name}</li>
                <li className='list-group-item'>UserName:{user.username}</li>
                <li className='list-group-item'>Email:{user.email}</li>
                <li className='list-group-item'>Phone Number:{user.phone}</li>
                <li className='list-group-item'>Website:{user.website}</li>
            </ul>

        </div>

    )
}

export default View