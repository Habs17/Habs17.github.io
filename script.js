function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_o8xl6sx", "template_dwwjjjs", params).then(function (res){
        alert("Thank you!");
    })
}