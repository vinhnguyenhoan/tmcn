/**
 * Custom Script
 */
jQuery(document).ready(function(){
	//Images & Video
	var imageLink, click;
	if (document.location.href.indexOf('hinh-anh-va-video/#') != -1) {
		if (document.location.hash === '#image') {
			imageLink = jQuery('a[data-filter="[data-id*=\'Hình ảnh\']"]');
		} else if (document.location.hash === '#video') {
			imageLink = jQuery('a[data-filter="[data-id*=\'Videos\']"]');
		}
		if (imageLink.length > 0) {
			click = setInterval(changeImageTab, 300);
		}
	}
	function changeImageTab(){
		imageLink[0].click();
		clearInterval(click);
	}
	//Images detail
	var lnk = jQuery('[href$="/hinh-anh-va-video/hinh-anh/"]');
	if (lnk.length > 0) {
		lnk.text("Hình ảnh & Video");
		lnk.attr('href', lnk.attr('href').replace('/hinh-anh/','/#image'));
	}
	//Videos detail
	var lnk = jQuery('[href$="/hinh-anh-va-video/videos/"]');
	if (lnk.length > 0) {
		lnk.text("Hình ảnh & Video");
		lnk.attr('href', lnk.attr('href').replace('/videos/','/#video'));
	}
	//Sline banner
	if (document.location.href.indexOf('/nang-mui-s-line-cau-truc/') != -1) {
		//background images
		var all = jQuery('section div[class~=section-bg]');
		var bgimg = [['2016/12/tham-my-mui-bg.jpg', '2017/02/tham-my-mui-bg.jpg'],
		             ['2016/12/tham-my-mui-bg-2.jpg', '2017/02/tham-my-mui-bg-2-1.jpg'],
		             ['2016/12/tham-my-mui-bg-6.jpg', '2017/02/tham-my-mui-bg-6.jpg']];
		var mobile = false;
		jQuery(window).resize(function(){
			alignBackground();
		});
		//fix background image for safi
		jQuery(window).scroll( function(){
			replaceBg();
		} );
		
		function replaceBg() {
			if (!mobile) return;
			var windowBottom = jQuery(window).scrollTop() + jQuery(window).height();
			for (var i = 0; i < 3; i++) {
				if (jQuery(all[i+1]).offset().top < windowBottom && jQuery(all[i+1]).css('background-image') != "none" &&
						jQuery(all[i+1]).css('background-image').indexOf(bgimg[i][mobile?0:1]) != -1) {
					jQuery(all[i+1]).css('background-image', jQuery(all[i+1]).css('background-image').replace(bgimg[i][mobile?0:1],bgimg[i][mobile?1:0]) );
				}
			}
		}

		function alignBackground(){
			var windowsize = jQuery(window).width();
			if (windowsize < 850) {
				var imgsize = 1920;
				var centerX = windowsize/2 - imgsize/2;;
				if (all.length > 3) {
					//background first div
					jQuery(all[0]).css('background-position-x', (centerX - 5) + "px");
					if (windowsize <= 730) {
						mobile = true;
						//background second div
						var pad = (666/779)*200/(jQuery(all[1]).height()/jQuery(all[1]).width());
						jQuery(all[1]).css('background-position-x', (centerX + pad) + "px");
						
						//background third div
						pad = (724/984)*750/(jQuery(all[2]).height()/jQuery(all[2]).width());
//						console.log(pad);
//						console.log(jQuery(all[2]).height()+":"+jQuery(all[2]).width());
						jQuery(all[2]).css('background-position-x', (centerX + pad) + "px");
						//color
						jQuery('#content section:eq(2) div:eq(2) div:eq(5) div span').css('color', 'white');
						
						//background third div
						pad = (1349/728)*200/(jQuery(all[3]).width()/jQuery(all[3]).height());
//						console.log(pad);
//						console.log(jQuery(all[3]).height()+":"+jQuery(all[3]).width());
						jQuery(all[3]).css('background-position-x', (centerX - pad) + "px");
						//color
						jQuery('#content section:eq(3) div:eq(2) div:eq(5) div span').css('color', 'white');
					} else {
						jQuery(all[1]).css('background-position-x', "");
						jQuery(all[2]).css('background-position-x', "");
						jQuery(all[3]).css('background-position-x', "");
						//color
						jQuery('#content section:eq(2) div:eq(2) div:eq(5) div span').css('color', 'black');
						jQuery('#content section:eq(3) div:eq(2) div:eq(5) div span').css('color', 'black');
					}
					/*for (var i = 0; i < 3; i++) {
						jQuery(all[i+1]).css('background-image', jQuery(all[i+1]).css('background-image').replace(bgimg[i][mobile?0:1],bgimg[i][mobile?1:0]) );
					}*/
				}
			} else {
				all.css('background-position-x',"")
			}
			//font color third div
			/*if (all.length > 3) {
				jQuery(all[2]).select('.col-inner').css('color','#d83131');
			}*/
		}
		alignBackground();
		replaceBg();
	}
});