var galleryImages = document.getElementById("imagenesData");
galleryImages.addEventListener("click", function (event) {
    if (event.target.tagName == "IMG") {
        var divGeneral = this.parentNode;
        var divBack = document.createElement("div");
        var divFondito = document.createElement("div");
        var close = document.createElement("img");
        var imagenDiv = document.createElement("img");
        var parr = document.createElement("p");
        var content = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deserunt nostrum quisquam perferendis corrupti reiciendis maiores temporibus quaerat! Corrupti fuga laudantium eligendi delectus voluptates quam optio dolore maiores alias magnam?");

        parr.appendChild(content);
        imagenDiv.setAttribute("class", "BigImage");
        divFondito.style.display = "block";
        divFondito.setAttribute("class", "fondito");
        imagenDiv.src = event.target.src;

        close.src = "assets/images/close.png";
        close.setAttribute("class", "closeIt");
        close.addEventListener("click", function () {
            divFondito.style.display = "none";
        });

        divBack.appendChild(imagenDiv);
        divBack.appendChild(parr);
        divFondito.appendChild(close);
        divFondito.appendChild(divBack);
        divGeneral.appendChild(divFondito);
    }
});

var send = document.getElementById("send");
send.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

});