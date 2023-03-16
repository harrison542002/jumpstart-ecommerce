import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../../services/AdminAPI";

type Props = {};

const Users = (props: Props) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="w-full">
      <p className="text-center text-3xl font-bold">Manage Users</p>
      <div className="flex justify-center mt-5 mx-10">
        <table className="border-collapse border border-slate-500">
          <thead>
            <tr className="text-lg font-bold text-purple-500">
              <td className="p-3 border border-slate-500 bg-slate-100">
                S.No.
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                First Name
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Last Name
              </td>
              <td className="p-3 border border-slate-500 bg-slate-100">
                Email Address
              </td>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user: any, index) => (
                <tr>
                  <td className="p-3 border border-slate-500">{index + 1}</td>
                  <td className="p-3 border border-slate-500 ">
                    {user.firstName}
                  </td>
                  <td className="p-3 border border-slate-500">
                    {user.lastName}
                  </td>
                  <td className="p-3 border border-slate-500">{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
