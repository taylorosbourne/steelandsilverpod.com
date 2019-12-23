import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components'
import Layout from '../components/layout';

const EpisodeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  * {
    margin: 10px auto;
  }
`;

const Episode = styled.div`
  width: 100%;
  margin-left: 5px;
`;

const Episodes = ({data}) => {
  const episodes = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <EpisodeContainer style={{maxWidth: 860, margin: `0 auto`}}>
      <h2 className="section-header" style={{width: `100%`}}>all episodes</h2>
        {episodes.map((episode, i) => {
        const { frontmatter, id } = episode.node;
        const { path, title, date, description } = frontmatter;

        return (
          <Episode
            key={id}
            style={{}}
            id={i === 0 ? 'main' : null}
          >
            <h3>
              <Link style={{textDecoration: `none`, color: `teal`}} to={path}>{title}</Link>
            </h3>
            <small style={{color: `rgb(42,42,42)`, fontFamily: `Helvetica`}}>
              {date}
            </small>
            <Episode>{description}</Episode>
          </Episode>
          );
        })}
      </EpisodeContainer>
    </Layout>
  )
};

export default Episodes;

export const ALL_EPISODES_QUERY = graphql`
  query ALL_EPISODES_QUERY {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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