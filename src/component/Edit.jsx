import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';


const Edit = (props) => {
    const { id } = useParams()
    // alert(id)


    console.log(props);
    let [user, setuser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""

    })
    let change = (e) => {
        // console.log(e);
        let copy = { ...user }
        copy[e.target.name] = e.target.value
        setuser(copy)
    }
    let submit = async (e) => {
        console.log("props");
        e.preventDefault()
        await axios.put(`http://localhost:3003/users/${id}`, user)

        props.history.push("/home")
    }
    let loaduser = async () => {
        let res = await axios.get(`http://localhost:3003/users/${id}`)
        console.log(res);
        setuser(res.data)
    }
    useEffect(() => {
        loaduser()
    }, [])
    return (
        <div>
            <div className='row mt-5'>
                <div className='col-md-8'>
                    <div className='card offset-md-3 '>
                        <div className='card-header'>
                            <h3 className='text-center'>edit User Detail</h3>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={submit}>
                                <input type="text" placeholder='Enter your Name' name='name' value={user.name} onChange={change}
                                    className='form-control mb-2' />
                                <input type="text" placeholder='Enter your Username' name='username' value={user.username} onChange={change}
                                    className='form-control mb-2' />
                                <input type="text" placeholder='Enter your E-mail Address' name='email' value={user.email}
                                    onChange={change}
                                    className='form-control mb-2' />
                                <input type="text" placeholder='Enter your Phone Number' name='phone' value={user.phone} onChange={change}
                                    className='form-control mb-2' />
                                <input type="text" placeholder='Enter your Website Name' name='website' value={user.website} onChange={change}
                                    className='form-control mb-2' />
                                <button className='btn btn-primary form-control mt-3'>Update User</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Edit