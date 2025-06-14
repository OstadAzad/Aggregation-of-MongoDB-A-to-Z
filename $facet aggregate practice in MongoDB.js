//$facet aggregate practice in MongoDB
// db.test.aggregate([{$facet : {
//     totalpersons : [{$count : "age"}], //total count
//     sortpersons : [{$sort : {age : 1}}], //sort age-small to big
//   oldage : [{$sort : {age : -1}}, {$limit : 2}] //using limit for 2 documents
// }}])

