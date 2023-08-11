const header = document.querySelector("header");
const sectionOne = document.querySelector(".perk");
const sectionTwo = document.querySelector(".perk")
const firstspan = document.querySelector(".firstspan");
const secondspan = document.querySelector(".secondspan");
const ceccato = document.querySelector(".ceccato2");
const thirdspan = document.querySelector(".thirdspan");
const activitie = document.querySelector(".activities");
const fourthspan = document.querySelector(".fourthspan")
const compress = document.querySelector(".compressed")
const italic = document.querySelector("i");
const official = document.querySelector(".official");
const sectionOneOptions = {
  rootMargin: "-50px 0px 0px 0px"
};
const ectionTwoOptions = {
  rootMargin: "-100px 0px 0px 0px"
};
const sectionTwoOptions = {
  rootMargin: "100px 0px 200px 0px"
};
const secondspanOptions = {
  rootMargin: "100px 0px 100px 0px"
};
thirdspanOptions = {
  rootMargin: "100px 0px 80px 0px"
};
fourthspanOptions = {
  rootMargin: "100px 0px 55px 0px"
};


const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) { 
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("title1")
    } else {
      header.classList.remove("title1")
    }
  });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);


const sectionTwoObserver = new IntersectionObserver(function(
  entries,
  sectionTwoObserver
) { 
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      italic.classList.add("title2")
    } else {
      italic.classList.remove("title2")
    }
  });
}, ectionTwoOptions);

sectionTwoObserver.observe(sectionTwo);


const firstspanObserver = new IntersectionObserver(function(
  entries,
  firstspanObserver
) { 
  entries.forEach(official => {
    if (official.isIntersecting) {
      firstspan.style.opacity = "0";
      firstspan.style.transitionDuration= "0.1s"
    } else  {
      firstspan.style.opacity = "1";
      firstspan.style.transitionDuration= "0.1s"
    }
  });
}, sectionTwoOptions);

firstspanObserver.observe(official);

const secondspanObserver = new IntersectionObserver(function(
  entries,
  secondspanObserver
) { 
  entries.forEach(ceccato => {
    if (ceccato.isIntersecting) {
      secondspan.style.opacity = "0";
      secondspan.style.transitionDuration= "0.1s"
    } else  {
      secondspan.style.opacity = "1";
      secondspan.style.transitionDuration= "0.1s"
    }
  });
}, secondspanOptions);

secondspanObserver.observe(ceccato);


const thirdspanObserver = new IntersectionObserver(function(
  entries,
  thirdspanObserver
) { 
  entries.forEach(activitie => {
    if (activitie.isIntersecting) {
      thirdspan.style.opacity = "0";
      thirdspan.style.transitionDuration= "0.1s"
    } else  {
      thirdspan.style.opacity = "1";
      thirdspan.style.transitionDuration= "0.1s"
    }
  });
}, thirdspanOptions);

thirdspanObserver.observe(activitie);

const fourthspanObserver = new IntersectionObserver(function(
  entries,
  fourthspanObserver
) { 
  entries.forEach(compress => {
    if (compress.isIntersecting) {
      fourthspan.style.opacity = "0";
      fourthspan.style.transitionDuration= "0.1s"
    } else  {
      fourthspan.style.opacity = "1";
      fourthspan.style.transitionDuration= "0.1s"
    }
  });
}, fourthspanOptions);

fourthspanObserver.observe(compress);