//db.users.find()
//db.users.drop()

db.users.insertOne({name:"Lucky",age:20});

db.users.insertMany([
    {name:"Sravya",age:20},
    {name:"Purnesh",age:20},
]);


