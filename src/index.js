const moment = require("moment");

const h1 = document.querySelector(".clock");
setInterval(() => {
    h1.innerHTML = moment().format("HH:mm:ss");
}, 1000);