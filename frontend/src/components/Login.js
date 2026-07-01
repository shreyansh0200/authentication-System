import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {
    const data = {
      email,
      password,
    };

    try {
      const res = await axios.post("https://authentication-system-q5t5.onrender.com/login", data);
      // Save token
      localStorage.setItem("token", res.data.token);

      console.log(res.data);
      alert("Login Successful");

      setEmail("");
      setPassword("");
      //redirect to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);  

    } catch (err) {
      console.log(err);

      if (err.response) {
        alert(err.response.data);
      } else {
        alert("Server Error");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser();
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">

          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="text-4xl font-medium text-gray-900">
              User Login
            </h1>
          </div>

          <div className="lg:w-2/3 md:w-3/4 mx-auto">
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-full">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="p-2 w-full">
                <label>Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  placeholder="Enter Password"
                  required
                />
              </div>

              <div className="p-2 w-full text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded"
                >
                  Login
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </form>
  );
};
