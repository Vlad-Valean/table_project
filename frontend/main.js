let act = document.getElementById("menu");
let users = document.getElementById("users-span");
let buy = document.getElementById("buy-span");
let menu = document.querySelector(".menu");
let container = document.querySelector(".content")

async function action() {
    if(act.checked)
    {
        menu.style.flex = '0';
        users.style.display = 'none';
        buy.style.display = 'none';
    } else {
        if(container.style.flex != 'column') {
            menu.style.flex = '10%';
        }
        await new Promise(r => setTimeout(r, 250));
        users.style.display = 'initial';
        buy.style.display = 'initial';
    }
}
