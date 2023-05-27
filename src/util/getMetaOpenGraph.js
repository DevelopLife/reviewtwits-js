export const getMetaOpenGraphContent = (property) => {
  const $meta = window?.document?.querySelector(
    `meta[property="og:${property}"]`
  );

  return $meta?.content;
};
