const {ObjectID} =require("mongodb");

const {mongoose} =require("./../server/db/mongoose");
const {Todo} =require("./../server/models/todo");
const {User} =require("./../server/models/user");


var id = "5971322025a1181075d6e88c";
var id2="596feda3eba8aa232ac16a1e";

if(!ObjectID.isValid(id)){
    console.log("Id not valid");
}
/*
Todo.find({
    _id : id
}).then((todos) =>{
    console.log("Todos",todos);
});

Todo.findOne({
    _id:id
}).then((todo) =>{
    console.log("Todo",todo);
});

Todo.findById(id).then((todo) =>{
    if(!todo){
        return console.log("Id not found");
    }
    console.log("Todo By Id",todo);
}).catch((e) => console.log(e));

*/

//User.findById 1 user not found 2 user found 3 error handle et

User.findById(id2).then((user) =>{
    if(!user) {
        return console.log("Id not found");
    }
    console.log("User By Id",user)
}).catch((e) => console.log(e));