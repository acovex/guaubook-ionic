import { GenericHash } from './../../interfaces/commons/generic-hash';

export const DEFAULT_HEADERS = {
  ['Content-Type']: 'application/json',
  ['Accept']: 'application/json',
} as GenericHash;

export const BLOB_HEADERS = {
  headers: DEFAULT_HEADERS,
  responseType: 'blob',
  observe: 'response',
} as GenericHash;

export const FILE_HEADERS = { ['Content-Type']: 'multipart/form-data' };
