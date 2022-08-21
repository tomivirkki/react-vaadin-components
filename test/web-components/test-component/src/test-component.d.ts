/* eslint-disable no-use-before-define */
type TestComponentItem = any;

export type TestComponentItemModel<TItem = TestComponentItem> = {
  item: TItem;
  index: number;
};

declare class AbstractTestComponent extends HTMLElement {}

/**
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 */
declare class TestComponent<
  TItem = TestComponentItem
> extends AbstractTestComponent {
  value: string;

  items: TItem[];

  overlayRenderer: (
    root: HTMLElement,
    testComponent?: TestComponent<TItem>
  ) => void;

  headerRenderer: (
    root: HTMLElement,
    testComponent?: TestComponent<TItem>
  ) => void;

  renderer: (
    root: HTMLElement,
    comboBox: TestComponent<TItem>,
    model: TestComponentItemModel<TItem>
  ) => void;

  opened: boolean;

  header: HTMLElement;

  overlay: HTMLElement;

  itemlist: HTMLElement;

  requestContentUpdate(): void;
}

export type ValueChangedEvent = CustomEvent<string>;

// eslint-disable-next-line no-undef
export interface TestComponentEventMap extends HTMLElementEventMap {
  "value-changed": ValueChangedEvent;
}

declare global {
  interface HTMLElementTagNameMap {
    "test-component": TestComponent;
  }
}

export { TestComponent, AbstractTestComponent };
