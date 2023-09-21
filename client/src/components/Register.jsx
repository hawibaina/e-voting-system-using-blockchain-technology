import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: "",
        surname: "",
        email: "",
        password: ""
   });

    //Handle Inputs
    const handleInput = (event) => {
        let  name = event.target.name;
        let value = event.target.value;

        setUser({...user, [name]:value});
    }

    // Handle Submit
    const handleSubmit = async (event) => {
        event.preventDefault();
        //Object Destructuring
        //Store Object Data into Variables
        const {firstname, surname, email, password} = user;
        try {
            // It is Submmitted on port 3000 by default
            // Which is the Front End but we need to
            // Submit it on Backend which is on port 3001. So we need Proxy.
           const res = await fetch('http://localhost:3001/Register', {
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
               },
               body : JSON.stringify({
                    firstname, surname, email, password
                })
            })

            if(res.status === 400 || !res){
                window.alert("Already Used Details")
            }else{
                // You need to Restart the Server for Proxy Works
                window.alert("Registered Successfully");
                navigate('/Admin')
            }
        } catch (error){
           console.log(error);
        }
    }

  return (
    <div className="min-h-screen py-40 gradient-bg-register">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w:10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center gradient-bg-welcomeregister">
                    <h1 className="text-white text-3xl mb-3">Welcome</h1>
                    <div className="w=1/2">
                        <p className="text-white">If you have already Signed Up, that's great!!Please <Link to='/Login' className="text-purple-500 font-semibold">LOGIN</Link>
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className="text-3xl mb-4">Register</h2>
                    <p className="mb-4">
                        Create your account. It's free and only takes a minute.
                    </p>
                   <form onSubmit={handleSubmit} method="POST" >
                        <div className="grid grid-cols-2 gap-5">
                            <input type="text" placeholder="Firstname" className="rounded-2xl border ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 py-1 px-2"
                            id="fname"
                            name="firstname"
                            value={user.firstname}
                            onChange={handleInput}
                            />
                            <input type="text" placeholder="Surname" className="rounded-2xl border ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 py-1 px-2"
                            id="sname"
                            name="surname"
                            value={user.surname}
                            onChange={handleInput}
                            />
                        </div>
                        <div className="mt-5">
                            <input type="text" placeholder="Email" className="rounded-2xl border ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 py-1 px-2 w-full"
                            id="mail"
                            name="email"
                            value={user.email}
                            onChange={handleInput}
                            />
                        </div>
                        <div className="mt-5">
                            <input type="password" placeholder="Password" className="rounded-2xl border ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 py-1 px-2 w-full"
                            id="pwd"
                            name="password"
                            value={user.password}
                            onChange={handleInput}
                            />
                        </div>
                        <div className="mt-5">
                            <input type="checkbox" className="border border-gray-400" id="check"/>
                            <span>
                            I accept the <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                            </span>

                        </div>
                        <div className="mt-5">
                        <button type="submit" className="rounded-2xl w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Register