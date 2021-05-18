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
      num_pis: 0,
      textShow: false,
    }
  },
  computed: {

  },
  created() { },
  mounted() {

    if (this.$route.query.mailId !== null && this.$route.query.mailId !== undefined && this.$route.query.mailId !== '') {
      const userId = {
        userId: this.$route.query.mailId
      }
      fetchResponse('put', 'authentication/confirm', userId).then($ => {
        if ($.data.status) {
          this.confirmEmail = true;
          this.num_pis = 100;
          setTimeout(() => {
            this.animateBlobs();
            this.textShow = true;
          }, 0)
        } else {
          this.confirmEmail = false;
          this.textShow = false;
          this.emitter.emit('error', $.data.message);
        }
      });
    }
  },
  methods: {
    animateBlobs() {
      let xSeed = _.random(350, 450);
      let ySeed = _.random(120, 250);
      let collections = document.getElementsByClassName('blob');
      for (let i = 0; i < collections.length; i++) {
        let $blob = collections[i];
        let speed = _.random(1, 8);
        let rotation = _.random(5, 100);
        let scale = _.random(0.8, 1.5);
        let x = _.random(-xSeed, xSeed);
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


