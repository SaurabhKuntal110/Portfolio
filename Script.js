const tabLinks = document.querySelectorAll(".tabLinks")
const tabContents = document.querySelectorAll(".tabContents")
const navCloseBtn = document.querySelector(".fa-xmark")
const navOpenBtn = document.querySelector(".fa-bars")
const sideMenu = document.querySelector("#sideMenu")

tabLinks.forEach((tablink)=>{
    tablink.addEventListener('click',()=>{
        console.log("button clicked");
        tabLink.classList.remove("activeLink")
    })
})
tabContents.forEach((tabContent)=>{
    tabContent.addEventListener('click',()=>{
        tabContent.classList.remove("activeTab")
    })
})
event.currentTarget.classList.add("activeLink");
document.getElementById(tabName).classList.add("activeTab");
    
   
// function openTab(tabName){
//     for(let tabLink of tabLinks){
//         tabLink.classList.remove("activeLink")
//     }
//     for(let tabContent of tabContents){
//         tabContent.classList.remove("activeTab")
//     }
//     event.currentTarget.classList.add("activeLink");
//     document.getElementById(tabName).classList.add("activeTab");
// }

navCloseBtn.addEventListener('click',()=>{
    sideMenu.style.right = "-200px";
})
navOpenBtn.addEventListener('click',()=>{
    sideMenu.style.right = "0";
})
