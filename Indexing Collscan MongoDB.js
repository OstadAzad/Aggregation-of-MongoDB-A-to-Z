//single field indexing in MongoDB
// db.getCollection("massive_data").createIndex({email : 1})
// db.getCollection("massive_data").dropIndex({email : 1})

//compound/multiple filed indexing in MongoDB
// db.getCollection("massive_data").createIndex({name : 1, company : 1})


//search indexing with text data or value in MongoDB
// db.getCollection("massive_data").createIndex({ about : "text"})
// db.getCollection("massive_data").find({$text : {$search : "dolor"}}).project({about : 1})//searching "dolor" word or text




