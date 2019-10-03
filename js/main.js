jQuery(document).ready(function($) 
{


	setTimeout(function() 
	{
		$('footer').nextAll('div').css('display', 'none');
	}, 5000);

	//********************************************************************************
	
	mainTl = new TimelineMax(),
    $baloonz = $('svg.baloonz'),
    $baloonzBlue = $baloonz.find('#blue_x5F_baloon'),
    $baloonzBlueTxt = $baloonz.find('#blue_x5F_text'),
    $baloonzRed = $baloonz.find('#red_x5F_baloon'),
    $baloonzRedTxt = $baloonz.find('#red_x5F_text'),
    $sceneBaloonzCap1 = $('.scene-baloonz-cap1'),
    $sceneBaloonzCap2 = $('.scene-baloonz-cap2');

    clearStage();
    function clearStage() {
        var clearTl = new TimelineMax();

        clearTl
            .set($baloonzBlue, { scale: 0, transformOrigin: "center center" })
            .set($baloonzBlueTxt, { autoAlpha: 0, transformOrigin: "center center" })
            .set($baloonzRed, { scale: 0, transformOrigin: "center bottom" })
            .set($baloonzRedTxt, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneBaloonzCap1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneBaloonzCap2, { autoAlpha: 0, transformOrigin: "center center" });
           

        return clearTl;
    }

    var controller = new ScrollMagic.Controller();
    var step = 1000;

     // build scene
    new ScrollMagic.Scene({
        triggerElement: 'section.scene-baloonz',
        triggerHook: .0,
        duration: step * 5.5
    })
        .setPin('section.scene-baloonz', { pushFollowers: true })
        .offset(0)
        .addIndicators()
        .addTo(controller);

    new ScrollMagic.Scene({
      triggerElement: "section.scene-baloonz",
      triggerHook: .0,
      duration: step
    })
      .setTween($baloonzBlue, { scale: 1, ease: Power0.easeNone })
      .offset(step * 0) //VOLONTAIRE
      .addTo(controller);

			  new ScrollMagic.Scene({
			  triggerElement: "section.scene-baloonz",
			  triggerHook: .0,
			  duration: step / 2
		    })
		      .setTween($baloonzBlueTxt, { autoAlpha: 1, ease: Power0.easeNone })
		      .offset(step * 1) //VOLONTAIRE
		      .addTo(controller);

		      new ScrollMagic.Scene({
			  triggerElement: "section.scene-baloonz",
			  triggerHook: .0,
			  duration: step / 2
		    })
		      .setTween($sceneBaloonzCap1, { autoAlpha: 1, ease: Power0.easeNone })
		      .offset(step * 1) //VOLONTAIRE
		      .addTo(controller);

    new ScrollMagic.Scene({
    triggerElement: "section.scene-baloonz",
    triggerHook: .0,
    duration: step
    })
    .setTween($baloonzRed, { scale: 1, ease: Power0.easeNone })
    .offset(step * 2.5) //VOLONTAIRE
    .addTo(controller);

		    new ScrollMagic.Scene({
		    triggerElement: "section.scene-baloonz",
		    triggerHook: .0,
		    duration: step / 2
		    })
		    .setTween($baloonzRedTxt, { autoAlpha: 1, ease: Power0.easeNone })
		    .offset(step * 3.5) //VOLONTAIRE
		    .addTo(controller);

		     new ScrollMagic.Scene({
		    triggerElement: "section.scene-baloonz",
		    triggerHook: .0,
		    duration: step / 2
		    })
		    .setTween($sceneBaloonzCap2, { autoAlpha: 1, ease: Power0.easeNone })
		    .offset(step * 3.5) //VOLONTAIRE
		    .addTo(controller);



	secondTl = new TimelineMax(),
    $sunGaz = $('svg.sun-gaz'),
    $sun = $sunGaz.find('#sun'),
    $gaz = $sunGaz.find('#gaz'),
    $sceneSunGazCap1 = $('.scene-sun-gaz-cap1'),
    $sceneSunGazCap2 = $('.scene-sun-gaz-cap2');
   

    clearSecondStage();
    function clearSecondStage() {
        var clearSecondTl = new TimelineMax();

        clearSecondTl
            .set($sun, { autoAlpha: 0, transformOrigin: "center center" })
            .set($gaz, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneSunGazCap1, { autoAlpha: 0, transformOrigin: "center center" })
            .set($sceneSunGazCap2, { autoAlpha: 0, transformOrigin: "center center" });
           

        return clearSecondTl;
    }

  	new ScrollMagic.Scene({
        triggerElement: 'section.scene-sun-gaz',
        triggerHook: .2,
        duration: step * 5
    })
        .setPin('section.scene-sun-gaz', { pushFollowers: true })
        .offset(0)
        .addIndicators()
        .addTo(controller);    

			    new ScrollMagic.Scene({
			    triggerElement: "section.scene-sun-gaz",
			    triggerHook: .0,
			    duration: step
			    })
			    .setTween($sun, { autoAlpha: 1, ease: Power0.easeNone })
			    .offset(step * 0) //VOLONTAIRE
			    .addTo(controller);

			    new ScrollMagic.Scene({
			    triggerElement: "section.scene-sun-gaz",
			    triggerHook: .0,
			    duration: step
			    })
			    .setTween($sceneSunGazCap1, { autoAlpha: 1, ease: Power0.easeNone })
			    .offset(step * 0) //VOLONTAIRE
			    .addTo(controller);



    new ScrollMagic.Scene({
    triggerElement: "section.scene-sun-gaz",
    triggerHook: .0,
    duration: step
    })
    .setTween($gaz, { autoAlpha: 1, ease: Power0.easeNone })
    .offset(step * 2) //VOLONTAIRE
    .addTo(controller);

      new ScrollMagic.Scene({
    triggerElement: "section.scene-sun-gaz",
    triggerHook: .0,
    duration: step
    })
    .setTween($sceneSunGazCap2, { autoAlpha: 1, ease: Power0.easeNone })
    .offset(step * 2) //VOLONTAIRE
    .addTo(controller);

});
