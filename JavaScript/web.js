function Clearform() {
    document.getElementById( "ContactForm ").reset();
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
