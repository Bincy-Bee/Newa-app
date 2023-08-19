import nav from "../components/nav.js";

document.getElementById("navbar").innerHTML = nav();    



document.getElementById("si-data").addEventListener("submit",(e)=>{
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    fetch(`http://localhost:8090/user?email=${email}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
       
        if(data.length > 0){
            if (data[0].email == email && data[0].password == password){
                alert("Sign-in successfull")
                
                setTimeout(()=>{
                    window.location.href="/index.html";
                },1000)
                localStorage.setItem("logedIn", true);
                sessionStorage.setItem("userlogedin", JSON.stringify(data));    
            }
        }
        else{
            alert("user not found kindly sign-up first");
            setTimeout(()=>{
                window.location.href="/pages/signup.html";
            },1000)
        }
    })
});
