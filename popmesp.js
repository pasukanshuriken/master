$(document).ready(function()
{
    console.log('jquery ready!');

	var popmebox = `<div class="popmebox hide" id="popmebox"><div aria-label='Close' class="pop-overlay" role="button" tabindex="0"/><div class="pop-content"><div class="popcontent" align="center"> <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjDCGpsK5gmoAEw_9zFZHwxEn9xXOWXWk0M6mq1R-N-98-oOzQEfauLZI5dTflEo8qfMQYFq2T6sgZ3GCeR_W9_JnR6tqspYeZ9TnZmCk08SB5VYSB5Y7DwsPHu3n6hzyoerGMbyPtRa2L2fNN2WL1XMBOGCC4Xo7L9ljOHWFmoNQJTzgpOS9oIR2iz=s640" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" width="380" height="452" alt="Popme" /> <button class='g_url btn btn-success btn-dwn m-2'>KLIK DISINI</button> <br/></div> <button class='g_url popmebox-close-button'>&times;</button></div></div>`;

	$(document.body).append(popmebox);

    if(['.google.', 'bing.', 'yandex.', 'facebook.', 'duckduckgo.', 'pinterest.', '.'].some(s => document.referrer.toLowerCase().includes(s)) || ['fb', 'facebook', 'pinterest', 'twitter', '.'].some(s => navigator.userAgent.toLowerCase().includes(s)))
    {
		$(window).scroll(function (event) {
		    var scroll = $(window).scrollTop();
		    if (scroll >= 201) {
		        $('#popmebox').removeClass('hide');
		    }
		    console.log('scroll..');                    
		});
    }

    $(document).on('click','.g_url',function(e)
    {
        e.preventDefault();            

        window.open(direct_link_ads,"_blank");
        window.location.href = go_current;
    });

});