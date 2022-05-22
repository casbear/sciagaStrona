var clicks = 1
function menu() {
    var target = document.getElementById("meni")
    if(clicks % 2 === 1){
        del()
        target.innerHTML += '<a href="index.html?userName=UwU&userPass=uwu" id="1"> HOME </a> <br> <a id="2" href="plan%20lekcji.html">PLAN_LEKCJI</a> <br> <a id="3" href="losowanie.html">LOSOWANIE</a><br><br><a id="4" href="historia.html">HISTORIA</a><br> <a id="5" href="EDB.html">EDB</a><br> <a id="6" href="geografia.html">GEOGRAFIA</a><br> <a id="7" href="chemia.html">CHEMIA</a><br> <a id="8" href="biologia.html">BIOLOGIA</a><br> <a id="9" href="hiszpan.html">HISZPAŃSKI</a><br> <a id="11" href="filozofja.html">FILOZOFIA</a>'
    }
    else
    {
        del()
        target.innerText += ' MENU '
    }
    clicks++;
}

function del() {
    var xd = document.getElementById("meni")
    xd.innerHTML = ''
}


