'use strict';

var _apiCall = require('./apiCall');

const todoParams = { todo: { description: 'this is a todo.' } }; // @flow


describe('libs/utils/api', () => {
  describe('{ buildUrl }', () => {
    it('combines a path and an object of key values into a url with a query', () => {
      const path = 'example.com';
      const query = { page: 1 };
      const actual = (0, _apiCall.buildUrl)(path, query);
      const expected = 'example.com?page=1';

      expect(actual).toBe(expected);
    });

    it('removes keys that have null values', () => {
      const path = 'example.com';
      const query = { page: null };
      const actual = (0, _apiCall.buildUrl)(path, query);
      const expected = 'example.com?';

      expect(actual).toBe(expected);
    });
  });

  describe('callApi', () => {
    it('handles 400 error with an exception', async () => {
      const url = 'http://fakeurl';
      fetch.mockResponseOnce(JSON.stringify([{ description: "add a todo" }]), { status: 400 });
      try {
        const resp = await (0, _apiCall.callApi)(url, 'GET', {});
      } catch (error) {
        expect.anything();
      }
    });

    it('handles 500 error with an exception', async () => {
      const url = 'http://fakeurl';
      fetch.mockResponseOnce(JSON.stringify([{ description: "add a todo" }]), { status: 500 });
      try {
        const resp = await (0, _apiCall.callApi)(url, 'GET', {});
      } catch (error) {
        expect.anything();
      }
    });
  });
});