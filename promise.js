const cookies = [{name:"Chocolate Cookies"},{name:"Macaron Cookies"}]
const newCookie = {name:"Biscotti Cookies"};

console.log("promise.js");

// Progression 1: create a function to get all the cookies
function getCookies(){
    // Progression 2: using setTimeout() -- use 1000 units for time parameter
    setTimeout(() => {
        cookies.forEach((cookie) => {
            $li = document.createElement("li");
            $li.innerText = cookie.name;
            document.body.append($li);
        });
    }, 1000);
}

//Progression 3: Create a function to creat cookies and create an object of Promise.
function createCookie(newCookie){
    return new Promise((resolve,reject)=>{
        // Progression 4: adding two parameters and using setTimeout() -- use 2000 units for time parameter
        setTimeout(() => {
            // Progression 5: handling errors and adding new cookie to the list
            if(!newCookie.name){
                reject("Invalid Cookie!");
            }
            cookies.push(newCookie)
            resolve();
        }, 2000);
    })
}

// Progression 6: call function using `.then`
createCookie(newCookie).then(()=>{
    getCookies();
})
.catch(err=>{
    console.log("Error",err)
})


