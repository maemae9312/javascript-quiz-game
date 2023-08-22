// 配列にオブジェクトを追加できる
const quiz = [
  {
    question: "What is the best-selling game machine in history?",
    answers: [
      "Super Nintendo Entertainment System",
      "PlayStation 4",
      "Nintendo switch",
      "Nintendo DS",
    ],
    correct: "Nintendo DS",
  },
  {
    question:
      "Speaking of Nintendos flagship game that Shigesato Itoi was involved in planning?",
    answers: [
      "MOTHER2",
      "super mario bros 3",
      "super donkey kong",
      "Kirby of the Stars",
    ],
    correct: "MOTHER2",
  },
  {
    question: "What is the name of the main character in Final Fantasy IV?",
    answers: ["Firion", "Cloud", "Tidus", "Cecil"],
    correct: "Cecil",
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("correct!!");
    score ++
  } else {
    window.alert("incorrect...");
  }

  quizIndex++;
  
  if(quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がもうなければこちらを実行
    window.alert('finished!! Your number of correct answers is' + score + '/'+ quizLength );
    // Your number of correct answers is 3
  }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
  $button[handleIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handleIndex++;
}

//メモ
// HTMLオブジェクトが入っている変数、定数の場合は先頭に$をつけることが慣習となっている
// プログラミングをする上でコードに柔軟性を持たせることが大切
