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
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (textStatus) {
    alert(textStatus)
    if (textStatus === 'OK') {
      console.log('status: ok')
      alert('si hay conexion')
      $('DIV#api_status').addClass('available')
    } else {
      alert('no conexion')
    }
  })
})