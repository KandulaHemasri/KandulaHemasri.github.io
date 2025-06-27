db.employees.insertOne({
    name:"Johnsmith",
    email:"johnsmith@gmail.com",
    department:"IT",
    salary:1456,
    loaction:["FL","OH"],
    date:Date()
})

db.employees.insertMany([
{name: "Mike Joseph",
email: "mike@gmail.com",
department: "IT",
salary: 2456,
location: ["FL", "TX"],
date: Date()
},
{ name: "Cathy G",
  email: "cathy@gmail.com",
  department: "IT",
  salary: 3456,
  location: ["AZ", "TX"],
  date:Date()
}
])


db.employees.find().skip(1)

db.employees.find().limit(1)

db.employees.find({},{name:1})


db.employees.find({},{_id:0,name:1})
db.employees.find({},{_id:false,name:true})
db.employees.find({},{_id:0,name:1,department:1})
db.employees.find({},{_id:0,name:1,department:0})  //MongoServerError[Location31254]: Cannot do exclusion on field department in inclusion projection
db.employees.find({},{_id:0,salary:1})

db.employees.find({department:"IT"})

db.employees.find({loaction:"FL"})

 db.employees.find({},{EmpName:"$name"})

 