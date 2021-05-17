import _ from 'underscore';
import fetchResponse from '/src/services/appServices';
import animate from "gsap";
export default {
  name: 'welcome',
  components: {},
  props: [],
  data() {
    return {
      confirmEmail: false,
      num_pis: 0
    }
  },
  computed: {

  },
  created() {
    this.num_pis = 100;
    if (this.$route.query.mailId !== null && this.$route.query.mailId !== undefined && this.$route.query.mailId !== '') {
      const userId = {
        userId: this.$route.query.mailId
      }
      fetchResponse('put', 'authentication/confirm', userId).then($ => {
        if ($.data.status) {
          this.confirmEmail = true;
        } else {
          this.confirmEmail = false;
          this.emitter.emit('error', $.data.message);
        }
      });
    }

  },
  mounted() {
    this.num_pis = 100;
    this.animateBlobs();
  },
  methods: {
    animateBlobs() {
      let xSeed = _.random(350, 380);
      let ySeed = _.random(120, 170);
      let collections = document.getElementsByClassName('blob');
      for (let i = 0; i < collections.length; i++) {
        let $blob = collections[i];
        let speed = _.random(1, 10);
        let rotation = _.random(5, 100);
        let scale = _.random(0.8, 1.5);
        let x =  _.random(-xSeed, xSeed);
        let y = _.random(-ySeed, ySeed);

        animate.to($blob, {
          duration: speed,
          x: x,
          y: y,
          ease: "Power2.easeOut",
          opacity: 0,
          rotation: rotation,
          scale: scale,
          onStartParams: [$blob],
          onStart: function ($element) {
            $element.style.display = 'block';
          },
          onCompleteParams: [$blob],
          onComplete: function ($element) {
            $element.style.display = 'none';
          }
        })
      }
    }
  }
}


