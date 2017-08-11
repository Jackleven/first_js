'use strict';
var JSON = {
	"infos": {
		"info": [
			{
				"note": {
					"notes": [
						{
							"id": "1",
							"name": "Leanne Graham",
							"username": "Bret",
							"email": "Sincere@april.biz"
						},
						{
							"id": "2",
							"name": "Ervin Howell",
							"username": "Antonette",
							"email": "Shanna@melissa.tv"
						},
						{
							"id": "3",
							"name": "Clementine Bauch",
							"username": "Samantha",
							"email": "Nathan@yesenia.net"
						}
                ]
				},
				"address": [
					{
						"street": "Kulas Light",
						"number": "15",
						"city": "Gwenborough"
					},
					{
						"street": "Douglas Extension",
						"number": "22",
						"city": "McKenziehaven"
					},
					{
						"street": "Hoeger Vally",
						"number": "4",
						"city": "South Elvis"
					}
            ]
			}
        ]
	}
};

function getData() {
	var print = document.getElementById( 'Ptest' );
	var tableU = document.getElementById( 'Ctable_user' );
	var tableA = document.getElementById( 'Ctable_add' );
	var infoLength = JSON.infos.info.length;
	var choice = document.getElementById( "sel" ).selectedIndex;
	for ( var infoIndex = 0; infoIndex < infoLength; infoIndex++ ) {
		var notesLength = JSON.infos.info[ infoIndex ].note.notes.length;
		for ( var noteIndex = 0; noteIndex < notesLength; noteIndex++ ) {
			var idc = JSON.infos.info[ infoIndex ].note.notes[ choice ].id;
			var namec = JSON.infos.info[ infoIndex ].note.notes[ choice ].name;
			var usernamec = JSON.infos.info[ infoIndex ].note.notes[ choice ].username;
			var emailc = JSON.infos.info[ infoIndex ].note.notes[ choice ].email;
			var streetc = JSON.infos.info[ infoIndex ].address[ choice ].street;
			var numc = JSON.infos.info[ infoIndex ].address[ choice ].number;
			var cityc = JSON.infos.info[ infoIndex ].address[ choice ].city;
		}
	}

	function doit() {
		tableU.innerHTML = '<tr><td>' + idc + '</td>' + '<td>' + namec + '</td><td>' + usernamec + '</td>' + '</td><td>' + emailc + '</td></tr>';
	}
	doit();

	function createTable() {
		tableA.innerHTML = '<tr><td>' + streetc + '</td>' + '<td>' + numc + '</td><td>' + cityc + '</td></tr>';
	}
	createTable();
}
var tbtn = document.getElementById( 'btn' );
tbtn.addEventListener( 'click', function() {
	var choice = document.getElementById( "sel" ).selectedIndex;
	getData();
} );
