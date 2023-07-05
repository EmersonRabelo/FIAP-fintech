const login = 'admin@gmail.com';
const pwd = 'admin';

const $btnLogin = document.getElementById('btn-login');
let $email = document.getElementById('floatingInput');
let $pwd = document.getElementById('floatingPassword');

$btnLogin.addEventListener('click', e => {
    e.preventDefault();

    try {
        emailValue = $email.value;
        pwdValue = $pwd.value;
    
        if (pwdValue == ''){
            invalidInput($pwd, 'senha não informada!');
            return;
        } else if (pwdValue != pwd){
            invalidInput($pwd, 'Senha inválida!');
            return;
        } 
        if (emailValue == ''){
            invalidInput($email, 'email não informado!');
            return;
        } else if (emailValue != login){
            invalidInput($email, 'Login não encontrado!');
            return;
        } 

        console.log('Login efetuado com sucesso!')

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Login efetuado com sucesso!',
            showConfirmButton: false,
            timer: 1500
        })
    } catch (e){
        console.error(e);
    }
});

function invalidInput($el, msg){
    $el.className = 'form-control is-invalid';
}