// =========================================
// TOBISCO IGNITE
// PERSONAL BRAND WEBSITE
// =========================================

const profile = {
    brand: "Tobisco ignite",
    name: "Olarewaju Tobiloba Emmanuel",
    phone: "08039849390",
    email: "tobilobaolarewaju27@gmail.com"
};


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

}


// =========================================
// CLOSE MOBILE MENU AFTER CLICKING A LINK
// =========================================

const navLinks = document.querySelectorAll("#navMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

    });

});


// =========================================
// CURRENT YEAR
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
