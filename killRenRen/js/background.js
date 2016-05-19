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
          // chrome.tabs.executeScript({
          //   code: 'location.href='+request.url
          // });
        
        //获取当前标签页URL
        // chrome.windows.getCurrent(function(w) {
        //     wid = w.id;
        //     chrome.tabs.query( {active: true,windowId: wid}, function(tabs) {
        //         console.log(tabs[0].url);
        //     });
        // });
        // chrome.tabs.update({url: request.url});
      chrome.tabs.create({url: request.url});
    	// window.document.write("覆盖");
    	// window.location=request.url;
    	window.onload=deleteStatus;
    	// setTimeout(deleteStatus(),10000);
      	sendResponse({"msg": "success"});
    }
});
function deleteStatus() {
	document.getElementsByClassName("ugc-host-control")[0].getElementsByTagName("a")[0].click();
	// document.getElementsByClassName("ui-dialog-buttonset")[0].getElementsByTagName("button")[1].click();	
}