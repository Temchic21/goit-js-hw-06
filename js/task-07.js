const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')


input.addEventListener('input', chengeFontText);

function chengeFontText (event) {
 text.style.fontSize = input.value + "px";
}

