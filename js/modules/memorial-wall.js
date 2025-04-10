import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export function initWallApp() {
  createApp({
    data() {
      return {
        wall: [],
        form: {
          name: '',
          message: ''
        }
      };
    },
    mounted() {
      this.fetchWall();
      // Initialize slider after data is loaded
      this.$nextTick(() => {
        setupMemorialWallSlider();
      });
    },
    methods: {
      async fetchWall() {
        try {
          const response = await fetch('http://localhost/The_Visionaries_Client-Project/backend/public/wall');
          if (!response.ok) throw new Error('Failed to load messages');
          this.wall = await response.json();
        } catch (error) {
          console.error('Failed to fetch wall messages:', error);
        }
      },
      async submitForm() {
        try {
          const response = await fetch('http://localhost/The_Visionaries_Client-Project/backend/public/wall', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify(this.form)
          });

          if (!response.ok) throw new Error('Failed to submit message');

          const newEntry = await response.json();
          this.wall.unshift(newEntry);

          this.form.name = '';
          this.form.message = '';
        } catch (error) {
          console.error('Failed to submit form:', error);
          alert('Something went wrong. Please try again.');
        }
      }
    }
  }).mount('#wall-app');
}
