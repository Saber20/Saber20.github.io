$(document).ready(function(){

	$.getJSON('../js/skills.json',function(i){
		console.log(i);
		var str='<ul>';
		$.each(i.skills,function(d,skill){
			str+="<li><i class='"+skill.cssclass+"'></i>"  +skill.name + " :"+skill.description+"</li><br>"
		})
		str+='</ul>';

		$('#skills').append(str)
	})
})

// python -m SimpleHTTPServer 8000
// 8000