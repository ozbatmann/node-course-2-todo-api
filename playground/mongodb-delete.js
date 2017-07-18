const {MongoClient,ObjectID} =require("mongodb"); // ikisi eşit

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) =>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");

    //deleteMany
    //db.collection("Todos").deleteMany({text:"Eat lunch"}).then((result) =>{
      //  console.log(result);
    //});


    //deleteOne
   // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result)=>{
     //   console.log(result);
    //});


    //findOneAndDelete
  //  db.collection("Todos").findOneAndDelete({completed:false}).then((result)=>{
    //    console.log(result);
    //});

  //  db.collection("Users").deleteMany({name:"Ali"}).then((result)=>{
    //    console.log(result);
   // });

   // db.collection("Users").deleteOne({name:"Vedat"}).then((result) =>{
     //   console.log(result);
    //});

   db.collection("Users").findOneAndDelete({
        _id:new ObjectID("596e8fda35b9442dea5a3eb5")
    }).then((result)=>{
        console.log(result);
    });
    // db.close();

});
