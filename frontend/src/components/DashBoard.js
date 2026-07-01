import React from "react";
import {useNavigate} from "react-router-dom"

export const Dashboard = () => {

  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(()=>{
      navigate("/login");
    },1000)
    
  };
  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-10 w-full max-w-3xl text-center">

        <h1 className="text-5xl font-bold text-indigo-600 mb-6">
          Dashboard
        </h1>

        <p className="text-xl text-gray-700 mb-8">
          Welcome! You have successfully logged in.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-blue-100 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold">Profile</h2>
            <p className="mt-2 text-gray-600">
              View and update your profile.
            </p>
          </div>

          <div className="bg-green-100 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold">Settings</h2>
            <p className="mt-2 text-gray-600">
              Manage your account settings.
            </p>
          </div>

          <div className="bg-yellow-100 rounded-lg p-6 shadow">
            <h2 className="text-2xl font-semibold">Users</h2>
            <p className="mt-2 text-gray-600">
              View registered users.
            </p>
          </div>

        </div>

        <button
          className="mt-10 bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>
    </section>
  );
};