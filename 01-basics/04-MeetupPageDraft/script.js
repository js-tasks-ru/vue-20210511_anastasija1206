import Vue from './vendor/vue.esm.browser.js';

/** URL адрес API */
const API_URL = 'https://course-vue.javascript.ru/api';

/** ID митапа для примера; используйте его при получении митапа */
const MEETUP_ID = 6;

/**
 * Возвращает ссылку на изображение по идентификатору, например, изображение митапа
 * @param imageId {number} - идентификатор изображения
 * @return {string} - ссылка на изображение
 */
function getImageUrlByImageId(imageId) {
  return `${API_URL}/images/${imageId}`;
}

/**
 * Словарь заголовков по умолчанию для всех типов пунктов программы
 */
const agendaItemDefaultTitles = {
  registration: 'Регистрация',
  opening: 'Открытие',
  break: 'Перерыв',
  coffee: 'Coffee Break',
  closing: 'Закрытие',
  afterparty: 'Afterparty',
  talk: 'Доклад',
  other: 'Другое',
};

/**
 * Словарь иконок для для всех типов пунктов программы.
 * Соответствует имени иконок в директории /assets/icons
 */
const agendaItemIcons = {
  registration: 'key',
  opening: 'cal-sm',
  talk: 'tv',
  break: 'clock',
  coffee: 'coffee',
  closing: 'key',
  afterparty: 'cal-sm',
  other: 'cal-sm',
};

// Требуется создать Vue приложение
const app = new Vue({
 el: '#app',
 data(){
  return{
    meetup: null
   }
 },
 async created() {
  const meetup = await fetch(`${API_URL}/meetups/${MEETUP_ID}`)
                  .then((response) => response.json());
  
  meetup.style = meetup.imageId && `--bg-url: url(${getImageUrlByImageId(meetup.imageId)})`;

  if(meetup.agenda.length){
    meetup.agenda.forEach((agenda) =>{
      agenda.typeName = agendaItemDefaultTitles[agenda.type];
      agenda.icon = agendaItemIcons[agenda.type];
    });
  }
 
  meetup.date = new Date(meetup.date).toLocaleString(navigator.language, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });
  
  this.meetup = meetup;
}  
})