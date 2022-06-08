const btn=document.getElementById("btn");

btn.addEventListener("change", function (e) {
        document.body.classList.toggle("dark", e.target.checked);
    })
