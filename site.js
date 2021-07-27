// function logItem(e) {
//     const item = document.querySelector(`[data-id=${e.target.id}]`);
//     item.toggleAttribute('hidden');
// }

// const chapters = document.querySelectorAll('details');
// chapters.forEach((chapter) => {
//     chapter.addEventListener('toggle', logItem);
// });

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// function toggleDropdown() {
//     document.getElementById("contact-section").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//         var dropdowns = document.getElementsByClassName("dropdown-content");
//         var i;
//         for (i = 0; i < dropdowns.length; i++) {
//             var openDropdown = dropdowns[i];
//             if (openDropdown.classList.contains('show')) {
//                 openDropdown.classList.remove('show');
//             }
//         }
//     }
// }

window.onscroll = function() { myFunction() };

var navbar = document.getElementById("navbar");
var navbar2 = document.getElementById("navbar2");
var sticky = navbar.offsetTop;
var sticky2 = navbar2.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }

    if (window.pageYOffset >= sticky2 - 75) {
        navbar2.classList.add("sticky2")
            // navbar2.classList.remove("sticky2");

    } else {
        navbar2.classList.remove("sticky2");
        // navbar2.classList.add("unsticky")
    }
}