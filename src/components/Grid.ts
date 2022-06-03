// Generated file. Do not edit.
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
  flexGrow: "number",
  width: "string | null | undefined",
  resizable: "boolean | null | undefined",
  frozen: "boolean",
  frozenToEnd: "boolean",
  hidden: "boolean",
  header: "string | null | undefined",
  textAlign: "start|center|end",
  headerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
  footerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
};

export const GridColumnGroup = createPolymerComponent<
  GridColumnGroupClass,
  typeof GridColumnGroupEvents
>(
  "vaadin-grid-column-group",
  GridColumnGroupProperties,
  GridColumnGroupEvents,
  () => import("@vaadin/grid/vaadin-grid-column-group"),
  "GridColumnGroup"
);

const GridColumnEvents = {};

const GridColumnProperties = {
  width: "string | null | undefined",
  flexGrow: "number",
  renderer: "GridBodyRenderer<TItem> | null | undefined",
  path: "string | null | undefined",
  autoWidth: "boolean",
  resizable: "boolean | null | undefined",
  frozen: "boolean",
  frozenToEnd: "boolean",
  hidden: "boolean",
  header: "string | null | undefined",
  textAlign: "start|center|end",
  headerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
  footerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
};

export const GridColumn = createPolymerComponent<
  GridColumnClass,
  typeof GridColumnEvents
>(
  "vaadin-grid-column",
  GridColumnProperties,
  GridColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-column"),
  "GridColumn"
);

const GridFilterColumnEvents = {};

const GridFilterColumnProperties = {
  width: "string | null | undefined",
  flexGrow: "number",
  renderer: "GridBodyRenderer<TItem> | null | undefined",
  path: "string | null | undefined",
  autoWidth: "boolean",
  resizable: "boolean | null | undefined",
  frozen: "boolean",
  frozenToEnd: "boolean",
  hidden: "boolean",
  header: "string | null | undefined",
  textAlign: "start|center|end",
  headerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
  footerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
};

export const GridFilterColumn = createPolymerComponent<
  GridFilterColumnClass,
  typeof GridFilterColumnEvents
>(
  "vaadin-grid-filter-column",
  GridFilterColumnProperties,
  GridFilterColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-filter-column"),
  "GridFilterColumn"
);

const GridFilterEventMapper = eventMapper<GridFilterEventMap>();
const GridFilterEvents = {
  ...GridFilterEventMapper("onValueChanged", "value-changed"),
};

const GridFilterProperties = {
  path: "string | null | undefined",
  value: "string | null | undefined",
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
  selectAll: "boolean",
  autoSelect: "boolean",
  width: "string | null | undefined",
  flexGrow: "number",
  renderer: "GridBodyRenderer<TItem> | null | undefined",
  path: "string | null | undefined",
  autoWidth: "boolean",
  resizable: "boolean | null | undefined",
  frozen: "boolean",
  frozenToEnd: "boolean",
  hidden: "boolean",
  header: "string | null | undefined",
  textAlign: "start|center|end",
  headerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
  footerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
};

export const GridSelectionColumn = createPolymerComponent<
  GridSelectionColumnClass,
  typeof GridSelectionColumnEvents
>(
  "vaadin-grid-selection-column",
  GridSelectionColumnProperties,
  GridSelectionColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-selection-column"),
  "GridSelectionColumn"
);

const GridSortColumnEventMapper = eventMapper<GridSortColumnEventMap>();
const GridSortColumnEvents = {
  ...GridSortColumnEventMapper("onDirectionChanged", "direction-changed"),
};

const GridSortColumnProperties = {
  direction: "GridSorterDirection | undefined",
  width: "string | null | undefined",
  flexGrow: "number",
  renderer: "GridBodyRenderer<TItem> | null | undefined",
  path: "string | null | undefined",
  autoWidth: "boolean",
  resizable: "boolean | null | undefined",
  frozen: "boolean",
  frozenToEnd: "boolean",
  hidden: "boolean",
  header: "string | null | undefined",
  textAlign: "start|center|end",
  headerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
  footerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
};

export const GridSortColumn = createPolymerComponent<
  GridSortColumnClass,
  typeof GridSortColumnEvents
>(
  "vaadin-grid-sort-column",
  GridSortColumnProperties,
  GridSortColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-sort-column"),
  "GridSortColumn"
);

const GridSorterEventMapper = eventMapper<GridSorterEventMap>();
const GridSorterEvents = {
  ...GridSorterEventMapper("onDirectionChanged", "direction-changed"),
  ...GridSorterEventMapper("onSorterChanged", "sorter-changed"),
};

const GridSorterProperties = {
  path: "string | null | undefined",
  direction: "GridSorterDirection | undefined",
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
  itemHasChildrenPath: "string",
  width: "string | null | undefined",
  flexGrow: "number",
  renderer: "GridBodyRenderer<TItem> | null | undefined",
  path: "string | null | undefined",
  autoWidth: "boolean",
  resizable: "boolean | null | undefined",
  frozen: "boolean",
  frozenToEnd: "boolean",
  hidden: "boolean",
  header: "string | null | undefined",
  textAlign: "start|center|end",
  headerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
  footerRenderer: "GridHeaderFooterRenderer<TItem> | null | undefined",
};

export const GridTreeColumn = createPolymerComponent<
  GridTreeColumnClass,
  typeof GridTreeColumnEvents
>(
  "vaadin-grid-tree-column",
  GridTreeColumnProperties,
  GridTreeColumnEvents,
  () => import("@vaadin/grid/vaadin-grid-tree-column"),
  "GridTreeColumn"
);

const GridTreeToggleEventMapper = eventMapper<GridTreeToggleEventMap>();
const GridTreeToggleEvents = {
  ...GridTreeToggleEventMapper("onExpandedChanged", "expanded-changed"),
};

const GridTreeToggleProperties = {
  level: "number",
  leaf: "boolean",
  expanded: "boolean",
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
  allRowsVisible: "boolean",
  dropMode: "between|on-top|on-top-or-between|on-grid",
  rowsDraggable: "boolean",
  dragFilter: "GridDragAndDropFilter<TItem> | null | undefined",
  dropFilter: "GridDragAndDropFilter<TItem> | null | undefined",
  cellClassNameGenerator:
    "GridCellClassNameGenerator<TItem> | null | undefined",
  columnReorderingAllowed: "boolean",
  multiSort: "boolean",
  selectedItems: "TItem[]",
  detailsOpenedItems: "TItem[]",
  rowDetailsRenderer: "GridRowDetailsRenderer<TItem> | null | undefined",
  pageSize: "number",
  size: "number",
  dataProvider: "GridDataProvider<TItem> | null | undefined",
  loading: "boolean | null | undefined",
  itemHasChildrenPath: "string",
  itemIdPath: "string",
  expandedItems: "TItem[]",
  items: "TItem[] | null | undefined",
  activeItem: "TItem | null",
  version: "string",
  disabled: "boolean",
};

export const Grid = createPolymerComponent<GridClass, typeof GridEvents>(
  "vaadin-grid",
  GridProperties,
  GridEvents,
  () => import("@vaadin/grid/vaadin-grid"),
  "Grid"
);
