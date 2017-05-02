var agreeA = document.querySelector('.agreeA');
var disagreeA = document.querySelector('.disagreeA');

var agreeB = document.querySelector('.agreeB');
var disagreeB = document.querySelector('.disagreeB');

var agreeC = document.querySelector('.agreeC');
var disagreeC = document.querySelector('.disagreeC');

var submitBtn = document.querySelector(".submitBtn");

var output = document.querySelector(".displayPersonality");

var Template = document.querySelector(".Template");
var compileTemp = Handlebars.compile(Template.innerHTML);

// container of all the persoanlitities
var personalityTypes = document.querySelector(".personalityTypes");

//List of all personalities
var Logician = document.querySelector(".Logician");


submitBtn.addEventListener("click", function() {
  if (agreeA.checked && agreeB.checked && agreeC.checked) {
    Logician.classList.remove("Logician");
  }
});
