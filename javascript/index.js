//visible&invisible対象のelementを定義する
const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

//クリックしたらパスワードを表示させる
togglePassword.addEventListener('click', function () {
  const type =
    password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  this.classList.toggle('bi-eye');
});

//form elementを定義する
const form = document.querySelector('form');

//クリックしたらパスワードを非表示
form.addEventListener('submit', function (event) {
  event.preventDefault();
});
