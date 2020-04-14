class NewsArticle extends HTMLElement {

  constructor() {
    super();
    this.root = this.attachShadow({ mode: 'open' });
  }
  
  set article({ url, title, urlToImage, description }) {
    // this.innerHTML = `
    //   <a href="${url}">
    //     <h2>${title}</h2>
    //     <img src="${urlToImage || ''}">
    //     <p>${description || ''}</p>
    //   </a>
    // `;

    this.innerHTML = '';

    // create style

    const style = document.createElement('style');
    style.textContent = `
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
    `;

    // create content

    const anchor = document.createElement('a')
    anchor.href = url;

    const heading = document.createElement('h2')
    heading.appendChild(
      document.createTextNode(title)
    )
    anchor.appendChild(heading)

    if (urlToImage) {
      const img = document.createElement('img');
      img.src = urlToImage;
      anchor.appendChild(img);
    }

    if (description) {
      const paragraph = document.createElement('p');
      const text = document.createTextNode(description);
      paragraph.appendChild(text);
      anchor.appendChild(paragraph);
    }

    // add style and content
    this.root.appendChild(style);
    this.root.appendChild(anchor)
  }

}

customElements.define('news-article', NewsArticle);
