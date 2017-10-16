app.controller("IndexController", function($scope, $http, $location,  $routeParams){

  $("nav a").click(function(evn){
    evn.preventDefault();
    $('html').scrollTo(this.hash, this.hash); 
  })

  // $("button").each(function(index, element){
  //   $(this).click(function(){
  //     TweenLite.to(window, 1, {scrollTo:{y:"#section" + (index+1), offsetY:70}});
  //   })
  // })   
  TweenMax.to(".intro h1", 6, {x:100, ease:Power4.easeOutIn});

  var controller = new ScrollMagic.Controller();

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
    .addTo(controller);

  $("nav a").click(function(evn){
    evn.preventDefault();
    $('html,body').scrollTo(this.hash, this.hash); 
  });

  var leftMissionTimeLine = new TimelineMax();
  var leftFrom = TweenMax.from(".mission", 1, {
      x: -500
  });
  var leftTo = TweenMax.to(".mission", 1, {
      x:0
  });
  leftMissionTimeLine
      .add(leftFrom)
      .add(leftTo);

  new ScrollMagic.Scene({
        triggerElement: "#arts",
        offset: 50,
    })
    .setTween(leftMissionTimeLine)
    .duration(800)
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
        offset: 50,
    })
    .setTween(leftEducation)
    .duration(600)
    .addTo(controller); 

  var leftContact = new TimelineMax();
  var leftContactFrom = TweenMax.from(".contact", 1, {
      x: -500
  });
  var leftContactTo = TweenMax.to(".contact", 1, {
      x: 0
  });
  leftContact
      .add(leftContactFrom)
      .add(leftContactTo);

  new ScrollMagic.Scene({
        triggerElement: "#about",
        offset: 50,
    })
    .setTween(leftContact)
    .duration(600)
    .addTo(controller); 
})