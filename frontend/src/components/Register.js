import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"
   
export const Register = () => {
  const navigate = useNavigate();
  
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    
    const data = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      const res = await axios.post("https://authentication-system-q5t5.onrender.com/register", data);

      console.log(res.data);
      alert("Registration Successful");

      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      //redirect to login page
      

      setTimeout(() => {
        navigate("/login");
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
    await registerUser();
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-8 mx-auto">

          <div className="flex flex-col text-center w-full mb-8">
            <h1 className="text-4xl font-medium text-gray-900">
              User Registration
            </h1>
          </div>

          <div className="lg:w-2/3 md:w-3/4 mx-auto">
            <div className="flex flex-wrap -m-2">

              <div className="p-2 w-1/2">
                <label>First Name</label>
                <input
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div className="p-2 w-1/2">
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                  className="w-full border rounded px-3 py-2"
                  required
                />
              </div>

              <div className="p-2 w-full">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2"
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
                  required
                />
              </div>

              <div className="p-2 w-full text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-2 rounded"
                >
                  Register
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>
    </form>
  );
};
