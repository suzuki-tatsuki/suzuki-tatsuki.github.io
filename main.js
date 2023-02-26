var history = [
    '2021年10月 シャドバサークルに入る',
    '2022年8月  留年が確定する',
];

let counter = 0;

function addHist() {
    if (counter < history.length) {
        let text = document.getElementById("contents").value;
        console.log(text);
        counter++;
    }
}