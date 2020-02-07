export const getLangPath = (toLng, currentPath, currentLng) => {
  const page = currentPath   ? currentPath.split("/").pop() : ''
  const isHomePage = page === `ar` || page === `pr` || page === `fr` || page === `` 
  
  console.log('page',page)
  console.log('currentPath',currentPath)
  return isHomePage ? toLng === 'en' ?  '/' : `/${toLng}` :
  (toLng === 'en' && !page) || toLng === 'en'  ? `/` : `/${toLng}/${page}`
};

export const toPath = (currentLng, toPage) => {
  // const currentPath = global && global.window && global.window.location ? global.window.location : ''
  // const hasBlog = currentPath.includes('blog') 
  return !toPage ||(( toPage === 'blog'  || toPage === 'projects') && currentLng === 'en' )  ?   `/${toPage}` : `/${currentLng}/${toPage}`
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