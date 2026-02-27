//alert('Привет, я JS!');
function gameg() {
    var num = prompt('Введи число:');
    var gue = 20;
    //console.log(number)
    if (num > gue) {
        alert('Слишком много!');
        return gameg();
    }
    else if (num < gue) {
        alert('Слишком мало!');
        return gameg();
    }
    else
        return alert('Ты угадал!');
}
//gameg();
function rem() {
    alert('Ты здесь слишком долго!');
    //window.close();
    window.location.href = 'https://yandex.ru/q/question/vam_zadaiut_lish_odin_vopros_pochemu_chto_cfafcc3c/'
}
//setTimeout(rem, 5000);
function val() {
    var name = document.getElementById('name').value;
    console.log(name);
    var password = document.getElementById('password').value;
    var reg_name = /^[a-zа-яё]+$/i;
    if (reg_name.test(name) == false)
        alert('Ошибка в ФИО!');
    var reg_pass = /[0-9a-z]{5,100}/i;
    if (reg_pass.test(password) == false)
        alert('Ошибка в Пароле!');
}
var a = document.querySelector('.button').addEventListener('click', val);