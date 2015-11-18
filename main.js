$(document).on('ready', function(){
	$.ajax({
		url: "http://ironhack-characters.herokuapp.com/characters",
		success: addCharactersToHtml,
		error: function(){
			console.log("The request didn't work");
		}
	});

	$('.js-new-character').on('submit', function(event){
		event.preventDefault();
		var newCharacter = {
			name: $('.js-name').val(),
			occupation: $('.js-occupation').val(),
			weapon: $('.js-weapon').val()
		}

		$.ajax({
			type: "POST",
			url: "http://ironhack-characters.herokuapp.com/characters",
			data: newCharacter, 
			success: function(){
				addSingleCharacterToHtml(newCharacter)
			},
			error: function(){
				console.log("It failed");
			}
		})

		$('.js-name').val("")
		$('.js-occupation').val("")
		$('.js-weapon').val("")
	});

	function addSingleCharacterToHtml(character){
		var info = "<li data-id= " + character.id + ">" + character.name 
				   + "<br>" + "Debt: " + character.weapon
				   + "<br>" + character.occupation + "</li>"
		$('.js-characters-list').append(info);
	}

	function addCharactersToHtml(characters){
		characters.forEach(function(character){
			console.log(character);
			addSingleCharacterToHtml(character)

		});
	}
});
