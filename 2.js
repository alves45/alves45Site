export default function () {
  import("@emotion/css").then((emotion) => {
    let css = emotion.css;
    css`
      background-color: black;
      display: flex;
    `;
    console.log("3 " + JSON.stringify(emotion.cache.inserted));
  });
}
