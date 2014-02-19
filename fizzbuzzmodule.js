
'use strict';

var fizzBuzzModule = (function(){
  var convNode = function(iNode){
    //converts incoming key/val pair into individual key/val pairs in an object
    //'key' is converted to a numeric to increase comparison speed later
    var tempNode = {'key': +Object.keys(iNode)[0], 'val': iNode[Object.keys(iNode)[0]]};
    return tempNode;
  };
  var parseList = function(iList){
    //iList is an array w/ key/value pairs of the modulo values/label strings
    //iList is then parsed into an array of objects into list
    _list = [];
    for(var rep=0;rep<iList.length;rep++){
      _list.push(convNode(iList[rep]));
    }
    //console.log(_list);
  };
  var _list;
  return{
    changeList: function(iList){
      this._list = parseList(iList);
    },
    checkList: function(){
      return _list;
    },
    testNum: function(iNum){
      //precalc Object.keys to increase speed & reduce code
      var tempString = '';
      for(var rep=0;rep<_list.length;rep++){
        if(iNum % _list[rep].key === 0){
          tempString += _list[rep].val;
        }
      }
      return tempString === '' ? iNum : tempString;
    },
    testList: function(lower, upper){
      var tempString = '';
      for(var rep=lower;rep<=upper;rep++){
        tempString += (this.testNum(rep) + '\n');
      }
      return tempString;
    }
  };
})();

var multipleList = [
  {'3':'Fizz'},
  {'5':'Buzz'},
  {'7':'Sivv'},
  {'11':'Bluh'}];

fizzBuzzModule.changeList(multipleList);
console.log(fizzBuzzModule.testList(1, 50));

fizzBuzzModule.changeList([{'3':'Fizz'}]);
console.log(fizzBuzzModule.testList(1, 50));