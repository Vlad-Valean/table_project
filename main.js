let act = document.getElementById("menu");
let users = document.getElementById("users-span");
let buy = document.getElementById("buy-span");
let menu = document.querySelector(".menu");
let container = document.querySelector(".content");

let val = 0;
act.style.transition = 'transform 0.5s ease-in-out';
menu.style.transition = 'flex 0.5s ease-in-out';
users.style.transition = 'all 1s ease-in-out';
buy.style.transition = 'all 1s ease-in-out';
async function action() {
    if(val == 0)
    {
        val++;
        act.style.transform = 'rotate(90deg)';
        menu.style.flex = '0';
        users.style.display = 'none';
        buy.style.display = 'none';
    } else {
        val--;
        act.style.transform = 'initial';
        if(container.style.flex != 'column') {
            menu.style.flex = '3';
        }
        await new Promise(r => setTimeout(r, 250));
        users.style.display = 'initial';
        buy.style.display = 'initial';
    }
}
