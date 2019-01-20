import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub, faTwitter, faMedium, faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import photo from '../assets/images/luanorlandi.jpg';

const Home = () => (
  <Layout>
    <SEO
      description="Front-end developer, developing apps and web pages"
      keywords="React, Node, Gatsby, Front-end, developer, API"
    />
    <figure className="photo image is-128x128">
      <img className="is-rounded" src={photo} alt="Luan Orlandi" />
    </figure>
    <h1 className="title has-text-centered">
      Luan Orlandi
    </h1>
    <h2 className="subtitle has-text-centered">
      Web Developer
    </h2>
    <div className="has-text-centered">
      <a href="https://github.com/luanorlandi" aria-label="github">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faGithub} />
        </span>
      </a>
      <a href="https://twitter.com/luanorlandi" aria-label="twitter">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faTwitter} />
        </span>
      </a>
      <a href="https://medium.com/@luanorlandi" aria-label="medium">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faMedium} />
        </span>
      </a>
      <a href="https://www.linkedin.com/in/luanorlandi/" aria-label="linkedin">
        <span className="icon is-large fa-2x">
          <FontAwesomeIcon icon={faLinkedin} />
        </span>
      </a>
    </div>
    <section className="section content is-size-4-desktop is-size-5-touch">
      <h4 className="title">
        Hello, I am Luan Orlandi!
      </h4>
      <p>
        {`I'm a Web Developer, I work with Front-end creating apps and web pages.
        I participate in events about technology and I like to study productivity and communication, it helps me stay organized and collaborative.`}
      </p>
      <p>
        I develop projects mostly with JavaScript using React and Node.
      </p>
      <p>
        Check out my
        {' '}
        <Link to="/projects">projects</Link>
        {'.'}
      </p>
    </section>
  </Layout>
);

export default Home;
