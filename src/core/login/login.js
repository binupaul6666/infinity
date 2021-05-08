
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Message from 'primevue/message';

export default {
  name: 'login',
  components: { TabView, TabPanel, InputText, Checkbox, Message },
  props: [],
  data() {
    return {
      activeIndex: 0,
      checked: false,
      messageHide: false,
      loginButton: 'Sign in',
      loginQue: 'Forget Password',
      username: '',
      password: '',
      newusername: '',
      newfullname: '',
      newpassword: '',
      newrepeatpsw: '',
      email: '',
    }
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    messageShow() {
      this.messageHide = true;
    },
    close() {
      this.messageHide = false;
    },
    tabClick($) {
      if ($.index === 0) {
        this.loginButton = 'Sign in';
        this.loginQue = 'Forget Password';
        this.activeIndex = $.index;
        this.messageHide = false;
      } else {
        this.loginButton = 'Sign up';
        this.loginQue = 'Already have an Account';
        this.activeIndex = $.index;
      }
    },
    changeScreen() {
      if (this.activeIndex !== 0) {
        this.tabClick({ index: 0 })
      }
    },
  }
}


