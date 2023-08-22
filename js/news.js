import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav();  

let login = localStorage.getItem("logedIn");
let user = JSON.parse(localStorage.getItem("userlogedin"));
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
  alert("please login in 1st")
}
document.getElementById("signout").addEventListener("click",(e)=>{
    e.preventDefault();
  
    localStorage.removeItem("userlogedin");
    localStorage.removeItem("logedIn");
    document.getElementById("signin").style.display="block";
    document.getElementById("signup").style.display="block";
    document.getElementById("signout").style.display="none";
    document.getElementById("userdata").innerHTML="";
});

const newsdata=(data) => {
    document.getElementById("newspage").innerHTML="";
    data.map((ele)=>{

        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let desh =  document.createElement("h3");
        desh.innerHTML = ele.country;

        let desc = document.createElement("p");
        desc.innerHTML = ele.description;

        let div = document.createElement("div");

        div.append(img, title, desh, desc);
        document.getElementById("newspage").append(div);
    })
};

fetch(`http://localhost:8090/news`)
.then((res)=>res.json())
.then((data)=>{

    let feel = data.filter((item)=> item.country == user[0].country.toLowerCase())
    console.log(feel);
    newsdata(feel);
})

const handlecountry = (val) =>{

    let desh = document.getElementById("country").value;

    if (desh === "all"){
        fetch(`http://localhost:8090/news`)
        .then((res)=>res.json())
        .then((data)=>{
            newsdata(data);
        })
    }
    else{
        fetch(`http://localhost:8090/news?country=${val}`)
        .then((res)=>res.json())
        .then((data)=>{
            if(desh === val){
                newsdata(data)
            }
            else{
                get();
            }
        })
    }
}

document.getElementById("country").addEventListener("change",()=> handlecountry("all"));
document.getElementById("country").addEventListener("change",()=> handlecountry("in"));
document.getElementById("country").addEventListener("change",()=> handlecountry("ch"));
document.getElementById("country").addEventListener("change",()=> handlecountry("nz"));
document.getElementById("country").addEventListener("change",()=> handlecountry("us"));
document.getElementById("country").addEventListener("change",()=> handlecountry("uk"));

const searchcon = ()=>{
    let ser = document.getElementById("s-input").value;

    fetch(`http://localhost:8090/news`)
    .then((res)=>res.json())
    .then((data)=>{
        let dd = data.filter((item)=> item.country.toLowerCase().match(ser.toLowerCase()));
        console.log(dd)
        newsdata(dd);
    })

};
document.getElementById("search").addEventListener("click", searchcon);
document.getElementById("s-input").addEventListener("input", (e)=>{
    
    // if (e.key == "Enter"){
    //     searchcon();
    // }
    searchcon();
});

// const get = async()=>{
//     fetch(`http://localhost:8090/news`)
//     .then((res)=>res.json())
//     .then((data)=>{
//         newsdata(data);
//     })
// }
// get();