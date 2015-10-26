"use strict";

var CHANGE_EVENT = 'change';

var StoreBase = {

  // Emit Change event
  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  // Add change listener
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  // Remove change listener
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

};

module.exports = StoreBase;