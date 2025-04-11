import React, {  useState,useEffect } from 'react'
import axios from 'axios'

export default function AllUser() {
  const [users, setUsers] = useState([]);

    const getAllUser = async () => {
        try {
          const response = await axios.get('https://67dc8ab9e00db03c40685892.mockapi.io/users');
          setUsers(response.data);
          console.log(response.data);
          
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        getAllUser();
      }, []);

  return (
    <div>

      <h1>All User</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}

      
      
    </div>
  )
}
