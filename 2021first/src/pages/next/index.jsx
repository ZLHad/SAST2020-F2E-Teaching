'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '../../components/layout/index';
import './index.scss';

class Help extends React.Component {
  render() {
    return (
      <Layout>
        <div className="help-page">
          <div className="tip-text">
            <span>This is the next page</span>
          </div>
        </div>
      </Layout>);
  }
}

ReactDOM.render(<Help />, document.getElementById('container'));

