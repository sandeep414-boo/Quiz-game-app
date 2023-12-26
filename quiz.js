
const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];
   




let score = 0;
let currentQueIndex =0;
let totalScore = quesJSON.length;

const questionEle = document.body.querySelector("#question");
const optionEle = document.querySelector("#options");
const scoreEle = document.querySelector("#score");
const nextEle = document.querySelector("#next");


nextEle.addEventListener("click", nextQuestion);

function showQuestion(){

  const {
    correctAnswer,
    options,
    question
  } = quesJSON[currentQueIndex];
  
  shuffleOpt(options);


  //question to display
  questionEle.textContent = "Question "+(currentQueIndex+1)+" of "+totalScore+" : "+question;

  //options to display
  options.forEach((opt) => {

    let btn = document.createElement("button");
    btn.textContent = opt;
    optionEle.appendChild(btn);

    btn.addEventListener("click", () => {
      if (checkStringsSame(opt, correctAnswer)) {
        score++;
      }
      else {
        score -= 0.25;
      }
      scoreEle.textContent = `Score : ${score} / ${totalScore}`;
      
      nextQuestion();
    })

  });

}
 
function nextQuestion(){
  currentQueIndex++;
  optionEle.textContent = '';
  if(currentQueIndex >= quesJSON.length){

    questionEle.textContent = "Quiz completed";
    nextEle.remove();
    
  }
  else{
    showQuestion(currentQueIndex);
  } 

}

showQuestion();

  scoreEle.textContent = `Score : ${score} / ${totalScore}`;

//check 2 strings are same
function checkStringsSame(str1, str2) {
  for (let i = 0; i < Math.min(str1.length, str2.length); i++) {
    if (str1[i] != str2[i]) {
      return false;
    }
  }
  return true;
}

//shuffle options

 function shuffleOpt(options){
  for(let i=options.length-1; i>=0; i--){
    let j= Math.floor(Math.random()*i+1);
    [ options[i], options[j]] = [
      options[j],
      options[i]
    ];
    
  }
  console.log(options);
 }





