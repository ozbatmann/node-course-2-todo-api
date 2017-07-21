const {ObjectID} =require("mongodb");

const {mongoose} =require("./../server/db/mongoose");
const {Todo} =require("./../server/models/todo");
const {User} =require("./../server/models/user");

//Todo.remove().then((result) =>{
  //  console.log(result);
//});

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id:"59726dd512665f7f63e116de"}).then((todo) =>{
   console.log(todo);
});

Todo.findByIdAndRemove("59726dd512665f7f63e116de").then((todo) =>{
    console.log(todo);
});