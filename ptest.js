var agreeA = document.querySelector('.agreeA');
var disagreeA = document.querySelector('.disagreeA');

var agreeB = document.querySelector('.agreeB');
var disagreeB = document.querySelector('.disagreeB');

var agreeC = document.querySelector('.agreeC');
var disagreeC = document.querySelector('.disagreeC');

var submitBtn = document.querySelector(".submitBtn");

var output = document.querySelector(".displayPersonality");

// container of all the persoanlitities
var personalityTypes = document.querySelector(".personalityTypes");

//Create function for all personalities
function isLogician(){
  // AAA
  if (agreeA.checked && agreeB.checked && agreeC.checked){
    return 'Logician';
  }
  return '';
}

function isArchitect(){
  // AAD
  if (agreeA.checked && agreeB.checked && !agreeC.checked){
    return 'Architect';
  }
  return '';
}
function isCommander(){
  // ADA
  if (agreeA.checked && !agreeB.checked && agreeC.checked){
    return 'Commander';
  }
  return '';
}
function isDebater(){
  // ADD
  if (agreeA.checked && !agreeB.checked && !agreeC.checked){
    return 'Debater';
  }
  return '';
}
function isAdvocate(){
  // DDD
  if (disagreeA.checked && disagreeB.checked && disagreeC.checked){
    return 'Advocate';
  }
  return '';
}
function isMediator(){
  // DDA
  if (!agreeA.checked && !agreeB.checked && agreeC.checked){
    return 'Mediator';
  }
  return '';
}
function isProtagonist(){
  // DAD
  if (!agreeA.checked && agreeB.checked && !agreeC.checked){
    return 'Protagonist';
  }
  return '';
}
function isExecutive(){
  // DAA
  if (!agreeA.checked && !agreeB.checked && agreeC.checked){
    return 'Executive';
  }
  return '';
}

// add any new personalty checking functions in here
var typeFuncs = [isLogician, isArchitect, isCommander, isDebater, isAdvocate, isMediator,
 isProtagonist, isExecutive];

function getType(){
  var type = '';
  // loop through all the available functions
  for (var i = 0; i < typeFuncs.length; i++) {
    var typeFunc = typeFuncs[i]
    // call the current function
    var typeStr = typeFunc();
    //if it didn't return a blank string you know it found a match
    if (typeStr !== ''){
      type = typeStr;
      // if there was a match it should break out of the loop
      break;
    }
  }
  // return the type found
  return type;
}
submitBtn.addEventListener("click", function() {

  var personalities = document.querySelectorAll('.personality')
  for (var i = 0; i < personalities.length; i++) {
    var personality = personalities[i];
    personality.classList.remove('show');
  }


  var theType = getType();
  var elem = document.querySelector("." + theType);


  elem.classList.add('show');


});
