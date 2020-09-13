var makeArr = function(){
    //ユーザーが入力した値を取得する
    var textKey = document.getElementById('textKey').value;
    var textValue = document.getElementById('textValue').value;
  
    //ユーザーが入力した値を改行ごとに配列に格納する
    var arrTextKey = textKey.split('\n');
    var arrTextValue = textValue.split('\n');
  
    //長さが同じ2つの配列を使って、連想配列の文字列を作成する。
    var arrText = '';
    var comma = ',';
    for(var i= 0,len = arrTextKey.length-1;i <=len;i++){
      if(i == len ){
        comma = '；';
      }
      arrText += arrTextKey[i] + ' : ' + arrTextValue[i] + comma +'\n';
    }
    var result = document.getElementById('result');
    result.innerHTML = arrText;
    console.log(arrText);
  };
  
  var btnMake = document.getElementById('btn-make');
  btnMake.addEventListener('click',makeArr,false);