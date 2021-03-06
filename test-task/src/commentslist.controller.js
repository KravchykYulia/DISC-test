(function () {
'use strict';

angular.module('CommentsList')
.controller('CommentsListController', CommentsListController);

CommentsListController.$inject = ['CommentsListService'];

function CommentsListController(CommentsListService) {
  var list = this;
 
  list.emptyName = false;
  list.emptyComment = false;
  list.items = CommentsListService.getItems();
  
  list.activeItem = function () {
    return CommentsListService.activeItem();
  };

  list.addItem = function (itemName) {
    if (itemName.length) {
    list.emptyName=false;
    CommentsListService.addItem(itemName);
    console.log(list.items);
    CommentsListService.updateItems(list.items);
    }
    else {list.emptyName=true}
  };

  list.activateItem = function (itemIndex) {
    CommentsListService.activateItem(itemIndex);
  };

  list.removeItem = function (itemIndex) {
    CommentsListService.removeItem(itemIndex);
    CommentsListService.updateItems(list.items);
  };
  
  list.numberOfComments = function (itemIndex) {
    return CommentsListService.numberOfComments(itemIndex);
  };

  list.addComment = function(keyEvent, itemComment) {
    if (keyEvent.which === 13) {
       if (itemComment.length) {
       list.emptyComment=false;
       CommentsListService.addComment(itemComment);
       CommentsListService.updateItems(list.items);
       }
       else {list.emptyComment=true}
    };
  };
};

})();
