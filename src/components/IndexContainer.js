import React from 'react';
import styled from 'styled-components';
import EpisodeList from './EpisodeList';
import Thumbnail from '../images/thumbnail.png';
import Patreon from '../images/patreon.png';
import Charlie from '../images/charlie.jpg';
import Taylor from '../images/taylor.jpg';

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-gap: 20px;
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

const ContactInput = styled.input`
  font-size: 1.5rem;
  font-family: 'Helvetica';
  margin: 15px 15px 15px 0px;
  border: 0;
  border-bottom: 1.5px solid rgb(42,42,42);
  :focus {
    outline: none;
    border-bottom: 1.5px solid teal;
  }
`;

const ContactMessage = styled.textarea`
  border: 1.5px solid rgba(0,0,0,0.1);
  border-radius: 5px;
  :focus {
    outline: none;
    border: 1.5px solid teal;
  }
`;


const IndexContainer = () => (
  <Container>
    <div style={{margin: `15px 0`, display: `flex`, flexDirection: `column`, alignItems: `flex-start`}}>
      <img style={{width: `100%`, borderRadius:  `15px`}} src={Thumbnail} alt="podcast-thumbnail" />
      <TwitterContainer>
        <h2 style={{textTransform: `uppercase`, paddingLeft: `5px`, color: `rgb(42,42,42)`, borderLeft: `3px solid teal`}}>Twitter</h2>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Episode 3- Our Cast Picks for the Witcher Netflix series is on <a href="https://t.co/WMGSNUrfVG">https://t.co/WMGSNUrfVG</a> and going up on Apple Podcasts tomorrow! Don&#39;t forget to rate, review and subscribe! Good luck on the path.</p>&mdash; Steel &amp; Silver: A Witcher Podcast (@steelsilverpod) <a href="https://twitter.com/steelsilverpod/status/1046215580884373509?ref_src=twsrc%5Etfw">September 30, 2018</a></blockquote>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Episode 2-Witcher 2077: Cyberpunk Gameplay Reaction is coming to soundcloud and Apple Podcasts tomorrow! Don’t forget to rate, review and subscribe. Until next time, good luck on the path. <a href="https://twitter.com/hashtag/witcher?src=hash&amp;ref_src=twsrc%5Etfw">#witcher</a> <a href="https://twitter.com/hashtag/thewitcher?src=hash&amp;ref_src=twsrc%5Etfw">#thewitcher</a> <a href="https://twitter.com/hashtag/cyberpunk2077?src=hash&amp;ref_src=twsrc%5Etfw">#cyberpunk2077</a> <a href="https://twitter.com/hashtag/CDProjektRED?src=hash&amp;ref_src=twsrc%5Etfw">#CDProjektRED</a></p>&mdash; Steel &amp; Silver: A Witcher Podcast (@steelsilverpod) <a href="https://twitter.com/steelsilverpod/status/1034283555516555265?ref_src=twsrc%5Etfw">August 28, 2018</a></blockquote>
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Episode 1- What Makes a Witcher? Is available now at <a href="https://t.co/aqHE02CvaS">https://t.co/aqHE02CvaS</a> and on Apple Podcasts. Rate, review and subscribe. Good luck on the path. <a href="https://twitter.com/hashtag/witcher?src=hash&amp;ref_src=twsrc%5Etfw">#witcher</a> <a href="https://twitter.com/hashtag/thewitcher?src=hash&amp;ref_src=twsrc%5Etfw">#thewitcher</a> <a href="https://twitter.com/hashtag/steelandsilverpod?src=hash&amp;ref_src=twsrc%5Etfw">#steelandsilverpod</a></p>&mdash; Steel &amp; Silver: A Witcher Podcast (@steelsilverpod) <a href="https://twitter.com/steelsilverpod/status/1031026383823220736?ref_src=twsrc%5Etfw">August 19, 2018</a></blockquote>
      </TwitterContainer>
      <div style={{width: `100%`}}>
        <h2 style={{textTransform: `uppercase`, color: `rgb(42,42,42)`, paddingLeft: `5px`, color: `rgb(42,42,42)`, borderLeft: `3px solid teal`}}>Patreon</h2>
        <PatreonImage src={Patreon} alt="patreon" />
      </div>
    </div>
    <div>
      <EpisodeList />
      <div style={{margin: `25px 0`}}>
      <h2 style={{textTransform: `uppercase`, paddingLeft: `5px`, color: `rgb(42,42,42)`, borderLeft: `3px solid teal`}}>Hosts</h2>
        <div style={{width: `60%`, margin: `65px 0`, display: `flex`, justifyContent: `space-around`}}>
          <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
            <img src={Charlie} alt="charlie" style={{borderRadius: `50%`, height: `125px`, width: `125px`}} />
            <a style={{textTransform: `uppercase`, fontFamily: `Helvetica`, borderLeft: `3px solid teal`, paddingLeft: `5px`}}>Charles Boettcher</a>
            <a style={{textTransform: `uppercase`, fontFamily: `Helvetica`, color: `teal`, fontSize: `0.8rem`}}>@papa_betch</a>
          </div>
          <div style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
            <img src={Taylor} alt="Taylor" style={{borderRadius: `50%`, height: `125px`, width: `125px`}} />
            <a style={{textTransform: `uppercase`, fontFamily: `Helvetica`, borderLeft: `3px solid teal`, paddingLeft: `5px`}}>Taylor Osbourne</a>
            <a style={{textTransform: `uppercase`, fontFamily: `Helvetica`, color: `teal`, fontSize: `0.8rem`}}>@taylorgosbourne</a>
          </div>
        </div>
      </div>
      <div style={{margin: `55px 0`}}>
      <h2 style={{textTransform: `uppercase`, paddingLeft: `5px`, color: `rgb(42,42,42)`, borderLeft: `3px solid teal`}}>Contact</h2>
        <form style={{width: `80%`, display: `flex`, flexWrap: `wrap`, justifyContent: `flex-start`, alignItems: `center`}}>
          <ContactInput type="text" placeholder="name" />
          <ContactInput type="text" placeholder="email" />
          <ContactMessage style={{maxWidth: `90%`, minWidth: `90%`, padding: `5px`, marginTop: `15px`, minHeight: `200px`, fontSize: `1.5rem`, fontFamily: `Helvetica`}} placeholder="message"></ContactMessage>
          <button style={{background: `rgb(242,242,242)`, textTransform: `uppercase`, color: `teal`, fontFamily: `Helvetica`, padding: `5px 20px`, border: 0, fontWeight: `600`, borderLeft: `3px solid teal`, borderBottom: `3px solid teal`, borderRadius: `5px`, margin: `15px 0` }}>Submit </button>
        </form>
      </div>
    </div>
  </Container>
);

export default IndexContainer;
