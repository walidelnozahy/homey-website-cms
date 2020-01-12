export const getLangPath = (toLng, currentPath) => {
  const page = currentPath  ? currentPath.split("/").pop() : ''
  
  return toLng === 'en' && !page? `/` : `/${toLng}/${page}`
};

export const toPath = (currentLng, toPage) => {
  
  return !toPage ?   `/${toPage}` : `/${currentLng}/${toPage}`
};

export const flatString = str =>
  str
    .split(" ")
    .join("_")
    .split("/")
    .join("_");




export const getCurrencyRate = () =>  global && global.window && localStorage && localStorage.currency 
? JSON.parse(localStorage.currency)
: null;