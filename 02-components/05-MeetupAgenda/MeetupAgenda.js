import MeetupAgendaItem from './MeetupAgendaItem.js';

const MeetupAgenda = {
  name: 'MeetupAgenda',
  components: {MeetupAgendaItem},
  props: {
    agenda: {
      type: Array,
      required: true,
    }
  },

  template: `
    <div class="meetup-agenda">
      <MeetupAgendaItem v-for="agendaItem in agenda" :key="agendaItem.id" :agendaItem="agendaItem"></MeetupAgendaItem>
    </div>`,
};

export default MeetupAgenda;
