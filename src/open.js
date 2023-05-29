// import
import {openGraphs, projectName} from "./state/state.js";

const Open = () => {
  const apple = "apple";
  const $reviewWriteButton = document.getElementById("review_twits_write");

  if ($reviewWriteButton) {
    $reviewWriteButton.addEventListener("click", () => {
      window?.open(
        `https://reviewtwits.shop/review/write?projectName=${projectName}&productURL=${window?.location?.href}&title=${openGraphs?.title}&image=${openGraphs?.image}`,
        "리뷰트윗 리뷰작성하기",
        "width=900,height=800,scrollbars=yes"
      );
    });
  }
};

export default Open;
