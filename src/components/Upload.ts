// Generated file. Do not edit.

import { createPolymerComponent, eventMapper } from "../create-component";

import type {
  Upload as UploadClass,
  UploadEventMap,
} from "@vaadin/upload/vaadin-upload";

const UploadEventMapper = eventMapper<UploadEventMap>();
const UploadEvents = {
  ...UploadEventMapper("onFileReject", "file-reject"),
  ...UploadEventMapper("onFilesChanged", "files-changed"),
  ...UploadEventMapper("onMaxFilesReachedChanged", "max-files-reached-changed"),
  ...UploadEventMapper("onUploadBefore", "upload-before"),
  ...UploadEventMapper("onUploadStart", "upload-start"),
  ...UploadEventMapper("onUploadProgress", "upload-progress"),
  ...UploadEventMapper("onUploadSuccess", "upload-success"),
  ...UploadEventMapper("onUploadError", "upload-error"),
  ...UploadEventMapper("onUploadRequest", "upload-request"),
  ...UploadEventMapper("onUploadResponse", "upload-response"),
  ...UploadEventMapper("onUploadRetry", "upload-retry"),
  ...UploadEventMapper("onUploadAbort", "upload-abort"),
};

const UploadProperties = {
  nodrop: "",
  target: "",
  method: "",
  headers: "",
  timeout: "",
  files: "",
  maxFiles: "",
  maxFilesReached: "",
  accept: "",
  maxFileSize: "",
  formDataName: "",
  noAuto: "",
  withCredentials: "",
  capture: "",
  i18n: "",
  version: "",
};

export const Upload = createPolymerComponent<UploadClass, typeof UploadEvents>(
  "vaadin-upload",
  UploadProperties,
  UploadEvents,
  () => import("@vaadin/upload/vaadin-upload"),
  "Upload"
);
