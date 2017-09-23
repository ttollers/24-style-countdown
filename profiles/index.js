import players from './players';

const urlSections = window.location.href.split("/");
const playerStr = urlSections[urlSections.length -1];

const player = players[playerStr];
$('#js_headshot').attr('src', player.headshot);
$('#js_backoftheshirt').text(player.backOfTheShirt);
$('#js_name').text(player.name);
$('#js_rank').text(player.rank);
$('#js_seed').text(player.seed);

player.bio.forEach(para => {
  const html = '<div class="col-lg-auto"><p>' + para + '</p></div>';
  $('#js_bio').append(html);
});

player.strengths.forEach(strength => {
  const html = '<p>' + strength + '</p>';
  $('#js_strengths').append(html);
});

player.weaknesses.forEach(weakness => {
  const html = '<p>' + weakness + '</p>';
  $('#js_weaknesses').append(html);
});

$('#js_fifainspiration')
  .append('<h3>' + player.fifaInspiration.player + '</h3>')
  .append('<p>' + player.fifaInspiration.info + '</p>');