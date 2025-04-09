import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

const ContactApp = {
  data() {
    return {
      form: {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
        inquiry: 'general',
        country: '',
        wants_updates: false
      }
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await fetch('http://localhost:8000/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(this.form)
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error Response:', errorData);
          throw new Error(errorData.message || 'Something went wrong');
        }

        const data = await response.json();
        alert('Form submitted successfully!');
        this.resetForm();

      } catch (error) {
        console.error('Fetch Error:', error);
        alert('Error submitting form: ' + error.message);
      }
    },
    resetForm() {
      this.form = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
        inquiry: 'general',
        country: '',
        wants_updates: false
      };
    }
  }
};

if (document.querySelector('#contact-app')) {
  createApp(ContactApp).mount('#contact-app');
}

export default ContactApp;
