start();    

function start(){
    var date = new Date();
    var day = date.getDay();


    document.getElementById('selectedDay').value = day;
    changePlan();
}


function changePlan() {
    var selectedDay = document.getElementById('selectedDay').value - 1;
    var selector = 'list-' + selectedDay;
    var plan = document.getElementsByClassName(selector)[0];

    turnOffPlans();
    plan.style.display = "block";
    
}

function turnOffPlans() {
    var selectors = ['list-0','list-1','list-2','list-3','list-4'];


    selectors.forEach(function(selector){
        var plan = document.getElementsByClassName(selector)[0];

        plan.style.display = "none";
    
    });
}

function setClock() {
    {
    var d = new Date(); 
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();
    var dayOfTheWeek = d.getDay();
    var days = ['Niedziela - WEEKEND!','Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota - WEEKEND!']
    } //Variables
    console.log(dayOfTheWeek)

    var date = document.getElementById('date');

    var NameOfDay = days[dayOfTheWeek]
    date.innerHTML = NameOfDay + " - " + day + "/" + month + "/" + year;    

    {
        
    }//lesson or break

    {
    if (s < 10) {
        s = "0" + s;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (h < 10) {
        h = "0" + h;
    }        
    } //making 0 before times

    var time = h + ':' + m + ':' + s;

    var clock = document.getElementById('clock');
    clock.innerHTML = time;
}


setInterval(setClock, 1000);