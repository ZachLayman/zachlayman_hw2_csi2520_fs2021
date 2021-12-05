const questionHolder = document.getElementById('question');
const answers = document.getElementById('answers');
const inputElement = document.getElementById('answer-area')

// Clear input after hitting enter
inputElement.addEventListener('change', (event) => {
  const currentAns = event.target.value.toUpperCase();
  isCorrect(event, currentAns)
  nextQuestion(event);
})

var totalScore = 0;
var questionNumber = 1;

// Question one needs to be pre-loaded for clear function to work properly.
// Evaluate question before clearing. 

const questions = {
      1: {
      question: "How many fingers are on the foot of a man?",
      answers: {
        a: "One",
        b: "Five",
        c: "Zero"
       },
      correctAnswer: "c" 
    
    },
      2: {
      question: "What can be broken but is never held?",
      answers: {
        a: "A sea urchin",
        b: "A promise",
        c: "Money"
      },
      correctAnswer: "b"
     },
      3: {
        question: "Who invented Javascript?",
        answers: {
          a: "Brandan Eich",
          b: "Bill Gates",
          c: "Mark Zuckerburg"
        },
        correctAnswer: "a"
      },
      4: {
        question: "Who has the most points in NBA history?",
        answers: {
          a: "Michael Jordan",
          b: "Wilt Chaimberland",
          c: "Kareem Abdul-Jabaar"
        },
        correctAnswer: "c"
      },
      5: {
        question: "What was banned in Indonesia for “stimulating passion?",
        answers: {
          a: "Hula hoops",
          b: "Crocs",
          c: "Fedoras"
        },
        correctAnswer: "a"
      },
      6: {
        question: "How many hours a day does a Koala sleep?",
        answers: {
          a: "8",
          b: "23",
          c: "20"
        },
        correctAnswer: "c"
      }
}


// Initialize first Question:
questionHolder.innerHTML = questions[questionNumber]['question']
var firstAnswers = questions[questionNumber]['answers']
for (const ans in firstAnswers) {
  const answer = document.createElement('li')
  answer.innerHTML = `${ans.toUpperCase()} - ${firstAnswers[ans]}`
  answers.appendChild(answer)
}





function clearContent(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

function isCorrect(event, currentAns) {
  let correctAnswer = questions[questionNumber]['correctAnswer'].toUpperCase()
  if (correctAnswer === currentAns) {
    totalScore += 10
  }
}


function nextQuestion(event) {
  clearContent('question');
  clearContent('answers');
  questionNumber += 1
  // If end of questions reached:
  if (questionNumber > 6) {
    questionHolder.innerHTML = `Your final score is: ${totalScore}`
  } else {
    // Add new question:
  questionHolder.innerHTML = questions[questionNumber]['question']
  
  // Loop through answers, create a element for each answer, add it to answers container. 
  const totalAnswers = questions[questionNumber]['answers']
  for (const ans in totalAnswers) {
    const answer = document.createElement('li')
    answer.classList.add('choices')
    answer.innerHTML = `${ans.toUpperCase()} - ${totalAnswers[ans]}`
    answers.appendChild(answer)
  }
  }

  

  

 
  
}