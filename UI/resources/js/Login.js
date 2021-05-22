// eslint-disable-next-line func-names
(function () {
  let form = document.getElementById('authorization-form');
  function login(event) {
    event.preventDefault();
    let errorText = document.getElementById('error-authorization');
    let username = form.username.value;
    if (!username) {
      errorText.hidden = false;
    } else {
      localStorage.setItem('user', username);
      // eslint-disable-next-line no-self-assign
      document.location.href = document.location.href;
    }
  }

  form.addEventListener('submit', login);
}());
