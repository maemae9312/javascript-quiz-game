const question = 'What is the best-selling game machine in history?';
const answers = [
    'Super Nintendo Entertainment System',
    'PlayStation 4',
    'Nintendo switch',
    'Nintendo DS'
];
const correct = 'Nintendo DS';

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();

const clickHandler = (e) => {
    if(correct === e.target.textContent){
        window.alert('correct!!');
    } else {
        window.alert('incorrect...')
    }
};

// ボタンをクリックしたら正誤判定
let handleIndex = 0;
while (handleIndex < buttonLength) {
    $button[handleIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handleIndex++;
}

//メモ
// HTMLオブジェクトが入っている変数、定数の場合は先頭に$をつけることが慣習となっている
// プログラミングをする上でコードに柔軟性を持たせることが大切