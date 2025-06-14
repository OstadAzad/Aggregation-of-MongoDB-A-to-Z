//$lookup aggregate practice in MongoDB
db.orders.aggregate([{$lookup: {
       from: "test",
       localField: "userId",
       foreignField: "_id",
       as: "azad"
     }}])