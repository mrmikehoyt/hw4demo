"use strict";


//arrays below line
let questions = ['What does the concept of diversity in the workplace refer to?', 'The UK Equality Act was promulgated in', 'In which country was the Black Economic Empowerment (BEE) Programme launched in 2001:','The ‘Liberal Approach’ to Equal Opportunities advocates:']
let wrongAnswers = ['Physical differences among employees','Historical differences among groups','Managerial difference among employees', '1970', '2000', '2005', 'Japan', 'India', 'China', 'Positive discrimination', 'The quota system', 'Policies concerned with the specific needs of traditionally disadvantaged groups'];
let correctAnswers = ['Social differences among employees','2010','South Africa','The possibility for individuals to compete for social rewards without constraints'];
//arrays above line

//below used for declaring where tags are for buttons
let generateBtn6 = document.querySelector("#generate");
let GenerateBtn2 = document.querySelector("#generate2");
let GenerateBtn3 = document.querySelector("#generate3");
let GenerateBtn4 = document.querySelector("#generate4");
let GenerateBtn5 = document.querySelector("#generate5");
let quizbox=document.getElementById("body");
let answerbox=document.getElementById("answerbox");
//above used for declaring where tags are for buttons
//below used for removing (hiding) answer buttons from main page
document.getElementById("generate2").style.visibility = "hidden";
document.getElementById("generate3").style.visibility = "hidden";
document.getElementById("generate4").style.visibility = "hidden";
document.getElementById("generate5").style.visibility = "hidden";
      //function loads highscore page when game over
      function loadHighScore(){
            let url= "page2.html"; 
            window.location = url; 
                  let generateBtn6=document.querySelector("#generate");
                  generateBtn6.addEventListener("click", function  (){
                  document.getElementById("generate").style.visibility = "visible";
                  document.getElementById("generate2").style.visibility = "hidden";
                  document.getElementById("generate3").style.visibility = "hidden";
                  document.getElementById("generate4").style.visibility = "hidden";
                  document.getElementById("generate5").style.visibility = "hidden";
                  let quizbox=document.getElementById("body");
let answerbox=document.getElementById("answerbox");
                  quizbox.innerHTML = ("YAY Submit your highscore")
                  answerbox.innerHTML = ("blah")
                  })
      }
            //function load highscore page when game over
