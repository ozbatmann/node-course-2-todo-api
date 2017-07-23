require("./config/config.js");


const _=require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const {ObjectID} =require("mongodb");

var {mongoose} = require("./db/mongoose.js");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");


var app=express();
const port=process.env.PORT || 3000; //for heroku

app.use(bodyParser.json());

app.post("/todos",(req,res) =>{
   var todo=new Todo({
       text:req.body.text
   });

    todo.save().then((doc) =>{
        res.send(doc);
    },(e) =>{
        res.status(400).send(e);
    });

});


app.get("/todos",(req,res) =>{
   Todo.find().then((todos) =>{
       res.send({todos});
   },(e) =>{
       res.status(400).send(e);
   })
});

//GET /todos/id like this


app.get("/todos/:id",(req,res) =>{
    var id=req.params.id;

     if(!ObjectID.isValid(id)){
        return res.status(404).send("Invalid id");
        }
    Todo.findById(id).then((todo) =>{
        if(!todo) {
            return res.status(404).send();
        }

            res.status(200).send({todo});
    }).catch((e) => res.status(400).send());

    //Valid id using isValid
    // 404 - send back empty body
});

    //findById
    //success
    //if todo - send it back
    //if no todo - send back 404 with empty body
    //error
    //400 - and send empty body back

    app.delete("/todos/:id",(req,res) =>{
        //get the id
        //validate the id -> not valid ? return 404
        //remove todo by id

        //success (send doc back with 200)
        //err (400 with empty body)
        var id=req.params.id;
        if(!ObjectID.isValid(id)){
            return res.status(404).send("Invalid id");
        }
        Todo.findByIdAndRemove(id).then((todo) =>{
         if(!todo){
             return res.status(404).send();
         }
         res.send({todo});
        }).catch((e) =>{
            res.status(400).send();
        });
    });


app.patch("/todos/:id",(req,res) =>{
   var id = req.params.id;
   var body = _.pick(req.body,["text","completed"]); //this is why lodash is required

    if(!ObjectID.isValid(id)){
        return res.status(404).send("Invalid id");
    }

    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    } else {
        body.completed=false;
        body.completedAt=null;
    }

    Todo.findByIdAndUpdate(id,{$set:body},{new:true}).then((todo)=>{
        if(!todo){
            return res.status(404).send();
        }

        res.send({todo});

    }).catch((e) =>{
        res.status(400).send();
    })


});
// POST /users



app.post("/users",(req,res) =>{
    var body=_.pick(req.body,["email","password"]);
    var user= new User(body);



    user.save().then(() =>{
        return user.generateAuthToken();
    }).then((token) => {
        res.header("x-auth",token).send(user);
    }).catch((e) =>{
        res.status(400).send(e);
    })

});

app.listen(port,() =>{
    console.log("Started up at port "+port);
});

module.exports={app};