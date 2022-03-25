//click function so when user clicks on the image they're directed to the IMDB url of that project

var animbtn1 = document.getElementById("anim_projectLink0");
var animbtn2 = document.getElementById("anim_projectLink1");
var animbtn3 = document.getElementById("anim_projectLink2");
var vfxbtn1 = document.getElementById("vfx_projectLink0");
var vfxbtn2 = document.getElementById("vfx_projectLink1");
var vfxbtn3 = document.getElementById("vfx_projectLink2");

animbtn1.addEventListener("click", (event) => {
    event.preventDefault();
    window.open('https://www.imdb.com/title/tt10168312/');

})
animbtn2.addEventListener("click", (event) => {
    event.preventDefault();
    window.open('https://www.imdb.com/title/tt11792512/?ref_=fn_al_tt_1');

})
animbtn3.addEventListener("click", (event) => {
    event.preventDefault();
    window.open('https://www.imdb.com/title/tt8774798/?ref_=fn_al_tt_1');

})

vfxbtn1.addEventListener("click", (event) => {
    event.preventDefault();
    window.open('https://www.imdb.com/title/tt1072748/?ref_=nv_sr_srsg_3');

})
vfxbtn2.addEventListener("click", (event) => {
    event.preventDefault();
    window.open('https://www.imdb.com/title/tt3717252/?ref_=nv_sr_srsg_0');

})
vfxbtn3.addEventListener("click", (event) => {
    event.preventDefault();
    window.open('https://www.imdb.com/title/tt6499752/?ref_=nv_sr_srsg_0');

})