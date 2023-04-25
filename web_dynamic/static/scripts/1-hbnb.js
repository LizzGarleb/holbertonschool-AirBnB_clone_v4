$(() => {
    const amenityIds = [];

    $('input[type="checkbox"]').change(() => {
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            amenityIds.push(amenityId);
        } else {
            const index = amenityIds.indexOf(amenityId);
            if (index > -1) {
                amenityIds.splice(index, 1);
            }
        }

        if (amenityIds.length > 0) {
            $('.Amenities h4').text(amenityIds.map(id => $(`input[data-id="${id}"]`).data('name')).join(', '));
        } else {
            $('.Amenities h4').text('None');
        }
    });
});
