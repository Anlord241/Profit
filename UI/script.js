/* eslint-disable max-len */
/* eslint-disable strict */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */

let ads = [
  {
    id: '1',
    description: 'Скидка на все ноутбуки',
    createdAt: new Date('2021-01-21T12:00:00'),
    link: 'https://sila.by',
    vendor: 'Электросила',
    photoLink: 'https://sila.by/img/catalog2015/ntpk/tovar111378.jpg',
    hashTags: ['Техника'],
    discount: '20%',
    rating: 1,
    validUntil: new Date('2022-03-21T12:00:00'),
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '2',
    description: 'Скидка на столы',
    createdAt: new Date('2021-02-21T12:00:00'),
    link: 'https://tables.com',
    vendor: 'Best Tables',
    hashTags: ['Мебель'],
    discount: '25%',
    validUntil: new Date('2021-05-21T12:00:00'),
    rating: 1.1,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '3',
    description: 'Скидка на тетради',
    createdAt: new Date('2021-03-15T12:00:00'),
    link: 'https://m4.by',
    vendor: 'M4.BY',
    hashTags: ['Школа'],
    discount: '10%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },
  {
    id: '4',
    description: 'Скидка на все игры',
    createdAt: new Date('2021-03-14T12:00:00'),
    link: 'https://store.steampowered.com/?l=russian',
    vendor: 'Steam',
    hashTags: ['Компьютер', 'Игры'],
    discount: '5%',
    validUntil: new Date('2021-05-21T12:00:00'),
    rating: 1.3,
  },

  {
    id: '5',
    description: 'Скидка на цветы',
    createdAt: new Date('2021-02-13T12:00:00'),
    link: 'https://flowers.by',
    vendor: 'Мир цветов',
    photoLink: 'https://cdn2.flowwow.com/data/blog/1562599250_29351868.jpg',
    hashTags: ['Растения'],
    discount: '30%',
    validUntil: new Date('2022-03-21T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '6',
    description: 'Скидка на продукцию Xiaomi -10%',
    createdAt: new Date('2021-01-01T11:00:00'),
    link: 'https://5element.by',
    vendor: '5 элемент',
    hashTags: ['Техника'],
    discount: '10%',
    validUntil: new Date('2021-03-21T12:00:00'),
    rating: 1.5,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '7',
    description: 'Скидка на обои',
    createdAt: new Date('2020-03-21T12:00:00'),
    link: 'https://wallpapers.by',
    vendor: 'Мир обоев',
    hashTags: ['Товары для дома'],
    discount: '15%',
    validUntil: new Date('2021-05-21T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '8',
    description: 'Скидка на подушки -5%',
    createdAt: new Date('2019-03-21T12:00:00'),
    link: 'https://goodsforsleep.by',
    vendor: 'Товары для сна',
    hashTags: ['Сон'],
    discount: '5%',
    validUntil: new Date('2021-05-21T12:00:00'),
    rating: 1.7,
    reviews: [{ text: 'Cool!', username: 'Вася' }],
  },

  {
    id: '9',
    description: 'Скидка на все моющие средства до конца года -10%',
    createdAt: new Date('2021-02-26T12:00:00'),
    link: 'https://ostrov-chistoty.by/',
    vendor: 'Остров чистоты',
    photoLink:
        'https://ostrov-chistoty.by/files/settingssite/site_header-site_header-ostrov_new.png',
    hashTags: ['Быт', 'Товары для дома'],
    discount: '10%',
    validUntil: new Date('2021-12-21T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '10',
    description: 'Скидка на диваны -7%',
    createdAt: new Date('2021-02-19T10:00:00'),
    link: 'https://pinskdrev.by/',
    vendor: 'Пинскдрев',
    photoLink:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeHeaM9qhfpQaHgNSXGGBkfJRS2U872CktQ&usqp=CAU',
    hashTags: ['Мебель'],
    discount: '7%',
    validUntil: new Date('2021-05-21T12:00:00'),
    rating: 1.9,
  },

  {
    id: '11',
    description: 'Скидка на продукцию собственного производства',
    createdAt: new Date('2022-03-21T12:00:00'),
    link: 'https://evroopt.by/',
    vendor: 'Евроопт',
    hashTags: ['Еда'],
    discount: '10%',
    validUntil: new Date('2021-03-25T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Cool!', username: 'Вася' }],
  },

  {
    id: '12',
    description: 'Скидка на письменные принадлежности',
    createdAt: new Date('2023-03-21T12:00:00'),
    link: 'https://m4.by/',
    vendor: 'M4.BY',
    hashTags: ['Школа'],
    discount: '10%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: 2.1,
    reviews: [{ text: 'Cool!', username: 'Вася' }],
  },

  {
    id: '13',
    description: 'Скидка на билеты в кино',
    createdAt: new Date('2024-03-21T12:00:00'),
    link: 'https://kvitki.by/',
    vendor: 'Kvitki.by',
    photoLink: 'https://png.pngtree.com/element_our/png_detail/20181022/movie-cinema-entertainment-logo-with-neon-sign-effect-vector-illustration-png_199458.jpg',
    hashTags: ['Развлечения'],
    discount: '20%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },
  {
    id: '14',
    description: 'Скидка на двери',
    createdAt: new Date('2021-03-21T13:00:00'),
    link: 'https://doors.by/',
    vendor: 'Мир дверей',
    hashTags: ['Строительство'],
    discount: '10%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: 2.3,
    reviews: [{ text: 'Cool!', username: 'Вася' }],
  },

  {
    id: '15',
    description: 'Скидка на гробы',
    createdAt: new Date('2021-03-21T14:00:00'),
    link: 'https://coffins.by/',
    vendor: 'Ритуал',
    photoLink:
        'https://images.by.prom.st/58699067_w640_h640_grob-mod-vs-1.jpg',
    hashTags: ['Ритуальные услуги'],
    discount: '30%',
    validUntil: new Date('2021-12-31T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Отличные гробы!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '16',
    description: 'Скидка на фрукты',
    createdAt: new Date('2021-03-21T15:00:00'),
    link: 'https://fruit.by/',
    vendor: 'Фрукты из Турции',
    hashTags: ['Еда'],
    discount: '35%',
    validUntil: new Date('2021-03-21T12:00:00'),
    rating: 2.5,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '17',
    description: 'Скидка на стиральные машины',
    createdAt: new Date('2021-03-21T16:00:00'),
    link: 'https://www.21vek.by/',
    vendor: '21 век',
    photoLink:
        'https://avatars.mds.yandex.net/get-mpic/1715213/img_id3262544086590258454.jpeg/orig',
    hashTags: ['Быт', 'Техника'],
    discount: '10%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: 0.0,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },

  {
    id: '18',
    description: 'Скидка на изделия из золота -10%',
    createdAt: new Date('2021-06-22T12:00:00'),
    link: 'https://www.ziko.by/',
    photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT8LgxaFLpYpGmXt-WVwgLygD89fgYczp8w&usqp=CAU',
    vendor: 'Ziko.by',
    hashTags: ['Аксессуары', 'Драгоценности'],
    discount: '10%',
    validUntil: new Date('2021-04-21T12:00:00'),
    rating: 2.7,
    reviews: [{ text: 'Cool!', username: 'Вася' }],
  },

  {
    id: '19',
    description: 'Скидка на ковры',
    createdAt: new Date('2021-07-23T12:00:00'),
    link: 'https://www.carpets.by/',
    vendor: 'Мир ковров',
    photoLink:
        'https://bobrujsk-praktik.by/upload/iblock/cdb/cdb1eeb9a691d4a5ab4c7c999dded1c0.jpg',
    hashTags: ['Товары для дома'],
    discount: '10%',
    rating: 0.0,
    validUntil: new Date('2021-12-31T12:00:00'),
    reviews: [{ text: 'Cool!', username: 'Вася' }],
  },

  {
    id: '20',
    description: 'Скидка на защитные маски -35%',
    createdAt: new Date('2021-08-30T12:00:00'),
    link: 'https://pharma.by/',
    vendor: 'Белфармация',
    photoLink:
        'https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg',
    hashTags: ['Медицина'],
    discount: '35%',
    validUntil: new Date('2021-12-31T12:00:00'),
    rating: 2.9,
    reviews: [{ text: 'Cool!', username: 'Вася' },
      { text: 'Я Никита!', username: 'Никита' }],
  },
];

// eslint-disable-next-line no-unused-vars
class Model {
  constructor(_ads) {
    this._ads = _ads.slice();
  }

  size() {
    return this._ads.length;
  }

  clear() {
    this._ads = [];
  }

  addAll(toAdd) {
    let failedToAdd = [];
    toAdd.forEach((item) => {
      if (!this.add(item)) {
        failedToAdd.push(item);
      }
    });
    return failedToAdd;
  }

  get advertisements() {
    return this._ads;
  }

  remove(id) {
    let item = this._ads.find((a) => a.id === id);
    if (item) {
      this._ads.splice(this._ads.findIndex((a) => item === a), 1);
      return true;
    }

    console.log('Element not found');
    return false;
  }

  _compareRating(a, b) {
    return b.rating - a.rating;
  }

  _compareDate(a, b) {
    return b.createdAt - a.createdAt;
  }

  getPage(skip = 0, top = 10, filterConfig = {}, sortType = 'Date') {
    let toReturn = this._ads;
    if (sortType === 'Date') {
      toReturn.sort(this._compareDate);
    } else if (sortType === 'Rating') {
      toReturn.sort(this._compareRating);
    }

    if (Object.prototype.hasOwnProperty.call(filterConfig, 'vendor')) {
      toReturn = toReturn.filter((item) => item.vendor === filterConfig.vendor);
    }
    if (Object.prototype.hasOwnProperty.call(filterConfig, 'from')) {
      if (Object.prototype.hasOwnProperty.call(filterConfig, 'to')) {
        toReturn = toReturn.filter(
          (item) => filterConfig.from <= item.createdAt
            && item.createdAt <= filterConfig.to,
        );
      } else {
        toReturn = toReturn.filter(
          (item) => item.createdAt >= filterConfig.from,
        );
      }
    } else if (Object.prototype.hasOwnProperty.call(filterConfig, 'to')) {
      toReturn = toReturn.filter((item) => filterConfig.to >= item.createdAt);
    }

    return toReturn.slice(skip, skip + top);
  }

  get(id) {
    let item = this._ads.find((a) => a.id === id);

    if (item) {
      return item;
    }
    console.log('Element not found');
    return null;
  }

  static validate(item) {
    if (!Object.prototype.hasOwnProperty.call(item, 'id')) {
      console.log('The element has no id!');
      return false;
    }
    if (typeof item.id !== 'string') {
      console.log('Id has illegal type');
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(item, 'description')) {
      console.log('The element has no description!');
      return false;
    }
    if (typeof item.description !== 'string') {
      console.log('Description has illegal type');
      return false;
    }
    if (item.description.length >= 200) {
      console.log('The description is too long!');
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(item, 'createdAt')) {
      console.log('Element has no createdAt data!');
      return false;
    }
    if (!(item.createdAt instanceof Date)) {
      console.log('CreatedAt has illegal type');
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(item, 'link')) {
      console.log('Element has no link!');
      return false;
    }
    if (typeof item.link !== 'string') {
      console.log('Link has illegal type');
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(item, 'vendor')) {
      console.log('Element has no vendor!');
      return false;
    }
    if (typeof item.vendor !== 'string') {
      console.log('Link has illegal type');
      return false;
    }
    if (item.vendor.length === 0) {
      console.log('The vendor field is empty');
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(item, 'hashTags')) {
      console.log('Element has no hashTags!');
      return false;
    }
    if (!(item.hashTags instanceof Array)) {
      console.log('HashTags array has illegal type');
      return false;
    }
    if (!item.hashTags.every((a) => typeof a === 'string')) {
      console.log('One or more hashTags have illegal type');
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(item, 'discount')) {
      console.log('Element has no discount!');
      return false;
    }
    if (typeof item.discount !== 'string') {
      console.log('Discount has illegal type');
      return false;
    }

    if (!Object.prototype.hasOwnProperty.call(item, 'validUntil')) {
      console.log('Element has no validUntil data!');
      return false;
    }
    if (!(item.validUntil instanceof Date)) {
      console.log('validUntil has illegal type');
      return false;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'photoLink')) {
      if (typeof item.photoLink !== 'string') {
        console.log('PhotoLink has illegal type');
        return false;
      }
    }

    if (Object.prototype.hasOwnProperty.call(item, 'rating')) {
      if (typeof item.rating !== 'number') {
        console.log('Rating has illegal type');
        return false;
      }
    }

    if (Object.prototype.hasOwnProperty.call(item, 'reviews')) {
      if (!(item.reviews instanceof Array)) {
        console.log('Reviews array has illegal type');
        return false;
      }
      if (!item.reviews.every((a) => !Object.prototype.hasOwnProperty.call(item, 'user') || !Object.prototype.hasOwnProperty.call(item, 'text'))) {
        console.log('One or more reviews have illegal type');
        return false;
      }
    }

    return true;
  }

  add(item) {
    if (!Model.validate(item)) {
      return false;
    }
    let tempItem = this._ads.find((a) => a.id === item.id);
    if (tempItem) {
      console.log('The array already has an element with this id');
      return false;
    }
    this._ads.push(item);
    return true;
  }

  edit(id, item) {
    let previous = this._ads.find((a) => a.id === id);
    if (!previous) {
      console.log('Element not found!');
      return false;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'id')) {
      if (previous.id !== item.id) {
        console.log("You mustn't change id!");
        return false;
      }
    }

    if (Object.prototype.hasOwnProperty.call(item, 'vendor')) {
      if (previous.vendor !== item.vendor) {
        console.log("You mustn't change vendor!");
        return false;
      }
    }

    if (Object.prototype.hasOwnProperty.call(item, 'createdAt')) {
      if (previous.createdAt.getTime() !== item.createdAt.getTime()) {
        console.log("You mustn't change createdAt data!");
        return false;
      }
    }
    let editedItem = Object.assign(previous, item);

    if (Object.prototype.hasOwnProperty.call(item, 'description')) {
      editedItem.description = item.description;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'link')) {
      editedItem.link = item.link;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'photoLink')) {
      editedItem.photoLink = item.photoLink;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'hashTags')) {
      editedItem.hashTags = item.hashTags;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'discount')) {
      editedItem.discount = item.discount;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'validUntil')) {
      editedItem.validUntil = item.validUntil;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'rating')) {
      editedItem.rating = item.rating;
    }

    if (Object.prototype.hasOwnProperty.call(item, 'reviews')) {
      editedItem.reviews = item.reviews;
    }
    if (!Model.validate(editedItem)) {
      return false;
    }

    this._ads.splice(this._ads.indexOf(previous), 1, editedItem);
    return true;
  }
}

