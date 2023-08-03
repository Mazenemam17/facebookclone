function SendMail(){
    var params = {
        from_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_xwzsovk", "template_cpnl9xh", params).then(function (res){
        alert("success! " + res.status);
    })
}