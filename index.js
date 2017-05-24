

$(document).ready(function(){

	var sampleData = 'https://codepen.io/danielbaars/pen/XREpYv';
	
	function twitchCard(online, headerContent, url, status) {
		
		var urlCode = 'href="' + url + '" target="_blank"';
		
		var cardHeader = '<div class="twitch__card-header"><h2 class="twitch__title">' + headerContent + '<\/h2><\/div>';
		
		var cardInside = '<div class="card-block"><div class="twitch__intro">' + status + '...<\/div><\/div>';
		
		var card = '<' + (online === "online" ? 'a' : 'div') + ' ' + 'class="twitch__card card ' + online + '"' + (online === "online" ? urlCode : '') + '>' + cardHeader + (online === "online" ? cardInside : '') + '<\/' + (online === "online" ? 'a' : 'div') + '>';
		
		$(".twitch__results").append(card);
		
	}
	
	$.getJSON(sampleData + ".js", function(data) {
		
		var streamStatus;
		var online;
		var headerContent;
		var url;
		var status;
		
		for (i = 0; i < data.length; i++) {
			
			streamStatus = data[i].stream;
			
			if (streamStatus === null) {
				
				online = "offline";
				
				headerContent = data[i].display_name + " is offline";
				
				twitchCard(online, headerContent);
				
			} else if (streamStatus === undefined) {
				
				online = "does-not-exist";
				
				headerContent = data[i].message;
				
				twitchCard(online, headerContent);
				
			} else {
				
				online = "online";
				
				headerContent = data[i].stream.display_name;
				
				url = data[i].stream.url;
				
				status = data[i].stream.status;

				twitchCard(online, headerContent, url, status);
			
			}
			
			
		}
		
		
	});



});











