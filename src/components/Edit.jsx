import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './Head'




const apiUrl = 'https://6729c7f56d5fa4901b6e519b.mockapi.io/emp/'
const Edit = () => {
    const id = useParams().id
    const [emp, setEmp] = useState({
        name: '',
        lastname: '',
        position: ''

    })

    const fetchData = async (id) => {
        try {
            const response = await axios.get(`${apiUrl}${id}`);
            setEmp(response.data)

            // console.log(emp);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData(id)

    }, [id])


    function handleNameChange(e) {
        const { name, value } = e.target;
        setEmp((previousState) => ({
            ...previousState,
            [name]: value
        }))

        console.log(name, value)
    }

    const updateEmp = async (id) => {
        try {
            const response = await axios.put(apiUrl + '/' + id, {
                name: emp.name,
                lastname: emp.lastname,
                position: emp.position
            })
            
            if (response.status === 200) { // check for successful response
                alert("Data submitted successfully!");
                // fetchData(); // call fetchData function if needed
            } else {
                alert("Error submitting data. Please try again.");
            }
            fetchData(id)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div><a href="../admin"><button>Go Back</button></a></div>
            <div>Edit {id} {emp.name}</div>
            <input type="text" name="name" value={emp.name} onChange={handleNameChange} />
            <input type="text" name="lastname" value={emp.lastname} onChange={handleNameChange} />
            <input type="text" name="position" value={emp.position} onChange={handleNameChange} />
            <button onClick={() => updateEmp(id)}>Update</button>
        </>

    )
}

export default Edit