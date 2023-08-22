import nav from "../components/nav.js";


document.getElementById("navbar").innerHTML=nav();

const worldnews = (feeds)=>{

    feeds.map((ele)=>{
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
        document.getElementById("worldnewspage").append(div);
    })
}



const get = async()=>{
    fetch(`http://localhost:8090/news`)
    .then((res)=> res.json())
    .then((news)=>{
        worldnews(news)
    })
}
get();