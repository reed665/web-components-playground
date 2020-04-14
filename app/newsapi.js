export const fetchNews = () => {
  var url = 'http://newsapi.org/v2/top-headlines?' +
            'country=us&' +
            'apiKey=872404b244474aac991c7e49808e1220';
  var req = new Request(url);

  return fetch(req).then(res => res.json())
}
