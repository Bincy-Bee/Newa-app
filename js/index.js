let login = localStorage.getItem("logedIn");
let user = JSON.parse(sessionStorage.getItem("userlogedin"));
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
}
else{
    alert("please signin 1st")
}
 
        
       
       


