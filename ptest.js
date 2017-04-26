var agreeA = document.querySelector('.agreeA');
var disagreeA = document.querySelector('.disagreeA');

var agreeB = document.querySelector('.agreeB');
var disagreeB = document.querySelector('.disagreeB');

var agreeC = document.querySelector('.agreeC');
var disagreeC = document.querySelector('.disagreeC');

var submitBtn = document.querySelector(".submitBtn");

var output = document.querySelector(".displayPersonality");

var Template document.querySelector(".Template");
var compileTemp = Handlebars.compile(Template.innerHTML);


var personalities = ["Logician:", "Architech:", "Commander:", "Debater:", "Advocate:", "Mediator:", "Protagonist:",
  "Executive:"
];

submitBtn.addEventListener("click", function() {
  var persona = [];
  for (var i = 0; i < personalities.length; i++) {
    var results =  personalities[i];
    persona.push(results);
  }
  // output.innerHTML = "YOUR PERSONALITY TYPE IS: " + results;
  output.innerHTML = compileTemp({
   results: persona
 });
});
