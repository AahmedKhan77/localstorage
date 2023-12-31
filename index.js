let signupbtn = document.getElementById("signupbtn");


function Signup(event) {
    event.preventDefault();
    var Name = document.getElementById("name").value
    console.log(Name)
    var Email = document.getElementById("email").value
    console.log(Email)
    var Pass = document.getElementById("password").value
    console.log(Pass)

    let alluser=[];

    let userdata = {
        name:Name,
        email:Email,
        pass:Pass,
         
    }
    console.log(userdata)
    alluser.push(userdata)
    let jsonData = JSON.stringify(alluser)

   localStorage.setItem('alluser',jsonData)
    console.log(alluser) 
    

}
