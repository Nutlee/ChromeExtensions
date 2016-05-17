// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       document.write("111");
//       sendResponse({farewell: "goodbye"});
// });
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.order == "delete") {
    	// window.document.write("覆盖");
    	// window.location=request.url;
    	// window.onload=deleteStatus;
    	deleteStatus();
      	sendResponse({"msg": "success"});
    }
});
window.onload= function () {
    if(location.href.indexOf("status.renren.com")>-1) {
        // setTimeout(deleteStatus(),5000);
        deleteStatus();
    };
};
function deleteStatus() {
	document.getElementsByClassName("ugc-host-control")[0].getElementsByTagName("a")[0].click();
	// document.getElementsByClassName("ui-dialog-buttonset")[0].getElementsByTagName("button")[1].click();	
}