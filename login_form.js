function validateForm() {
    var x = document.getElementById("username").value;
    var y = document.getElementById("pw").value;
    if(x == "" || y == "") {
        alert("Enter both username and password")
    }
    
    else if(y.length<6 || y.length>12) {
        alert('password length must be 6 to 12 characters')
    }
    else if (!(x[0] == "_" || x[0] == "@" || isNaN(x[0]))) {
        alert('username should not start with "_", "@", number')
    } 
    
}