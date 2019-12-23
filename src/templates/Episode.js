import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SingleEpisode from '../components/SingleEpisode';

const EpisodeTemplate = ({ data }) => {
  const { html: __html } = data.markdownRemark;
  const { title, date, audio } = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <SingleEpisode __html={__html} audio={audio} title={title} date={date} />
    </Layout>
  );
};

export const EPISODE_BY_PATH = graphql`
  query EPISODE_BY_PATH($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        audio
        date
        description
      }
    }
  }
`;

export default EpisodeTemplate;