//above used for removing (hiding) answer buttons from main page
 let generateBtn = document.querySelector("#generate"); // declared varible twice for troubleshooting issues // 
      // below is the code for displaying question 1
      generateBtn.addEventListener("click", function question1(){
      timerCountdown(); // code for starting timer // 
      quizbox.innerHTML = (questions[0]); //code for updating question in html box //
      document.getElementById("generate2").style.visibility = "visible";
      document.getElementById("generate3").style.visibility = "visible";
      document.getElementById("generate4").style.visibility = "visible";
      document.getElementById("generate5").style.visibility = "visible";
      document.getElementById("generate").style.visibility = "hidden";
      GenerateBtn2.innerHTML = (wrongAnswers[0]);    
      GenerateBtn3.innerHTML = (wrongAnswers[1]);    
      GenerateBtn4.innerHTML = (wrongAnswers[2]);    
      GenerateBtn5.innerHTML = (correctAnswers[0]);    
      })                  
      //above is the code for displaying question 1
                  //below is code if user answers question 1 correctly *4th button*
                  GenerateBtn5.addEventListener("click", function question2(){
                  answerbox.innerHTML = ("Correct");
                  quizbox.innerHTML = (questions[1]);
                  document.getElementById("generate2").style.visibility = "visible";
                  document.getElementById("generate3").style.visibility = "visible";
                  document.getElementById("generate4").style.visibility = "visible";
                  document.getElementById("generate5").style.visibility = "visible";
                  document.getElementById("generate").style.visibility = "hidden";
                  GenerateBtn2.innerHTML = (correctAnswers[1]);
                  GenerateBtn3.innerHTML = (wrongAnswers[5]);
                  GenerateBtn4.innerHTML = (wrongAnswers[4]);
                  GenerateBtn5.innerHTML = (wrongAnswers[3]);
                        //below is code if user answers question 2 correctly *1st button*
                        GenerateBtn2.addEventListener("click", function question3(){
                        answerbox.innerHTML = ("Correct");
                        quizbox.innerHTML = (questions[2]);
                        document.getElementById("generate2").style.visibility = "visible";
                        document.getElementById("generate3").style.visibility = "visible";
                        document.getElementById("generate4").style.visibility = "visible";
                        document.getElementById("generate5").style.visibility = "visible";
                        document.getElementById("generate").style.visibility = "hidden";
                        GenerateBtn2.innerHTML = (wrongAnswers[6]);
                        GenerateBtn3.innerHTML = (wrongAnswers[7]);
                        GenerateBtn4.innerHTML = (correctAnswers[2]);
                        GenerateBtn5.innerHTML = (wrongAnswers[8]);
                        })
                        //above is code if user answers question 2 correctly *1st button*
                        //below is the code if the user answers question 2 incorrectly *2nd button* 
                        GenerateBtn3.addEventListener("click", function question3(){
                        answerbox.innerHTML = ("Wrong");
                        quizbox.innerHTML = (questions[2]);
                        document.getElementById("generate2").style.visibility = "visible";
                        document.getElementById("generate3").style.visibility = "visible";
                        document.getElementById("generate4").style.visibility = "visible";
                        document.getElementById("generate5").style.visibility = "visible";
                        document.getElementById("generate").style.visibility = "hidden";
                        GenerateBtn2.innerHTML = (wrongAnswers[6]);
                        GenerateBtn3.innerHTML = (wrongAnswers[7]);
                        GenerateBtn4.innerHTML = (correctAnswers[2]);
                        GenerateBtn5.innerHTML = (wrongAnswers[8]);
                        timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                        })
                        //above code if user answers question 2 incorrectly *2nd button*
                        //below is the code if the user answers question 2 incorrectly *3rd button* 
                        GenerateBtn4.addEventListener("click", function question3(){
                        answerbox.innerHTML = ("Wrong");
                        quizbox.innerHTML = (questions[2]);
                        document.getElementById("generate2").style.visibility = "visible";
                        document.getElementById("generate3").style.visibility = "visible";
                        document.getElementById("generate4").style.visibility = "visible";
                        document.getElementById("generate5").style.visibility = "visible";
                        document.getElementById("generate").style.visibility = "hidden";
                        GenerateBtn2.innerHTML = (wrongAnswers[6]);
                        GenerateBtn3.innerHTML = (wrongAnswers[7]);
                        GenerateBtn4.innerHTML = (correctAnswers[2]);
                        GenerateBtn5.innerHTML = (wrongAnswers[8]);
                        timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                        })
                        //above code if user answers question 2 incorrectly *3rd button*
                        //below is the code if the user answers question 2 incorrectly *4th button* 
                        GenerateBtn5.addEventListener("click", function question3(){
                        answerbox.innerHTML = ("Wrong");
                        quizbox.innerHTML = (questions[2]);
                        document.getElementById("generate2").style.visibility = "visible";
                        document.getElementById("generate3").style.visibility = "visible";
                        document.getElementById("generate4").style.visibility = "visible";
                        document.getElementById("generate5").style.visibility = "visible";
                        document.getElementById("generate").style.visibility = "hidden";
                        GenerateBtn2.innerHTML = (wrongAnswers[6]);
                        GenerateBtn3.innerHTML = (wrongAnswers[7]);
                        GenerateBtn4.innerHTML = (correctAnswers[2]);
                        GenerateBtn5.innerHTML = (wrongAnswers[8]);
                        timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                        })
                        //above code if user answers question 2 incorrectly *4th button*
                  })
                  //above is code if user answers question 1 correctly *4th button*
                  //below is code if user answers question 1 incorrectly *1st button*
                  GenerateBtn2.addEventListener("click", function question2(){
                        answerbox.innerHTML = ("Incorrect");
                        quizbox.innerHTML = (questions[1]);
                        document.getElementById("generate2").style.visibility = "visible";
                        document.getElementById("generate3").style.visibility = "visible";
                        document.getElementById("generate4").style.visibility = "visible";
                        document.getElementById("generate5").style.visibility = "visible";
                        document.getElementById("generate").style.visibility = "hidden";
                        GenerateBtn2.innerHTML = (correctAnswers[1]);
                        GenerateBtn3.innerHTML = (wrongAnswers[5]);
                        GenerateBtn4.innerHTML = (wrongAnswers[4]);
                        GenerateBtn5.innerHTML = (wrongAnswers[3]);
                        timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              //below is code if user answers question 2 correctly *1st button*
                              GenerateBtn2.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Correct");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              })
                              //above is code if user answers question 2 correctly *1st button*
                              //below is the code if the user answers question 2 incorrectly *2nd button* 
                              GenerateBtn3.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Wrong");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              })
                              //above code if user answers question 2 incorrectly *2nd button*
                              //below is the code if the user answers question 2 incorrectly *3rd button* 
                              GenerateBtn4.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Wrong");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              })
                              //above code if user answers question 2 incorrectly *3rd button*
                              //below is the code if the user answers question 2 incorrectly *4th button* 
                              GenerateBtn5.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Wrong");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              })
                              //above code if user answers question 2 incorrectly *4th button*
                        })
                  //above is code if user answers question 1 incorrectly *1st button*
                   //below is code if user answers question 1 incorrectly *2nd button*
                   GenerateBtn3.addEventListener("click", function question2(){
                        answerbox.innerHTML = ("Incorrect");
                        quizbox.innerHTML = (questions[1]);
                        document.getElementById("generate2").style.visibility = "visible";
                        document.getElementById("generate3").style.visibility = "visible";
                        document.getElementById("generate4").style.visibility = "visible";
                        document.getElementById("generate5").style.visibility = "visible";
                        document.getElementById("generate").style.visibility = "hidden";
                        GenerateBtn2.innerHTML = (correctAnswers[1]);
                        GenerateBtn3.innerHTML = (wrongAnswers[5]);
                        GenerateBtn4.innerHTML = (wrongAnswers[4]);
                        GenerateBtn5.innerHTML = (wrongAnswers[3]);
                        timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              //below is code if user answers question 2 correctly *1st button*
                              GenerateBtn2.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Correct");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              })
                              //above is code if user answers question 2 correctly *1st button*
                              //below is the code if the user answers question 2 incorrectly *2nd button* 
                              GenerateBtn3.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Wrong");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              })
                              //above code if user answers question 2 incorrectly *2nd button*
                              //below is the code if the user answers question 2 incorrectly *3rd button* 
                              GenerateBtn4.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Wrong");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              })
                              //above code if user answers question 2 incorrectly *3rd button*
                              //below is the code if the user answers question 2 incorrectly *4th button* 
                              GenerateBtn5.addEventListener("click", function question3(){
                              answerbox.innerHTML = ("Wrong");
                              quizbox.innerHTML = (questions[2]);
                              document.getElementById("generate2").style.visibility = "visible";
                              document.getElementById("generate3").style.visibility = "visible";
                              document.getElementById("generate4").style.visibility = "visible";
                              document.getElementById("generate5").style.visibility = "visible";
                              document.getElementById("generate").style.visibility = "hidden";
                              GenerateBtn2.innerHTML = (wrongAnswers[6]);
                              GenerateBtn3.innerHTML = (wrongAnswers[7]);
                              GenerateBtn4.innerHTML = (correctAnswers[2]);
                              GenerateBtn5.innerHTML = (wrongAnswers[8]);
                              timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                              })
                              //above code if user answers question 2 incorrectly *4th button*
                        })
                  //above is code if user answers question 1 incorrectly *1st button*                
                   //below is code if users answers question 1 incorrectly *3rd button*
                  GenerateBtn4.addEventListener("click", function question2(){
                  answerbox.innerHTML = ("Wrong");
                  quizbox.innerHTML = (questions[1]);
                  document.getElementById("generate2").style.visibility = "visible";
                  document.getElementById("generate3").style.visibility = "visible";
                  document.getElementById("generate4").style.visibility = "visible";
                  document.getElementById("generate5").style.visibility = "visible";
                  document.getElementById("generate").style.visibility = "hidden";
                  GenerateBtn2.innerHTML = (correctAnswers[1]);
                  GenerateBtn3.innerHTML = (wrongAnswers[5]);
                  GenerateBtn4.innerHTML = (wrongAnswers[4]);
                  GenerateBtn5.innerHTML = (wrongAnswers[3]);
                  timeLeft = timeLeft-10; //code to penalize user by deducting time from timer
                  })
                  //above is code if user answers question 1 incorrectly  *3rd button*
      //below is function that is for timer
      let timerEl = document.getElementById("countdown");
      function timerCountdown() {
      //timeleft is global variable so it can be updated outside function when questions are answered incorrectly 
            window.timeLeft = 15;
    
            let timeInterval = setInterval(function() {
            timerEl.innerHTML = timeLeft + " seconds remaining";
            timeLeft--;
    
            if (timeLeft <= 0) {
            timerEl.textContent = "Game Over";
            loadHighScore()
            }
            
            }, 1000);
      }
      //above is function that is for timer
    
