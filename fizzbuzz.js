var FizzBuzz = function(iList){
  var list = iList || {}; //allow init with list
  return{
    changeList: function(iList){
      list = iList;
    },
    checkList: function(){
      return list;
    },
    testList: function(iNum){
      var keyList = Object.keys(list),
        tempString = '';
      for(var rep=0;rep<keyList.length;rep++){
        if(iNum % keyList[rep] === 0){
          tempString += list[keyList[rep]];
        }
      }
      return tempString === '' ? iNum : tempString;
    }
  };
};

var multipleList = {
  '3':'Fizz',
  '5':'Buzz',
  '7':'Sivv',
  '11':'Bluh'};

fizzBuzz = FizzBuzz(multipleList);

for(var rep = 1;rep<201;rep++){
  console.log(fizzBuzz.testList(rep));
}

fizzBuzz.changeList({'3':'Fizz'});

for(var rep = 1;rep<201;rep++){
  console.log(fizzBuzz.testList(rep));
}

var fz2 = new FizzBuzz({'4':'test'});

for(var rep = 1;rep<41;rep++){
  console.log(fz2.testList(rep));
}