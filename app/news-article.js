import { html, render } from '../node_modules/lit-html/lit-html.js';

class NewsArticle extends HTMLElement {

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }
  
  set article(data) {

    const template = ({ url, title, urlToImage, description }) => html`
      <style>
        h2 {
          font-family: Georgia, 'Times New Roman', Times, serif;
        }

        a, a:visited {
          text-decoration: none;
          color: inherit;
        }

        img {
          width: 100%;
        }
      </style>

      <a href="${url}">
        <h2>${title}</h2>
        ${(() => {
          if (urlToImage) {
            return html`
              <img src="${urlToImage}">
            `;
          }
        })()}
        ${(() => {
          if (description) {
            return html`<p>${description}</p>`
          }
        })()}
      </a>
    `;

    render(template(data), this.root);
  }

}

customElements.define('news-article', NewsArticle);
