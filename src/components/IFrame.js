import React, { Component } from 'react';

class IFrame extends Component {
  // componentDidMount() {
  //   window.$(this.refs.list).fadeOut(); //**
  // }

  render() {
    return (
      <iframe title="my title">
        <div
          class="airbnb-embed-frame"
          data-id="21917882"
          data-view="home"
          style={{ width: '450px', height: '300px', margin: 'auto' }}
        >
          <a href="https://www.airbnb.com/rooms/21917882?s=51">
            <span>View On Airbnb</span>
          </a>
          <a href="https://www.airbnb.com/rooms/21917882?s=51" rel="nofollow">
            T2 hypercentre Capitole/St-Sernin, quiet &amp; bright
          </a>
          <script
            async=""
            src="https://www.airbnb.com/embeddable/airbnb_jssdk"
          />
        </div>
      </iframe>
    );
  }
}

export default IFrame;
