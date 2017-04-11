var url="https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCKgLHcRPIWn9pnpgT9RtJHnB9nfOY6kp8&q=HTML&maxResults=10"
$(document).ready(function(){

	$("#btn").click(function(){
		$.get(url,function(jsonResponse){
			addVideoToDOM(jsonResponse.items[0].id.videoId);
			console.log(jsonResponse.items)
			$.each(jsonResponse.items,function(i,v){
				var onclick="addVideoToDOM('"+v.id.videoId+"')";
				$('#others').append('<a href="#" onclick="'+onclick+'">'+v.snippet.title+'</a><br><br>')
				console.log(v.snippet.title)
			})
		})
	})})

function addVideoToDOM(videoId) {
	$('#video').html(`<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/${videoId}"
		frameborder="0"
		allowfullscreen>
		</iframe>`
		);
}