// 共通の JavaScript



// jQuery
// import $ from 'jquery';

// $('.test18').css({ color: 'aqua' });




// 関数
export const greet = (name) => {
  console.log(`おはよう。${name}さん。`);
};

// or

// export default function greet(name) {
//   console.log(`おはよう。${name}さん。`);
// };




// グローバルナビゲーションの開閉
const gNavBtn = document.querySelector('.gNavBtn');
const gNav = document.querySelector('.gNav');


gNavBtn.addEventListener('click', (e) =>{
  document.documentElement.classList.toggle('is-gNavOpen');
}, false);


const minWidth992 = window.matchMedia('(min-width: 992px)');

minWidth992.addEventListener('change', (e) => {
  if (!minWidth992.matches) {
    document.documentElement.classList.remove('is-gNavOpen');
  }
}, false);




// gNavBtn.addEventListener('click', (e) => {
//   document.documentElement.classList.toggle('is-gNavOpen');

//   if (gNav.style.height) {
//     gNav.style.height = null;
//     gNav.ariaHidden = true;
//     gNavBtn.ariaLabel = 'メインメニューを開く';
//     gNavBtn.setAttribute('aria-expanded', 'false');
//   } else {
//     gNav.style.height = document.documentElement.clientHeight - 50 + 'px';
//     gNav.setAttribute('aria-hidden', false);
//     gNavBtn.ariaLabel = 'メインメニューを閉じる';
//     gNavBtn.setAttribute('aria-expanded', 'true');
//   }
// }, false);




// const minWidth992 = window.matchMedia('(min-width: 992px)');

// minWidth992.addEventListener('change', (e) => {
//   if (minWidth992.matches) {
//     gNav.style.height = 'auto';
//     gNav.ariaHidden = 'false';
//     gNavBtn.ariaExpanded = 'true';
//     document.documentElement.classList.remove('is-gNavOpen');
//   } else {
//     gNav.style.height = null;
//     gNav.ariaHidden = 'true';
//     gNavBtn.ariaExpanded = 'false';
//     gNavBtn.ariaLabel = 'メインメニューを開く';
//   }
// }, false);
