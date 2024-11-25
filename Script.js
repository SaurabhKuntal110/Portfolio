const tabLinks = document.getElementsByClassName("tabLinks")
const tabContents = document.getElementsByClassName("tabContents")

function openTab(tabName){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("activeLink")
    }
    for(let tabContent of tabContents){
        tabContent.classList.remove("activeTab")
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabName).classList.add("activeTab");
}