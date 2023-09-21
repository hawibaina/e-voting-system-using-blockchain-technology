// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
db=require('./db/conn');
const port = process.env.PORT;

// Require Model
const Users = require('./models/userSchema');

const { application } = require('express');


// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.use(cors({
    origin:'http://127.0.0.1:3000',
}))

app.get('/', (req, res)=>{
    res.send("Hello World");
} )

// Registration
app.post('/Register', async (req, res) => {
    try {
        // Get body or Data
        const firstname = req.body.firstname;
        const surname = req.body.surname;
        const email = req.body.email;
        const password = req.body.password;
        
        const createUser = new Users({
            firstname : firstname,
            surname : surname,
            email : email,
            password : password
        });

        //Save Method is Used to Create User or Insert User
        //But Before Saving or Inserting, Password will Hash
        //Because of Hashing. After Hash, It will save to DB
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error)
    }
})

// Login Admin
app.post('/Admin', async (req, res) => {
    try{
        const email = req.body.email;
        const password = req.body.password;

        // Find User if Exist
        const user = await Users.findOne({email : email});
        if(user){
            // Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                // Generate Token that is defined in User Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Expires Token in 24 Hours
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }else{
                res.status(400).send("Invalid Credentials");
            }
        }else{
            res.status(400).send("Invalid Credentials"); 
        }

    } catch (error) {
        res.status(400).send(error);
    }
})


// Run Server
app.listen(port, ()=>{
    console.log("Server is Listening")
})