//CRUD

db.employees.getIndexes()

db.employees.createIndex({email:1})

db.employees.dropIndex({email:1})

db.employees.find({email:"johnsmith@gmail.com"}).explain("excutionStats")

