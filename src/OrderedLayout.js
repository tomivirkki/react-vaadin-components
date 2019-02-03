import { CustomElementIs } from './CustomElement';
import('@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout');
import('@vaadin/vaadin-ordered-layout/vaadin-vertical-layout');

export class HorizontalLayout extends CustomElementIs('vaadin-horizontal-layout') {}

export class VerticalLayout extends CustomElementIs('vaadin-vertical-layout') {}
