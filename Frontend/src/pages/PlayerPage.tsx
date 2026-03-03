import { Link } from "react-router-dom";
import { useFetchUser } from "../hooks/useFetch";
import { ModalEdit } from "../components/dashboard/modal";
import { useState } from "react";


export const PlayerPage = () => {
  const { users, fetchUsers } = useFetchUser();
  const [isOpen, setIsOpen] = useState(false);
  const [selectUser, setSelectUser] = useState();

  const handleClick = (user: any) => {
    setIsOpen(true);
    setSelectUser(user);
  }

  return (
    <div className=" text-center p-20 border-2 border-white/10 rounded-3xl  min-h-screen p-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">Player</h1>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
            <Link to={'/auth/register'}>Add Player</Link>
          </button>
        </div>

        {/* Table Section */}
        <div className="bg-[#1F2937]/50 rounded-lg overflow-hidden border border-gray-700">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700 text-gray-300">
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Username</th>
                <th className="px-6 py-4 font-semibold hidden lg:table-cell">Password</th>
                <th className="px-6 py-4 font-semibold hidden md:table-cell">Role</th>
                <th className="px-6 py-4 font-semibold">
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {users.map((user: any, index: number) => (
                <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-white">{user.email}</td>
                  <td className="px-6 py-4 text-gray-400 hidden md:table-cell">{user.username}</td>
                  <td className="px-6 py-4 text-gray-400 max-w-[150px] truncate hidden lg:table-cell">{user.password}</td>
                  <td className="px-6 py-4 text-gray-400 hidden md:table-cell">{user.role}</td>
                  <td className="px-6 py-4 text-right">
                    <button onClick={() => handleClick(user)} className="text-indigo-400 hover:text-indigo-300 font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <ModalEdit
        user={selectUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onRefresh={fetchUsers}
      />
    </div>
  );
};