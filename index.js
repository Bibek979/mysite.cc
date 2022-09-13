var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');

var id = null;
const heroAnimation = () => {
    var posFirstName = 0;
    var posLastName = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame(){
        if(posFirstName == 440 || posLastName == 440){
            clearInterval(id);
        }
        else{
            posFirstName++;
            posLastName++;
            firstname.style.left = posFirstName + "px";
            lastname.style.right = posLastName + "px";
        }
    }

}
window.onload = heroAnimation();