import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Admin = () => {
    const apiUrl = 'https://6729c7f56d5fa4901b6e519b.mockapi.io/emp'
    const [emp,setEmp] = useState([])
    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setEmp(response.data)
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div>Admin</div>
            <table>
                <caption>Table 1</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        emp.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id} {item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.position}</td>
                                    <td><button onClick={() => deleteEmp(item.id)}>DELETE</button></td>
                                </tr>

                            )
                        })

                    }

                </tbody>
            </table>
        </>

    )
}

export default Admin