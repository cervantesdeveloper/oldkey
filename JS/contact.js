import burger from "./modules/burger.js";
import formValidation from "./modules/form_validation.js";

const d = document;

d.addEventListener("DOMContentLoaded", e=>{
    burger(".burger", "times", ".nav-mobile", ".nav-mobile__link");
    formValidation("#contactForm", ".form *[required]", ".form__loader", ".form__response");
});