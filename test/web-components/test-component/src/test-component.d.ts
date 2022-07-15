type TestComponentItem = any;

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

  header: HTMLElement;

  overlay: HTMLElement;

  itemlist: HTMLElement;
}

export type TestComponentItemModel<TItem = TestComponentItem> = {
  item: TItem;
  index: number;
};

declare global {
  interface HTMLElementTagNameMap {
    "test-component": TestComponent;
  }
}

export { TestComponent };
