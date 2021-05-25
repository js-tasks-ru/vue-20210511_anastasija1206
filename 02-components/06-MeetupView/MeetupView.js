import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import { getImageUrlByImageId } from './data.js';

const MeetupView = {
  name: 'MeetupView',
  components: {
    MeetupCover,
    MeetupDescription,
    MeetupAgenda,
    MeetupInfo
  },
  props: {
    meetup: {
     type: Object,
     require: true
    }
  },
  computed: {
    link(){
      return getImageUrlByImageId(this.meetup.imageId);
    }
  },
  template: `
    <div>
    <MeetupCover :title="meetup.title" :link="link"></MeetupCover>
      <!-- meetup cover -->
      <div class="container">
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description"></MeetupDescription>
            <!-- meetup description -->

            <h3>Программа</h3>
            <MeetupAgenda :agenda="meetup.agenda"></MeetupAgenda>
            <!-- meetup agenda -->
          </div>
          <div class="meetup__aside">
          <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="new Date(meetup.date)"></MeetupInfo>
            <!-- meetup info -->
          </div>
        </div>
      </div>
    </div>`,
};

export default MeetupView;
