// import
import {openGraphs, projectName} from "./index.js";

const $reviewWriteButton = document.getElementById("review_twits_write");

$reviewWriteButton.addEventListener("click", () => {
  window?.open(
    `https://reviewtwits.shop/review/write?projectName=${projectName}&productURL=${window?.location?.href}&title=${openGraphs?.title}&image=${openGraphs?.image}`,
    "리뷰트윗 리뷰작성하기",
    "width=900,height=800,scrollbars=yes"
  );
});
