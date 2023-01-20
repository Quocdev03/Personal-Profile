// Preloader
window.addEventListener("load", () => {
    document.querySelector(".wrapper").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none"
    }, 650)
})
// Toggle Navbar
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
})
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}
// About Section Tabs
const tabscontainer = document.querySelector(".about-tab");
aboutSection = document.querySelector(".about-section");
tabscontainer.addEventListener("click", (e) => {
    if (
        e.target.classList.contains("about-tab-item") &&
        !e.target.classList.contains("active")
    ) {
        tabscontainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".about-tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});
// Portfolio Item Details Popup
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scroll(0, 0)
        portfolioItemDetail(e.target.parentElement);
    }
});
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".wrapper").classList.toggle("fade-out");
}
document.querySelector(".portfolio-popup-close").addEventListener("click", togglePortfolioPopup);
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("portfolio-popup-inner")) {
        togglePortfolioPopup();
    }
})
function portfolioItemDetail(portfolioItem) {
    document.querySelector(".portfolio-popup-thumbnail img").src = portfolioItem.querySelector(".portfolio-item-thumbnail img").src;
    document.querySelector(".portfolio-popup-title").innerHTML = portfolioItem.querySelector(".portfolio-item-title").innerHTML;
    document.querySelector(".portfolio-popup-body").innerHTML = portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}
// Active Section
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        const hash = e.target.hash;
        if (e.target.classList.contains("nav-link")) {
            toggleNavbar();
        }
        else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);
    }
})

//kursor
new kursor({
    type: 4,
    color: '#fff',
})



