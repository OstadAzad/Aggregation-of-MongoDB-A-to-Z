//$group and $sum aggregate practice in MongoDB
// db.test.aggregate([{$group : {_id : "$gender", count : {$sum : 1}}}])
// db.test.aggregate([{$group : {_id : "$age", count : {$sum : 1}}}, {$sort : {_id : -1}}])
// db.test.aggregate([{$group : {_id : "$age"}}, {$sort : {_id : -1}}])
// db.test.aggregate([{$group : {_id : "$age"}}, {$project : {_id : 0, age : "$_id"}}, {$sort : {age : 1}}])
// db.test.aggregate([{$group : {_id : "$address.country", count : {$sum : 1}}}])
// db.test.aggregate([{$group : {_id : "$company"}}])
// db.test.aggregate([{$group : {_id : "$salary"}}, {$sort : {_id : 1}}])

//$push aggregate practice in MongoDB
// db.test.aggregate([{$group : {_id : "$address.country", count : {$sum : 1}, namelist : {$push : "$name"}}}])
// db.test.aggregate([{$group : {_id : "$address.country", count : {$sum : 1}, namelist : {$push : "$$ROOT"}}}])
// db.test.aggregate([{$group : 
//     {_id : "$address.country", count : {$sum : 1}, 
//     fulldoc: {$push : "$$ROOT"}}}, 
//     {$project : {"fulldoc.name" : 1, "fulldoc.email": 1}}])


// db.test.aggregate([{$group : 
//     {_id : null, //the documents represent one document. easy operation and analysis purpose
//     totalsalary : {$sum : "$salary"},
//     maxsalary : {$max : "$salary"},
//     minsalary : {$min : "$salary"},
//     avgsalary : {$avg : "$salary"}
//     }}, 
//     {$project : { 
//         totalsalary : 1, 
//         maxsalary: 1, 
//         minsalary : 1, 
//         averagesalary : "$avgsalary", 
//         range : {$subtract : ["$maxsalary", "$minsalary"]}}}
//     ])

//$unwind aggregate practice($unwind broken array and create different different doc for each value)
// db.test.aggregate([{$unwind : "$friends" }, {$group : {_id : "$friends", totalfriends : {$sum : 1}}}])//each friend name how much used
// db.test.aggregate([{$unwind : "$interests" }, {$group : {_id : "$interests", totaltopics : {$sum : 1}}}])//each interest how much used
// db.test.aggregate([{$unwind : "$skills"}, {$group : {_id : "$skills", totalskills : {$sum : 1}}}]) //each skill how much used
// db.test.aggregate([{$unwind : "$skills"}, 
//     {$group : {_id : "$skills", username : {$push : "$name"}, //each skills persons name list
//     totalusers : {$sum : 1}}}])

// db.test.aggregate([{$unwind : "$skills"},
//     {$group : {_id : "$age", perageinterest : {$push : "$interests"}}}, {$sort : {_id : 1}}//different age persons interests choice
//     ])










