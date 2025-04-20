
$(".form-holder").fadeIn();

var brushAsset;
var brushAssetName;

$("#brushes").autocomplete({
	source: fetchedStrings1,
	minLength: 2

});
$("#brushes").on("change", function () {
	var code1 = $("#brushes").val();
	var stringIndex = fetchedStrings1.indexOf(code1);
	console.log("index of " + code1 + ": " + stringIndex);
	var code2 = fetchedData1E.at(stringIndex);
	asset = getAssetByCode2(fetchedData1D, code2);
	document.getElementById('h1').innerHTML = asset[0].asset;
	assetName = asset.Asset;
	$('#i1 .image-box-inner').fadeOut(400, function () {
		$(this).html("<img src='" + asset[0].picUrl + "'>").fadeIn(400);
	});
});

//---------------------------------

$("#grads").autocomplete({
	source: fetchedStrings2,
	minLength: 2

});
$("#grads").on("change", function () {
	var code1 = $("#grads").val();
	var stringIndex = fetchedStrings2.indexOf(code1);
	console.log("index of " + code1 + ": " + stringIndex);
	var code2 = fetchedData2E.at(stringIndex);
	asset = getAssetByCode2(fetchedData2D, code2);
	document.getElementById('h2').innerHTML = asset[0].asset;
	assetName = asset.Asset;
	$('#i2 .image-box-inner').fadeOut(400, function () {
		$(this).html("<img src='" + asset[0].picUrl + "'>").fadeIn(400);
	});
});

//---------------------------------

$("#three-d").autocomplete({
	source: fetchedStrings3,
	minLength: 2

});
$("#three-d").on("change", function () {
	var code1 = $("#three-d").val();
	var stringIndex = fetchedStrings3.indexOf(code1);
	console.log("index of " + code1 + ": " + stringIndex);
	var code2 = fetchedData3E.at(stringIndex);
	asset = getAssetByCode2(fetchedData3D, code2);
	document.getElementById('h3').innerHTML = asset[0].asset;
	assetName = asset.Asset;
	$('#i3 .image-box-inner').fadeOut(400, function () {
		$(this).html("<img src='" + asset[0].picUrl + "'>").fadeIn(400);
	});
});

//---------------------------------

$("#a-as").autocomplete({
	source: fetchedStrings4,
	minLength: 2

});
$("#a-as").on("change", function () {
	var code1 = $("#a-as").val();
	var stringIndex = fetchedStrings4.indexOf(code1);
	console.log("index of " + code1 + ": " + stringIndex);
	var code2 = fetchedData4E.at(stringIndex);
	asset = getAssetByCode2(fetchedData4D, code2);
	document.getElementById('h4').innerHTML = asset[0].asset;
	assetName = asset.Asset;
	$('#i4 .image-box-inner').fadeOut(400, function () {
		$(this).html("<img src='" + asset[0].picUrl + "'>").fadeIn(400);
	});
});

//---------------------------------

$("#tools").autocomplete({
	source: fetchedStrings5,
	minLength: 2

});
$("#tools").on("change", function () {
	var code1 = $("#tools").val();
	var stringIndex = fetchedStrings5.indexOf(code1);
	console.log("index of " + code1 + ": " + stringIndex);
	var code2 = fetchedData5E.at(stringIndex);
	asset = getAssetByCode2(fetchedData5D, code2);
	document.getElementById('h5').innerHTML = asset[0].asset;
	assetName = asset.Asset;
	$('#i5 .image-box-inner').fadeOut(400, function () {
		$(this).html("<img src='" + asset[0].picUrl + "'>").fadeIn(400);
	});
});

//---------------------------------

$("#img-mat").autocomplete({
	source: fetchedStrings6,
	minLength: 2

});
$("#img-mat").on("change", function () {
	var code1 = $("#img-mat").val();
	var stringIndex = fetchedStrings6.indexOf(code1);
	console.log("index of " + code1 + ": " + stringIndex);
	var code2 = fetchedData6E.at(stringIndex);
	asset = getAssetByCode2(fetchedData6D, code2);
	document.getElementById('h6').innerHTML = asset[0].asset;
	assetName = asset.Asset;
	$('#i6 .image-box-inner').fadeOut(400, function () {
		$(this).html("<img src='" + asset[0].picUrl + "'>").fadeIn(400);
	});
});

//---------------------------------

$("#layers").autocomplete({
	source: fetchedStrings7,
	minLength: 2

});
$("#layers").on("change", function () {
	var code1 = $("#layers").val();
	var stringIndex = fetchedStrings7.indexOf(code1);
	console.log("index of " + code1 + ": " + stringIndex);
	var code2 = fetchedData7E.at(stringIndex);
	asset = getAssetByCode2(fetchedData7D, code2);
	document.getElementById('h7').innerHTML = asset[0].asset;
	assetName = asset.Asset;
	$('#i7 .image-box-inner').fadeOut(400, function () {
		$(this).html("<img src='" + asset[0].picUrl + "'>").fadeIn(400);
	});
});

//---------------------------------