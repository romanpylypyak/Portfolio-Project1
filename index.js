let body = document.querySelector("body")

document.querySelectorAll(".modal-show").forEach(function(element) {
    element.onclick = show;
    element.unselectable = "on"
});


document.querySelectorAll("button[type=button]").forEach(function(element) {
    element.onclick = close;
});

document.querySelectorAll(".modal-wrapper").forEach(function(element) {
    element.onclick = close
});

function show() {
    let modalId = this.dataset.modal
    document.querySelector(modalId).classList.remove("hide")
    body.classList.add("modal-open")
    document.onkeydown = function(e) {
        if (e.keyCode == 27) close()
    }

}

document.querySelector(".modal-dialog").onclick = function() {
    event.stopPropagation()
}

function close() {
    document.querySelectorAll('.modal-wrapper').forEach(function(element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
    body.classList.remove("modal-open")
}
