const popup = document.querySelector('.popup');
const popupCloseBtn = popup.querySelector('.popup__close');
const editProfileBtn = document.querySelector('.profile-info__button');
const editProfileJob = document.querySelector('.profile-info__subtitle');
const editProfileName = document.querySelector('.profile-info__title');
const formCardElement = document.querySelector('.card-form');
const formEditElement = document.querySelector('.edit-form');
const nameInput = formEditElement.querySelector('.edit-name');
const jobInput = formEditElement.querySelector('.edit-job');
const nameCardInput = formCardElement.querySelectorAll('.form__item')[0];
const ImageCardInput = formCardElement.querySelectorAll('.form__item')[1];
const elementsList = document.querySelector('.elements__list');
const popupCard = document.querySelector('.popup-card');
const addCardBtn = document.querySelector('.profile__button');
const popupCardCloseBtn = popupCard.querySelector('.popup__close');
const popupGallery = document.querySelector('.popup-gallery');
const popupGalleryCloseBtn = popupGallery.querySelector('.popup-gallery__button');
const popupGalleryTitle = popupGallery.querySelector('.popup-gallery__title');
const popupGalleryImage = popupGallery.querySelector('.popup-gallery__image');
const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Ольхон',
        link: 'https://images.unsplash.com/photo-1501675423372-9bfa95849e62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
        name: 'Санкт-Петербург',
        link: 'https://images.unsplash.com/photo-1556610961-2fecc5927173?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1840&q=80%201840w,%20'
    },
    {
        name: 'Москва',
        link: 'https://images.unsplash.com/photo-1521815049196-8a76f26a2135?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1051&q=80'
    }
];

//Функция добавления класса для открытия popup
function openPopup(element) {
    element.classList.add('popup_opened');
}

//Функция удаления класса для закрытия popup
function closePopup(element) {
    element.classList.remove('popup_opened');
}

//Функция удаления элемента
function removeCart(element) {
    element.remove();
}

//Функция очистки формы
function resetForm(form){
    form.reset()
}

//Функция добавления нового элемента в начало
function addCard(cardElement, cardContainer) {
    const card = newCard(cardElement);
    cardContainer.prepend(card);
}
//Функция добавления-удаления класса element__button_active кнопке лайка в зависимости от состояния
function buttonLike(element) {
    element.classList.toggle('element__button_active');
}

//Перебор массива по порядку, добавление в DOM
initialCards.forEach((item) => {
    addCard(item, elementsList);
});

//Функция проверки наличия текста в полях, записи введенных значений, закрытия формы
function formCardSubmitHandler(event) {
    event.preventDefault();
    addCard({
        name: nameCardInput.value,
        link: ImageCardInput.value
    }, elementsList)
    resetForm(formCardElement)
    closePopup(popupCard);
}

//Слушатель события (нажатие на кнопку типа submit)
formCardElement.addEventListener('submit', formCardSubmitHandler);

//Слушатель события (нажатие на кнопку типа submit)
formEditElement.addEventListener('submit', formEditSubmitHandler);

//Открытие попап-формы путем нажатия на кнопку "Плюс"
addCardBtn.addEventListener('click', function () {
    openPopup(popupCard);
});

//Открытие попап-формы путем нажатия на кнопку "Edit"
editProfileBtn.addEventListener('click', function () {
    nameInput.value = editProfileName.textContent;
    jobInput.value = editProfileJob.textContent;
    openPopup(popup);
});

//Закрытие попап-формы по нажатию на кнопку "крестик"
popupCloseBtn.addEventListener('click', function () {
    closePopup(popup);
});

//Закрытие попап-формы по нажатию на пустое поле
popup.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popup);
    }
})

//Закрытие Галереи по нажатию на кнопку "крестик"
popupGalleryCloseBtn.addEventListener('click', function () {
    closePopup(popupGallery);
});

//Закрытие Галереи по нажатию на пустое поле
popupGallery.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupGallery);
    }
})

//Закрытие попап-формы по нажатию на кнопку "крестик"
popupCardCloseBtn.addEventListener('click', function () {
    closePopup(popupCard);
});

//Закрытие попап-формы по нажатию на пустое поле
popupCard.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
        closePopup(popupCard);
    }
})

//Функция записи введенного текста в переменные, закрытия формы
function formEditSubmitHandler(event) {
    event.preventDefault();
    editProfileName.textContent = nameInput.value;
    editProfileJob.textContent = jobInput.value;
    closePopup(popup);
}

//функция присвоения необходимых значений карточке, которая возвращает заполненную карточку + удаление карточки по иконке + открытие галереи по нажатию
function newCard(cardData) {
    const cardTemplate = document.querySelector('#element').content;
    const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
    const cardTitle = cardElement.querySelector('.element__title');
    const cardImage = cardElement.querySelector('.element__image');
    const cardLike = cardElement.querySelector('.element__button');
    const cardRemover = cardElement.querySelector('.element__icon');
    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardImage.addEventListener('click', function () {
        popupGalleryImage.src = cardData.link;
        popupGalleryImage.alt = cardData.name;
        popupGalleryTitle.textContent = cardData.name;
        openPopup(popupGallery);
    })
    cardLike.addEventListener('click', function () {
        buttonLike(cardLike);
    })
    cardRemover.addEventListener('click', function () {
        removeCart(cardElement);
    })
    return cardElement;
}