class View {
  constructor(_ads, model) {
    this.model = model;
    this._currentUser = null;
    this._sortType = 'Date';
    this._adsNumber = 10;
  }

  setSortType(sortType) {
    this._sortType = sortType;
    this.init();
  }

  _updateButtonsUnderAd(ad) {
    if (!this._currentUser) {
      ad.querySelector('.leave-review').hidden = true;
    }
    if (ad.querySelector('.vendor').textContent !== `Поставщик: ${this._currentUser}`) {
      ad.querySelector('.delete').hidden = true;
      ad.querySelector('.edit').hidden = true;
    }
  }

  _updateGeneralButtons() {
    const MESSAGE = document.getElementById('name');
    MESSAGE.innerText = `Здравствуйте, ${this._currentUser}!`;

    const AUTHORIZATION_BUTTON = document.getElementById('authorization');
    AUTHORIZATION_BUTTON.innerText = 'Выйти';

    const ADD_BUTTON = document.getElementById('add');
    ADD_BUTTON.hidden = false;

    const LEAVE_REVIEW = document.getElementsByClassName('leave-review');
    Array.from(LEAVE_REVIEW).forEach((item) => { item.hidden = false; });
  }

  setUser(name) {
    this.logout();
    this._currentUser = name;
    this.init();
  }

