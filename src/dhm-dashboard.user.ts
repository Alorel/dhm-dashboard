import {isLoggedIn} from './lib/fn/isLoggedIn';

const loginInterval = setInterval(
  () => {
    const el = document.getElementById('top-status-bar');
    if (el && isLoggedIn()) {
      require('./postLogin').initUI(el);
      clearInterval(loginInterval);
    }
  },
  1000
);

// Tweak and fix icon
let icon: HTMLLinkElement | null = document.querySelector('link[rel="icon"]');
if (icon) {
  icon.href = '/images/ruby.png';
}
//The icon gets appended to doc body atm, which is wrong
icon = document.querySelector('body link[rel="icon"]');
if (icon) {
  (<any>document.head).appendChild(icon);
}
