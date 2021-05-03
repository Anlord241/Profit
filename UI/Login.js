// eslint-disable-next-line func-names
(function () {
  let form = document.getElementById('authorization');
  function login(event) {
    event.preventDefault();
    let errorText = document.getElementById('error');
    let username = form.username.value;
    if (!username) {
      errorText.hidden = false;
    } else {
      localStorage.setItem('user', username);
      document.location.href = 'index.html';
    }
  }

  form.addEventListener('submit', login);
}());
