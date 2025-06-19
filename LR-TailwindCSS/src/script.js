const mainHtmlElement = document.getElementById('main');
let DarkmodeBtn = document.getElementById('DarkmodeBtn')

DarkmodeBtn.addEventListener("click", () => {
mainHtmlElement.classList.toggle('dark');
});


