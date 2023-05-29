import {openGraphs, projectName} from "./state/state.js";

const Iframe = () => {
  const apple = "apple";
  const $reviewTwitThread = document.getElementById("review_twits_thread");

  if ($reviewTwitThread) {
    const $iframe = document.createElement("iframe");

    const attributes = {
      id: "reviewtwits",
      src: `https://reviewtwits.shop/review?projectName=${projectName}&productURL=${window?.location?.href}&title=${openGraphs?.title}&image=${openGraphs?.image}`,
      width: "100%",
      height: "100%",
      // ...iframeAttributes,
    };

    // set $iframe
    $iframe.title = "reviewTwits";

    Object.entries(attributes).forEach(([key, attribute]) =>
      $iframe.setAttribute(key, attribute)
    );

    $reviewTwitThread.appendChild($iframe);
  }
};

export default Iframe;
