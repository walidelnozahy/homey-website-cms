export const getLangPath = (toLng, currentPath) => {
  const page = currentPath  ? currentPath.split("/").pop() : ''
  console.log('page',page)
  return toLng === 'en' && !page? `/` : `${toLng}/${page}`
};

export const toPath = (currentLng, toPage) => {
  console.log('currentLng',currentLng !== "en" ? `${currentLng}/${toPage}` : `/${toPage}`)
  return !toPage ?   `${toPage}` : `${currentLng}/${toPage}`
};

export const flatString = str =>
  str
    .split(" ")
    .join("_")
    .split("/")
    .join("_");

