const {MongoClient,ObjectID} =require("mongodb"); // ikisi eşit

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

  /*  db.collection("Todos").findOneAndUpdate({
        _id: new ObjectID("596e9b6355e477ae1d5fe6bf")
    },{
        $set:{
            completed:true
        }
    },{
        returnOriginal:false
    }).then((result) =>{

    console.log(result);
    });

*/


  db.collection("Users").findOneAndUpdate({
      _id:new ObjectID("596fdc76430b7419bf416697")
  }, {
      $set: {
          name: "Vedat"
      },
      $inc:{
          age:+1
      }
  },{
          returnOriginal:false
    }).then((result) =>{
      console.log(result);
    });

    // db.close();

});
