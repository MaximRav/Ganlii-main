function openLoginPopup() {
    document.getElementById("loginOverlay").style.display = "block";
}

function closeLoginPopup() {
    document.getElementById("loginOverlay").style.display = "none";
}

function openRegistrationPopup() {
    closeLoginPopup();
    document.getElementById("registrationOverlay").style.display = "block";
}

function closeRegistrationPopup() {
    document.getElementById("registrationOverlay").style.display = "none";
}

function openForgetPopup() {
    closeLoginPopup();
    document.getElementById("forgetpassOverlay").style.display = "block";
}

function closeforgePopup() {
    document.getElementById("forgetpassOverlay").style.display = "none";
}

window.onclick = function (event) {
    var loginOverlay = document.getElementById("loginOverlay");
    var registrationOverlay = document.getElementById("registrationOverlay");
    var forgetpassOverlay = document.getElementById("forgetpassOverlay");

    if (event.target === loginOverlay) {
        closeLoginPopup();
    }

    if (event.target === registrationOverlay) {
        closeRegistrationPopup();
    }

    if (event.target === forgetpassOverlay) {
        closeforgePopup();
    }
};
function toggleHover(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.toggle("hovered");
}

function teacher() {
    toggleHover("teacherBot");
    removeHover("parentsBot");
}

function parents() {
    toggleHover("parentsBot");
    removeHover("teacherBot");
}

function removeHover(buttonId) {
    var button = document.getElementById(buttonId);
    button.classList.remove("hovered");
}

