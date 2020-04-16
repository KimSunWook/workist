//  ---------------------------------- Services To Access API---------------------------------------------------  //


angular.module('workingHoursTrello').service('apiS', function($http){

  const board_id = '5de56219c376e27c1891ef26';
  // '5dcd7d0c27af8274facec10a' // 2018
  // '5ba38efef50b8979566922d0' // 2019-1
  // '5dcd7774e4baf82151826445' // 2019-2

  // '5dbef82f254450628c955f30' // OOJOOGO

  // the board of board where members data are stored
  const board_data = '5c6cb6171cf49a5579a42e7d';

  // get boards Members
  this.getBoardMembers = function(key, token) {
    return $http.get(`https://api.trello.com/1/boards/${board_id}/members?key=${key}&token=${token}`);
  }
  // get boars Lists
  this.getBoardLists = function(key, token) {
    return $http.get(`https://api.trello.com//1/boards/${board_id}/lists?key=${key}&token=${token}`);
  }
  //get boards Cards
  this.getBoardCards = function(key, token) {
    return $http.get(`https://api.trello.com/1/boards/${board_id}/cards?key=${key}&token=${token}`);
  }

  // get Calendar Data Board's Lists
  this.calendarBoardLists = function(key, token) {
    return $http.get(`https://api.trello.com//1/boards/${board_data}/lists?key=${key}&token=${token}`);
  }
  // get Calendar Data Board's Lists
  this.calendarBoardCards = function(key, token) {
    return $http.get(`https://api.trello.com//1/boards/${board_data}/cards?key=${key}&token=${token}`);
  }
  this.privateData = function(key, token) {
    return $http.get(`https://api.trello.com/1/members/me/?key=${key}&token=${token}`);
  }
});
