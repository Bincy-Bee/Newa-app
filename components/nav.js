const nav = ()=>{
    return `<header class="bg-sky-100 p-2">
    <div class="flex items-center justify-between">
        <div class="logo">
            <a href="../index.html"><img src="../images/1_d.png" alt="" class="w-[50px] rounded-xl"></a>
        </div>
        <nav>
            <ul class="flex">
                <li><a href="../index.html" class="mx-1 p-1 text-black font-bold">Home</a></li>
                <li><a href="../pages/news.html" class="mx-1 p-1 text-black font-bold">News</a></li>
                <li><a href="../pages/worldnews.html" class="mx-1 p-1 text-black font-bold">World News</a></li>
            </ul>
        </nav>
        <div class="btns flex">
            <a href="../pages/signup.html" id="signup" class="p-1 px-2 mx-1 bg-sky-500 rounded-md text-white font-bold">Sign Up</a>
            <a href="../pages/signin.html" id="signin" class="p-1 px-2 mx-1 bg-sky-500 rounded-md text-white font-bold">Sign In</a>
            <a href="" id="signout" class="p-1 px-2 mx-1 bg-sky-500 rounded-md text-white font-bold">Sign Out</a>
        </div>
    </div>
</header>`
}

export default nav