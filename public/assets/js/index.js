let quizDemoImg = document.querySelector('#quiz-demo-open');
let quizDemoGif = document.querySelector('#quiz-gif');
let quizDemoDialog = document.querySelector('#quiz-demo');
let closeDemoDialog = document.querySelector('#close-demo');
document.addEventListener('click', (e)=>{
      switch(e.target){
            case quizDemoImg:
                  quizDemoDialog.open = true;
                  break;
            case closeDemoDialog:
                  if (quizDemoDialog.open){
                        quizDemoDialog.open = false;
                  }
                  break;
            case quizDemoGif:
                  if (quizDemoDialog.open){
                        quizDemoDialog.open = false;
                  }
                  break;
      }
})