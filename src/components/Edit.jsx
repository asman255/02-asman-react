import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const apiUrl = 'https://6729c7f56d5fa4901b6e519b.mockapi.io/emp'
const Edit = () => {
    const id = useParams().id
    const [emp, setEmp] = useState({
        name: '',
    })

    const fetchData = async (id) => {
        try {
            const response = await axios.get(apiUrl + '/' + id);
            setEmp(response.data)

            console.log(emp);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData(id)
    }, [id])


    function handleNameChange(e) {
        setEmp((previousState) => ({
            ...previousState,
            name: e.target.value
        }))
    }

    const updateEmp = async (id) => {
        try {
            await axios.put(apiUrl + '/' + id,{
                name: emp.name
            })
            fetchData(id)
        } catch (error) {
            console.log(error)
        }
    }











    return (
        <>
            <div>Edit {id} {emp.name}</div>
            <input type="text" value={emp.name} onChange={handleNameChange} />
            <button onClick={()=> updateEmp(id)}>Update</button>
        </>

    )
}

export default Edit