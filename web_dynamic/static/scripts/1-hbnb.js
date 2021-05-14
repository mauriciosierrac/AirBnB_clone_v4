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
