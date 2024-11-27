const tabLinks = document.querySelectorAll(".tabLinks")
const tabContents = document.querySelectorAll(".tabContents")
const navCloseBtn = document.querySelector(".fa-xmark")
const navOpenBtn = document.querySelector(".fa-bars")
const sideMenu = document.querySelector("#sideMenu")

    
   
// Function to open a tab
function openTab(tabName, clickedTab) {
    // Remove active classes from all links and contents
    tabLinks.forEach((tabLink) => {
        tabLink.classList.remove("activeLink");
    });
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove("activeTab");
    });

    // Add active class to the clicked tab and corresponding content
    clickedTab.classList.add("activeLink");
    document.getElementById(tabName).classList.add("activeTab");
}

// Add event listeners to each tab link
tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", () => {
        const tabName = tabLink.getAttribute("data-tab"); // Get the tab name from a custom attribute
        openTab(tabName, tabLink);
    });
});


//Add EventListner to close sidemenu
navCloseBtn.addEventListener('click',()=>{
    sideMenu.style.right = "-200px";
})

//Add EventListner to open sidemenu
navOpenBtn.addEventListener('click',()=>{
    sideMenu.style.right = "0";
})
