import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Users = () => {
  const { users, deleteUser, startEditingUser } = useContext(UserContext);
  const [modal, setModal] = useState({ show: false, userId: null });
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setModal({ show: true, userId: id });
  };

  const confirmDelete = () => {
    deleteUser(modal.userId);
    setModal({ show: false, userId: null });
    alert("User deleted successfully!");
  };

  const handleEdit = (user) => {
    startEditingUser(user);
    navigate("/create");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-gray-100 rounded-lg shadow-xl p-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-8">
          Manage Users
        </h2>

        {users.length === 0 ? (
          <p className="text-center text-blue-600 text-lg">
            No users found. Please create a new user.
          </p>
        ) : (
          <ul className="space-y-6">
            {users.map((user) => (
              <li
                key={user.id}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 flex justify-between items-center shadow hover:shadow-md transition"
              >
                <div>
                  <p className="text-lg font-semibold text-gray-800">
                    {user.firstname} {user.lastname}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Age:</span> {user.age}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Profession:</span>{" "}
                    {user.profession}
                  </p>
                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">Gender:</span> {user.gender}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="px-5 py-2 bg-yellow-400 text-white rounded-lg font-medium shadow hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="px-5 py-2 bg-red-500 text-white rounded-lg font-medium shadow hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Modal */}
        {modal.show && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">
                Confirm Deletion
              </h3>
              <p className="text-gray-600 text-center mb-6">
                Are you sure you want to delete this user? This action cannot be
                undone.
              </p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={() => setModal({ show: false, userId: null })}
                  className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition w-1/3"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmDelete}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition w-1/3"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
