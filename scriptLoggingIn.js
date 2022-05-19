console.log(document.getElementById('userName'));   

function loginFn(event) {
    event.preventDeafult();


    var userName = document.getElementById('userName');
    var userPass = document.getElementById('userPass');


    if(userName === 'UwU' && userPass === 'uwu') {
        alert('Logged in');
    } 
    else {
        alert('Incorrect login and/or password');    
    }
}
