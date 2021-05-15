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
  const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  $.get(url, function (textStatus) {
    if (textStatus.status === 'OK') {
      $('DIV#api_status').addClass('available');
    }
  });
});

$(document).ready(function () {
  const url = 'http://' + window.location.hostname + ':5001/api/v1/places_search/';
  $.post(url, function (data, textStatus) {
    if (textStatus.status === 'success') {
      console.log(data);
      data.forEach((place) => {
        console.log(place);
        const template = `<article>
                              <div class="title_box">
                                <h2>${place.name}</h2>
                                <div class="price_by_night">$${place.price_by_night}</div>
                              </div>
                              <div class="information">
                                <div class="max_guest">${place.max_guest} Guests</div>
                                <div class="number_rooms">${place.number_rooms} Bedrooms</div>
                                <div class="number_bathrooms">${place.number_bathrooms} Bathrooms</div>
                              </div>
                              <div class="description">${place.description}</div>
                          </article>`;
        $('SECTION.places').append(template);
      });
    }
  });
});
