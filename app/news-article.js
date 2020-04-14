class NewsArticle extends HTMLElement {
  
  set article({ url, title, urlToImage, description }) {
    // this.innerHTML = `
    //   <a href="${url}">
    //     <h2>${title}</h2>
    //     <img src="${urlToImage || ''}">
    //     <p>${description || ''}</p>
    //   </a>
    // `;

    this.innerHTML = '';

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

    this.appendChild(anchor)
  }

}

customElements.define('news-article', NewsArticle);
