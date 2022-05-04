const toggleIcon = document.querySelector(".slide-icon");
const toggleContainer = document.querySelector(".toggle-container");
const card = document.querySelector(".navigation-bar");
const body = document.querySelector(".light-theme");
const profileContainer = document.querySelector(".profile-container");
const todayOffer = document.querySelector(".today-offer-container");
const soonOffer = document.querySelector(".soon-offer-container");
const aboutMe = document.querySelector(".about-me");
const educationalBackground = document.querySelector(".educational-background");
const projectHeading = document.querySelector(".project-heading");
const projectContainer1 = document.querySelector(".project-container-1");
const projectContainer2 = document.querySelector(".project-container-2");
const projectContainer3 = document.querySelector(".project-container-3");
const profilePicture = document.querySelector(".profile-picture");
const fullname = document.querySelector(".fullname");
const position = document.querySelector(".position");
const contact1 = document.querySelector(".contact-1");
const contact2 = document.querySelector(".contact-2");
const contact3 = document.querySelector(".contact-3");
const introduction = document.querySelector(".profile-introduction-container");
const titleHeading1 = document.querySelector(".title-heading-1");
const titleHeading2 = document.querySelector(".title-heading-2");
const titleHeading3 = document.querySelector(".title-heading-3");
const titleHeading4 = document.querySelector(".title-heading-4");
const titleProject1 = document.querySelector(".title-project-1");
const titleProject2 = document.querySelector(".title-project-2");
const titleProject3 = document.querySelector(".title-project-3");
const projectImage1 = document.querySelector(".project-image-1");
const projectImage2 = document.querySelector(".project-image-2");
const projectImage3 = document.querySelector(".project-image-3");

toggleIcon.addEventListener("click", darkMode);

let mode = "light";

function darkMode() {
        toggleIcon.classList.toggle("slide-icon-dark");
        toggleIcon.classList.toggle("slide-icon");

        toggleContainer.classList.toggle("toggle-container-dark");
        toggleContainer.classList.toggle("toggle-container");

        card.classList.toggle("navigation-bar-dark");
        card.classList.toggle("navigation-bar");

        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");

        profileContainer.classList.toggle("profile-container-dark");
        todayOffer.classList.toggle("today-offer-container-dark");
        soonOffer.classList.toggle("soon-offer-container-dark");
        aboutMe.classList.toggle("about-me-dark");
        educationalBackground.classList.toggle("educational-background-dark");
        projectHeading.classList.toggle("project-heading-dark");
        projectContainer1.classList.toggle("project-container-1-dark");
        projectContainer2.classList.toggle("project-container-2-dark");
        projectContainer3.classList.toggle("project-container-3-dark");

        profilePicture.classList.toggle("profile-picture-dark");
        fullname.classList.toggle("fullname-dark");
        position.classList.toggle("position-dark");
        contact1.classList.toggle("contact-dark");
        contact2.classList.toggle("contact-dark");
        contact3.classList.toggle("contact-dark");
        introduction.classList.toggle("profile-introduction-container-dark");
        titleHeading1.classList.toggle("title-heading-1-dark");
        titleHeading2.classList.toggle("title-heading-2-dark");
        titleHeading3.classList.toggle("title-heading-3-dark");
        titleHeading4.classList.toggle("title-heading-4-dark");
        projectHeading.classList.toggle("project-heading-1-dark");
        titleProject1.classList.toggle("title-project-1-dark");
        titleProject2.classList.toggle("title-project-2-dark");
        titleProject3.classList.toggle("title-project-3-dark");
        projectImage1.classList.toggle("project-image-1-dark");
        projectImage2.classList.toggle("project-image-2-dark");
        projectImage3.classList.toggle("project-image-3-dark");
}