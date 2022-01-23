let act = document.getElementById("menu");
let users = document.getElementById("users-span");
let buy = document.getElementById("buy-span");
let menu = document.querySelector(".menu");
let container = document.querySelector(".content")

async function action() {
    users.classList.toggle('d-none');
    buy.classList.toggle('d-none');
    
    if(!act.checked && container.style.flex != 'column')
    {
        menu.style.flex = '10%';
    } else {
        menu.style.flex = '0';
    }
}
