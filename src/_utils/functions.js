export const getLangPath = (toLng, currentPath) => {
  const page = currentPath  ? currentPath.split("/").pop() : ''
  return `${toLng}/${page}`
};

export const toPath = (currentLng, toPage) => {
  console.log('currentLng',currentLng !== "en" ? `${currentLng}/${toPage}` : `/${toPage}`)
  return `${currentLng}/${toPage}`
};

export const flatString = str =>
  str
    .split(" ")
    .join("_")
    .split("/")
    .join("_");

