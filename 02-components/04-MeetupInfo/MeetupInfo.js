export default {
  name: 'MeetupInfo',
  props: {
    organizer: String,
    place: String,
    date: Date
  },
  computed:{
    data(){
      return new Date(this.date).toLocaleString('ru-Ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  },

  template: `
    <ul class="info-list">
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-user.svg" />
        {{organizer}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-map.svg" />
        {{place}}
      </li>
      <li>
        <img class="icon info-list__icon" alt="icon" src="/assets/icons/icon-cal-lg.svg" />
        <time datetime="2020-01-01">{{data}}</time>
      </li>
    </ul>`,
};
