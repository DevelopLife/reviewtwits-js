import {getMetaContent} from "./util/getMetaContent.js";

const openGraphs = {
  title: getMetaContent({attributeKey: "property", attributeValue: "og:title"}),
  image: getMetaContent({attributeKey: "property", attributeValue: "og:image"}),
};

const projectName = getMetaContent({
  attributeKey: "name",
  attributeValue: "projectname",
});

export {openGraphs, projectName};
