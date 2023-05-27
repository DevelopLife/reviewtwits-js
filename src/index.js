import {getMetaOpenGraphContent} from "./util/getMetaOpenGraph.js";

const openGraphs = {
  title: getMetaOpenGraphContent("title") || "",
  image: getMetaOpenGraphContent("image") || "",
};

const queryParams = new URLSearchParams(window.location.search);
const projectName = queryParams.get("projectName");

export {openGraphs, projectName};
