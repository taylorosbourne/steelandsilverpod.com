import React from 'react';
import styled from 'styled-components';
import EpisodeList from './EpisodeList';
import ContactForm from './ContactForm';
import Hosts from './Hosts.js'
import Thumbnail from '../images/thumbnail.png';
import Patreon from '../images/patreon.png';

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 40px;
  @media(max-width: 1000px) {
    display: flex;
    flex-direction: column;
    * {
      width: 100%;
    }
  }
`;

const TwitterContainer = styled.div`
  max-width: 300px;
  margin: 15px 0;
  @media(max-width: 1000px) {
    max-width: 100%;
    width: 100%;
  }
`;

const PatreonImage = styled.img`
  border-radius: 15px;
  width: 100%;
  @media(max-width: 1000px) {
    width: 500px;
  }
`;

const IndexContainer = ({episodes}) => (
  <Container>
    <div style={{margin: `15px 0`, display: `flex`, flexDirection: `column`, alignItems: `flex-start`}}>
      <img style={{width: `100%`, borderRadius:  `15px`}} src={Thumbnail} alt="podcast-thumbnail" />
      <TwitterContainer>
        <h2 className="section-header">Twitter</h2>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Episode 3- Our Cast Picks for the Witcher Netflix series is on <a href="https://t.co/WMGSNUrfVG">https://t.co/WMGSNUrfVG</a> and going up on Apple Podcasts tomorrow! Don&#39;t forget to rate, review and subscribe! Good luck on the path.</p>&mdash; Steel &amp; Silver: A Witcher Podcast (@steelsilverpod) <a href="https://twitter.com/steelsilverpod/status/1046215580884373509?ref_src=twsrc%5Etfw">September 30, 2018</a></blockquote>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Episode 2-Witcher 2077: Cyberpunk Gameplay Reaction is coming to soundcloud and Apple Podcasts tomorrow! Don’t forget to rate, review and subscribe. Until next time, good luck on the path. <a href="https://twitter.com/hashtag/witcher?src=hash&amp;ref_src=twsrc%5Etfw">#witcher</a> <a href="https://twitter.com/hashtag/thewitcher?src=hash&amp;ref_src=twsrc%5Etfw">#thewitcher</a> <a href="https://twitter.com/hashtag/cyberpunk2077?src=hash&amp;ref_src=twsrc%5Etfw">#cyberpunk2077</a> <a href="https://twitter.com/hashtag/CDProjektRED?src=hash&amp;ref_src=twsrc%5Etfw">#CDProjektRED</a></p>&mdash; Steel &amp; Silver: A Witcher Podcast (@steelsilverpod) <a href="https://twitter.com/steelsilverpod/status/1034283555516555265?ref_src=twsrc%5Etfw">August 28, 2018</a></blockquote>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Episode 1- What Makes a Witcher? Is available now at <a href="https://t.co/aqHE02CvaS">https://t.co/aqHE02CvaS</a> and on Apple Podcasts. Rate, review and subscribe. Good luck on the path. <a href="https://twitter.com/hashtag/witcher?src=hash&amp;ref_src=twsrc%5Etfw">#witcher</a> <a href="https://twitter.com/hashtag/thewitcher?src=hash&amp;ref_src=twsrc%5Etfw">#thewitcher</a> <a href="https://twitter.com/hashtag/steelandsilverpod?src=hash&amp;ref_src=twsrc%5Etfw">#steelandsilverpod</a></p>&mdash; Steel &amp; Silver: A Witcher Podcast (@steelsilverpod) <a href="https://twitter.com/steelsilverpod/status/1031026383823220736?ref_src=twsrc%5Etfw">August 19, 2018</a></blockquote>
      </TwitterContainer>
      <div style={{width: `100%`}}>
        <h2 className="section-header">Patreon</h2>
        <a target="_blank" rel="noopener noreferrer" href="https://www.patreon.com/steelandsilverpod" alt="patreon-link"><PatreonImage src={Patreon} alt="patreon" /></a>
      </div>
    </div>
    <div>
      <EpisodeList episodes={episodes} />
      <Hosts />
      <ContactForm />
    </div>
  </Container>
);

export default IndexContainer;
