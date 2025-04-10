import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js';

export function initTimelineApp() {
  createApp({
    data() {
      return {
        timeline: []
      };
    },
    mounted() {
      this.loadTimeline();
    },
    methods: {
      async loadTimeline() {
        try {
          const res = await fetch('http://localhost:8000/timeline');
          this.timeline = await res.json();
        } catch (err) {
          console.error('Failed to load timeline:', err);
        }
      }
    }
  }).mount('#timeline-app');
}
