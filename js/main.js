window.onload = function () {
    CKEDITOR.replace( 'content' );

    var d = new Date();
    var date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
    document.getElementById("date").placeholder = date;
};
