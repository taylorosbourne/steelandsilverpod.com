import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Episode from './Episode';

const EpisodeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  * {
    margin: 10px 0;
  }
`;

const Episodes = styled.div`
  width: 100%;
  margin-left: 5px;
`;

interface Episode {
  node: {
    id: string;
    frontmatter: {
      path: string;
      title: string;
      date: string;
      description: string;
    }
  }
}

interface Props {
  episodes: Episode[];
}

const EpisodeList: FC<Props> = ({ episodes }) => (
  <EpisodeContainer>
    <h2 className="section-header" style={{ width: `100%`, marginTop: `25px` }}>recent episodes</h2>
    {episodes.map((episode, i) => {
      const { frontmatter, id } = episode.node;
      const { path, title, date, description } = frontmatter;

      return (
        <Episodes
          key={id}
          id={i === 0 ? 'main' : null}
        >
          <h3>
            <Link style={{ textDecoration: `none`, color: `teal` }} to={path}>{title}</Link>
          </h3>
          <small style={{ color: `rgb(42,42,42)`, fontFamily: `Helvetica` }}>
            {date}
          </small>
          <Episode>{description}</Episode>
        </Episodes>
      );
    })}
    <div style={{ textAlign: `left`, width: `100%`, padding: `5px` }}>
      <Link to="/episodes" style={{ textTransform: `uppercase`, color: `teal`, fontFamily: `Helvetica` }}>View All episodes</Link>
    </div>
  </EpisodeContainer>
);

export default EpisodeList;
