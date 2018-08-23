import React, { Component } from 'react';
import './Content.css';
import Menu from './Menu';
import demos from './demos.js';

import Playground from 'component-playground';


class Content extends Component {

  constructor() {
    super();
    this.state = {
      component: this._parseHash().componentId
    };

    window.addEventListener('hashchange', () => {
      const component = this._parseHash().componentId;
      if (this.state.component !== component) {
        this.setState({component});
      }
      this._scrollIntoView.call(this);
    });
  }

  _parseHash() {
    const hash = window.location.hash.substr(2);
    const parts = hash.split('/');
    return {componentId: parts[0], demoId: parts[1]};
  }

  _scrollIntoView() {
    const demo = document.getElementById(this._parseHash().demoId);
    demo && demo.scrollIntoView();
  }

  render() {
    const element = demos.find(demo => demo.id === this.state.component);

    const content = element ? element.pages.map(demo => {
      return <div key={demo.title} id={demo.id}>
        <h1>{demo.title}</h1>
        <Playground noRender={!demo.render} codeText={demo.code} scope={element.scope}/>
      </div>
    }) : 'Intro';

    requestAnimationFrame(this._scrollIntoView.bind(this));
    
    return (
      <div className="content">
        <div className="pagecontent">
          {content}
        </div>
        <Menu></Menu>
      </div>
    );
  }
}

export default Content;
