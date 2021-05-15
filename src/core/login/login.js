
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import Message from 'primevue/message';
import fetchResponse from '/src/services/appServices';
import { email, password } from '/src/validations/validation';

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
    // console.log(value, 'aaaaaaa')
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
    submitDetails() {
      switch (this.activeIndex) {
        case 0: {
          const existUser = {
            username: this.username,
            password: this.password
          }
          fetchResponse('post', 'authentication/signin', existUser).then($ => {
            if ($.data.status) {
              // action will do in the future
            } else {
              this.emitter.emit('error', $.data.message);
            }
          });
          break;
        }
        case 1:
          if (this.newusername !== '' && this.newfullname !== '' && this.newpassword !== '' && this.newrepeatpsw !== '' && this.email !== '') {
            if (this.newpassword !== this.newrepeatpsw) {
              this.emitter.emit('error', 'Passwords do not match');
            } else if (this.newpassword && this.email) {
              const emailTest = email(this.email);
              const pswTest = password(this.newpassword)
              if (!pswTest) {
                this.emitter.emit('error', 'Please check your password format');
                return;
              } else if (!emailTest) {
                this.emitter.emit('info', 'Please check your Email format');
                return;
              }
              const userObj = {
                username: this.newusername,
                fullname: this.newfullname,
                password: this.newpassword,
                email: this.email
              }
              fetchResponse('post', 'authentication', userObj).then($ => {
                if ($.data.status) {
                  this.emitter.emit('success', $.data.message);
                } else {
                  this.emitter.emit('error', $.data.message);
                }
              });
            }
          } else {
            const formField = [this.newusername, this.newfullname, this.newpassword, this.newrepeatpsw, this.email];
            for (const [_, $] of formField.entries()) {
              if ($ === '') {
                this.emitter.emit('info', `Field ${_ + 1}, *Mandatoray Field is empty`);
                break;
              }
            }
          }
          break;
      }
    },
  }
}


