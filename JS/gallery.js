import burger from "./modules/burger.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    burger(".burger", "times", ".nav-mobile", ".nav-mobile__link");
});
