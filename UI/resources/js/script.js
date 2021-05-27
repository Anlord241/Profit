/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable strict */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line func-names
(function () {
  let ads = [
    {
      id: '1',
      title: 'Cкидка!!!',
      description: 'Скидка на все ноутбуки',
      createdAt: new Date('2021-01-21T12:00:00'),
      link: 'https://sila.by',
      vendor: 'Электросила',
      photoLink: 'https://sila.by/img/catalog2015/ntpk/tovar111378.jpg',
      hashTags: ['Техника'],
      discount: '20%',
      rating: 1,
      validUntil: new Date('2021-03-21T12:00:00'),
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 2, id: '1',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 3, id: '2',
        },
      ],
    },

    {
      id: '2',
      title: 'Cкидка!!!',
      description: 'Скидка на столы',
      createdAt: new Date('2021-02-21T12:00:00'),
      link: 'https://tables.com',
      vendor: 'Best Tables',
      hashTags: ['Мебель'],
      discount: '25%',
      validUntil: new Date('2021-04-21T12:00:00'),
      rating: 1.1,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 4, id: '3',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 5, id: '4',
        },
      ],
    },

    {
      id: '3',
      title: 'Cкидка!!!',
      description: 'Скидка на тетради',
      createdAt: new Date('2021-03-15T12:00:00'),
      link: 'https://m4.by',
      vendor: 'M4.BY',
      photoLink: 'https://img-gorod.ru/23/213/232135_preview.jpg',
      hashTags: ['Школа'],
      discount: '10%',
      validUntil: new Date('2021-04-22T12:00:00'),
      rating: 3.0,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 3, id: '5',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 2, id: '6',
        },
      ],
    },
    {
      id: '4',
      title: 'Cкидка!!!',
      description: 'Скидка на все игры',
      createdAt: new Date('2021-03-14T12:00:00'),
      link: 'https://store.steampowered.com/?l=russian',
      vendor: 'Steam',
      hashTags: ['Компьютер', 'Игры'],
      discount: '5%',
      validUntil: new Date('2021-02-21T12:00:00'),
      rating: 1.3,
    },

    {
      id: '5',
      title: 'Cкидка!!!',
      description: 'Скидка на цветы',
      createdAt: new Date('2021-02-13T12:00:00'),
      link: 'https://flowers.by',
      vendor: 'Мир цветов',
      photoLink: 'https://cdn2.flowwow.com/data/blog/1562599250_29351868.jpg',
      hashTags: ['Растения'],
      discount: '30%',
      validUntil: new Date('2022-03-25T12:00:00'),
      rating: 0.0,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 2, id: '7',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 1, id: '8',
        },
      ],
    },

    {
      id: '6',
      title: 'Cкидка!!!',
      description: 'Скидка на продукцию Xiaomi -10%',
      createdAt: new Date('2021-01-01T11:00:00'),
      link: 'https://5element.by',
      vendor: '5 элемент',
      hashTags: ['Техника'],
      discount: '10%',
      validUntil: new Date('2021-03-26T12:00:00'),
      rating: 1.5,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 4, id: '9',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 2, id: '10',
        },
      ],
    },

    {
      id: '7',
      title: 'Cкидка!!!',
      description: 'Скидка на обои',
      createdAt: new Date('2020-03-21T12:00:00'),
      link: 'https://wallpapers.by',
      vendor: 'Мир обоев',
      hashTags: ['Товары для дома'],
      discount: '15%',
      validUntil: new Date('2021-04-27T12:00:00'),
      rating: 0.0,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 3, id: '11',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 2, id: '12',
        },
      ],
    },

    {
      id: '8',
      title: 'Cкидка!!!',
      description: 'Скидка на подушки -5%',
      createdAt: new Date('2019-03-21T12:00:00'),
      link: 'https://goodsforsleep.by',
      vendor: 'Товары для сна',
      hashTags: ['Сон'],
      discount: '5%',
      validUntil: new Date('2021-02-28T12:00:00'),
      rating: 1.7,
      reviews: [{
        text: 'Cool!', username: 'Вася', rating: 3, id: '13',
      }],
    },

    {
      id: '9',
      title: 'Cкидка!!!',
      description: 'Скидка на все моющие средства до конца года -10%',
      createdAt: new Date('2021-02-26T12:00:00'),
      link: 'https://ostrov-chistoty.by/',
      vendor: 'Остров чистоты',
      photoLink:
        'https://ostrov-chistoty.by/files/settingssite/site_header-site_header-ostrov_new.png',
      hashTags: ['Быт', 'Товары для дома'],
      discount: '10%',
      validUntil: new Date('2021-04-30T12:00:00'),
      rating: 0.0,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 3, id: '14',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 1, id: '15',
        },
      ],
    },

    {
      id: '10',
      title: 'Cкидка!!!',
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
      title: 'Cкидка!!!',
      description: 'Скидка на продукцию собственного производства',
      createdAt: new Date('2021-04-01T12:00:00'),
      link: 'https://evroopt.by/',
      vendor: 'Евроопт',
      hashTags: ['Еда'],
      discount: '10%',
      validUntil: new Date('2021-03-25T12:00:00'),
      rating: 0.0,
      reviews: [{
        text: 'Cool!', username: 'Вася', rating: 4, id: '16',
      }],
    },

    {
      id: '12',
      title: 'Cкидка!!!',
      description: 'Скидка на письменные принадлежности',
      createdAt: new Date('2021-04-02T12:00:00'),
      link: 'https://m4.by/',
      vendor: 'M4.BY',
      hashTags: ['Школа'],
      discount: '10%',
      validUntil: new Date('2021-04-21T12:00:00'),
      rating: 2.1,
      reviews: [{
        text: 'Cool!', username: 'Вася', rating: 2, id: '17',
      }],
    },

    {
      id: '13',
      title: 'Cкидка!!!',
      description: 'Скидка на билеты в кино',
      createdAt: new Date('2021-04-04T12:00:00'),
      link: 'https://kvitki.by/',
      vendor: 'Kvitki.by',
      photoLink:
        'https://png.pngtree.com/element_our/png_detail/20181022/movie-cinema-entertainment-logo-with-neon-sign-effect-vector-illustration-png_199458.jpg',
      hashTags: ['Развлечения'],
      discount: '20%',
      validUntil: new Date('2021-04-21T12:00:00'),
      rating: 0.0,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 1, id: '18',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 3, id: '19',
        },
      ],
    },
    {
      id: '14',
      title: 'Cкидка!!!',
      description: 'Скидка на двери',
      createdAt: new Date('2021-03-03T13:00:00'),
      link: 'https://doors.by/',
      vendor: 'Мир дверей',
      hashTags: ['Строительство'],
      discount: '10%',
      validUntil: new Date('2021-04-21T12:00:00'),
      rating: 2.3,
      reviews: [{
        text: 'Cool!', username: 'Вася', rating: 2, id: '20',
      }],
    },

    {
      id: '15',
      title: 'Cкидка!!!',
      description: 'Скидка на гробы',
      createdAt: new Date('2021-03-15T14:00:00'),
      link: 'https://coffins.by/',
      vendor: 'Ритуал',
      photoLink:
        'https://images.by.prom.st/58699067_w640_h640_grob-mod-vs-1.jpg',
      hashTags: ['Ритуальные услуги'],
      discount: '30%',
      validUntil: new Date('2021-12-31T12:00:00'),
      rating: 0.0,
      reviews: [
        {
          text: 'Отличные гробы!', username: 'Вася', rating: 3, id: '21',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 2, id: '22',
        },
      ],
    },

    {
      id: '16',
      title: 'Cкидка!!!',
      description: 'Скидка на фрукты',
      createdAt: new Date('2021-03-16T15:00:00'),
      link: 'https://fruit.by/',
      vendor: 'Фрукты из Турции',
      hashTags: ['Еда'],
      discount: '35%',
      validUntil: new Date('2021-03-21T12:00:00'),
      rating: 2.5,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 4, id: '23',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 5, id: '24',
        },
      ],
    },

    {
      id: '17',
      title: 'Cкидка!!!',
      description: 'Скидка на стиральные машины',
      createdAt: new Date('2021-03-13T16:00:00'),
      link: 'https://www.21vek.by/',
      vendor: '21 век',
      photoLink:
        'https://avatars.mds.yandex.net/get-mpic/1715213/img_id3262544086590258454.jpeg/orig',
      hashTags: ['Быт', 'Техника'],
      discount: '10%',
      validUntil: new Date('2021-04-21T12:00:00'),
      rating: 0.0,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 2, id: '25',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 4, id: '26',
        },
      ],
    },

    {
      id: '18',
      title: 'Cкидка!!!',
      description: 'Скидка на изделия из золота -10%',
      createdAt: new Date('2021-04-19T12:00:00'),
      link: 'https://www.ziko.by/',
      photoLink:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAT8LgxaFLpYpGmXt-WVwgLygD89fgYczp8w&usqp=CAU',
      vendor: 'Ziko.by',
      hashTags: ['Аксессуары', 'Драгоценности'],
      discount: '10%',
      validUntil: new Date('2021-04-21T12:00:00'),
      rating: 2.7,
      reviews: [{
        text: 'Cool!', username: 'Вася', rating: 2, id: '27',
      }],
    },

    {
      id: '19',
      title: 'Cкидка!!!',
      description: 'Скидка на ковры',
      createdAt: new Date('2021-04-25T12:00:00'),
      link: 'https://www.carpets.by/',
      vendor: 'Мир ковров',
      photoLink:
        'https://bobrujsk-praktik.by/upload/iblock/cdb/cdb1eeb9a691d4a5ab4c7c999dded1c0.jpg',
      hashTags: ['Товары для дома'],
      discount: '10%',
      rating: 0.0,
      validUntil: new Date('2021-12-31T12:00:00'),
      reviews: [{
        text: 'Cool!', username: 'Вася', rating: 4, id: '28',
      }],
    },

    {
      id: '20',
      title: 'Cкидка!!!',
      description: 'Скидка на защитные маски -35%',
      createdAt: new Date('2021-04-30T12:00:00'),
      link: 'https://pharma.by/',
      vendor: 'Белфармация',
      photoLink:
        'https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg',
      hashTags: ['Медицина'],
      discount: '35%',
      validUntil: new Date('2021-12-31T12:00:00'),
      rating: 2.9,
      reviews: [
        {
          text: 'Cool!', username: 'Вася', rating: 2, id: '29',
        },
        {
          text: 'Я Никита!', username: 'Никита', rating: 5, id: '30',
        },
      ],
    },
  ];

  class Model {
    constructor(_ads) {
      this._ads = _ads.slice();
      if (!localStorage.getItem('ads')) {
        this.save();
        localStorage.setItem('lastAdId', '20');
        localStorage.setItem('lastReviewId', '30');
      } else {
        this.restore();
      }
    }

    save() {
      localStorage.setItem('ads', JSON.stringify(this._ads));
    }

    restore() {
      this._ads = JSON.parse(localStorage.getItem('ads'));
      this._ads.forEach((a) => (a.createdAt = new Date(a.createdAt)));
      this._ads.forEach((a) => (a.validUntil = new Date(a.validUntil)));
      let mode = localStorage.getItem('mode');
      if (mode === 'add') {
        if (localStorage.getItem('toAdd')) {
          let toAdd = JSON.parse(localStorage.getItem('toAdd'));
          toAdd.createdAt = new Date(toAdd.createdAt);
          toAdd.validUntil = new Date(toAdd.validUntil);
          this.add(toAdd);
        }
      } else if (mode === 'edit') {
        if (localStorage.getItem('toAdd')) {
          let toAdd = JSON.parse(localStorage.getItem('toAdd'));
          toAdd.createdAt = new Date(toAdd.createdAt);
          toAdd.validUntil = new Date(toAdd.validUntil);
          this.edit(toAdd.id, toAdd);
        }
      }

      localStorage.removeItem('toAdd');
    }

    size() {
      return this._ads.length;
    }

    clear() {
      this._ads = [];
      this.save();
      localStorage.removeItem('id');
    }

    addAll(toAdd) {
      let failedToAdd = [];
      toAdd.forEach((item) => {
        if (!this.add(item)) {
          failedToAdd.push(item);
        }
      });
      this.save();
      return failedToAdd;
    }

    get advertisements() {
      return this._ads;
    }

    remove(id) {
      let item = this._ads.find((a) => a.id === id);
      if (item) {
        this._ads.splice(
          this._ads.findIndex((a) => item === a),
          1,
        );
        this.save();
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

    _containsTags(firstArray, secondArray) {
      // eslint-disable-next-line consistent-return
      let ok = false;
      firstArray.forEach((itemA) => {
        if (secondArray.indexOf(itemA) !== -1) {
          ok = true;
        }
      });
      return ok;
    }

    getPage(skip = 0, top = 10, filterConfig = {}, sortType = 'Date') {
      let toReturn = this._ads;
      if (sortType === 'Date') {
        toReturn.sort(this._compareDate);
      } else if (sortType === 'Rating') {
        toReturn.sort(this._compareRating);
      }

      if (Object.prototype.hasOwnProperty.call(filterConfig, 'vendor')) {
        if (filterConfig.vendor !== null) {
          toReturn = toReturn.filter(
            (item) => item.vendor === filterConfig.vendor,
          );
        }
      }

      if (Object.prototype.hasOwnProperty.call(filterConfig, 'tags')) {
        if (filterConfig.tags.length !== 0) {
          toReturn = toReturn.filter((item) => this._containsTags(item.hashTags, filterConfig.tags));
        }
      }
      if (
        Object.prototype.hasOwnProperty.call(filterConfig, 'from')
        && filterConfig.from !== null
      ) {
        if (
          Object.prototype.hasOwnProperty.call(filterConfig, 'to')
          && filterConfig.to !== null
        ) {
          toReturn = toReturn.filter(
            (item) => filterConfig.from <= item.createdAt
              && item.createdAt <= filterConfig.to,
          );
        } else {
          toReturn = toReturn.filter(
            (item) => item.createdAt >= filterConfig.from,
          );
        }
      } else if (
        Object.prototype.hasOwnProperty.call(filterConfig, 'to')
        && filterConfig.to !== null
      ) {
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
      if (!Object.prototype.hasOwnProperty.call(item, 'title')) {
        console.log('The element has no title!');
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
        console.log('Vendor has illegal type');
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
        if (typeof item.photoLink !== 'string' && item.photoLink !== null) {
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
        if (
          !item.reviews.every(
            (a) => !Object.prototype.hasOwnProperty.call(item, 'user')
              || !Object.prototype.hasOwnProperty.call(item, 'text'),
          )
        ) {
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
      this.save();
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

      if (Object.prototype.hasOwnProperty.call(item, 'title')) {
        editedItem.title = item.title;
      }
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
      this.save();
      return true;
    }

    removeReview(id) {
      let review;
      this._ads.forEach((item) => {
        if (Object.prototype.hasOwnProperty.call(item, 'reviews')) {
          review = item.reviews.find((a) => a.id === id);

          if (review) {
            item.reviews.splice(
              item.reviews.findIndex((a) => a === review),
              1,
            );
          }
        }
      });
      this.save();
    }
  }

  class View {
    constructor(_ads, model) {
      this.model = model;
      this.vendorFilter = null;
      this.currentUser = null;
      this._sortType = 'Date';
      this._adsNumber = 10;
      this.filterFromDate = null;
      this.filterToDate = null;
      this.size = 0;
      this.filterTags = [];
    }

    switchToLogInPage() {
      const main = document.getElementById('main');
      main.innerHTML = `
      <div class="hello"><span>С возвращением!</span></div>
      <div class="authorization">
        <span class="error-authorization" id="error-authorization" hidden
          >Неверное имя пользователя или пароль</span
        >
        <form name="authorization" id="authorization-form">
          <p>Имя пользователя:</p>
          <input type="text" id="username" name="username" />
          <p>Пароль:</p>
          <input type="password" disabled />
          <input type="submit" class="login" id="login" value="Войти" />
        </form>
      </div>`;

      const userStatus = document.getElementById('user-status');
      userStatus.hidden = true;

      const styles = document.getElementById('styles');
      styles.setAttribute('href', 'resources/css/login.css');

      const script = document.createElement('script');
      script.setAttribute('src', 'resources/js/Login.js');
      main.append(script);
    }

    switchToAddAdPage() {
      const addButton = document.getElementById('add');
      addButton.hidden = true;
      const main = document.getElementById('main');
      main.innerHTML = `
      <div class="add-advertisement">
        <form name="add" id="add-form">
          <div>
            <div class="information">
              <p>
                <span>Имя поставщика:</span>
                <span class="creator-name" id="creator-name"></span>
              </p>
              <p>
                <span>Название услуги:</span>
                <input name="title" required /> <span class="star"> *</span>
              </p>
              <p>
                <span>Описание:</span>
                <textarea name="description" required></textarea
                ><span class="star"> *</span>
              </p>
              <p>
                <span>Ссылка на сайт поставщика:</span>
                <input name="link" required /><span class="star"> *</span>
              </p>
              <span>Теги: </span>
              <span id="tags" class="tags">Не выбраны</span
              ><span class="star"> *</span>
              <span class="error-tags" id="error-tags" hidden>
                Выберите минимум 1 тег!</span
              >

              <p>
                Введите тег: <input type="text" id="tag" />
                <input
                  type="button"
                  id="add-tag"
                  class="add-tag"
                  value="Добавить тег"
                />
                <input
                  type="button"
                  id="clear-tags"
                  class="clear-tags"
                  value="Сброс"
                />
              </p>

              <p>
                <span>Размер скидки:</span>
                <input
                  name="discount"
                  onkeypress="if(isNaN(String.fromCharCode(event.keyCode))) return false;"
                  required
                />
                %
                <span class="star"> *</span>
              </p>

              <p>
                <span>Срок действия предложения: по </span>
                <input name="date" type="date" class="calendar" required />
                <span class="star"> *</span>
              </p>

              <p>
                <span>Дата и время добавления:</span>
                <span class="current-date" id="current-date"></span>
              </p>
              <p><span class="error-message" id="error-message"></span></p>
              <p><span class="star">*</span> - обязательное поле</p>
            </div>

            <img
              class="picture"
              id="picture"
              src="https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png"
              height="250px"
              width="180px"
            />
            <input type="file" name="file" id="file" class="file" />
            <p>
              <input
                type="button"
                class="delete-picture"
                id="delete-picture"
                value="Удалить фото"
                hidden
              />
            </p>
          </div>

          <input type="submit" class="save" id="save" value="Сохранить" />
        </form>
      </div>
     `;

      const styles = document.getElementById('styles');
      styles.setAttribute('href', 'resources/css/AddAdvertisement.css');

      const script = document.createElement('script');
      script.setAttribute('src', 'resources/js/AddAdvertisement.js');
      main.append(script);
    }

    switchToAddReviewPage() {
      const addButton = document.getElementById('add');
      addButton.hidden = true;
      const main = document.getElementById('main');
      main.innerHTML = `
      <main>
      <div class="add-review">
        <form name="add" id="add-form">
        <p>
            Объявление: <span class = "ad-title" id = "ad-title"></span>
        </p>
        <p>
            Имя пользователя: <span class = "username" id = "username"></span>
        </p>

        <p>
           <span style = "float:left"> Текст отзыва:</span> 
            <textarea name="text" class = "text" required></textarea>  <span class="star"> *</span>
        </p>

        
        <p>
            <span style = "float:left">Оценка:</span>
            
            <div class="rating">
                
                <input type="radio" id="star-5" name="five" value="5"/>
                <label for="star-5" title="5"></label>
                <input type="radio" id="star-4" name="four" value="4"/>
                <label for="star-4" title="4"></label>    
                <input type="radio" id="star-3" name="three" value="3"/>
                <label for="star-3" title="3"></label>  
                <input type="radio" id="star-2" name="two" value="2"/>
                <label for="star-2" title="2"></label>    
                <input type="radio" id="star-1" name="one" value="1"/>
                <label for="star-1" title="1"></label>
                <span class="star"> *</span>
            </div>
            <span class = error-rating id = error-rating hidden>Оцените объявление!</span>
         </p>

         <p>
            <span>Дата и время добавления:</span>
            <span class="current-date" id="current-date"></span>
          </p>
          <p><span class="star">*</span> - обязательное поле</p>
          <input type="submit" class="save" id="save" value="Сохранить" />
        </form>
      </div>
      `;

      const styles = document.getElementById('styles');
      styles.setAttribute('href', 'resources/css/addReview.css');

      const script = document.createElement('script');
      script.setAttribute('src', 'resources/js/addReview.js');
      main.append(script);
    }

    setSortType(sortType) {
      this._sortType = sortType;
      this.init();
    }

    getUserName() {
      return this.currentUser;
    }

    clearTags() {
      this.filterTags = [];
      this.init();
    }

    addTag(tag) {
      if (this.filterTags.indexOf(tag) === -1) {
        this.filterTags.push(tag);
        this.filterTags.sort();
      }
      this.init();
    }

    _updateButtonsUnderAd(ad) {
      if (!this.currentUser) {
        ad.querySelector('.leave-review').hidden = true;
      }
      if (
        ad.querySelector('.vendor').textContent
        !== `Поставщик: ${this.currentUser}`
      ) {
        ad.querySelector('.delete').hidden = true;
        ad.querySelector('.edit').hidden = true;
      }
    }

    _updateGeneralButtons() {
      const MESSAGE = document.getElementById('name');
      MESSAGE.innerText = `Здравствуйте, ${this.currentUser}!`;

      const AUTHORIZATION_BUTTON = document.getElementById('authorization');
      AUTHORIZATION_BUTTON.innerText = 'Выйти';

      const ADD_BUTTON = document.getElementById('add');
      ADD_BUTTON.hidden = false;

      const LEAVE_REVIEW = document.getElementsByClassName('leave-review');
      Array.from(LEAVE_REVIEW).forEach((item) => {
        item.hidden = false;
      });
    }

    setUser(name) {
      this.logout();
      this.currentUser = name;
      this.init();
    }

    _updateSelectVendor() {
      let vendors = [];
      this.model._ads.forEach((a) => vendors.push(a.vendor));

      vendors = vendors
        .sort()
        .filter((item, index) => vendors.indexOf(item) === index);
      const SELECT = document.getElementById('select-creator');

      vendors.forEach((a) => {
        const OPTION = document.createElement('option');
        OPTION.textContent = a;
        OPTION.className = 'option-creator';
        SELECT.append(OPTION);
      });
      if (this.vendorFilter) {
        SELECT.value = this.vendorFilter;
      }
    }

    _updateSelectTags() {
      let tags = [];
      this.model._ads.forEach((a) => {
        a.hashTags.forEach((b) => tags.push(b));
      });

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
      if (this.size <= this._adsNumber) {
        MORE_ADS_BUTTON.hidden = true;
      } else {
        MORE_ADS_BUTTON.hidden = false;
      }
    }

    logout() {
      this.currentUser = null;
      const MESSAGE = document.getElementById('name');
      MESSAGE.innerText = 'Здравствуйте, Гость!';
      const AUTHORIZATION_BUTTON = document.getElementById('authorization');
      AUTHORIZATION_BUTTON.innerText = 'Войти';
      const ADD_BUTTON = document.getElementById('add');
      ADD_BUTTON.hidden = true;

      const EDIT_AD = document.getElementsByClassName('edit');
      Array.from(EDIT_AD).forEach((item) => {
        item.hidden = true;
      });
      const DELETE_AD = document.getElementsByClassName('delete');
      Array.from(DELETE_AD).forEach((item) => {
        item.hidden = true;
      });
      const LEAVE_REVIEW = document.getElementsByClassName('leave-review');
      Array.from(LEAVE_REVIEW).forEach((item) => {
        item.hidden = true;
      });
      const DELETE_REVIEW = document.getElementsByClassName('delete-review');
      Array.from(DELETE_REVIEW).forEach((item) => {
        item.hidden = true;
      });
    }

    _buildReview(reviewInfo) {
      const REVIEW = document.createElement('div');
      REVIEW.classList.add('review');
      REVIEW.innerHTML = `<div class = "username">${reviewInfo.username}:</div>
    <div class = "review-text">${reviewInfo.text}</div>`;
      REVIEW.id = reviewInfo.id;
      if (reviewInfo.username === this.currentUser) {
        const DELETE_REVIEW_BUTTON = document.createElement('div');
        DELETE_REVIEW_BUTTON.innerHTML = ` </div>
      <button class="delete-review" id = "delete-review">Удалить отзыв</button>
      </div>`;
        REVIEW.append(DELETE_REVIEW_BUTTON);
      }
      return REVIEW;
    }

    _addReviews(NEW_ITEM, ad) {
      const REVIEWS = NEW_ITEM.querySelector('.reviews');
      if (Object.prototype.hasOwnProperty.call(ad, 'reviews') && ad.reviews.length > 0) {
        for (let i = 0; i < ad.reviews.length; i += 1) {
          if (i < 5) {
            const review = this._buildReview(ad.reviews[i]);
            REVIEWS.append(review);
          }
        }
      } else {
        const REVIEW = document.createElement('span');
        REVIEW.classList.add('no-reviews');
        REVIEW.textContent = 'Нет отзывов';
        REVIEWS.append(REVIEW);
      }
    }

    _countRating(ad) {
      let rating = 0;
      if (Object.prototype.hasOwnProperty.call(ad, 'reviews')) {
        if (ad.reviews.length !== 0) {
          ad.reviews.forEach((item) => {
            rating += item.rating;
          });
          rating /= ad.reviews.length;
        }
      }
      return rating;
    }

    _buildAd(item) {
      let dateOptions = {
        year: 'numeric', month: 'long', day: 'numeric',
      };
      const TEMPLATE = document.getElementById('advertisement-template');
      const FRAGMENT = document.importNode(TEMPLATE.content, true);

      const NEW_ITEM = FRAGMENT.firstElementChild;
      NEW_ITEM.id = item.id;
      NEW_ITEM.querySelector('.advertisement-title').textContent = item.title;
      NEW_ITEM.querySelector(
        '.description',
      ).textContent = `Описание: ${item.description}`;
      NEW_ITEM.querySelector('.picture').setAttribute(
        'src',
        item.photoLink
          || 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png',
      );
      NEW_ITEM.querySelector(
        '.created-date',
      ).textContent = `Дата публикации: ${item.createdAt.toLocaleDateString('Ru', dateOptions)}`;
      NEW_ITEM.querySelector(
        '.vendor',
      ).textContent = `Поставщик: ${item.vendor}`;
      NEW_ITEM.querySelector('.tags').textContent = `Теги: ${item.hashTags.join(
        ', ',
      )}`;
      NEW_ITEM.querySelector('.discount').textContent = `-${item.discount}`;
      NEW_ITEM.querySelector(
        '.link',
      ).textContent = `Ссылка на сайт поставщика: ${item.link}`;
      NEW_ITEM.querySelector(
        '.until',
      ).textContent = `Предложение действует до ${item.validUntil.toLocaleDateString('Ru', dateOptions)}`;
      item.rating = this._countRating(item);
      if (item.rating !== 0) {
        NEW_ITEM.querySelector(
          '.rating',
        ).textContent = `Рейтинг: ${item.rating}`;
      } else {
        NEW_ITEM.querySelector('.rating').textContent = 'Рейтинг: -';
      }

      return NEW_ITEM;
    }

    init() {
      this.clear();
      const NODE = document.getElementById('no-advertisements');
      if (this.currentUser) {
        this._updateGeneralButtons();
      }
      const CONTAINER = document.getElementById('advertisements');
      let toAdd = this.model.getPage(
        0,
        this._adsNumber,
        {
          tags: this.filterTags,
          vendor: this.vendorFilter,
          from: this.filterFromDate,
          to: this.filterToDate,
        },
        this._sortType,
      );
      this.size = this.model.getPage(
        0,
        this.model.size(),
        {
          tags: this.filterTags,
          vendor: this.vendorFilter,
          from: this.filterFromDate,
          to: this.filterToDate,
        },
        this._sortType,
      ).length;
      const SELECTED_TAGS = document.getElementById('selected-tags');
      if (this.filterTags.length === 0) {
        SELECTED_TAGS.textContent = 'Теги: Не выбрано';
      } else {
        SELECTED_TAGS.textContent = `Теги: ${this.filterTags.join(', ')}`;
      }
      this._showMoreAdsButton();
      toAdd.forEach((a) => {
        const ITEM = this._buildAd(a);
        this._updateButtonsUnderAd(ITEM);
        this._addReviews(ITEM, a);
        CONTAINER.appendChild(ITEM);
      });
      this._updateSelectTags();
      this._updateSelectVendor();

      if (this.size !== 0) {
        CONTAINER.removeChild(NODE);
      }
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

    setVendor(vendor) {
      this.vendorFilter = vendor;
      this.init();
    }

    clear() {
      this.size = 0;
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

    setFromDate(date) {
      this.filterFromDate = date;
      this.init();
    }

    setToDate(date) {
      this.filterToDate = date;
      this.init();
    }
  }

  class Controller {
    constructor(_ads) {
      this.view = new View(_ads, new Model(_ads));
    }

    getUserName() {
      return this.view.getUserName();
    }

    initAds() {
      if (localStorage.key('user')) {
        this.view.setUser(localStorage.getItem('user'));
      } else {
        this.logout();
      }
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

    addTag(tag) {
      this.view.addTag(tag);
    }

    loadMore() {
      this.view.showMoreAds();
    }

    logout() {
      localStorage.removeItem('user');
      this.view.logout();
    }

    setVendor(vendor) {
      this.view.setVendor(vendor);
    }

    setFromDate(date) {
      this.view.setFromDate(date);
    }

    setToDate(date) {
      this.view.setToDate(date);
    }

    get(id) {
      return this.view.model.get(id);
    }

    clearTags() {
      this.view.clearTags();
    }

    removeReview(id) {
      this.view.model.removeReview(id);
      this.view.init();
    }
  }
  let buttonData = document.getElementById('data-sort');
  let buttonRating = document.getElementById('rating-sort');
  let buttonLoadMore = document.getElementById('load-more');
  let buttonAuthorization = document.getElementById('authorization');
  let buttonClearCreators = document.getElementById('clear-creators');
  let selectVendor = document.getElementById('select-creator');
  let selectTag = document.getElementById('select-tag');
  let from = document.getElementById('from');
  let to = document.getElementById('to');
  let buttonAdd = document.getElementById('add');
  let buttonAddTag = document.getElementById('add-tag');
  let buttonClearDate = document.getElementById('clear-date');
  let buttonClearTags = document.getElementById('clear-tags');

  let controller = new Controller(ads);

  function chooseDataSort() {
    controller.changeSortType('Date');
  }

  function chooseRatingSort() {
    controller.changeSortType('Rating');
  }

  function logInOrLogOut() {
    if (controller.getUserName()) {
      controller.logout();
    } else {
      controller.view.switchToLogInPage();
    }
  }
  function add() {
    controller.view.switchToAddAdPage();
  }

  function loadMore() {
    controller.loadMore();
  }

  function filterByVendor() {
    if (selectVendor.selectedIndex === 0) {
      controller.setVendor(null);
    } else {
      controller.setVendor(selectVendor.value);
    }
  }

  function clearCreators() {
    controller.setVendor(null);
  }

  function filterFromDate() {
    controller.setFromDate(new Date(from.value));
  }
  function filterToDate() {
    controller.setToDate(new Date(to.value));
  }
  function clearDate() {
    controller.setFromDate(null);
    controller.setToDate(null);
    to.value = null;
    from.value = null;
  }

  function addTag() {
    if (selectTag.selectedIndex !== 0) {
      controller.addTag(selectTag.value);
    }
  }

  function clearTags() {
    controller.clearTags();
  }
  buttonData.addEventListener('click', chooseDataSort);
  buttonRating.addEventListener('click', chooseRatingSort);
  buttonLoadMore.addEventListener('click', loadMore);
  buttonAuthorization.addEventListener('click', logInOrLogOut);
  buttonClearCreators.addEventListener('click', clearCreators);
  selectVendor.addEventListener('change', filterByVendor);
  from.addEventListener('change', filterFromDate);
  to.addEventListener('change', filterToDate);
  buttonClearDate.addEventListener('click', clearDate);
  buttonClearTags.addEventListener('click', clearTags);
  buttonAddTag.addEventListener('click', addTag);
  buttonAdd.addEventListener('click', add);

  let adsNodes = document.querySelector('.advertisements');
  function handleDeleteBtnClick(event) {
    if (event.target.getAttribute('id') === 'delete') {
      let id = event.target.parentElement.parentElement.getAttribute('id');
      controller.remove(id);
    }
    if (event.target.getAttribute('id') === 'edit') {
      let id = event.target.parentElement.parentElement.getAttribute('id');
      localStorage.setItem('toEdit', JSON.stringify(controller.get(id)));
      controller.view.switchToAddAdPage();
    }
    if (event.target.getAttribute('id') === 'leave-review') {
      let id = event.target.parentElement.parentElement.getAttribute('id');
      localStorage.setItem('toAddReview', JSON.stringify(controller.get(id)));
      controller.view.switchToAddReviewPage();
    }
    if (event.target.getAttribute('id') === 'delete-review') {
      let review = event.target.parentElement.parentElement;
      review.parentElement.removeChild(review);
      controller.removeReview(review.id);
    }
  }
  adsNodes.addEventListener('click', handleDeleteBtnClick);

  controller.initAds();
}());
