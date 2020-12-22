import React, { useState } from 'react';

import { Button, Jumbotron } from 'react-bootstrap';
import { LoginModal } from '../../components/login/LoginModal';

import './landingPage.styles.scss';

const LandingPage = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="landing-page">
      <Jumbotron>
        <h1>Welcome to this Web Application</h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">
            Learn more
          </Button>
        </p>
      </Jumbotron>
      <div>
        Current User? Please Login Here:&nbsp;
        <Button onClick={() => setModalShow(true)}>
          Login
        </Button>
        <LoginModal show={modalShow} onClose={() => setModalShow(false)}/>
      </div>
    </div>
  );
}

export default LandingPage;
