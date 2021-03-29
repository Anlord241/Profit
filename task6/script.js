(function () {
  let adList = [
    {
      id: "1",
      description: "Скидка на все ноутбуки",
      createdAt: new Date("2021-01-21T12:00:00"),
      link: "https://sila.by",
      vendor: "Электросила",
      photoLink: "https://sila.by/img/catalog2015/ntpk/tolet111378.jpg",
      hashTags: ["Техника"],
      discount: "20%",
      rating: 1,
      validUntil: new Date("2022-03-21T12:00:00"),
      reviews: ["Cool!"],
    },

    {
      id: "2",
      description: "Скидка на столы",
      createdAt: new Date("2021-02-21T12:00:00"),
      link: "https://tables.com",
      vendor: "Best Tables",
      hashTags: ["Мебель"],
      discount: "25%",
      validUntil: new Date("2021-05-21T12:00:00"),
      rating: 1.1,
      reviews: ["Cool!"],
    },

    {
      id: "3",
      description: "Скидка на тетради",
      createdAt: new Date("2021-03-15T12:00:00"),
      link: "https://m4.by",
      vendor: "M4.BY",
      hashTags: ["Школа"],
      discount: "10%",
      validUntil: new Date("2021-04-21T12:00:00"),
      rating: 1.2,
      reviews: ["Cool!"],
    },
    {
      id: "4",
      description: "Скидка на все игры",
      createdAt: new Date("2021-03-14T12:00:00"),
      link: "https://store.steampowered.com/?l=russian",
      vendor: "Steam",
      hashTags: ["Компьютер", "Игры"],
      discount: "5%",
      validUntil: new Date("2021-05-21T12:00:00"),
      rating: 1.3,
      reviews: ["Cool!"],
    },

    {
      id: "5",
      description: "Скидка на цветы",
      createdAt: new Date("2021-02-13T12:00:00"),
      link: "https://flowers.by",
      vendor: "Мир цветов",
      photoLink: "https://cdn2.flowwow.com/data/blog/1562599250_29351868.jpg",
      hashTags: ["Растения"],
      discount: "30%",
      validUntil: new Date("2022-03-21T12:00:00"),
      rating: 1.4,
      reviews: ["Cool!"],
    },

    {
      id: "6",
      description: "Скидка на продукцию Xiaomi -10%",
      createdAt: new Date("2021-01-01T11:00:00"),
      link: "https://5element.by",
      vendor: "5 элемент",
      hashTags: ["Техника"],
      discount: "10%",
      validUntil: new Date("2021-03-21T12:00:00"),
      rating: 1.5,
      reviews: ["Cool!"],
    },

    {
      id: "7",
      description: "Скидка на обои",
      createdAt: new Date("2020-03-21T12:00:00"),
      link: "https://wallpapers.by",
      vendor: "Мир обоев",
      hashTags: ["Товары для дома"],
      discount: "15%",
      validUntil: new Date("2021-05-21T12:00:00"),
      rating: 1.6,
      reviews: ["Cool!"],
    },

    {
      id: "8",
      description: "Скидка на подушки -5%",
      createdAt: new Date("2019-03-21T12:00:00"),
      link: "https://goodsforsleep.by",
      vendor: "Товары для сна",
      hashTags: ["Сон"],
      discount: "5%",
      validUntil: new Date("2021-05-21T12:00:00"),
      rating: 1.7,
      reviews: ["Cool!"],
    },

    {
      id: "9",
      description: "Скидка на все моющие средства до конца года -10%",
      createdAt: new Date("2021-02-26T12:00:00"),
      link: "https://ostrov-chistoty.by/",
      vendor: "Остров чистоты",
      photoLink:
        "https://ostrov-chistoty.by/files/settingssite/site_header-site_header-ostrov_new.png",
      hashTags: ["Быт", "Товары для дома"],
      discount: "10%",
      validUntil: new Date("2021-12-21T12:00:00"),
      rating: 1.8,
      reviews: ["Cool!"],
    },

    {
      id: "10",
      description: "Скидка на диваны -7%",
      createdAt: new Date("2021-02-19T10:00:00"),
      link: "https://pinskdrev.by/",
      vendor: "Пинскдрев",
      photoLink:
        "https://pinskdrev.by/web/files/imagick_cache/w1000h0t1/web/catalogfiles/catalog/offers/ikar_3m_186_18gr5e060b0822b59.jpg",
      hashTags: ["Мебель"],
      discount: "7%",
      validUntil: new Date("2021-05-21T12:00:00"),
      rating: 1.9,
      reviews: ["Cool!"],
    },

    {
      id: "11",
      description: "Скидка на продукцию собственного производства",
      createdAt: new Date("2022-03-21T12:00:00"),
      link: "https://evroopt.by/",
      vendor: "Евроопт",
      hashTags: ["Еда"],
      discount: "10%",
      validUntil: new Date("2021-03-25T12:00:00"),
      rating: 2,
      reviews: ["Cool!"],
    },

    {
      id: "12",
      description: "Скидка на письменные принадлежности",
      createdAt: new Date("2023-03-21T12:00:00"),
      link: "https://m4.by/",
      vendor: "M4.BY",
      hashTags: ["Школа"],
      discount: "10%",
      validUntil: new Date("2021-04-21T12:00:00"),
      rating: 2.1,
      reviews: ["Cool!"],
    },

    {
      id: "13",
      description: "Скидка на билеты в кино",
      createdAt: new Date("2024-03-21T12:00:00"),
      link: "https://kvitki.by/",
      vendor: "Kvitki.by",
      photoLink: "https://www.kvitki.by/images/portal/kvitki/logo.png",
      hashTags: ["Развлечения"],
      discount: "20%",
      validUntil: new Date("2021-04-21T12:00:00"),
      rating: 2.2,
      reviews: ["Cool!"],
    },
    {
      id: "14",
      description: "Скидка на двери",
      createdAt: new Date("2021-03-21T13:00:00"),
      link: "https://doors.by/",
      vendor: "Мир дверей",
      hashTags: ["Строительство"],
      discount: "10%",
      validUntil: new Date("2021-04-21T12:00:00"),
      rating: 2.3,
      reviews: ["Cool!"],
    },

    {
      id: "15",
      description: "Скидка на гробы",
      createdAt: new Date("2021-03-21T14:00:00"),
      link: "https://coffins.by/",
      vendor: "Ритуал",
      photoLink:
        "https://img02.flagma.by/photo/groby-lakirovannye-3968171_big.jpg",
      hashTags: ["Ритуальные услуги"],
      discount: "30%",
      validUntil: new Date("2021-12-31T12:00:00"),
      rating: 2.4,
      reviews: ["Cool!"],
    },

    {
      id: "16",
      description: "Скидка на фрукты",
      createdAt: new Date("2021-03-21T15:00:00"),
      link: "https://fruit.by/",
      vendor: "Фрукты из Турции",
      hashTags: ["Еда"],
      discount: "35%",
      validUntil: new Date("2021-03-21T12:00:00"),
      rating: 2.5,
      reviews: ["Cool!"],
    },

    {
      id: "17",
      description: "Скидка на стиральные машины",
      createdAt: new Date("2021-03-21T16:00:00"),
      link: "https://www.21vek.by/",
      vendor: "21 век",
      photoLink:
        "https://avatars.mds.yandex.net/get-mpic/1715213/img_id3262544086590258454.jpeg/orig",
      hashTags: ["Быт", "Техника"],
      discount: "10%",
      validUntil: new Date("2021-04-21T12:00:00"),
      rating: 2.6,
      reviews: ["Cool!"],
    },

    {
      id: "18",
      description: "Скидка на изделия из золота -10%",
      createdAt: new Date("2021-06-22T12:00:00"),
      link: "https://www.ziko.by/",
      vendor: "Ziko.by",
      hashTags: ["Аксессуары", "Драгоценности"],
      discount: "10%",
      validUntil: new Date("2021-04-21T12:00:00"),
      rating: 2.7,
      reviews: ["Cool!"],
    },

    {
      id: "19",
      description: "Скидка на ковры",
      createdAt: new Date("2021-07-23T12:00:00"),
      link: "https://www.carpets.by/",
      vendor: "Мир ковров",
      photoLink:
        "https://avatars.mds.yandex.net/get-marketcms/1357599/img-3e56e6e5-5f9f-460c-9bc8-5a5bd55e96f7.png/optimize",
      hashTags: ["Товары для дома"],
      discount: "10%",
      validUntil: new Date("2021-12-31T12:00:00"),
      rating: 2.8,
      reviews: ["Cool!"],
    },

    {
      id: "20",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-12-31T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    },
  ];

  function removeAd(id) {
    item = adList.find((item) => item.id === id);
    if (item) {
      adList = adList.filter(function (item) {
        return item.id !== id;
      });
      return true;
    } else {
      console.log("Element not found");
      return false;
    }
  }

  function compareRating(a, b) {
    return b.rating - a.rating;
  }

  function compareDate(a, b) {
    return b.createdAt - a.createdAt;
  }

  function getAds(skip = 0, top = 10, filterConfig = {}, sortType = "Date") {
    let toReturn = adList;
    if (sortType === "Date") {
      toReturn.sort(compareDate);
    } else if (sortType === "Rating") {
      toReturn.sort(compareRating);
    }
    if (filterConfig.hasOwnProperty("vendor")) {
      toReturn = toReturn.filter(function (item) {
        return item.vendor === filterConfig.vendor;
      });
    }
    if (filterConfig.hasOwnProperty("from")) {
      if (filterConfig.hasOwnProperty("to")) {
        toReturn = toReturn.filter(function (item) {
          return (
            filterConfig.from <= item.createdAt &&
            item.createdAt <= filterConfig.to
          );
        });
      } else {
        toReturn = toReturn.filter(function (item) {
          return item.createdAt >= filterConfig.from;
        });
      }
    } else if (filterConfig.hasOwnProperty("to")) {
      toReturn = toReturn.filter(function (item) {
        return filterConfig.to >= item.createdAt;
      });
    }

    return toReturn.slice(skip, skip + top);
  }

  function getAd(id) {
    let item = adList.find((item) => item.id === id);

    if (item) {
      return item;
    } else {
      console.log("Element not found");
      return null;
    }
  }

  function validateAd(item) {
    if (!item.hasOwnProperty("id")) {
      console.log("The element has no id!");
      return false;
    } else if (typeof item.id !== "string") {
      console.log("Id has illegal type");
      return false;
    }

    if (!item.hasOwnProperty("description")) {
      console.log("The element has no description!");
      return false;
    } else if (typeof item.description !== "string") {
      console.log("Description has illegal type");
      return false;
    } else if (item.description.length >= 200) {
      console.log("The description is too long!");
      return false;
    }

    if (!item.hasOwnProperty("createdAt")) {
      console.log("Element has no createdAt data!");
      return false;
    } else if (!(item.createdAt instanceof Date)) {
      console.log("CreatedAt has illegal type");
      return false;
    }

    if (!item.hasOwnProperty("link")) {
      console.log("Element has no link!");
      return false;
    } else if (typeof item.link !== "string") {
      console.log("Link has illegal type");
      return false;
    }

    if (!item.hasOwnProperty("vendor")) {
      console.log("Element has no vendor!");
      return false;
    } else if (typeof item.vendor !== "string") {
      console.log("Link has illegal type");
      return false;
    } else if (item.vendor.length == 0) {
      console.log("The vendor field is empty");
      return false;
    }

    if (!item.hasOwnProperty("hashTags")) {
      console.log("Element has no hashTags!");
      return false;
    } else if (!(item.hashTags instanceof Array)) {
      console.log("HashTags array has illegal type");
      return false;
    } else if (!item.hashTags.every((item) => typeof item === "string")) {
      console.log("One or more hashTags have illegal type");
      return false;
    }

    if (!item.hasOwnProperty("discount")) {
      console.log("Element has no discount!");
      return false;
    } else if (typeof item.discount !== "string") {
      console.log("Discount has illegal type");
      return false;
    }

    if (!item.hasOwnProperty("validUntil")) {
      console.log("Element has no validUntil data!");
      return false;
    } else if (!(item.validUntil instanceof Date)) {
      console.log("validUntil has illegal type");
      return false;
    }

    if (item.hasOwnProperty("photoLink")) {
      if (typeof item.photoLink !== "string") {
        console.log("PhotoLink has illegal type");
        return false;
      }
    }

    if (item.hasOwnProperty("rating")) {
      if (typeof item.rating !== "number") {
        console.log("Rating has illegal type");
        return false;
      }
    }

    if (item.hasOwnProperty("reviews")) {
      if (!(item.reviews instanceof Array)) {
        console.log("Reviews array has illegal type");
        return false;
      } else if (!item.reviews.every((item) => typeof item === "string")) {
        console.log("One or more reviews have illegal type");
        return false;
      }
    }

    return true;
  }

  function addAd(item) {
    if (!validateAd(item)) {
      return false;
    } else {
      tempItem = adList.find((a) => a.id === item.id);
      if (tempItem) {
        console.log("The array already has an element with this id");
        return false;
      } else {
        adList.push(item);
      }
    }
    return true;
  }

  function editAd(id, item) {
    previous = adList.find((item) => item.id === id);
    if (!previous) {
      console.log("Element not found!");
      return false;
    }

    if (item.hasOwnProperty("id")) {
      if (previous.id !== item.id) {
        console.log("You mustn't change id!");
        return false;
      }
    }

    if (item.hasOwnProperty("vendor")) {
      if (previous.vendor !== item.vendor) {
        console.log("You mustn't change vendor!");
        return false;
      }
    }

    if (item.hasOwnProperty("createdAt")) {
      if (previous.createdAt.getTime() !== item.createdAt.getTime()) {
        console.log("You mustn't change createdAt data!");
        return false;
      }
    }
    editedItem = Object.assign(previous, item);

    if (item.hasOwnProperty("description")) {
      editedItem.description = item.description;
    }

    if (item.hasOwnProperty("link")) {
      editedItem.link = item.link;
    }

    if (item.hasOwnProperty("photoLink")) {
      editedItem.photoLink = item.photoLink;
    }

    if (item.hasOwnProperty("hashTags")) {
      editedItem.hashTags = item.hashTags;
    }

    if (item.hasOwnProperty("discount")) {
      editedItem.discount = item.discount;
    }

    if (item.hasOwnProperty("validUntil")) {
      editedItem.validUntil = item.validUntil;
    }

    if (item.hasOwnProperty("rating")) {
      editedItem.rating = item.rating;
    }

    if (item.hasOwnProperty("reviews")) {
      editedItem.reviews = item.reviews;
    }

    if (!validateAd(editedItem)) {
      return false;
    } else {
      adList.splice(adList.indexOf(previous), 1, editedItem);
      return true;
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  console.log("************************************");
  console.log("Created array:");
  console.log(adList);
  //////////////////////////////////////
  console.log("Get ad with id === 1:");
  console.log(getAd("1"));

  console.log("Trying to get ad with id === 0:");
  console.log(getAd("0"));
  /////////////////////////////////////
  console.log("Get first 3 ads sorted by date:");
  console.log(getAds(0, 3));

  console.log("Get fifth and sixth ads sorted by rating:");
  console.log(getAds(4, 2, {}, "Rating"));

  console.log("Get elements with vendor 'Мир цветов' sorted by date: ");
  console.log(getAds(0, adList.length, { vendor: "Мир цветов" }));

  console.log("Get elements from 21.03.2021 to 21.03.2022 sorted by date: ");
  console.log(
    getAds(0, adList.length, {
      from: new Date("2021-03-21"),
      to: new Date("2022-03-21"),
    })
  );

  console.log("Get elements from 21.03.2021 sorted by date: ");
  console.log(
    getAds(0, adList.length, {
      from: new Date("2021-03-21"),
    })
  );

  console.log("Get elements before 21.03.2021 sorted by date: ");
  console.log(
    getAds(0, adList.length, {
      to: new Date("2021-03-21"),
    })
  );
  /////////////////////////////////////
  console.log("Trying to add an element with existing id: ");
  console.log(
    addAd({
      id: "20",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );
  console.log("Trying to add an element without vendor: ");
  console.log(
    addAd({
      id: "21",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );

  console.log("Adding an element: ");
  console.log(
    addAd({
      id: "21",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );
  console.log(adList);
  /////////////////////////////////////

  console.log("Validating an ad without id:");
  console.log(
    validateAd({
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );

  console.log("Validating an ad with long description:");
  console.log(
    validateAd({
      id: "111",
      description:
        "42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42" +
        "42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_" +
        "42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_42_",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );
  console.log("Validating an ad which has illegal id type:");
  console.log(
    validateAd({
      id: 111,
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );

  console.log("Validating an ad with illegal createdAt type:");
  console.log(
    validateAd({
      id: "111",
      description: "Скидка на защитные маски -35%",
      createdAt: 111,
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );

  console.log("Validating an ad with illegal review:");
  console.log(
    validateAd({
      id: "111",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: [1],
    })
  );

  console.log("Validating correct ad:");
  console.log(
    validateAd({
      id: "111",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );
  /////////////////////////////////////
  console.log("Trying to change id: ");
  console.log(
    editAd("1", {
      id: "111",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );

  console.log("Trying to change vendor: ");
  console.log(
    editAd("1", {
      id: "1",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );

  console.log("Trying to change an ad which doesn't exist: ");
  console.log(
    editAd("42", {
      id: "111",
      description: "Скидка на защитные маски -35%",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-31-12T12:00:00"),
      rating: 2.9,
      reviews: ["Cool!"],
    })
  );

  console.log("Successful editing: ");
  console.log(
    editAd("20", {
      id: "20",
      description: "Hello",
      createdAt: new Date("2021-08-30T12:00:00"),
      link: "https://pharma.by/",
      vendor: "Белфармация",
      photoLink:
        "https://main-cdn.goods.ru/big1/hlr-system/13/12/48/86/77/47/600001326245b0.jpeg",
      hashTags: ["Медицина"],
      discount: "35%",
      validUntil: new Date("2021-12-31T12:00:00"),
      rating: 0,
    })
  );
  console.log("Edited element:");
  console.log(getAd("20"));
  /////////////////////////////////////
  console.log("Trying to remove an ad which doesn't exist:");
  console.log(removeAd("0"));

  console.log("Removing an element:");
  console.log(removeAd("1"));

  console.log("Current array:");
  console.log(adList);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
})();
