import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const CreateUser = () => {
  const { addUser, updateUser, editingUser, cancelEditing } =
    useContext(UserContext);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    profession: "",
    gender: "",
  });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({
        firstname: "",
        lastname: "",
        age: "",
        profession: "",
        gender: "",
      });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, age, profession, gender } = formData;

    if (firstname && lastname && age && profession && gender) {
      if (editingUser) {
        updateUser(editingUser.id, formData);
        alert("User updated successfully!");
      } else {
        addUser({ id: Date.now(), ...formData });
        alert("User created successfully!");
      }
      setFormData({
        firstname: "",
        lastname: "",
        age: "",
        profession: "",
        gender: "",
      });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-20">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border">
        <h2 className="text-3xl font-extrabold text-[#3E92CC] text-center mb-6">
          {editingUser ? "Edit User" : "Create User"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={formData.firstname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E92CC] hover:border-[#3E92CC] transition-all"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={formData.lastname}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E92CC] hover:border-[#3E92CC] transition-all"
            />
          </div>
          <div className="relative">
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E92CC] hover:border-[#3E92CC] transition-all"
            />
          </div>
          <div className="relative">
            <input
              type="text"
              name="profession"
              placeholder="Profession"
              value={formData.profession}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E92CC] hover:border-[#3E92CC] transition-all"
            />
          </div>
          <div className="relative">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-[#3E92CC] hover:border-[#3E92CC] transition-all"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="w-full bg-[#3E92CC] text-white font-bold py-3 rounded-lg shadow-lg hover:bg-[#3178A5] transition-all"
            >
              {editingUser ? "Update User" : "Create User"}
            </button>
            {editingUser && (
              <button
                type="button"
                onClick={cancelEditing}
                className="w-full bg-gray-400 text-white font-bold py-3 rounded-lg shadow-lg hover:bg-gray-500 transition-all"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
