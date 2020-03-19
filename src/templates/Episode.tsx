import React, { FC } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SingleEpisode from '../components/SingleEpisode';

interface Props {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        title: string;
        date: string;
        audio: string;
      }
    }
  }
}

const EpisodeTemplate: FC<Props> = ({ data }) => {
  const { html: __html, frontmatter } = data.markdownRemark;
  const { title, date, audio } = frontmatter;
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
