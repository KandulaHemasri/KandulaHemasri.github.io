db.employees.insertMany([
    {
        name:"Amy",
        email:"amy@gmail.com",
        department: "HR",
        salary:2000,
        location:["NY","TX"],
        date:Date(),
    },
    {
         name:"Rafeal",
        email:"rafeal@gmail.com",
        department: "admin",
        salary:1500,
        location:["OH","TX"],
        date:Date(),
    },
]);

 db.employees.updateOne(
    {email:"johnsmith@gmail.com"},
    {$set:{salary:2000}}
);


db.employees.updateMany(
    {},
    {$set:{points:1}}
);

db.employees.updateMany(
    {department:"IT"},
    {$inc: {points:-1}}
);

db.employees.updateMany(
    {department:"IT"},
    {$inc: {points:3}}
);


db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
);


db.employees.updateMany(
    {},
    {$unset:{score:""}}
);

db.employees.updateMany(
    {},
    {$push:{skills:"Java"}}
);

db.employees.updateMany(
    {},
    {$push:{skills:"Python"}}
);

db.employees.updateMany(
    {email:"johnsmith@gmail.com"},
    {$push:{skills:"MERN"}}
);

db.employees.updateMany(
    {email:"johnsmith@gmail.com"},
    {$pull:{skills:"MERN"}}
);

db.employees.updateMany(
    {email:"johnsmith@gmail.com"},
    {$addToSet:{skills:"MERN"}}
);


db.employees.updateMany(
    {email:"johnsmith@gmail.com"},
    {$pop:{skills:1}}
);


db.employees.updateOne(
    {email:"braine@gmail.com"},
    {$set:{name:"Braine"}},
    {upsert: true}
);


db.employees.deleteOne( {email:"braine@gmail.com"})

db.employees.deleteMany( {department:"IT"})
