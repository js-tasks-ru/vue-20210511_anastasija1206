import MeetupView from '../06-MeetupView/MeetupView.js';
import { MEETUP_ID, fetchMeetup } from './data.js';

const MeetupPage = {
  name: 'MeetupPage',
  components: {
    MeetupView
  },
  data(){
    return{
      meetups: null
    }
  },
  computed: {
   getMeetup(){
    return this.meetups
  }
  },
  async mounted() {
    this.meetups = await fetchMeetup(MEETUP_ID);
  },

  template: `<div v-if="meetups"><MeetupView :meetup="getMeetup"></MeetupView></div>`,
};

export default MeetupPage;
