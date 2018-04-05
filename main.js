const pressed = [];
const secretCode = 'kapil';
window.addEventListener('keyup', e => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    console.log('-secretCode.length -1: ', -secretCode.length -1);
    console.log('pressed.length: ', pressed.length);
    console.log('secretCode.length: ', secretCode.length);
    console.log(pressed);
    if(pressed.join('').includes(secretCode)) {
        console.log('%c Bang, you nailed it!', 'font-size: 20px; background: red;');
        cornify_add();
    }
})