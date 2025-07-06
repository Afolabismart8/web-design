
function Clearform()  {
    document.getElementById( "ContactForm").reset();
}

function hidepTags(){
    let pTags = document.getElementsByTagName("p");
    for (items of pTags) {
        //items.style.visibility = "hidden"; // removes element ,leaves the spaces
        items.style.display = "none"; // removes element and space
    }
}

$("#jqueryBtn").click(function(){
    $("p").hide();
})


$(function() {
    var page = ['home', 'about_us', 'contact_us'];
    var pathname = window.location.pathname;

    $(".nav-link").each(function(item){
        if(pathname.includes(page[item])) {
            $(this).addClass("active");
            $(this).atrr("aria-current", "page");
        }
    })
})

