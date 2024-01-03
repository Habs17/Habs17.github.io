function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        Email_Id: document.getElementById("email_id").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_o8xl6sx", "template_dwwjjjs", params).then(function (res){
        alert("Thank you!");
    })
}
