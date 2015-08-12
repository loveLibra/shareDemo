var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();

//navie
// var Promise = require('es6-promise').Promise();
// var assign = require('object-assign');

// var _callbacks = [];
// var _promises = [];

// var Dispacther = function() {};

// Dispatcher.prototype = assign({}, Dispatcher.prototype, {
//     register: function(cb) {
//         _callbacks.push(cb);
//         return _callback.length - 1;
//     },
//     dispatch: function(payload) {
//         var resilves = [];
//         var rejects = [];

//         _promises = _callbacks.map(function(_, i) {
//             return new Promise(function(resolve, reject) {
//                 resolves[i] = resolve;
//                 rejects[i] = reject;
//             });
//         });

//         _callbacks.forEach(function(callback, i) {
//             Promise.resolve(callback(payload)).then(function() {
//                 resolves[i](payload);
//             }, function() {
//                 rejects[i](new Error('Dispatcher callback unsuccessful'));
//             });
//         });
//         _promises = [];
//     }，
//     waitFor: function(promiseIndexes, cb) {
//         var selectedPromises = promiseIndexes.map(function(index) {
//             return _promises[index];
//         });

//         return Promise.all(selectedPromises).then(callback);
//     }
// });