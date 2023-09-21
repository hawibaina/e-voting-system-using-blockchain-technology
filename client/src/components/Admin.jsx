import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Admin = () => {

    const navigate = useNavigate();

    /*const [user, setUser] = useState({
        email : '',
        password : ''
    });

    // Handle Input
    const handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value

        setUser({...user, [name] : value})
    }

    // Handle Login
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const {email, password} = user;
        try{
            const res = await fetch('http://localhost:3001/Admin', {
                method : 'POST',
                headers: {
                    "Content-type" : "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });

            if(res.status === 400 || !res){
                window.alert("Invalid Credentials")
            }else{
                window.alert("Login Successful");
                navigate ('/AdminHome')
                // Token is generated when we log in
            }

        } catch (error) {
            console.log(error);
        }
    }*/

  return (
    <div className="min-h-screen py-40 gradient-bg-register">
        <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row w:10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center gradient-bg-welcomeregister">
                    <h1 className="text-white text-3xl mb-3">New Here?</h1>
                    <div className="w=1/2">
                        <p className="text-white">If you haven't Signed Up, what are you waiting for? Please <Link to='/Register' className="text-purple-500 font-semibold">SIGNUP</Link>
                        </p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 py-16 px-12">
                    <h2 className="text-3xl mb-4">Sign in</h2>
                    <form /*onSubmit={handleSubmit}*/>
                        <div className="mt-5">
                            <input type="text" placeholder="Email" className="rounded-2xl border ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 py-1 px-2 w-full"
                            id="mail"
                            name="email"
                            //value={user.email}
                            //onChange={handleChange}
                            />
                        </div>
                        <div className="mt-5">
                            <input type="password" placeholder="Password" className="rounded-2xl border-none ring-2 ring-gray-200 focus:ring-gray-500 focus:ring-2 py-1 px-2 w-full"
                            id="pwd"
                            name="password"
                            //value={user.password}
                            //onChange={handleChange}
                            />
                        </div>
                        <div className="mt-5">
                        <button type="submit" className="rounded-2xl w-full bg-purple-500 py-3 text-center text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin