function goStatusHtml(el){
	console.log(window.location.href);
	// console.log("1111");
	//location.herf="el";
}
// chrome.runtime.sendMessage('Hello', function(response){
//     document.write(response);
// });
document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("certain").addEventListener("click",function(){
		// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// });
		var idata= {
			"url":"http://status.renren.com/",
			"order": "delete"
		}
		chrome.runtime.sendMessage(idata, function(response) {
			var obj=document.getElementById("result");
			document.getElementById("main").style.display="none";
			with (obj) {
				style.display="block";
				getElementsByTagName("h3")[0].innerHTML=response.msg;	
			}
		});
	})
});
	// chrome.runtime.sendMessage({"order": "delete"}, function(response) {
	//   document.write(response.msg);
	// });	
// chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     document.write(response.farewell);
//   });
// });
// document.getElementById("certain").onclick=function(){
// 	messagePoc("111");
// }
// goStatusHtml("http://status.renren.com/");

document.getElementById("return").addEventListener("click", function() {
	
})