import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Head from './Head'
const Admin = () => {
  const apiUrl = 'https://6729c7f56d5fa4901b6e519b.mockapi.io/emp'
  const [emp, setEmp] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setEmp(response.data)
      setIsLoading(false)
      console.log(isLoading);
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Head sect="user" />
      <div>{isLoading ? "Loading..." : ""}</div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}>
        <table>
          {/* <caption>Table 1</caption> */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>

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

                  </tr>

                )
              })

            }

          </tbody>
        </table>
      </div>
    </>

  )
}

export default Admin