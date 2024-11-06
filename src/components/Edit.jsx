import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
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
     
    }
    function validateInputs() {
        var name = emp.name;
        var lastname = emp.lastname;
        var jobPosition = emp.position;
        var namePattern = /^[A-Za-z]+$/;
        var lastnamePattern = /^[A-Za-z]+$/;
        var jobPositionPattern = /^[A-Za-z0-9 ]+$/;
        if (!namePattern.test(name)) {
            alert('Invalid First Name! Only alphabetic characters are allowed.');
            return false;
        }
        if (!lastnamePattern.test(lastname)) {
            alert('Invalid Last Name! Only alphabetic characters are allowed.');
            return false;
        }
        if (!jobPositionPattern.test(jobPosition)) {
            alert('Invalid Job Position! Only letters, numbers, and spaces are allowed.');
            return false;
        }
        return true
        // alert('All inputs are valid:\nFirst Name: ' + name + '\nLast Name: ' + lastname + '\nJob Position: ' + jobPosition);
    }
    const updateEmp = async (id) => {
        if (!validateInputs()) {
            return
        }


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
            <div><Link to={"/admin"}><button>Go Back</button></Link></div>
            <div>Edit {id} {emp.name}</div>
            <input type="text" name="name" required pattern="[A-Za-z]+" title="Only alphabetic characters are allowed" value={emp.name} onChange={handleNameChange} />
            <input type="text" name="lastname" required pattern="[A-Za-z]+" title="Only alphabetic characters are allowed" value={emp.lastname} onChange={handleNameChange} />
            <input type="text" name="position" pattern="[A-Za-z0-9 ]+" title="Only letters, numbers, and spaces are allowed" value={emp.position} onChange={handleNameChange} />
            <button onClick={() => updateEmp(id)}>Update</button>
        </>

    )
}

export default Edit