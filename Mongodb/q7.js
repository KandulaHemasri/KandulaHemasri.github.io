db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,department:1,salary:1}},
    {$sort:{salary:1}},
    {$limit:3},
]);

db.employees.aggregate([
    {$group:
        {_id:"$department",
            total:{$sum:"$salary"}
        }
    },
]);


db.employees.aggregate([
    {$project:{
        _id:0,name:1,
        salary:1,
        bonus:{$multiply:["$salary",2]}
    }
},
]);

//display name,email,salary of It department
db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{name:1,salary:1,email:1}},
]);

//display of annual income of employees
db.employees.aggregate([
    {$project:
        { name:1,email:1,
            AnnualIncome:{$multiply:["$salary",12]}
        }
    },
]);

db.employees.aggregate([
    {$match:
        {
            salary:{$gt:3000},
        }
    },
    {
        $project: {
            name: 1,
            email: 1,
            department: 1,
            ctc: "$salary"
        }
    },
]);


db.students.aggregate([
    {
        $group:{
                _id:null,
                Average:{$avg:"$age"}
        }
    },
])



db.students.updateOne(
    {name:"Alice Johnson"},
    {$set:{age:24}},
);


db.students.updateMany(
    {},
    {$pop:{Coursers:1}},
);

db.students.find({},{_id:0,name:1,age:1})

db.students.deleteOne({coursers:"Physics"})
db.students.updateMany(
    {},
    {$push:{Coursers:"Maths"}}
)

db.students.deleteMany({Coursers:"Maths"})

