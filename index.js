console.log('loaded index.js')


//fetch("https://brcavar.herokuapp.com",
fetch("http://localhost:3000",
    {
      method:"GET",
      mode: "no-cors", // no-cors, cors, *same-origin
      headers:{
        //"Content-Type": "application/json",
        //"Accept": "application/json",
        "Content-Type": "text/plain",
        //"Accept": "text/plain",
        //"cache-control": "no-cache"
      }
    })
.then(function(x){
    return x
    //debugger
}).then(function(x){
    console.log('response: ',x)
})


/*
fun = async function(){
  var y = (await fetch("http://localhost:3000",
    {
      method:"GET",
      mode: "no-cors", // no-cors, cors, *same-origin
      headers:{
        //"Content-Type": "application/json",
        //"Accept": "application/json",
        "Content-Type": "text/plain",
        "Accept": "text/plain",
        "cache-control": "no-cache"
      }
    })).text()
    return 'test: '+y
}
z = await fun()
console.log(z)
*/

