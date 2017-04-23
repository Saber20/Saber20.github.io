function makeAjaxRequest(){

	$.ajax({
		url: 'https://api.github.com/users/Saber20/repos?sort=updated&per_page=5',
		type: 'GET',
	}).done(function(repos) {
		$('#current').html('')
		// $('#current').html((repos[0].name))//repos[0].html_url,repos[0].created_at
		repos.forEach(function(repo){
			var d=new Date(repo.created_at)
			$('#current').append(`<a href="${repo.html_url}"  target= "_blank">${repo.name}</a> Created at: ${formatDate(d)}<br>`)


		})
	});

}

function formatDate(date) {
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}


$(document).ready(function(){
	$('#myTabs a').click(function (e) {
		e.preventDefault()
		if($(this).html()==='Current')
		{
			makeAjaxRequest();
		}
		else if($(this).html()==='Favourite'){
			favouritesRequest();

		}
		$(this).tab('show')


	})
   $('#myTabs a:first').tab('show') // Select first tab
   makeAjaxRequest();

});














function favouritesRequest(){
	$.ajax({
		url: 'https://gh-pinned-repos.now.sh/?username=saber20',
		type: 'GET',
	})
	.done(function(repos) {
		var array;
		try {
			// r=repos;
			if(typeof repos === 'object' )
			{
				array=repos;

			}
			else{
				array=JSON.parse(repos);

			}
			$('#favourite').html('')
			array.forEach(function(repo){
				var html_url="https://github.com/saber20/"+repo.repo
				$('#favourite').append(`<a href="${html_url}"  target= "_blank">${repo.repo}</a>${repo.language}<br>`)
			})
		}
		catch(e){}});
};
