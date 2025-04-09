export function initLettersApp(createApp) {
  createApp({
    data() {
      return {
        letters: []
      };
    },
    mounted() {
      this.fetchLetters();
    },
    methods: {
      async fetchLetters() {
        try {
          const res = await fetch('http://localhost:8000/letters');
          this.letters = await res.json();
        } catch (err) {
          console.error('Failed to load letters:', err);
        }
      },
      formatLetter(text) {
        return text.replace(/\n/g, '<br>');
      }
    }
  }).mount('#letters-app');
}
