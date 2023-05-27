export const getMetaContent = ({attributeKey, attributeValue}) => {
  const $meta = window?.document.querySelector(
    `meta[${attributeKey}="${attributeValue}"]`
  );

  return $meta?.content;
};
