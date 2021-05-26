import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
export default {
  name: 'userdetail',
  components: { InputText, Dropdown },
  props: [],
  data() {
    return {
      fullname: null,
      bloodgroup: null,

      bloodtype: [],

    }
  },
  computed: {

  },
  mounted() {
    this.bloodtype = [
      { name: 'A+', code: 'A+' },
      { name: 'A-', code: 'A-' },
      { name: 'B+', code: 'B+' },
      { name: 'B-', code: 'B-' },
      { name: 'AB+', code: 'AB+' },
      { name: 'AB-', code: 'AB-' },
      { name: 'O+', code: 'O+' },
      { name: 'O-', code: 'O-' },      
    ];
  },
  methods: {

  }
}


