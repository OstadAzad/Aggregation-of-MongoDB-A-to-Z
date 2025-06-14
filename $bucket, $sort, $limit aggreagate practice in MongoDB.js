//$bucket, $sort, $limit aggreagate practice in MongoDB
db.test.aggregate([{
    $bucket : {groupBy : "$age", //which field is divided/range
    boundaries : [0, 50, 80, 100], //range(boundary)
    default : "unknown",//out range include in here
    output : {totaluser : {$sum : 1},
    name : {$push : "$name"}
    }
    }},
    {$project : { totaluser : 1}},//using $project aggregate for field filtering
    {$sort : {totaluser : 1}},//using sort for ascending-smalll to big
    {$limit : 2}//using limit for requirement documents
    ])