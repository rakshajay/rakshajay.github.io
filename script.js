$(document).ready(function(){
    $(".buttonContainer").hover(function(){
        $(".arrowicon").css("display", "none");
    }, function(){
        $(".arrowicon").css("display", "block");
    });

    $(".gear").on("mouseenter", function(e){
    	console.log('entered gear');

    	// Object to look up gear id to combo
    	var gearIdToCombo = {
    		'gear1': 'combo, combo, combo',
    		'gear2': 'combo2, combo2, combo2',
    	};

    	// get thg gear Id from the element
    	var gearId = $(this).attr('id');
    	// look up the combo from the id
    	var gearCombo = gearIdToCombo[gearId];
    	console.log(gearId);
    	console.log(gearCombo);
    	// write the result to the website here #result

    })
});

document.getElementById('gear2').addEventListener('mouseover', function() {
  document.body.style.backgroundColor = '#f0f2f0'; // New background color
});

document.getElementById('gear2').addEventListener('mouseout', function() {
  document.body.style.backgroundColor = ''; // Revert to original background color
});




<!-- Modal HTML embedded directly into document -->
<div id="ex1" class="modal">
  <p>Thanks for clicking. That felt good.</p>
  <a href="#" rel="modal:close">Close</a>
</div>

<!-- Link to open the modal -->
<p><a href="#ex1" rel="modal:open">Open Modal</a></p>