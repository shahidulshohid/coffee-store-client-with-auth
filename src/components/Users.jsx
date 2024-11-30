
import Swal from 'sweetalert2'
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData()
    console.log(loadedUsers)
    const [users, setUsers] = useState(loadedUsers)

    const handleUserDelete = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                // delete from the database
            fetch(`http://localhost:5000/users/${id}`, {
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success"
                    });
                    const remainingUsers = users.filter(user => user._id !== id)
                    setUsers(remainingUsers)
                }
            })
            }
          });
    }
    return (
        <div>
            <h2 className="text-3xl">Users: {users.length}</h2>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>email</th>
        <th>Created At</th>
        <th>Last login At</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map(user => <tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.createAt}</td>
            <td>{user.lastSignInTime}</td>
            <td>
                <button className="btn">E</button>
                <button onClick={()=> handleUserDelete(user._id)} className="btn">X</button>
            </td>
          </tr>)
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;