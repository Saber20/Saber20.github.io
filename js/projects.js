$('#myTabs a').click(function (e) {
	e.preventDefault()
	$(this).tab('show')
})
$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)

function makeAjaxRequest(){

	$.ajax({
		url: 'https://api.github.com/users/Saber20/repos?sort=updated&per_page=5',
		type: 'GET',
	}).done(function(repos) {
		console.log(repos);
	});

}



$(document).ready(function(){
	
	
});


