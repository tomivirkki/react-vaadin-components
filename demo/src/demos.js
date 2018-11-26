import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as components from 'react-vaadin-components';
import users from './users.js';
import demos from './demos.json';

export const scope = {React, ReactDOM, Component, users, ...components};

function getId(title) {
  return title.toLowerCase().replace(/ /g, '-');
}

function prepareDemos(demos, parent) {
  demos.forEach(demo => {
    demo.id = getId(demo.title);
    demo.children && prepareDemos(demo.children, demo);
    demo.parent = parent;
  });
}

prepareDemos(demos);

export default demos;

export const loadDemos = async page => {
  return new Promise((resolve, reject) => {
    import('./demos/' + page.demoSource)
      .then(res => res.default)
      .then(fetch)
      .then(res => res.text())
      .then(html => {
        const dom = document.createElement('div');
        dom.innerHTML = html;
        const mainTemplate = dom.querySelector('template');
        const demoTitles = mainTemplate.content.querySelectorAll('h3');

        page.demos = Array.from(demoTitles)
        .filter(title => !page.excludedTitles || !page.excludedTitles.includes(title.textContent))
        .map(title => {
          const demo = {};
          demo.title = title.textContent;
          demo.description = [];
          let demoSnippet = title.nextSibling;
          while (demoSnippet.localName !== 'vaadin-demo-snippet') {
            if (demoSnippet.localName === 'p') {
              demo.description.push(<p key={demoSnippet.textContent}>{demoSnippet.textContent}</p>);
            }
            demoSnippet = demoSnippet.nextSibling;
          }

          const demoContent = demoSnippet.querySelector('template').content;
          const wrapper = document.createElement('div');
          wrapper.appendChild(demoContent);
          const demoScript = wrapper.querySelector('script');
          demoScript && wrapper.removeChild(demoScript);

          demo.code = wrapper.children.length === 1 ? wrapper.innerHTML : `<div>${wrapper.innerHTML}</div>`;

          demo.code = demo.code
            .replace(/vaadin/g, 'Vaadin')
            .replace(/-[a-z]/g, match => match.substr(1).toUpperCase())
            .replace(/=""/g, '');

          page.replacements && page.replacements.forEach(r => {
            demo.code = demo.code.replace(new RegExp(r.from, 'g'), r.to);
          });
          return demo;
        });

        resolve(page);
      });
    });
}
