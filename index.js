import { fetchNews } from './app/newsapi.js';

import './app/news-article.js';

window.addEventListener('load', () => {
  renderNews();

})

async function renderNews() {
  let articles = [];

  try {
    const data = await fetchNews();
    articles = data.articles;
  } catch(err) {
    console.error(err);
  }

  const newsFragment = document.createDocumentFragment();

  articles.forEach(article => {
    const el = document.createElement('news-article');
    el.article = article;
    newsFragment.appendChild(el);
  })

  const main = document.querySelector('main');
  main.appendChild(newsFragment);

}