  _updateSelectVendor() {
    let vendors = [];
    this.model._ads.forEach((a) => vendors.push(a.vendor));

    vendors = vendors.sort().filter((item, index) => vendors.indexOf(item) === index);
    const MESSAGE = document.getElementById('select-creator');
    vendors.forEach((a) => {
      const OPTION = document.createElement('option');
      OPTION.textContent = a;
      OPTION.className = 'option-creator';
      MESSAGE.append(OPTION);
    });
  }

  _updateSelectTags() {
    let tags = [];
    this.model._ads.forEach((a) => { a.hashTags.forEach((b) => tags.push(b)); });

    tags = tags.sort().filter((item, index) => tags.indexOf(item) === index);
    const MESSAGE = document.getElementById('select-tag');
    tags.forEach((a) => {
      const OPTION = document.createElement('option');
      OPTION.className = 'option-tag';
      OPTION.textContent = a;
      MESSAGE.append(OPTION);
    });
  }

  _showMoreAdsButton() {
    const MORE_ADS_BUTTON = document.getElementById('load-more');
    if (this.model.size() <= 10) {
      MORE_ADS_BUTTON.hidden = true;
    } else {
      MORE_ADS_BUTTON.hidden = false;
    }
  }

  logout() {
    this._currentUser = null;
    const MESSAGE = document.getElementById('name');
    MESSAGE.innerText = 'Здравствуйте, Гость!';
    const AUTHORIZATION_BUTTON = document.getElementById('authorization');
    AUTHORIZATION_BUTTON.innerText = 'Войти';
    const ADD_BUTTON = document.getElementById('add');
    ADD_BUTTON.hidden = true;

    const EDIT_AD = document.getElementsByClassName('edit');
    Array.from(EDIT_AD).forEach((item) => { item.hidden = true; });
    const DELETE_AD = document.getElementsByClassName('delete');
    Array.from(DELETE_AD).forEach((item) => { item.hidden = true; });
    const LEAVE_REVIEW = document.getElementsByClassName('leave-review');
    Array.from(LEAVE_REVIEW).forEach((item) => { item.hidden = true; });
    const DELETE_REVIEW = document.getElementsByClassName('delete-review');
    Array.from(DELETE_REVIEW).forEach((item) => { item.hidden = true; });
  }

