// Generated file. Do not edit.
type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
import { createPolymerComponent, eventMapper } from "../create-component";

import type { GridColumnGroup as GridColumnGroupClass } from "@vaadin/grid/vaadin-grid-column-group";

import type { GridColumn as GridColumnClass } from "@vaadin/grid/vaadin-grid-column";

import type { GridFilterColumn as GridFilterColumnClass } from "@vaadin/grid/vaadin-grid-filter-column";

import type {
  GridFilter as GridFilterClass,
  GridFilterEventMap,
} from "@vaadin/grid/vaadin-grid-filter";

import type {
  GridSelectionColumn as GridSelectionColumnClass,
  GridSelectionColumnEventMap,
} from "@vaadin/grid/vaadin-grid-selection-column";

import type {
  GridSortColumn as GridSortColumnClass,
  GridSortColumnEventMap,
} from "@vaadin/grid/vaadin-grid-sort-column";

import type {
  GridSorter as GridSorterClass,
  GridSorterEventMap,
} from "@vaadin/grid/vaadin-grid-sorter";

import type { GridTreeColumn as GridTreeColumnClass } from "@vaadin/grid/vaadin-grid-tree-column";

import type {
  GridTreeToggle as GridTreeToggleClass,
  GridTreeToggleEventMap,
} from "@vaadin/grid/vaadin-grid-tree-toggle";

import type { Grid as GridClass, GridEventMap } from "@vaadin/grid/vaadin-grid";

const GridColumnGroupEvents = {};

const GridColumnGroupProperties = {
  flexGrow: "",
  width: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
};

type GridColumnGroupClassExtended = Omit<
  GridColumnGroupClass,
  "headerRenderer" | "footerRenderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
};

export const GridColumnGroup = createPolymerComponent<
  GridColumnGroupClassExtended,
  typeof GridColumnGroupEvents
>(
  "vaadin-grid-column-group",
  GridColumnGroupProperties,
  GridColumnGroupEvents,
  () => import("@vaadin/grid/vaadin-grid-column-group"),
  "GridColumnGroup",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
  }
);

const GridColumnEvents = {};

const GridColumnProperties = {
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  componentRenderer: "",
};

type GridColumnClassExtended = Omit<
  GridColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  componentRenderer: (
    model: Parameters<
      Exclude<PropType<GridColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

export const GridColumn = createPolymerComponent<
  GridColumnClassExtended,
  typeof GridColumnEvents
>(
  "vaadin-grid-column",
  GridColumnProperties,
  GridColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-column"),
  "GridColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    componentRenderers: { componentRenderer: "renderer" },
  }
);

const GridFilterColumnEvents = {};

const GridFilterColumnProperties = {
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  componentRenderer: "",
};

type GridFilterColumnClassExtended = Omit<
  GridFilterColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  componentRenderer: (
    model: Parameters<
      Exclude<PropType<GridFilterColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

export const GridFilterColumn = createPolymerComponent<
  GridFilterColumnClassExtended,
  typeof GridFilterColumnEvents
>(
  "vaadin-grid-filter-column",
  GridFilterColumnProperties,
  GridFilterColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-filter-column"),
  "GridFilterColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    componentRenderers: { componentRenderer: "renderer" },
  }
);

const GridFilterEventMapper = eventMapper<GridFilterEventMap>();
const GridFilterEvents = {
  ...GridFilterEventMapper("onValueChanged", "value-changed"),
};

const GridFilterProperties = {
  path: "",
  value: "",
};

export const GridFilter = createPolymerComponent<
  GridFilterClass,
  typeof GridFilterEvents
>(
  "vaadin-grid-filter",
  GridFilterProperties,
  GridFilterEvents,
  () => import("@vaadin/grid/vaadin-grid-filter"),
  "GridFilter"
);

const GridSelectionColumnEventMapper =
  eventMapper<GridSelectionColumnEventMap>();
const GridSelectionColumnEvents = {
  ...GridSelectionColumnEventMapper("onSelectAllChanged", "select-all-changed"),
};

const GridSelectionColumnProperties = {
  selectAll: "",
  autoSelect: "",
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  componentRenderer: "",
};

type GridSelectionColumnClassExtended = Omit<
  GridSelectionColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  componentRenderer: (
    model: Parameters<
      Exclude<PropType<GridSelectionColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

export const GridSelectionColumn = createPolymerComponent<
  GridSelectionColumnClassExtended,
  typeof GridSelectionColumnEvents
>(
  "vaadin-grid-selection-column",
  GridSelectionColumnProperties,
  GridSelectionColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-selection-column"),
  "GridSelectionColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    componentRenderers: { componentRenderer: "renderer" },
  }
);

const GridSortColumnEventMapper = eventMapper<GridSortColumnEventMap>();
const GridSortColumnEvents = {
  ...GridSortColumnEventMapper("onDirectionChanged", "direction-changed"),
};

const GridSortColumnProperties = {
  direction: "",
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  componentRenderer: "",
};

