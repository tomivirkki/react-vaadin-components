type TestComponentItem = any;

/**
 * @fires {CustomEvent} value-changed - Fired when the `value` property changes.
 */
declare class TestComponent<TItem = TestComponentItem> extends HTMLElement {
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

export type TestComponentItemModel<TItem = TestComponentItem> = {
  item: TItem;
  index: number;
};

export type ValueChangedEvent = CustomEvent<string>;

export interface TestComponentEventMap extends HTMLElementEventMap {
  "value-changed": ValueChangedEvent;
}

declare global {
  interface HTMLElementTagNameMap {
    "test-component": TestComponent;
  }
}

export { TestComponent };
