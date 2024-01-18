let email=document.getElementById("input1")
let password=document.getElementById("input2")
let btn=document.getElementById("btn")
let allbtn=document.querySelector(".allbtn")
function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         
     if(emailRegex.test(email.value)){
            return true
        }else{
            
            email.classList.add("border-solid", "border-4",  "border-red-600")
            return false
        }


}
function validatePassword(){
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if(passwordPattern.test(password.value)){
        return true
    }else{
        password.classList.add("border-solid", "border-4",  "border-red-600")
            return false
    }
}
allbtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(e.target.id==("bc")){
        validatePassword()
        validateEmail()
    }
    
})
 

