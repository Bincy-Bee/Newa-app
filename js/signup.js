import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav();

document.getElementById("su-data").addEventListener("submit",(e)=>{
    e.preventDefault();

    let user ={
        img : document.getElementById("img").value,
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        country : document.getElementById("country").value,
    }
    console.log(user);

    fetch(`http://localhost:8090/user?email=${user.email}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        if(data.length > 0){
            if(data[0].email == user.email){
                alert("User already exist kindly signing-in now");

                setTimeout(()=>{
                    window.location.href="/pages/signin.html"
                },1000);
                localStorage.setItem("logedIn", true);
            }
        }
        else{
            try {
                fetch(`http://localhost:8090/user`,{
                    method : "POST",
                    headers : {"Content-Type":"application/json"},
                    body : JSON.stringify(user)
                })
            } catch (error) {
                alert("Error")
            }
        }
    })
})