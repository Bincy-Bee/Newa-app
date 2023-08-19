import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav();  

const newsdata=(data) => {
    console.log(data);

    data.map((ele)=>{

        let img = document.createElement("img");
        img.src = ele.image;

        let title = document.createElement("h3");
        title.innerHTML = ele.title;

        let desc = document.createElement("p");
        desc.innerHTML = ele.description;

        let div = document.createElement("div");

        div.append(img, title, desc);
        document.getElementById("newspage").append(div);
    })
}

const get = async()=>{
    fetch(`http://localhost:8090/news`)
    .then((res)=>res.json())
    .then((data)=>{
        newsdata(data);
    })
}
get();