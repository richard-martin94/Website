function copyAddress()
{
    // source https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

    var copyText = document.getElementById("emailAddress");

    copyText.select();

    document.execCommand("copy");

    alert("Email address coppied to clipboard!");
}

// source:https://www.youtube.com/watch?v=x0YnVwAuNQI
$(document).ready(function(){
    var scrollLink = $('.scroll');

    scrollLink.click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop: $(this.hash).offset().top}, 900 );
    });
});