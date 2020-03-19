const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require('path');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;
  const episodeTemplate = path.resolve('src/templates/Episode.tsx');

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
              audio
              description
            }
          }
        }
      }
    }
  `)

  if (errors) {
    return Promise.reject(errors);
  };

  data.allMarkdownRemark.edges.forEach(({ node }) => {
    const episodes = data.allMarkdownRemark.edges;
    episodes.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: episodeTemplate,
      });
    });
  });
};
