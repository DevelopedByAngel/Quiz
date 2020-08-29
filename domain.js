const domain=(window.location.href).split("=")[1];
console.log(domain)
if(domain=="logical")
{
$('#domain').text('Logical Reasoning');$('title').text('Logical Reasoning')}
else if(domain=="programming"){
$('#domain').text('Programming MCQ');$('title').text('Programming MCQ')}
else if(domain=="general"){
$('#domain').text('General Knowledge');$('title').text('General Knowledge')}
else if(domain=="quantitative"){
$('#domain').text('Quantitative Aptitude');$('title').text('Quantitative Aptitude')}

eval('var dom='+domain);
$('#domain').after('<div id="submitdiv"><input type="submit" value="submit" id="submit"></div></form>')
dom.map((d,i)=>
	{
		$('#domain').after(
		'<h3 class="question" id="question'+i+'">'+(dom.length-i)+') '+d.question+'</h3>'+
		'<fieldset class="options" >'+
		'<div class="q'+i+' option"><input type="radio" name="q'+i+'" value="'+d.options[0]+'" required="required" ><label for="q'+i+'">'+d.options[0]+'</label></div><br>'+
		'<div class="q'+i+' option"><input type="radio" name="q'+i+'" value="'+d.options[1]+'" required="required"><label for="q'+i+'">'+d.options[1]+'</label></div><br>'+
		'<div class="q'+i+' option"><input type="radio" name="q'+i+'" value="'+d.options[2]+'" required="required"><label for="q'+i+'">'+d.options[2]+'</label></div><br>'+
		'</fieldset>'
		);
	});
// $('#domain').after('<form>')
$("form").on("submit", function(e)
	{
		$('#modalbtn').click();
		$(document).scrollTop($(document).height()+100); 
		$('.score').text(' ');
		$('#scoreholder').html('<img id="scoreimg" width="200" height="200" src="..."><div id="scorediv"><p id="scorepic"></p></div>');
		$('.option').css('background-color','grey')
		var score=0;
		e.preventDefault();
		dom.map((d,i)=>
		{
			if(d.answer===$('input[name=q'+i+']:checked').val())
			{
				$('#question'+i).html($('#question'+i).html()+'<span class="score">(1/1)</span>')
				$('input[name=q'+i+']:checked').parent().css('background-color','#228422');
				score=score+1;
			}
			else
			{
				$('#question'+i).html($('#question'+i).html()+'<span class="score">(0/1)</span>')
				$('input[name=q'+i+']:checked').parent().css('background-color','#e27575');
				var opt=$('.q'+i);
				for(var i=0;i<opt.length;i++)
				{
					var val=opt[i].childNodes[0]
					if(val.getAttribute('value')===d.answer)
						val.parentElement.style.background = 'rgba(76,175,80,0.5)';
				}
				
			}

		})
		
		$('#scorepic').text(score+'/10');
		if(score<5)
		{
			$('#scoreimg').attr('src','https://media1.tenor.com/images/c60b0c9f441f523e67e64afc52bec690/tenor.gif?itemid=8665326');
		}
		else
		{
			$('#scoreimg').attr('src','https://media.tenor.com/images/9fcdecc57f93ff2c8bc4bc0556e98ca8/tenor.gif');
			
		}
		$('#scorepic').after("<div class='button'><button class='btn btn-primary' onclick='window.location.href=window.location.href'>Try again</button><button class='btn btn-primary' onclick='results();'>View Results</button></div>");
	});
function results()
		{
			document.documentElement.scrollTop = 0;
			$('#modalclose').click();
		}
$('.option').click(function()
	{
		$(this).children()[0].click();
	});
