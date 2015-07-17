var firebase = new Firebase("buh.firebaseio.com");
firebase.once('value', function(store){
	$.each(store.val(), function storeItem (id, item) {
		$('#name-' + id).text(item.name);
		$('#desc-' + id).text(item.description);
		$('#price-' + id).text(item.price);
	});
});
firebase.on('child_added',function(itemData) {
	var id = itemData.key();
	var item = itemData.val();
	$('#items').append(
'<div class="col-sm-4 col-lg-4 col-md-4">' +
                        '<div class="thumbnail">' +
                            '<img src=' + item.image + ' alt="">' +
                            '<div class="caption">' +
                                '<h4 class="pull-right">' + item.price + '</h4>' +
                                '<h4><a href="#">' + item.name + '</a>' +
                                '</h4>'+
                                '<p>' +item.description+ '</p>'+
                            '</div>'+

                        '</div>'+
                    '</div>'

		)
})