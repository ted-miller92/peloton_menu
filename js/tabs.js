// adapted from user Maheer Ali on Stack Overflow
// originally posted March 31, 2019
// https://stackoverflow.com/questions/55439746/vanilla-javascript-show-tab-and-hide-others

let tabs = Array.from(document.querySelectorAll(".menuButton"));
let contents = Array.from(document.querySelectorAll(".menuImg"));

const handleClick = (e, btn) => {
    e.preventDefault();
    tabs.forEach(node => {
        node.classList.remove("active-btn");
    });
    e.currentTarget.classList.add("active-btn");
    contents.forEach(x => x.classList.remove("active"));
    btn.classList.add("active");
}

tabs.forEach((node, i) => {
    node.addEventListener("click", (e) => handleClick(e, contents[i]));
});