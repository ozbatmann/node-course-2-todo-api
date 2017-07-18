const {MongoClient,ObjectID} =require("mongodb"); // ikisi eşit

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");


   /* db.collection("Todos").find({
        _id: new ObjectID("596e8de0921b352cd72b56a2")//string olarak işe yaramaz
    }).toArray().then((docs) => {//promise dönüyor
    console.log("Todos");
    console.log(JSON.stringify(docs,undefined,2));
    },(err) =>{
    console.log("Unable to fetch todos",err);
    });
*/

   /* db.collection("Todos").find().count().then((count) => {//promise dönüyor
        console.log("Todos count:"+count);

    },(err) =>{
        console.log("Unable to fetch todos",err);
    });
*/

   db.collection("Users").find({name:"Ali"}).toArray().then((docs) =>{
       console.log(JSON.stringify(docs,undefined,2));
    },(err) =>{
      console.log("Unable to fetch users",err);
   });

   // db.close();

});
