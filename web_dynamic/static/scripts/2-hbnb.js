$(document).ready(function () {
  const amenityList = {};
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenityList[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityList[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenityList).join(', '));
  });
});

$(document).ready(function () {
  const url = 'http://'+ window.location.hostname +':5001/api/v1/status/';
  $.get(url, function (textStatus) {
    if (textStatus.status === 'OK') {
      $('DIV#api_status').addClass('available')
    }
  })
})