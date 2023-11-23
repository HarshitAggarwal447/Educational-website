const div_p1 = document.querySelector("#html");
const div_p2 = document.querySelector("#css");
const div_p3 = document.querySelector("#js");
const p_html = document.querySelector(".display_html");
const p_css = document.querySelector(".display_css");
const p_js = document.querySelector(".display_js");

div_p1.addEventListener('click', () => {
    p_html.style.display = "flex";
    p_css.style.display = "none";
    p_js.style.display = "none";
    div_p1.style.background = "var(--transparent)";
    div_p1.style.border = "1px solid var(--color-white)";
    div_p2.style.border = "none";
    div_p2.style.background = "var(--color-danger)";
    div_p3.style.border = "none";
    div_p3.style.background = "var(--color-danger)";
})
div_p2.addEventListener('click', () => {
    p_css.style.display = "grid";
    p_html.style.display = "none";
    p_js.style.display = "none";
    div_p2.style.background = "var(--transparent)";
    div_p2.style.border = "1px solid var(--color-white)";
    div_p1.style.border = "none";
    div_p1.style.background = "var(--color-danger)";
    div_p3.style.border = "none";
    div_p3.style.background = "var(--color-danger)";
})
div_p3.addEventListener('click', () => {
    p_js.style.display = "grid";
    p_css.style.display = "none";
    p_html.style.display = "none";
    div_p3.style.background = "var(--transparent)";
    div_p3.style.border = "1px solid var(--color-white)";
    div_p1.style.border = "none";
    div_p1.style.background = "var(--color-danger)";
    div_p2.style.border = "none";
    div_p2.style.background = "var(--color-danger)";
})