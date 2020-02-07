const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const locales = require("./src/_constants/locales");
const load = require("@eahefnawy/functions.js")
const company = require('./src/_company/company')
const {listProjects, listNearby, listFeatures } = load(company.backend);

// const getProjects = async () => {
//   const res = await Promise.all([listProjects(),listNearby(),listFeatures()])
  
//   const allNearby = res[1]
//   const allFeatures = res[2]
  
//   res[0].forEach(project => {
//     if (project.nearby && project.nearby.length) {
//       project.nearby.forEach(nearby => {
//         nearby = {
//           ...nearby,
//           ...allNearby.find(i => i.id === nearby.id)
//         }
//       })
//     }
//     if (project.features && project.features.length) {
//       project.features.forEach(feature => {
//         feature = {
//           ...feature,
//           ...allFeatures.find(i => i.id === feature.id)
//         }
//       })
//     }
//   })
//   projects = res[0]
// }

let projects = null

const getProjects = async () => {
  projects = await listProjects()
}



exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  schema
}) => {
  try {


     await getProjects();
     
     projects.forEach(project => {
      const node = {
        ...project,
        alternative_id: project.id,
        id: createNodeId(`project-${project.id}`),
        internal: {
          type: "Projects",
          contentDigest: createContentDigest(project)
        }
      };
      
      actions.createNode(node);
    });
    
  } catch (error) {
    console.log(error);
  }
};


exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const projects = await listProjects()
  // console.log(projects[0],'tesstt')
    Object.keys(locales).map(lang => {
       projects.map(project => {
        const localizedPath = locales[lang].path + '/' + project.code;
          // console.log('localizedPath',localizedPath)
         createPage({
          
          path: localizedPath,
          component: require.resolve("./src/templates/project-page.js"),
          context: {
            locale: lang,
            project
          }
        });
      })
    });
  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              
              templateKey
              locale
              path
              title
              name
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges
    
    posts.forEach(edge => {
      const locale = edge.node.frontmatter.locale;
      if (edge.node.frontmatter.templateKey != null) {
        // console.log('templateKEY',edge.node.frontmatter.templateKey)
        const id = edge.node.id;
        const pageLocale = edge.node.frontmatter.locale
        let getPath
        if (edge.node.frontmatter.templateKey === 'blog-post') {
          getPath = edge.node.fields.slug
        }
        else if (edge.node.frontmatter.name !== 'home') {

           getPath = pageLocale + '/' + edge.node.frontmatter.name
        } else {
          getPath = pageLocale !== 'en' ? pageLocale  : '/'
        }
        createPage({
          path: getPath ,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          context: {
            id,
            locale
          }
        });
      }
     
    })

    // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
  })
}
exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default
        ? page.path
        : locales[lang].path + page.path;
        
      return createPage({
        ...page,
        path: localizedPath,
        context: {
          locale: lang
        }
      });
    });
    resolve();
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
