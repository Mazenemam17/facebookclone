function SendMail(){
    event.preventDefault()
    let x = document.getElementById("fullname").value;
    let y = document.getElementById("email_id").value;
    let z = document.getElementById("message").value;
    var params = {
        from_name : x,
        email_id : y,
        message : z,
    }
    emailjs.send("service_xwzsovk", "template_cpnl9xh", params).then(function (res){
        if( res.status == 200 ){  
            alert("success! ")
            window.location.assign("http://127.0.0.1:5500/login.html")
        }else{
            alert("error")
        }
    })
}