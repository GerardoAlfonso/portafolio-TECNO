
// add class active to show modal with img
document.querySelectorAll(".modal-container img").forEach(item => {
    item.addEventListener("click", function(event){
        event.stopPropagation();
        this.parentNode.classList.add("active");
    })
})

// delete class active to hide modal
document.querySelectorAll(".modal-container").forEach(item => {
    item.addEventListener("click", function(event){
        event.stopPropagation();
        this.classList.remove("active");
    })
})


// button for show Activities 
document.querySelectorAll(".modal-container img").forEach(item => {
    item.addEventListener("click", function(event){
        event.stopPropagation();
        this.parentNode.classList.add("active");
    })
})

// show items of Class exercise
document.getElementById("AC").addEventListener("click", function(event){
    event.stopPropagation();
    this.parentNode.parentNode.classList.add("active");
    document.getElementById("class").classList.remove("active");

    document.getElementById("back").parentNode.parentNode.classList.remove("active");
})


// show items of book exercise
document.getElementById("AL").addEventListener("click", function(event){
    event.stopPropagation();
    this.parentNode.parentNode.classList.add("active");
    document.getElementById("book").classList.remove("active");

    // show button Back
    document.getElementById("back").parentNode.parentNode.classList.remove("active");
})

// back list class or book exercise
document.getElementById("back").addEventListener("click", function(event){
    event.stopPropagation();
    this.parentNode.parentNode.classList.add("active");
    document.getElementById("class").classList.add("active");
    document.getElementById("book").classList.add("active");

    // show button Back
    document.getElementById("AC").parentNode.parentNode.classList.remove("active");

})


// show items of book exercise
document.getElementById("AL").addEventListener("click", function(event){
    event.stopPropagation();
    
})