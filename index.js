var goto='';

$('.card').on('click',function()
{
	goto=$(this).attr("id");
	window.location.href="domain1.html?domain="+goto
});
$(window).resize(function()
	{
		$('.titleholder').css('height',$('.card').css('height'))
	});
$(document).ready(function()
	{
		$('.titleholder').css('height',$('.card').css('height'))
	});