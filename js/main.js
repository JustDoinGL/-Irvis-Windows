import modals from './modals.js';
import tabs from './tabs.js';
import forms from './forms.js';

window.addEventListener("DOMContentLoaded", () => {
  modals();
  tabs('.glazing_slider ', '.glazing_block', '.glazing_content', 'active');
  tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
  forms();
});


