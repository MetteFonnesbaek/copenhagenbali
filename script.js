/* BURGERMENU */
const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});


/* DROPDOWN TIL BOOKING */

//gør sådan at man kan trykke på de forskellige elementer under dropdowns
function selectOption(option) {
    document.getElementById('dropbtnvenue').innerText = option;
    document.getElementById('dropdownvenue-content').style.display = 'none';
}

function selectPeople(option) {
    document.getElementById('dropbtnpeople').innerText = option;
    document.getElementById('dropdownpeople-content').style.display = 'none';
}

function selectTime(option) {
    document.getElementById('dropbtntime').innerText = option;
    document.getElementById('dropdowntime-content').style.display = 'none';
}

// Add event listeners viser dropdown når man trykker på "click here"
document.getElementById('dropbtnvenue').addEventListener('click', function () {
    document.getElementById('dropdownvenue-content').style.display = 'block';
});

document.getElementById('dropbtnpeople').addEventListener('click', function () {
    document.getElementById('dropdownpeople-content').style.display = 'block';
});

document.getElementById('dropbtntime').addEventListener('click', function () {
    document.getElementById('dropdowntime-content').style.display = 'block';
});

// Fjerner dropdown menuen når man har valgt en
window.onclick = function (event) {
    if (!event.target.matches('.dropbtnvenue')) {
        document.getElementById('dropdownvenue-content').style.display = 'none';
    }
    if (!event.target.matches('.dropbtnpeople')) {
        document.getElementById('dropdownpeople-content').style.display = 'none';
    }
    if (!event.target.matches('.dropbtntime')) {
        document.getElementById('dropdowntime-content').style.display = 'none';
    }
}


