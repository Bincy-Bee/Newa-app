let login = localStorage.getItem("logedIn");
let user = JSON.parse(localStorage.getItem("userlogedin"));
console.log(login);
console.log(user);

const userdata=(data)=>{
    console.log(data);
    data.map((ele)=>{

        let img = document.createElement("img");
        img.src = ele.img;

        let name = document.createElement("h3");
        name.innerHTML = ele.name;

        let email = document.createElement("h4");
        email.innerHTML = ele.email;

        let country = document.createElement("h5");
        country.innerHTML = ele.country;

        let div = document.createElement("div");
        div.append(img, name, email, country);

        document.getElementById("userdata").append(div);
    })
};
if (login){        
    userdata(user);
    document.getElementById("signin").style.display="none";
    document.getElementById("signup").style.display="none";
    document.getElementById("signout").style.display="block";
}
else{
    alert("please signin 1st");
}

const signout = (e)=>{
    e.preventDefault();
    document.getElementById("signin").style.display="block";
    document.getElementById("signup").style.display="block";
    document.getElementById("signout").style.display="none";
    localStorage.removeItem("userlogedin");
    localStorage.removeItem("logedIn");
    document.getElementById("userdata").innerHTML="";
}
document.getElementById("signout").addEventListener("click",signout)
// document.getElementById("signout").addEventListener("click",(e)=>{
//     e.preventDefault();
    
//     document.getElementById("signin").style.display="block";
//     document.getElementById("signup").style.display="block";
//     document.getElementById("signout").style.display="none";
//     localStorage.removeItem("userlogedin");
// })
       
       