  _buildReview(reviewInfo) {
    const REVIEW = document.createElement('div');
    REVIEW.classList.add('review');
    REVIEW.innerHTML = `<div class = "username">${reviewInfo.username}:</div>
    <div class = "review-text">${reviewInfo.text}</div>`;
    if (reviewInfo.username === this._currentUser) {
      const DELETE_REVIEW_BUTTON = document.createElement('div');
      DELETE_REVIEW_BUTTON.innerHTML = ` </div>
      <button class="delete-review">Удалить отзыв</button>
      </div>`;
      REVIEW.append(DELETE_REVIEW_BUTTON);
    }
    return REVIEW;
  }

  _addReviews(NEW_ITEM, ad) {
    const REVIEWS = NEW_ITEM.querySelector('.reviews');
    if ((Object.prototype.hasOwnProperty.call(ad, 'reviews'))) {
      ad.reviews.forEach((a) => {
        const review = this._buildReview(a);
        REVIEWS.append(review);
      });
    } else {
      const REVIEW = document.createElement('span');
      REVIEW.classList.add('no-reviews');
      REVIEW.textContent = 'Нет отзывов';
      REVIEWS.append(REVIEW);
    }
  }

  _buildAd(item) {
    const TEMPLATE = document.getElementById('advertisement-template');
    const FRAGMENT = document.importNode(
      TEMPLATE.content,
      true,
    );

    const NEW_ITEM = FRAGMENT.firstElementChild;
    NEW_ITEM.id = item.id;
    NEW_ITEM.querySelector('.description').textContent = `Описание: ${item.description}`;
    NEW_ITEM.querySelector('.picture').setAttribute('src', item.photoLink || 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png');
    NEW_ITEM.querySelector('.created-date').textContent = `Дата публикации: ${item.createdAt}`;
    NEW_ITEM.querySelector('.vendor').textContent = `Поставщик: ${item.vendor}`;
    NEW_ITEM.querySelector('.tags').textContent = `Теги: ${item.hashTags.join(', ')}`;
    NEW_ITEM.querySelector('.discount').textContent = `-${item.discount}`;
    NEW_ITEM.querySelector('.link').textContent = `Ссылка на сайт поставщика: ${item.link}`;
    NEW_ITEM.querySelector('.until').textContent = `Предложение действует до: ${item.validUntil}`;
    if (item.rating !== 0) {
      NEW_ITEM.querySelector('.rating').textContent = `Рейтинг: ${item.rating}`;
    } else {
      NEW_ITEM.querySelector('.rating').textContent = 'Рейтинг: -';
    }

    return NEW_ITEM;
  }

  init() {
    this.clear();
    const NODE = document.getElementById('no-advertisements');
    if (this._currentUser) {
      this._updateGeneralButtons();
    }
    const CONTAINER = document.getElementById('advertisements');
    if (this.model.size() !== 0) {
      CONTAINER.removeChild(NODE);
    }
    this._showMoreAdsButton();
    let toAdd = this.model.getPage(0, this._adsNumber, {}, this._sortType);
    toAdd.forEach((a) => { const ITEM = this._buildAd(a); this._updateButtonsUnderAd(ITEM); this._addReviews(ITEM, a); CONTAINER.appendChild(ITEM); });
    this._updateSelectTags();
    this._updateSelectVendor();
  }

  addAd() {
    this.init();
  }

  showMoreAds() {
    if (this.model.size() > this._adsNumber) {
      this._adsNumber += 10;
    }
    this.init();
  }

  deleteAd(id) {
    const CONTAINER = document.getElementById('advertisements');
    const NODE = document.getElementById(id);
    CONTAINER.removeChild(NODE);
    this.init();
  }

  editAd(id, item) {
    this.deleteAd(id);
    this.addAd(item);
  }

  clear() {
    const CONTAINER = document.getElementById('advertisements');
    const MESSAGE = document.createElement('span');
    MESSAGE.className = 'no-advertisements';
    MESSAGE.textContent = 'Нет объявлений';
    MESSAGE.id = 'no-advertisements';

    const CONTAINER_TAGS = document.getElementById('select-tag');
    const CONTAINER_VENDORS = document.getElementById('select-creator');

    const TAGS = document.getElementsByClassName('option-tag');
    const VENDORS = document.getElementsByClassName('option-creator');

    let arrayTags = Array.from(TAGS);
    let arrayVendors = Array.from(VENDORS);
    arrayTags.forEach((a) => CONTAINER_TAGS.removeChild(a));
    arrayVendors.forEach((a) => CONTAINER_VENDORS.removeChild(a));
    while (CONTAINER.firstChild) {
      CONTAINER.removeChild(CONTAINER.firstChild);
    }

    CONTAINER.append(MESSAGE);
    this._showMoreAdsButton();
  }
}

class TestFunctions {
  constructor(_ads) {
    this.view = new View(_ads, new Model(_ads));
  }

  initAds() {
    this.view.logout();
    this.view.init();
  }

  clear() {
    this.view.model.clear();
    this.view.clear();
  }

  addAll(toAdd) {
    this.view.model.addAll(toAdd);
    this.view.init();
  }

  add(ad) {
    if (this.view.model.add(ad)) {
      this.view.addAd();
    }
  }

  edit(id, ad) {
    if (this.view.model.edit(id, ad)) {
      this.view.editAd(id, this.view.model.get(id));
    }
  }

  remove(id) {
    if (this.view.model.remove(id)) {
      this.view.deleteAd(id);
    }
  }

  login(name) {
    this.view.setUser(name);
  }

  changeSortType(newSortType) {
    this.view.setSortType(newSortType);
  }

  loadMore() {
    this.view.showMoreAds();
  }

  logout() {
    this.view.logout();
  }
}

let tf = new TestFunctions(ads);
tf.initAds();
