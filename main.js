    var coll = document.querySelectorAll("#myBtn");
    coll.forEach(item => {
        item.addEventListener('click', (e) => {
            const dots = item.parentElement.querySelector('#dots');
            const par = item.parentElement.querySelector('#more');
            const btnText = item.parentElement.querySelector("#myBtn");
            if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "⌄"; 
                btnText.style.display = "inline"; 
                par.style.display = "none";
            } else {
                dots.style.display = "none";
                btnText.innerHTML = "⌃";
                btnText.style.display = "block"; 
                par.style.display = "inline";
            }   
        });
    });