// eslint-disable-next-line func-names
(function () {
  const MESSAGE = document.getElementById('name');

  let username = localStorage.getItem('user');
  MESSAGE.innerText = `Здравствуйте, ${username}!`;

  let CREATOR = document.getElementById('creator-name');
  CREATOR.innerText = username;

  let mode = 'add';
  let currentDate = new Date();
  let DATE = document.getElementById('current-date');
  DATE.innerText = currentDate;
  let editId;
  let createdAt;
  let oldPhotoLink;
  let tags = [];
  if (JSON.parse(localStorage.getItem('toEdit'))) {
    let ad = JSON.parse(localStorage.getItem('toEdit'));
    editId = ad.id;
    tags = ad.hashTags;

    let showTags = document.getElementById('tags');
    showTags.textContent = tags.join(', ');

    oldPhotoLink = ad.photoLink;
    createdAt = ad.createdAt;
    let form = document.getElementById('add');
    form.title.value = ad.title;
    form.description.value = ad.description;
    form.link.value = ad.link;
    form.discount.value = ad.discount.slice(0, ad.discount.length - 1);
    let validUntil = new Date(ad.validUntil);
    let month = validUntil.getMonth() + 1;
    if (month < 10) {
      month = `0${month}`;
    }

    validUntil = `${validUntil.getFullYear()}-${month}-${validUntil.getDate()}`;
    form.date.value = validUntil;
    const photo = document.getElementById('picture');
    photo.setAttribute(
      'src',
      ad.photoLink
        || 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png',
    );
    let buttonDeletePicture = document.getElementById('delete-picture');
    if (ad.photoLink) {
      buttonDeletePicture.hidden = false;
    }

    DATE.innerText = new Date(ad.createdAt);
    mode = 'edit';

    localStorage.removeItem('toEdit');
  }

  function logout() {
    localStorage.removeItem('user');
    document.location.href = 'index.html';
  }
  const buttonLogout = document.getElementById('authorization');
  buttonLogout.addEventListener('click', logout);

  let buttonDeletePicture = document.getElementById('delete-picture');

  function addAdvertisement(event) {
    if (event.target === buttonDeletePicture) {
      return;
    }
    event.preventDefault();
    let form = document.getElementById('add');
    let ad = {
      title: null,
      description: null,
      discount: null,
      createdAt: null,
      vendor: username,
      link: null,
      hashTags: [],
      rating: 0,
      reviews: [],
      validUntil: null,
    };
    if (tags.length === 0) {
      let errorMessage = document.getElementById('error-tags');
      errorMessage.hidden = false;
      return;
    }
    if (mode === 'add') {
      let id = localStorage.getItem('id');
      ad.id = String(Number(id) + 1);
      localStorage.setItem('id', Number(id) + 1);
      ad.createdAt = currentDate;
    } else {
      ad.id = editId;
      ad.createdAt = new Date(createdAt);
      ad.photoLink = oldPhotoLink;
    }
    if (form.file.value) {
      ad.photoLink = form.file.value.substr(12);
    } else {
      ad.photoLink = 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png';
    }
    ad.title = form.title.value;
    ad.description = form.description.value;
    ad.discount = `${form.discount.value}%`;
    ad.link = form.link.value;
    ad.validUntil = form.date.value;
    ad.hashTags = tags;

    localStorage.setItem('toAdd', JSON.stringify(ad));
    localStorage.setItem('mode', mode);
    document.location.href = 'index.html';
  }

  const file = document.getElementById('file');
  const form = document.getElementById('add');
  function showPicture() {
    let photoLink = file.value.substr(12);
    const photo = document.getElementById('picture');
    photo.setAttribute(
      'src',
      photoLink
        || 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png',
    );
    if (photoLink) {
      buttonDeletePicture.hidden = false;
    } else {
      buttonDeletePicture.hidden = true;
    }
  }

  function deletePhoto() {
    const photo = document.getElementById('picture');
    photo.setAttribute(
      'src',
      'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png',
    );
    buttonDeletePicture.hidden = true;
    form.file.value = null;
  }

  function addTag() {
    let tag = document.getElementById('tag');
    let showTags = document.getElementById('tags');
    if (tag.value && tags.indexOf(tag.value) === -1) {
      tags.push(tag.value);
      tag.value = null;
      tags.sort();
      showTags.textContent = tags.join(', ');
    }
  }

  function clearTags() {
    tags = [];
    let showTags = document.getElementById('tags');
    showTags.textContent = 'Не выбрано';
  }

  let buttonClearTags = document.getElementById('clear-tags');
  let buttonAddTag = document.getElementById('add-tag');
  file.addEventListener('change', showPicture);
  buttonDeletePicture.addEventListener('click', deletePhoto);
  buttonAddTag.addEventListener('click', addTag);
  buttonClearTags.addEventListener('click', clearTags);

  buttonClearTags.removeEventListener('submit', addAdvertisement);
  form.addEventListener('submit', addAdvertisement);
}());
