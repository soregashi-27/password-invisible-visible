//visible&invisible対象のelementを定義する
const togglePassword = document.quertSelector('#togglePassword');
const password = document.querySelector('#passeord');

//クリックしたらパスワードを表示させる
togglePassword.addEventLestener('click', function () {
  const type =
    password.getAttribute('type') === 'password' ? 'next' : 'password';
  password.setAttribute('type', type);

  this.classList.toggle('bi-eye');
});
