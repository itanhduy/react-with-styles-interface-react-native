'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactNative = require('react-native');

exports['default'] = {
  create: function () {
    function create(styleHash) {
      return styleHash;
    }

    return create;
  }(),


  // Styles is an array of properties returned by `create()`, a POJO, or an
  // array thereof. POJOs are treated as inline styles.
  // This function returns an object to be spread onto an element.
  resolve: function () {
    function resolve(styles) {
      return { style: styles };
    }

    return resolve;
  }()
};