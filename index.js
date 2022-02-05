function receivesAFunction(cb) {
    console.log(cb())
};
receivesAFunction(function(){return "Hey, dude1"})

function returnsANamedFunction() {
return function randoFn() {
    console.log("Yo, this is cool.")
};
}
function returnsAnAnonymousFunction () {
    return () => console.log ("Lets go again.")
}
