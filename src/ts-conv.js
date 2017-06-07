var timestamp = document.createElement('div');
timestamp.setAttribute('class', 'timestamp_bg');

document.addEventListener('mouseup', function(e) {

  document.body.appendChild(timestamp);

  var selection = window.getSelection().toString();
  var myDate;
  if ((!selection) || isNaN(selection) || selection.length < 10 || selection.length > 13)  {
    return;
  } else {
    if (selection.length === 10) {
      myDate = new Date(JSON.parse(window.getSelection().toString() * 1000)).Format("yyyy-MM-dd hh:mm:ss");
    } else if (selection.length === 13) {
      myDate = new Date(JSON.parse(window.getSelection().toString())).Format("yyyy-MM-dd hh:mm:ss");
    } else {
      return;
    }
  }


  if (selection.length > 0) {
    showTimestamp(e.pageX, e.pageY, myDate);
  }
}, false);


document.addEventListener('mousedown', function(e) {
  timestamp.style.visibility = 'hidden';
}, false);

function showTimestamp(xPos, yPos, selection) {
  timestamp.innerHTML = selection;
  timestamp.style.top = yPos + 'px';
  timestamp.style.left = xPos + 'px';
  timestamp.style.visibility = 'visible';
}
Date.prototype.Format = function(fmt)   
{
  var o = {   
    "M+" : this.getMonth()+1,                 //月份   
    "d+" : this.getDate(),                    //日   
    "h+" : this.getHours(),                   //小时   
    "m+" : this.getMinutes(),                 //分   
    "s+" : this.getSeconds(),                 //秒   
    "q+" : Math.floor((this.getMonth()+3)/3), //季度   
    "S"  : this.getMilliseconds()             //毫秒   
  };   
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(var k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));   
  return fmt;   
}