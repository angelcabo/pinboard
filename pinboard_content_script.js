//From http://code.google.com/chrome/extensions/messaging.html
//Used to get selected text on page
chrome.extension.onRequest.addListener(
		function(request, sender, sendResponse) {
			if (request.action === "getTXT") {
			  var desc = document.getSelection().toString();
			  desc = desc || document.querySelector("meta[property='og:description']").getAttribute('content');
			  desc = desc || document.querySelector("meta[property='description']").getAttribute('content');
				sendResponse({description: desc});
			} else {
				sendResponse({description: ""}); // Send nothing..
			}
		}
);


