console.log("Hello from JavaScript");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);
var rightnow = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(rightnow);