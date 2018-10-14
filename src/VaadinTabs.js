import { WebComponent } from './WebComponent';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';

export class VaadinTabs extends WebComponent {
  constructor() {
    super('vaadin-tabs');
  }
}

export class VaadinTab extends WebComponent {
  constructor() {
    super('vaadin-tab');
  }
}

