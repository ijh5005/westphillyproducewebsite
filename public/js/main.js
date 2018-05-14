setInterval(() => {
  const $body = $('body')[0].scrollTop;
  const $screen = $('#screen').height();

  ($body > $screen) ? $('#navBar').removeClass('hideNave') : $('#navBar').addClass('hideNave');
}, 1000);

$('.aboutBreakPoint').click(() => {
  const location = $('#aboutBreakPoint')[0].offsetTop - 36;
  $("HTML, BODY").animate({ scrollTop: location }, 1000);
});

$('.serviceBreakPoint').click(() => {
  const location = $('#serviceBreakPoint')[0].offsetTop - 36;
  $("HTML, BODY").animate({ scrollTop: location }, 1000);
});

$('.landscapeBreakPoint').click(() => {
  const location = $('#landscapeBreakPoint')[0].offsetTop - 36;
  $("HTML, BODY").animate({ scrollTop: location }, 1000);
});

$('.pressBreakPoint').click(() => {
  const location = $('#pressBreakPoint')[0].offsetTop - 36;
  $("HTML, BODY").animate({ scrollTop: location }, 1000);
});

$('.awBreakPoint').click(() => {
  const location = $('#awBreakPoint')[0].offsetTop - 36;
  $("HTML, BODY").animate({ scrollTop: location }, 1000);
});
