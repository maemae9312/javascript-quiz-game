const question = 'What is the best-selling game machine in history?';
const answers = [
    'Super Nintendo Entertainment System',
    'PlayStation 4',
    'Nintendo switch',
    'Nintendo DS'
];
const correct = 'Nintendo DS';

// 定数の文字列をHTMLに反映させる
document.getElementById('js-question').textContent = question;

const $button = document.getElementsByTagName('button');

$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];


// ボタンをクリックしたら正誤判定
$button[0].addEventListener('click', () => {
    if(correct === 　$button[0].textContent){
        window.alert('correct!!');
    } else {
        window.alert('incorrect...')
    }
});

$button[1].addEventListener('click', () => {
    if(correct === 　$button[1].textContent){
        window.alert('correct!!');
    } else {
        window.alert('incorrect...')
    }
});

$button[2].addEventListener('click', () => {
    if(correct === 　$button[2].textContent){
        window.alert('correct!!');
    } else {
        window.alert('incorrect...')
    }
});

$button[3].addEventListener('click', () => {
    if(correct === 　$button[3].textContent){
        window.alert('correct!!');
    } else {
        window.alert('incorrect...')
    }
});

//メモ
// HTMLオブジェクトが入っている変数、定数の場合は先頭に$をつけることが慣習となっている