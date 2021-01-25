
function addUser() {

user_name = docunment.getElementById("user_name").value;
localStorage.Storage.setItem("user_name" , user_name);
window.location = "Kwitter_room.html";
}