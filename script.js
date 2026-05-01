var tablinks=  document.getElementsByClassName("tab-links");
var tabcontents=  document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
     event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
const btn = document.getElementById("menu-btn");
const sidebar = document.getElementById("sidebar");

btn.onclick = () => {
  sidebar.classList.toggle("active");
};
