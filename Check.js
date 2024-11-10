console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to("img", {
      scale: 2,
      z: 250,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.4,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});

$(document).ready(function() {
  $.fn.darkenScroll = function() {
    var elem = $(this);

    $(window).on('scroll', function() {
      var scroll = $(document).scrollTop();
      var offsetTop = elem.offset().top + elem.outerHeight();
      var opacity = 1 / offsetTop * scroll;

      if (opacity > 0 && opacity < 1) {
        elem.css({'box-shadow': '10000px 0 0 0 rgba(0,0,0,' + opacity + ') inset'});
      }
    });
  };

  $('.section.hero').darkenScroll();

  const creoleTexts = {
    title: "Gade sa entenet konnen de ou",
    laugh: "🤫🤫🤫🤫🤫🤫🤫",
    publicInfo: "Se jis yon mwayen pouw we si enfomasyon piblik",
    consequences: "Nenpot sa ou fe mal gen konsekans",
    infoAccess: "Wap jis antre nom'w ak siyati'w pouw we si enfomasyon ou yo piblik",
    knowledgeSharing: "Mwen pataje konesans sa se pou edikatyon selman",
    disclaimer: "Mwen pa responsab anyen mal ou fe avek li",
    more: "Pezem",
  };

  const englishTexts = {
    title: "See what the internet knows about you",
    laugh: "🤫🤫🤫🤫🤫🤫🤫",
    publicInfo: "This is just a way to see if your information is public",
    consequences: "Anything you do wrong may have consequences",
    infoAccess: "You will just enter your First and Last name to see if your information is public",
    knowledgeSharing: "I share this knowledge for educational purposes only",
    disclaimer: "I am not responsible for anything wrong you do with it",
    more: "Next"
  };

  $('#switch-to-creole').click(function() {
    $('#title').text(creoleTexts.title);
    $('#laugh').text(creoleTexts.laugh);
    $('#responsibility').text(creoleTexts.responsibility);
    $('#public-info').text(creoleTexts.publicInfo);
    $('#consequences').text(creoleTexts.consequences);
    $('#info-access').text(creoleTexts.infoAccess);
    $('#knowledge-sharing').text(creoleTexts.knowledgeSharing);
    $('#disclaimer').text(creoleTexts.disclaimer);
    $('#more').text(creoleTexts.more);
  });

  $('#switch-to-english').click(function() {
    $('#title').text(englishTexts.title);
    $('#laugh').text(englishTexts.laugh);
    $('#responsibility').text(englishTexts.responsibility);
    $('#public-info').text(englishTexts.publicInfo);
    $('#consequences').text(englishTexts.consequences);
    $('#info-access').text(englishTexts.infoAccess);
    $('#knowledge-sharing').text(englishTexts.knowledgeSharing);
    $('#disclaimer').text(englishTexts.disclaimer);
    $('#more').text(englishTexts.more);
  });
});
