import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { siteMetadata } from '../../gatsby-config';
import Layout from '../components/layout';
import SEO from '../components/seo';
import IndexContainer from '../components/IndexContainer';

interface Props {
  data: {
    allMarkdownRemark: {
      edges
    }
  }
};


const IndexPage: FC<Props> = ({data}) => {
  const episodes = data.allMarkdownRemark.edges;
  const { title } = siteMetadata;
  return (
    <Layout>
      <SEO title={title} />
      <IndexContainer episodes={episodes} />
    </Layout>
  );
};

export default IndexPage;

export const RECENT_EPISODES_QUERY = graphql`
  query RECENT_EPISODES_QUERY {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 4) {
      edges {
        node {
          id
          html
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
`;
