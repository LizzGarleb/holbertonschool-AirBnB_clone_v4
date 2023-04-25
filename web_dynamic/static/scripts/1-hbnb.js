$(() => {
    const amenityIds = {};

    $(':checkbox').change(() => {
        if (this.checked) {
            amenityIds[$(this).data('id')] = $(this).data('name');
        } else {
            delete amenityIds[$(this).data('id')];
        }

        if ($.isEmptyObject(amenityDict)) {
            $('.amenities h4').html('&nbsp');
        } else {
            $('.amenities h4').text(Object.values(amenityDict).join(', '));
        }
    });
});