type GridSortColumnClassExtended = Omit<
  GridSortColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  componentRenderer: (
    model: Parameters<
      Exclude<PropType<GridSortColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

export const GridSortColumn = createPolymerComponent<
  GridSortColumnClassExtended,
  typeof GridSortColumnEvents
>(
  "vaadin-grid-sort-column",
  GridSortColumnProperties,
  GridSortColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-sort-column"),
  "GridSortColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    componentRenderers: { componentRenderer: "renderer" },
  }
);

const GridSorterEventMapper = eventMapper<GridSorterEventMap>();
const GridSorterEvents = {
  ...GridSorterEventMapper("onDirectionChanged", "direction-changed"),
  ...GridSorterEventMapper("onSorterChanged", "sorter-changed"),
};

const GridSorterProperties = {
  path: "",
  direction: "",
};

export const GridSorter = createPolymerComponent<
  GridSorterClass,
  typeof GridSorterEvents
>(
  "vaadin-grid-sorter",
  GridSorterProperties,
  GridSorterEvents,
  () => import("@vaadin/grid/vaadin-grid-sorter"),
  "GridSorter"
);

const GridTreeColumnEvents = {};

const GridTreeColumnProperties = {
  itemHasChildrenPath: "",
  width: "",
  flexGrow: "",
  renderer: "",
  path: "",
  autoWidth: "",
  resizable: "",
  frozen: "",
  frozenToEnd: "",
  hidden: "",
  header: "",
  textAlign: "",
  headerRenderer: "",
  footerRenderer: "",
  headerComponent: "",
  footerComponent: "",
  componentRenderer: "",
};

type GridTreeColumnClassExtended = Omit<
  GridTreeColumnClass,
  "headerRenderer" | "footerRenderer" | "renderer"
> & {
  headerComponent: React.ReactNode;
  footerComponent: React.ReactNode;
  componentRenderer: (
    model: Parameters<
      Exclude<PropType<GridTreeColumnClass, "renderer">, undefined | null>
    >[2]
  ) => React.ReactNode;
};

export const GridTreeColumn = createPolymerComponent<
  GridTreeColumnClassExtended,
  typeof GridTreeColumnEvents
>(
  "vaadin-grid-tree-column",
  GridTreeColumnProperties,
  GridTreeColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-tree-column"),
  "GridTreeColumn",
  {
    components: {
      headerComponent: "headerRenderer",
      footerComponent: "footerRenderer",
    },
    componentRenderers: { componentRenderer: "renderer" },
  }
);

const GridTreeToggleEventMapper = eventMapper<GridTreeToggleEventMap>();
const GridTreeToggleEvents = {
  ...GridTreeToggleEventMapper("onExpandedChanged", "expanded-changed"),
};

const GridTreeToggleProperties = {
  level: "",
  leaf: "",
  expanded: "",
};

export const GridTreeToggle = createPolymerComponent<
  GridTreeToggleClass,
  typeof GridTreeToggleEvents
>(
  "vaadin-grid-tree-toggle",
  GridTreeToggleProperties,
  GridTreeToggleEvents,
  () => import("@vaadin/grid/vaadin-grid-tree-toggle"),
  "GridTreeToggle"
);

const GridEventMapper = eventMapper<GridEventMap<unknown>>();
const GridEvents = {
  ...GridEventMapper("onActiveItemChanged", "active-item-changed"),
  ...GridEventMapper("onCellActivate", "cell-activate"),
  ...GridEventMapper("onCellFocus", "cell-focus"),
  ...GridEventMapper("onColumnReorder", "column-reorder"),
  ...GridEventMapper("onColumnResize", "column-resize"),
  ...GridEventMapper("onExpandedItemsChanged", "expanded-items-changed"),
  ...GridEventMapper("onGridDragstart", "grid-dragstart"),
  ...GridEventMapper("onGridDragend", "grid-dragend"),
  ...GridEventMapper("onGridDrop", "grid-drop"),
  ...GridEventMapper("onLoadingChanged", "loading-changed"),
  ...GridEventMapper("onSelectedItemsChanged", "selected-items-changed"),
};

const GridProperties = {
  allRowsVisible: "",
  dropMode: "",
  rowsDraggable: "",
  dragFilter: "",
  dropFilter: "",
  cellClassNameGenerator: "",
  columnReorderingAllowed: "",
  multiSort: "",
  multiSortPriority: "",
  selectedItems: "",
  detailsOpenedItems: "",
  rowDetailsRenderer: "",
  pageSize: "",
  size: "",
  dataProvider: "",
  loading: "",
  itemHasChildrenPath: "",
  itemIdPath: "",
  expandedItems: "",
  items: "",
  activeItem: "",
  version: "",
  disabled: "",
};

export const Grid = createPolymerComponent<GridClass, typeof GridEvents>(
  "vaadin-grid",
  GridProperties,
  GridEvents,
  () => import("@vaadin/grid/vaadin-grid"),
  "Grid"
);
