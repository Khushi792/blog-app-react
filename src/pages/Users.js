import { useEffect, useState } from "react";
import Table from './table';
function Users() {
   const [users, setUsers] = useState([]);

  useEffect(() => {
     fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
     .then(data => setUsers(data));
  }, []);
    return (
    <div>
      <h1 style={{fontSize:"50px",paddingLeft:"80px"}}>USERS</h1>
      <Table
        users={users}
      />
    </div>
    
   );
 }

 export default Users;