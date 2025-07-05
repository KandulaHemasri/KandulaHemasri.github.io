// import dotenv from 'dotenv'
// dotenv.config()
// const dbuser = process.env.DBUSER 
// const dbpass = process.env.DBPASS
// console.log(dbuser,dbpass)

//encodeURIComponent -----> It will read and encode the password

import dotenv from 'dotenv'
dotenv.config()
const dbuser = encodeURIComponent(process.env.DBUSER) 
const dbpass = process.env.DBPASS
console.log(dbuser,dbpass)

