const MeetupCover = {
  name: 'MeetupCover',
  props: {
     title: String,
     link: String
  },
  computed: {
    bgUrl() {
      return this.link && `--bg-url: url('${this.link}')`
    }

  },
  template: `
    <div class="meetup-cover" :style="bgUrl">
        <h1 class="meetup-cover__title">{{title}}</h1>
    </div>`,
};

export default MeetupCover;
