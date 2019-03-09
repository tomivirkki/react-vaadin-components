import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import stripIndent from 'strip-indent';
import './Components.css';
import components, { componentCategories } from './demos';
import Snippet from './Snippet';
import { Redirect } from 'react-router-dom';
import {
  HorizontalLayout,
  VerticalLayout,
  ListBox,
  Item,
  Tabs,
  Tab
} from 'react-vaadin-components';

export class Components extends Component {

  state = {category: 0}

  itemSelected = e => {
    const component = components[e.detail.value];
    this.setState({
      redirectTo: `${this.props.match.path.split('/:')[0]}/${component.id}`,
      menuOpen: false
    })
  }

  render() {
    const params = this.props.match.params;
    const component = components.filter(component => component.id === params.component)[0] || components[0];
    const webComponentName = `vaadin-${component.id}`;

    return <HorizontalLayout style={{height: '100%', position: 'relative'}}>
      <VerticalLayout style={{flex: 1, overflow: 'auto'}} theme="padding"
        ref={vl => vl && this._redirected !== (this._redirected = this.state.redirectTo) && (ReactDOM.findDOMNode(vl).scrollTop = 0)}>
        <ReactMarkdown source={stripIndent(`
          # ${component.name}

          ${component.description}
        `).trim()}/>
        <ReactMarkdown source={stripIndent(`
          Live Demo *(with editable source)*:
        `).trim()}/>
        <Snippet noRender={true} codeText={component.demo} />
        <ReactMarkdown source={stripIndent(`
          ## Features

          ${component.featuresDescription}
        `).trim()} />
        <Snippet noRender={false} codeText={component.featuresDemo} />
        <ReactMarkdown source={stripIndent(`
          ## References

          - [API](https://vaadin.com/components/${component.hostName || webComponentName}/html-api) (Web Component)
          - [Examples](https://vaadin.com/components/${component.hostName || webComponentName}/html-examples/${component.demoPath || ''}) (Web Component)
        `).trim()} />
      </VerticalLayout>

      <VerticalLayout className={`Menubar${this.state.menuOpen ? ' open' : ''}`} theme="padding">
        <h2>Components</h2>
        <Tabs style={{width: '100%'}} theme="small" onSelectedChanged={e => this.setState({category: e.detail.value})}>
          {['All components', ...componentCategories].map(cat => <Tab key={cat}>{cat}</Tab>)}
        </Tabs>
        <ListBox style={{width: '100%', overflow: 'auto'}} selected={components.indexOf(component)} onSelectedChanged={this.itemSelected}>
          {components
            .map(component =>
              <Item
                key={component.id}
                hidden={this.state.category && component.category + 1 !== this.state.category}>
                {component.name.replace(/([A-Z])/g, m => ' ' + m).trim()}
              </Item>)}
        </ListBox>
      </VerticalLayout>

      <div className="Menutoggle" onClick={() => this.setState({menuOpen: !this.state.menuOpen})}></div>
      {this.state.redirectTo && <Redirect to={this.state.redirectTo} push />}
    </HorizontalLayout>;
  }

}
