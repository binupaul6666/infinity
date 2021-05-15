import fetchResponse from '/src/services/appServices';
export default {
  name: 'welcome',
  components: {},
  props: [],
  data() {
    return {
      confirmEmail: '',
    }
  },
  computed: {

  },
  created() {
    const userId = {
      userId: this.$route.query.mailId
    }
    fetchResponse('put', 'authentication/confirm', userId).then($ => {
      if ($.data.status) {
        // action will do in the future
      } else {
        this.emitter.emit('error', $.data.message);
      }
    });
  },
  mounted() {



  },
  methods: {

  }
}


