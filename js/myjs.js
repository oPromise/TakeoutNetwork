var mydete;
var Fruits=["西瓜汁","柠檬汁","葡萄汁","蓝莓汁","草莓汁"];
var number=["1","2","3"];

function init()
{
	var obj=document.getElementById("Fruits");
	for(x in Fruits)
	{
		obj.innerHTML+="<option value='"+Fruits[x]+"'>"+Fruits[x]+"</option>"
	}
	
	var obj=document.getElementById("number");
	for(x in number)
	{
		obj.innerHTML+="<option value='"+number[x]+"'>"+number[x]+"</option>"
	}
	
	time=setInterval(diaplaydate,1000);
}
function diaplaydate()
{
	mydate=new Date();
	var obj=document.getElementById("div_date");
	var year=mydate.getFullYear();
	var month=mydate.getMonth()+1;
	var day=mydate.getDate();
	obj.innerHTML=""+year+"年"+month+"月"+day+"日";
	
	obj=document.getElementById("div_time");
	var hour=mydate.getHours();
	var minute=mydate.getMinutes();
	var second=mydate.getSeconds();
	if(minute<10)
	{
		minute="0"+minute;
	}
	if(second<10)
	{
		second="0"+second;
	}
	obj.innerHTML=""+hour+":"+minute+":"+second+"";
}
var minnamelength=8;
var minsitelength=8;
//获取输入
function submitchangpass(id1,id2,id3,id4)
{
	var obj1=document.getElementById(id1);
	var obj2=document.getElementById(id2);
	var obj3=document.getElementById(id3);
	var obj4=document.getElementById(id4);
	
	var str1=obj1.value;
	var str2=obj2.value;
	var str3=obj3.value;
	var str4=obj4.value;
	//执行判断
	if(!validEmpty(str1))
	{
		alert('用户名不能为空')
		return;
	}
	if(!validlength(str1))
	{
		alert('请输入至少八个字符')
		return;
	}
	if(!validphoneEmpty(str2))
	{
		alert('电话不能为空')
		return;
	}
	if(!validphone(str2))
	{
		alert('号码必须满足第一位为1,第二位可为3,4,5,7,8,中的任意一位,最后以0-9的9个整数结尾。');
		return;
	}

		if(!validSite(str3))
	{
		alert('地址不能为空')
		return;
	}
	if(!validSitelength(str3))
	{
		alert('请输入至少八个字符')
		return;
	}
	window.location.href="order.html";
}

//用户名格式判空
function validEmpty(str)
{
	if(str.length!=0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//用户名长度判断
function validlength(str)
{
	if(str.length>=minnamelength)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//手机号码判空
function validphoneEmpty(str)
{
	if(str.length!=0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//手机号码格式判断
 function validphone(str)
       {
       var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
            if (!myreg.test(str))
            	{
                return false;
            	}
             else
             	{
                return true;
            	}
       } 
 //地址判空 
function validSite(str)
{
	if(str.length!=0)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//地址判长
function validSitelength(str)
{
	if(str.length>=minsitelength)
	{
		return true;
	}
	else
	{
		return false;
	}
}
//背景颜色
function aa(){
document.bgColor="white";
}


function change(c){
document.bgColor=c;
}

// function changecolor1() {
// 	var body = document.getElementById("body");
// 	box.style = "width:100%;background-color:#FCC;height:100%;";
// }
// function changecolor2() {
// 	var body = document.getElementById("body");
// 	box.style = "width:100%;background-color:#f35c27;height:100%;";
// }
