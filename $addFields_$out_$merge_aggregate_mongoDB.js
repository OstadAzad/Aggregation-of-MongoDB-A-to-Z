//$addFields Aggregate practice in MongoDB
// db.test.aggregate([{$match : {gender : "Male"}}, {$addFields : {course : "next level web development"}}, {$project : {course : 1, _id : 0}}])

//$out aggregate practice in MongoDB($out create a new collection in my database according to my $addFields stages.)
// db.test.aggregate([{$match : {gender : "Male"}}, 
// {$addFields : {course : "level-2", inst : "ph", level : "advance"}}, 
// {$out : "stu_course"}
// ])

//$merge aggregate practice in MongoDB($merge added field and change data according to my collection main or optional)
// db.stu_course.aggregate([{$match : { "address.country" : "Brazil"}}, 
// {$addFields: {region : "europe", eyecolor: "brown", haircolor : "white"}}, 
// {$merge: "stu_course"}
// ])



