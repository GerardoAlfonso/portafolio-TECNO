
document.querySelectorAll(".modal-container img").forEach(item => {
    item.addEventListener("click", function(event){
        event.stopPropagation();
        this.parentNode.classList.add("active");
    })
})

document.querySelectorAll(".modal-container").forEach(item => {
    item.addEventListener("click", function(event){
        event.stopPropagation();
        this.classList.remove("active");
    })
})