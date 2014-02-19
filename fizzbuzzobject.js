'use strict';

var FizzBuzzConstructor = function(iList){

  this.list = iList;

  var _list = [];

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
    console.log(_list);
  };
  console.log(_list);
  _list = parseList(iList || []);
  console.log(_list);
};

FizzBuzzConstructor.prototype.changeList = function(iList){
  FizzBuzzConstructor_list = this.parseList(iList);
};
FizzBuzzConstructor.prototype.checkList = function(){
  return this._list;
};
FizzBuzzConstructor.prototype.testNum = function(iNum){
  //precalc Object.keys to increase speed & reduce code
  var tempString = '';
  for(var rep=0;rep < this._list.length;rep++){
    if(iNum % this._list[rep].key === 0){
      tempString += this._list[rep].val;
    }
  }
  return tempString === '' ? iNum : tempString;
};
FizzBuzzConstructor.prototype.testList = function(lower, upper){
  var tempString = '';
  for(var rep=lower;rep<=upper;rep++){
    tempString += (this.testNum(rep) + '\n');
  }
  return tempString;
};

var multipleList = [
  {'3':'Fizz'},
  {'5':'Buzz'},
  {'7':'Sivv'},
  {'11':'Bluh'}];

var fizzBuzzConstructor1 = new FizzBuzzConstructor(multipleList);
console.log(fizzBuzzConstructor1.testList(1, 10));

var fizzBuzzConstructor2 = new FizzBuzzConstructor([{'3':'Fizz'}]);
console.log(fizzBuzzConstructor2.testList(1, 10));

fizzBuzzConstructor1.changeList([{'5':'foo'}]);
console.log(fizzBuzzConstructor1.testList(1, 10));
console.log(fizzBuzzConstructor2.testList(1, 10));