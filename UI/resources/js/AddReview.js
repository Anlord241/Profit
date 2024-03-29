/* eslint-disable no-self-assign */
// eslint-disable-next-line func-names
(function () {
  const MESSAGE = document.getElementById('name');

  let reviewCreatorName = localStorage.getItem('user');
  MESSAGE.innerText = `Здравствуйте, ${reviewCreatorName}!`;

  let ad = JSON.parse(localStorage.getItem('toAddReview'));

  let title = document.getElementById('ad-title');

  title.textContent = ad.title;

  let showReviewCreator = document.getElementById('username');

  title.textContent = ad.title;
  showReviewCreator.textContent = reviewCreatorName;
  let currentDate = new Date();
  let DATE = document.getElementById('current-date');
  DATE.innerText = currentDate;

  let form = document.getElementById('add-form');

  function addReview(event) {
    event.preventDefault();
    let review = {
      text: null,
      username: reviewCreatorName,
      rating: 0,
    };
    let errorRating = document.getElementById('error-rating');
    review.text = form.text.value;
    let rating = 0;
    if (form.one.checked) {
      rating = 1;
    }
    if (form.two.checked) {
      rating = 2;
    }
    if (form.three.checked) {
      rating = 3;
    }
    if (form.four.checked) {
      rating = 4;
    }
    if (form.five.checked) {
      rating = 5;
    }
    if (rating === 0) {
      errorRating.hidden = false;
      return;
    }

    review.rating = rating;

    let id = localStorage.getItem('lastReviewId');
    review.id = String(Number(id) + 1);
    localStorage.setItem('lastReviewId', Number(id) + 1);

    if (Object.prototype.hasOwnProperty.call(ad, 'reviews')) {
      ad.reviews.unshift(review);
    } else {
      ad.reviews = [review];
    }

    localStorage.setItem('toAdd', JSON.stringify(ad));
    localStorage.setItem('mode', 'edit');
    document.location.href = document.location.href;
  }
  form.addEventListener('submit', addReview);
  function logout() {
    localStorage.removeItem('user');
    document.location.href = document.location.href;
  }
  const buttonLogout = document.getElementById('authorization');
  buttonLogout.addEventListener('click', logout);
}());
