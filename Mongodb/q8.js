db.posts.insertOne({_id:"p1",post:"Post 1"})
db.posts.insertOne({_id:"p2",post:"Post 2"})


db.comments.insertOne({_id:"c1",pid:"p1",comment:"This is comment 1 on post 1"})
db.comments.insertOne({_id:"c2",pid:"p1",comment:"This is comment 2 on post 1"})
db.comments.insertOne({_id:"c3",pid:"p2",comment:"This is comment 1 on post 2"})
db.comments.insertOne({_id:"c4",pid:"p2",comment:"This is comment 2 on post 2"})
db.comments.insertOne({_id:"c5",pid:"p2",comment:"This is comment 3 on post 2"})



db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
    },
},
{$project:{_id:0,post:1,}},
]);


db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
    },
},
{$unwind:"$comments"},
{$project:{_id:0,post:1,"comments.comment":1}}
]);




db.posts.aggregate([
    {$lookup:{
        from:"comments",
        localField:"_id",
        foreignField:"pid",
        as:"comments"
    },
},
{$unwind:"$comments"},
{$project:{_id:0,post:1,}},
]);


db.marks.insertMany([
    {name:"John",term:"t1",subject:"Maths",marks:95},
    {name:"John",term:"t2",subject:"Maths",marks:80},
    {name:"John",term:"t3",subject:"Maths",marks:70},
    {name:"John",term:"t1",subject:"Science",marks:50},
    {name:"John",term:"t2",subject:"Science",marks:60},
    {name:"John",term:"t3",subject:"Science",marks:90},
    {name:"Cathy",term:"t1",subject:"Maths",marks:91},
    {name:"Cathy",term:"t2",subject:"Maths",marks:81},
    {name:"Cathy",term:"t3",subject:"Maths",marks:71},
    {name:"Cathy",term:"t1",subject:"Science",marks:51},
    {name:"Cathy",term:"t2",subject:"Science",marks:61},
    {name:"Cathy",term:"t3",subject:"Science",marks:91},
]);

db.marks.find().sort({term:1,name:1})

db.marks.find({},{name:1,term:1,subject:1,marks:1})

db.marks.find({},{_id:0,name:1,term:1,subject:1,marks:1}).sort({name:1,term:1})

db.marks.aggregate([
    {$group:

        {_id:"$name",total:{$sum:"$marks"}}}
])

db.marks.aggregate([
    {$group:
        
        {_id:"$subject",total:{$sum:"$marks"}}}
])

db.marks.aggregate([
    {$group:
        
        {_id:"$term",total:{$sum:"$marks"}}}
])

db.marks.aggregate([
    {$group:

        {_id:{name:"$name",subject:"$subject"},total:{$sum:"$marks"}}}
]).sort({_id:1})


db.marks.aggregate([
    {$group:

        {_id:{term:"$term",name:"$name"},total:{$sum:"$marks"}}}
]).sort({_id:1})


db.marks.aggregate([
    {$group:

        {_id:{term:"$term",name:"$name"},AVG:{$avg:"$marks"}}}
]).sort({_id:1})