'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow
class ApiError extends Error {
  constructor(message, errData, status) {
    super(message);
    this.name = 'ApiError';
    this.isApiError = true;
  }
}

exports.default = ApiError;