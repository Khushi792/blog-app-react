import React from 'react';
import './table.css';
import { Link } from "react-router-dom";
function Table({ users }) {
  return (
    
    <table  >
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
               <Link to={`/users/${user.id}`}>View Profile</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;