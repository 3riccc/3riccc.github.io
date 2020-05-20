var address = "http://www.tuling123.com/openapi/api";
var apikey = "765a0c95922a48d48919082c9f265d21";
var secret = "cacbf3e53de6edd2ONOFF";

// 设置userid
var strs = "0123456789";
if(!!window.localStorage.getItem("userid")){
	window.userid = window.localStorage.getItem("userid");
}else{
	str = ""
	for(var i = 0;i<32;i++){
		var index = Math.floor(Math.random()*10);
		str += strs[index];
	}
	window.userid = window.localStorage.setItem("userid",str);
	window.userid = str;
}

var input = $("#input");
input.change(function(){
	var input = $("#input");
	var ask = input.val();
	talk(ask);
})
// 聊天
function talk(ask){
	$.post(address,
		{
			key:apikey,
			info:ask,
			userid:window.userid
		},
		function(result){
			var text = delText(result.text)
			S.UI.simulate(text)
		}
	);
}
// 删除当前文字
function delText(text){
	if(text.length > 8){
		text = insert_flg(text,"|",8)
		text = text.substring(0,text.length-1)
	}
	return text;
}
// str表示原字符串变量，flg表示要插入的字符串，sn表示要插入的位置
function insert_flg(str,flg,sn){
    var newstr="";
    for(var i=0;i<str.length;i+=sn){
        var tmp=str.substring(i, i+sn);
        newstr+=tmp+flg;
    }
    return newstr;
}