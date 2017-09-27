app.controller("IndexController", function($scope, $http, $location,  $routeParams){

  $("nav a").click(function(evn){
    evn.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash); 
  });

  var controller = new ScrollMagic.Controller();
  

  // .addIndicators() // for debugging purposes
 
  // .addIndicators() // for debugging purposes

  var fromLeftTimeline = new TimelineMax();
  var fromLeftFrom = TweenMax.from(".navbar", 1, {
      x: 0
  });
  var fromLeftTo = TweenMax.to(".navbar", 1, {
      x: 1900
  });
  fromLeftTimeline
      .add(fromLeftFrom)
      .add(fromLeftTo);

  new ScrollMagic.Scene({
        triggerElement: ".intro",
        offset: 100,
    })
    .setTween(fromLeftTimeline)
    .duration(800)
    // .reverse(false)
   // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  // var fromRightTimeline = new TimelineMax();
  // var fromRightFrom = TweenMax.from(".contact", 1, {
  //     x: 1600
  // });
  // var fromRightTo = TweenMax.to(".contact", 1, {
  //     x: 0
  // });
  // fromRightTimeline
  //     .add(fromRightFrom)
  //     .add(fromRightTo);

  // new ScrollMagic.Scene({
  //       triggerElement: "#after",
  //       offset: 200,
  //   })
  //   .setTween(fromRightTimeline)
  //   .duration(400)
  //   //.reverse(false)
  //   // .addIndicators() // add indicators (requires plugin)
  //   .addTo(controller); 

  $("nav a").click(function(evn){
    evn.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash); 
  });

  var leftMissionTimeLine = new TimelineMax();
  var leftFrom = TweenMax.from(".mission", 1, {
      x: -500
  });
  var leftTo = TweenMax.to(".mission", 1, {
      x: 0
  });
  leftMissionTimeLine
      .add(leftFrom)
      .add(leftTo);

  new ScrollMagic.Scene({
        triggerElement: "#arts",
        offset: 200,
    })
    .setTween(leftMissionTimeLine)
    .duration(400)
    //.reverse(false)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  var leftEducation = new TimelineMax();
  var leftEdFrom = TweenMax.from(".education", 1, {
      x: -500
  });
  var leftEdTo = TweenMax.to(".education", 1, {
      x: 0
  });
  leftEducation
      .add(leftEdFrom)
      .add(leftEdTo);

  new ScrollMagic.Scene({
        triggerElement: "#fart",
        offset: 200,
    })
    .setTween(leftEducation)
    .duration(400)
    //.reverse(false)
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  
  
})