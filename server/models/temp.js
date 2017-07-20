/**
 * Created by aliimranozbatman on 20/07/2017.
 */
var newTodo = new Todo({
    text:"Cook dinner"
});

newTodo.save().then((doc) =>{
    console.log("Saved todo",doc);
},(e) =>{
    console.log("Unable to save todo");
});




var otherTodo = new Todo({
    text:"Something to do"

});

otherTodo.save().then((doc) =>{
    console.log(JSON.stringify(doc,undefined,2));
},(e) =>{
    console.log("Unable to save todo",e);
});


newUser.save().then((doc) =>{
    console.log(JSON.stringify(doc,undefined,2));
},(e) =>{
    console.log("Unable to save User",e);
});


