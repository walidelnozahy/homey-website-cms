export const getLangPath = (toLng, currentPath) => {
  const page = currentPath  ? currentPath.split("/").pop() : ''
  return toLng !== "en" ? `${toLng}/${page}` : `${page}`;
};

export const toPath = (currentLng, toPage) => {
  return currentLng !== "en" ? `${currentLng}/${toPage}` : `${toPage}`;
};

export const flatString = str =>
  str
    .split(" ")
    .join("_")
    .split("/")
    .join("_");

