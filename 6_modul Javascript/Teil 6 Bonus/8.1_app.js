
function greet() {

    let name = document.getElementById('name').value;

    changeGreeting('1. Hallo Wurst ', 0, name);
    changeGreeting('2. Bonjur ', 2000, name);
    changeGreeting('3. Hola ', 4000, name);
    changeGreeting('4. Dawai ', 6000, name)
}

function changeGreeting(DerInhalt, DieZeit, ZZname) {
    setTimeout(function () {
        document.getElementById('greeting').classList.add('animate');
        document.getElementById('greeting').innerHTML = DerInhalt + ZZname;

        setTimeout(function () {
            document.getElementById('greeting').classList.remove('animate');
        }, 1000);
    }, DieZeit);
}

