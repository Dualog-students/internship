import React from 'react';
import PropTypes from 'prop-types';
import SocialIcons from '@components/SocialIcons';
import Nav from '@components/Nav';

import './style.scss';

const LandingPage = (props, context) => {
  const { theme: { bgPrimary, colorPrimary } } = context;

  return (
    <div style={{ backgroundColor: bgPrimary }} className="landing-page">
      <Nav />
      <main style={{ color: colorPrimary }}>
        <div className="intro-wrapper">
          <div className="intro-name">Dualog is looking for summer interns!</div>
          <div className="tagline">
          <p><b>Who are you?</b></p>
          An IT student with a passion for developing software.
          <br />
          <br />
          <p><b> Who are we?</b></p>
          A global company that delivers software to the maritime industry.
          <br />
          <br />
          <p><b> What to do?</b></p>
          Arrange a hackathon, then develop an idea based on it.
          <br />
          <br />
            <b><a href="mailto:fredrik@dualog.com?subject=Dualog%20Summer%20internship%202018%20-%20YOUR_NAME"> APPLY NOW! </a></b>
          <br />
          <b>(Deadline end of April)</b>
          </div>
          <SocialIcons />
        </div>
      </main>
    </div>
  );
};

LandingPage.contextTypes = {
  theme: PropTypes.any
};

export default LandingPage;
