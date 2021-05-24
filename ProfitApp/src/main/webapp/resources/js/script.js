/* eslint-disable no-return-assign */
/* eslint-disable max-len */
/* eslint-disable strict */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable class-methods-use-this */
// eslint-disable-next-line func-names

 (function () {

  class PostService {

    async add(toAdd) {
      let toReturn = await fetch(`http://localhost:8080/ads?type=add`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(toAdd)
      });
      if (!toReturn.ok) throw new Error(toReturn.statusText);
      return toReturn;
    }

    async edit(id, toEdit) {
      let toReturn = await fetch(`http://localhost:8080/ads?id=${id}&type=edit`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(toEdit)
      });
      if (!toReturn.ok) throw new Error(toReturn.statusText);
      return toReturn;
    }

    async remove(id) {
      let toReturn = await fetch(`http://localhost:8080/ads?id=${id}`, {method: 'DELETE'});
      if (!toReturn.ok) throw new Error(toReturn.statusText);
      return toReturn;
    }

    async restore() {
      let mode = localStorage.getItem('mode');
      let toReturn;
      if (mode === 'add') {
        if (localStorage.getItem('toAdd')) {
          let toAdd = JSON.parse(localStorage.getItem('toAdd'));
          toAdd.createdAt = new Date(toAdd.createdAt);
          toAdd.validUntil = new Date(toAdd.validUntil);
          toReturn = await this.add(toAdd);
          if (!toReturn.ok) throw new Error(toReturn.statusText);
        }
      } else if (mode === 'edit') {
        if (localStorage.getItem('toAdd')) {
          let toAdd = JSON.parse(localStorage.getItem('toAdd'));
          toAdd.createdAt = new Date(toAdd.createdAt);
          toAdd.validUntil = new Date(toAdd.validUntil);
          toReturn = await this.edit(toAdd.id, toAdd);
          if (!toReturn.ok) throw new Error(toReturn.statusText);
        }
      } else {
        toReturn = new Promise(null);
      }

      localStorage.removeItem("toAdd");

      return toReturn;
    }

    async getPage(skip = 0, top = 10, filterConfig = {}, sortType = 'Date') {
      let toReturn = await fetch(`http://localhost:8080/ads?skip=${skip}&top=${top}&sortType=${sortType}&type=search`, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(filterConfig)
      });
      if (!toReturn.ok) throw new Error(toReturn.statusText);
      return toReturn;
    }

    async get(id) {
      let toReturn = await fetch(`http://localhost:8080/ads?id=${id}`, {method: 'GET', mode: 'no-cors'});
      if (!toReturn.ok) throw new Error(toReturn.statusText);
      return toReturn;
    }


  }

  class View {
    constructor(postService) {
      this.postService = postService;
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
      styles.setAttribute('href', 'resources/css/Login.css');

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
      styles.setAttribute('href', 'resources/css/AddReview.css');

      const script = document.createElement('script');
      script.setAttribute('src', 'resources/js/AddReview.js');
      main.append(script);
    }

    switchToErrorPage() {
      const addButton = document.getElementById('add');
      addButton.hidden = true;
      const main = document.getElementById('main');
      main.innerHTML = `

    <div class = "error">
    <div class = "error-title">ERROR :(</div>
    <div class = "error-message">
        <p>Видимо, что-то пошло не так,</p>
        <p>однако не стоит волноваться,</p>
        <p>так как мы уже работаем над этим!</p>
    </div>
    <button class = "to-main-page" id = "to-main-page">На главную страницу</div>
    </div>
      `;
      const styles = document.getElementById('styles');
      styles.setAttribute('href', 'resources/css/error.css');
    }
    setSortType(sortType) {
      this._sortType = sortType;
    }

    getUserName() {
      return this.currentUser;
    }

    clearTags() {
      this.filterTags = [];
    }

    addTag(tag) {
      if (this.filterTags.indexOf(tag) === -1) {
        this.filterTags.push(tag);
        this.filterTags.sort();
      }
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
      //this.init();
    }

    _updateSelectVendor(ads) {
      let vendors = [];
      ads.forEach((a) => vendors.push(a.vendor));

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

    _updateSelectTags(ads) {
      let tags = [];
      ads.forEach((a) => {
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

    _showMoreAdsButton(ads) {
      const MORE_ADS_BUTTON = document.getElementById('load-more');
      if (ads.length <= this._adsNumber) {
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
      ).textContent = `Дата публикации: ${new Date(item.createdAt).toLocaleDateString('Ru', dateOptions)}`;
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
      ).textContent = `Предложение действует до ${new Date(item.validUntil).toLocaleDateString('Ru', dateOptions)}`;
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

    init(toAdd) {
      this.clear();
      const NODE = document.getElementById('no-advertisements');
      if (this.currentUser) {
        this._updateGeneralButtons();
      }
      const CONTAINER = document.getElementById('advertisements');

      const SELECTED_TAGS = document.getElementById('selected-tags');
      if (this.filterTags.length === 0) {
        SELECTED_TAGS.textContent = 'Теги: Не выбрано';
      } else {
        SELECTED_TAGS.textContent = `Теги: ${this.filterTags.join(', ')}`;
      }
      toAdd.forEach((a) => {
        const ITEM = this._buildAd(a);
        this._updateButtonsUnderAd(ITEM);
        this._addReviews(ITEM, a);
        CONTAINER.appendChild(ITEM);
      });

    }

    addAd() {
      this.init();
    }

    showMoreAds() {
      if (this.model.size() > this._adsNumber) {
        this._adsNumber += 10;
      }
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
    }

    removeNoAdsMessage(){
      const NODE = document.getElementById('no-advertisements');
      const CONTAINER = document.getElementById('advertisements');
      CONTAINER.removeChild(NODE);
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
    }

    setFromDate(date) {
      this.filterFromDate = date;
    }

    setToDate(date) {
      this.filterToDate = date;
    }
  }

  class Controller {
    constructor() {
      this.view = new View(new PostService());
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
      this.restore();
      this.init();
    }


    remove(id) {
      if (this.view.postService.remove(id)) {
        this.view.deleteAd(id);
      }
      this.init();
    }


    updateVendors() {
      this.view.postService.getPage(
          0,
          100,
          {},
          this.view._sortType,
      ).then((response) => {
        return response.json();
      }).then((data) => {
        this.view._updateSelectVendor(data);
      }).catch(() => {
        this.view.switchToErrorPage()
      });
    }

    updateTags() {
      const INFINITY = 10000;
      this.view.postService.getPage(
          0,
          INFINITY,
          {},
          this.view._sortType,
      ).then((response) => {
        return response.json();
      }).then((data) => {
        this.view._updateSelectTags(data);
      }).catch(() => {
        this.view.switchToErrorPage()
      });
    }

    showMoreAdsButton() {
      const INFINITY = 10000;
      this.view.postService.getPage(
          0,
          INFINITY,
          {},
          this.view._sortType,
      ).then((response) => {
        return response.json();
      }).then((data) => {
        this.view._showMoreAdsButton(data);
      }).catch(() => {
        this.view.switchToErrorPage()
      });
    }

    restore(){
    this.view.postService.restore().then(()=>{this.init()}).catch(() => {
      this.view.switchToErrorPage()
    });
    }

    init() {
      this.view.postService.getPage(
          0,
          this.view._adsNumber,
          {
            tags: this.view.filterTags,
            vendor: this.view.vendorFilter,
            from: this.view.filterFromDate,
            to: this.view.filterToDate,
          },
          this.view._sortType,
      ).then((response) => {
        return response.json();
      }).then((data) => {
        this.view.init(data);
        if (data.length != 0) {
          this.view.removeNoAdsMessage();
        }
        this.updateVendors()
        this.updateTags();
        this.showMoreAdsButton();
      }).catch(() => {
        this.view.switchToErrorPage()
      });

    }
    changeSortType(newSortType) {
      this.view.setSortType(newSortType);
      this.init();
    }
    addTag(tag) {
      this.view.addTag(tag);
      this.init();
    }

    loadMore() {
      this.view.showMoreAds();
      this.init();
    }

    logout() {
      localStorage.removeItem('user');
      this.view.logout();
    }

    setVendor(vendor) {
      this.view.setVendor(vendor);
      this.init();
    }

    setFromDate(date) {
      this.view.setFromDate(date);
      this.init();
    }

    setToDate(date) {
      this.view.setToDate(date);
      this.init();
    }

    get(id) {
      return this.view.get(id);
    }

    clearTags() {
      this.view.clearTags();
      this.init();
    }

    removeReview(id) {
      this.view.postService.removeReview(id);
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

  let controller = new Controller();

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
    this.init();
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
    let date = new Date(from.value);
    controller.setFromDate(date.toLocaleString().substr(0,10));
  }
  function filterToDate() {
    let date = new Date(to.value);
    controller.setToDate(date.toLocaleString().substr(0,10));
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
      controller.view.postService.remove(id).then(()=>{
        controller.init();
      }).catch(() => {
        controller.view.switchToErrorPage()
      });
    }
    if (event.target.getAttribute('id') === 'edit') {
      let id = event.target.parentElement.parentElement.getAttribute('id');
      controller.view.postService.get(id).then((response) => {
        return response.json();
      }).then((data) => {
        data.createdAt = data.createdAt.toLocaleString().substr(0,10);
        data.validUntil = data.validUntil.toLocaleString().substr(0,10);
        localStorage.setItem('toEdit', JSON.stringify(data));
        controller.view.switchToAddAdPage();
      }).catch(() => {
        controller.view.switchToErrorPage()
      });
    }
    if (event.target.getAttribute('id') === 'leave-review') {
      let id = event.target.parentElement.parentElement.getAttribute('id');
      controller.view.postService.get(id).then((response) => {
        return response.json();
      }).then((data) => {
        data.createdAt = data.createdAt.toLocaleString().substr(0,10);
        data.validUntil = data.validUntil.toLocaleString().substr(0,10);
        localStorage.setItem('toAddReview', JSON.stringify(data));
        controller.view.switchToAddReviewPage();
      }).catch(() => {
        controller.view.switchToErrorPage()
      });
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
