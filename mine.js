/*var textImg = {
descExca : "Excalibur, the swordman",
descMag : "Mag, the magnet",
descVolt : "Volt, the runner",
descFrost : "Frost, the avalanche",
descMesa : "Mesa, the gunslinger",
descLimbo : "Limbo, the gentleman",
descAsh : "Ash, the assassin",
descOberon : "Oberon, the paladin",
descAtlas : "Atlas, the rock",
descNidus : "Nidus, the corrupted",
descIvara : "Ivara, the spy",
descWukong : "Wukong, the monkey king"
};*/

var ficheExca ={
	desc : "Excalibur, the swordman",
	pun : "Slash Dash",
	pdeux : "Radial Blind",
	ptroix : "Radial Javelin",
	pquatre : "Exalted Blade"
}

var ficheMag={
	desc : "Mag, the magnet",
	pun : "Pull",
	pdeux : "Magnetize",
	ptrois : "Polarize",
	pquatre : "Crush"
}

var add_desc;

jQuery(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");
		var image_id = $(this).attr("id");


		//console.log(image_id);

		//Select the right description to add
		switch(image_id){
			case 'exca' : 
				add_desc = ficheExca;
				break;
			case 'mag' :
				add_desc = ficheMag;
				break;
			case 'volt' :
				add_desc= textImg.descVolt;
				break;
			case 'frost' :
				add_desc= textImg.descFrost;
				break;
			case 'mesa' :
				add_desc= textImg.descMesa;
				break;
			case 'limbo' :
				add_desc= textImg.descLimbo;
				break;
			case 'ash' :
				add_desc= textImg.descAsh;
				break;
			case 'oberon' :
				add_desc= textImg.descOberon;
				break;
			case 'atlas' :
				add_desc= textImg.descAtlas;
				break;
			case 'nidus' :
				add_desc= textImg.descNidus;
				break;
			case 'ivara' :
				add_desc= textImg.descIvara;
				break;
			case 'wukong' :
				add_desc= textImg.descWukong;
				break;
			default : add_desc = "what ?";
		};
		
		//console.log(add_desc);
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox').length > 0) { // #lightbox exists
			
			//place href as img src value
			$('#content').html(
				'<img src="' + image_href +'" />' +
					'<br/><br/><div id="desc">' + 
							'<p  id="descTitle">' + add_desc.desc + '</p>' +
							'<p>' + add_desc.pun + '</p>' +
							'<p>' + add_desc.pdeux + '</p>' +
							'<p>' + add_desc.ptrois + '</p>' +
							'<p>' + add_desc.pquatre + '</p>' +
						'</div>' 
			);
		   	
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Double-clic pour fermer</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
					'<br/><br/><div id="desc">' + 
							'<p id="descTitle">' + add_desc.desc + '</p>' +
							'<p>' + add_desc.pun + '</p>' +
							'<p>' + add_desc.pdeux + '</p>' +
							'<p>' + add_desc.ptrois + '</p>' +
							'<p>' + add_desc.pquatre + '</p>' +
						'</div>' +
				'</div>' +	
			'</div>';
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
		
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$('body').on('dblclick', '#lightbox', function(){ //must use live, as the lightbox element is inserted into the DOM
		$('#lightbox').hide();
	});

});