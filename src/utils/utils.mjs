export const optimizeExternalLinks = () => {
  for (
    var e = document.body.getElementsByTagName("a"), t = e.length, n = 0;
    n < t;
    n++
  )
    new URL(e[n].href).origin !== location.origin &&
      e[n].setAttribute("target", "_blank") &&
      e[n].setAttribute("rel", "nofollow");
};

export const loadMapIframes = () => {
  const mapsPath = 'google.com/maps';
  const mapKeyQueryStringParam = '&mid=';
  const PUBLIC_GOOGLE_MAP_ID = import.meta.env.PUBLIC_GOOGLE_MAP_ID;

  const iframes = document.querySelectorAll('iframe');

  iframes?.forEach((iframe) => {
    let url = iframe.dataset?.src;
    if(url) {
      if(url.includes(mapsPath) && !url.includes(mapKeyQueryStringParam)) {
        url += mapKeyQueryStringParam + PUBLIC_GOOGLE_MAP_ID
      }
      iframe.src = url;
    }
  });
}
