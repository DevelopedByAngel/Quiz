const domain=(window.location.href).split("=")[1];
$('#domain').text(domain);
var name='my_var';
eval('var dom='+domain);
$('#domain').after('<input type="submit" value="submit"></form>')
dom.map((d,i)=>
	{
		$('#domain').after(
		'<h1 class="question">'+d.question+'</h1>'+
		'<fieldset class="options" >'+
		'<div class="q'+i+' option"><input type="radio" name="q'+i+'" value="'+d.options[0]+'" required="required"><label for="q'+i+'">'+d.options[0]+'</label></div><br>'+
		'<div class="q'+i+' option"><input type="radio" name="q'+i+'" value="'+d.options[1]+'" required="required"><label for="q'+i+'">'+d.options[1]+'</label></div><br>'+
		'<div class="q'+i+' option"><input type="radio" name="q'+i+'" value="'+d.options[2]+'" required="required"><label for="q'+i+'">'+d.options[2]+'</label></div><br>'+
		'</fieldset>'
		);
	});
// $('#domain').after('<form>')
$("form").on("submit", function(e)
	{
		e.preventDefault();
		dom.map((d,i)=>
		{
			if(d.answer===$('input[name=q'+i+']:checked').val())
			$('input[name=q'+i+']:checked').parent().css('background-color','green');
			else
			{
			$('input[name=q'+i+']:checked').parent().css('background-color','red');
			var opt=$('.q'+i);
			for(var i=0;i<opt.length;i++)
			{
				var val=opt[i].childNodes[0]
				if(val.getAttribute('value')===d.answer)
					val.parentElement.style.background = 'rgba(76,175,80,0.5)';
			}
			}

		}
		)
	});
