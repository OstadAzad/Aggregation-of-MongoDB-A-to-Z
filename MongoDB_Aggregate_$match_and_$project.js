//aggregate $match stage practice with project and sort
// db.test.aggregate([{$match : {age : {$gt : 18}}}, {$project : {name : 1, age : 1, _id : 0}}]).sort({age : -1})

//aggregate $project stage practice with sort
// db.test.aggregate([{$project : {name : 1, education : 1, _id : 0}}]).sort({name : 1})

//Example 1 – Age greater than 25:
// db.test.aggregate([{$match : {age : {$gt : 25}}}])

//Example 2 – Project only name and age:
// db.test.aggregate([{$project : {name : 1, age : 1}}])

//Example 3 – Match and then project:
// db.test.aggregate([{$match : {gender : "Male"}}, {$project : {gender : 1, name : 1}}])

//Example 4 – Exclude one field:
// db.test.aggregate([{$project : {phone : 0}}])

//Example 5 – Rename field:
// db.test.aggregate([{$project : {favouriteColor : "$favoutiteColor"}}])

//Example 6 – Filter by date:
// db.test.aggregate([{$match : {birthday : {$gte : ISODate("2022-09-02")}}}])

//Example 7 – Match with OR condition:
// db.test.aggregate([{$match : {$or : [{age : 20}, {age : 30}]}}])

//Example 8 – Project nested field:
// db.test.aggregate([{$project : {"address.city" : 1}}])







