window.App = {};
App.refreshTime = 2000;
App.newStats = {};

App.getStats = function(){
	$.getJSON("/stats", function(data){
		App.newStats = data;
	})
}

$(function(){

	setTimeout(App.getStats,App.refreshTime);
	
});
