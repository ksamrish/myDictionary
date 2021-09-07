		$(document).ready(function(){
		  	$("#Dictionary").click(function(){
		  	if($("#Dictionary").is(":checked")){
	  			/*$("#Merriam").prop('checked', false);
				$('#Oxford').prop('checked',false);
				$('#Cambridge').prop('checked',false);
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');*/
		    	$.get("https://www.dictionaryapi.com/api/v3/references/learners/json/" + document.getElementById('engword').value + "?key=e3b93d66-0116-4963-8920-23236f84f830", function(data, status){
		    		// console.log("Original Array" + data);
		    		$.each( data, function( key, value ) {
		    			if(key == [0]){
		    			 //console.log("Second position datas" + value);
			    			$.each( value, function( keys, values ) {
			    				// console.log("Third position datas" + values);
			    				if (keys == 'dros') {
			    					$.each(values, function(keyess,valueess){
					    					// console.log("forth" + valueess);
				    					$.each(valueess, function(kkeyy,vvalueess){

				    						if (kkeyy == 'drp') {
				    							 //document.write(vvalueess + "<br>");
				    							$("#Es_Dictionary").prop('checked',true);
				    							$("#targetTexteng").text("  * ");
				    							$("#targetTexteng").append(vvalueess+"\n");
				    							var Es_textarea = document.getElementById("targetTexteng");
        										Es_textarea.style.display = Es_Dictionary.checked ? "block" : "none";
				    						}
			    						});	
				    				});
			    				};
			    				if (keys == 'fl') {
			    					//console.log("fl" + values);
			    					if(values == 'noun'){
			    						$('#Noun').prop('checked', true);
			    					}
			    					if(values == 'verb'){
			    						$('#Verb').prop('checked', true);
			    					}
			    					if(values == 'adjective'){
			    						$('#Adjective').prop('checked', true);
			    					}
			    					if(values == 'adverb'){
			    						$('#Adverb').prop('checked', true);
			    					}
			    					if(values == 'preposition'){
			    						$('#Preposition').prop('checked', true);
			    					}
			    					if(values == 'conjunction'){
			    						$('#Conjunction').prop('checked', true);
			    					}
			    					if(values == 'interjection'){
			    						$('#Interjection').prop('checked', true);
			    					}
			    					if(values == 'pronoun'){
			    						$('#Pronoun').prop('checked', true);
			    					}
			    					if(values == 'indefinite article'||values=='definite article'){
			    						$('#Article').prop('checked', true);
			    					}
		    					};


		    					if(keys == 'shortdef'){
		    						$.each(values, function(defkey,defvalue){
    									//console.log("sdef" + defvalue);
    									if(defvalue != ""){
    										$('#E_Dictionary').prop('checked',true);

    										$('#targetTexteEngmean').text("  * ");
		    								$('#targetTexteEngmean').append(defvalue+"\n");	
		    								var Em_textarea = document.getElementById("targetTexteEngmean");
        										Em_textarea.style.display = E_Dictionary.checked ? "block" : "none";
		  		    						};
	    							});
	    						};
	    						    $("#pronoun").click(function(){
	    							if(keys == 'hwi'){
										$.each(values, function(soundkey,soundvalue){
											if(soundkey == 'prs'){
												$.each(soundvalue, function(soundkeys,soundvalues){
													$.each(soundvalues, function(soundkeyes,soundvaluess){
														if(soundkeyes == 'sound'){
															$.each(soundvaluess, function(sdkey,sdvalue){
																console.log("prsss" + sdvalue );
																var firstletter = $('#engword').val().charAt(0);
																console.log(firstletter);
																var win = new Audio("https://media.merriam-webster.com/soundc11/" + firstletter +"/" + sdvalue +".wav");
																console.log(win);
																win.play();
															});
														};
													});
												});
											};
										});
									};
								});


			    			});
		    			};

					});
		      		// console.log("Data: " + data + "\nStatus: " + status);
		      		//console.log(data);
		    	});
			} 
			if($("#Dictinary").is(':not(:checked)')){
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			}
		  	});
			/*$("#Merriam").click(function(){
				$("#Dictinary").prop('checked', false);
				$('#Oxford').prop('checked',false);
				$('#Cambridge').prop('checked',false);
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			});	
			$("#Oxford").click(function(){
				$("#Dictinary").prop('checked', false);
				$('#Merriam').prop('checked',false);
				$('#Cambridge').prop('checked',false);
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			});	
			$("#Cambridge").click(function(){
				$("#Dictinary").prop('checked', false);
				$('#Oxford').prop('checked',false);
				$('#Merriam').prop('checked',false);
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			});	*/
			
		});

    /*function pronunciation(){
 var str = document.getElementById("engword").value;
  var res = str.charAt(0);
  //var sam="static";
  //document.getElementById("demo").innerHTML = res;
  //var audio = new Audio('https://'+sam+'.sfdict.com/audio/lunawav/L01/L0139300.ogg');
//audio.play();
  var audio = new Audio("https://media.merriam-webster.com/soundc11/"+res+"/"+str+"001.wav");
  audio.play();
    }*/
$(document).ready(function(){
		  	$("#Dictionary").click(function(){
		  	if($("#Dictionary").is(":checked")){
	  			/*$("#Merriam").prop('checked', false);
				$('#Oxford').prop('checked',false);
				$('#Cambridge').prop('checked',false);
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');*/
		    	$.get("https://www.dictionaryapi.com/api/v3/references/learners/json/" + document.getElementById('engword').value + "?key=e3b93d66-0116-4963-8920-23236f84f830", function(data, status){
		    		// console.log("Original Array" + data);
		    		$.each( data, function( key, value ) {
		    			if(key == [1]){
		    			 //console.log("Second position datas" + value);
			    			$.each( value, function( keys, values ) {
			    				// console.log("Third position datas" + values);
			    				if (keys == 'dros') {
			    					$.each(values, function(keyess,valueess){
					    					// console.log("forth" + valueess);
				    					$.each(valueess, function(kkeyy,vvalueess){
				    						if (kkeyy == 'drp') {
				    							 //document.write(vvalueess + "<br>");
				    							$("#Es_Dictionary").prop('checked',true);
				    							$("#targetTexteng").append("  * ");
				    							$("#targetTexteng").append(vvalueess+"\n");
				    						}
			    						});	
				    				});
			    				};
			    				if (keys == 'fl') {
			    					//console.log("fl" + values);
			    					if(values == 'noun'){
			    						$('#Noun').prop('checked', true);
			    					}
			    					if(values == 'verb'){
			    						$('#Verb').prop('checked', true);
			    					}
			    					if(values == 'adjective'){
			    						$('#Adjective').prop('checked', true);
			    					}
			    					if(values == 'adverb'){
			    						$('#Adverb').prop('checked', true);
			    					}
			    					if(values == 'preposition'){
			    						$('#Preposition').prop('checked', true);
			    					}
			    					if(values == 'conjunction'){
			    						$('#Conjunction').prop('checked', true);
			    					}
			    					if(values == 'interjection'){
			    						$('#Interjection').prop('checked', true);
			    					}
			    					if(values == 'pronoun'){
			    						$('#Pronoun').prop('checked', true);
			    					}
			    					if(values == 'indefinite article'||values=='definite article'){
			    						$('#Article').prop('checked', true);
			    					}
		    					};


		    					if(keys == 'shortdef'){
		    						$.each(values, function(defkey,defvalue){
    									//console.log("sdef" + defvalue);
    									if(defvalue != ""){
    										$('#E_Dictionary').prop('checked',true);
		    								
    										$('#targetTexteEngmean').append("  * ");
		    								$('#targetTexteEngmean').append(defvalue+"\n");
			    						};
	    							});
	    						};
	    						    


			    			});
		    			};

					});
		      		// console.log("Data: " + data + "\nStatus: " + status);
		      		//console.log(data);
		    	});
			} 
			if($("#Dictinary").is(':not(:checked)')){
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			}
		  	});
	});

		$(document).ready(function(){
		  	$("#Dictionary").click(function(){
		  	if($("#Dictionary").is(":checked")){
	  			/*$("#Merriam").prop('checked', false);
				$('#Oxford').prop('checked',false);
				$('#Cambridge').prop('checked',false);
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');*/
		    	$.get("https://www.dictionaryapi.com/api/v3/references/learners/json/" + document.getElementById('engword').value + "?key=e3b93d66-0116-4963-8920-23236f84f830", function(data, status){
		    		// console.log("Original Array" + data);
		    		$.each( data, function( key, value ) {
		    			if(key == [2]){
		    			 //console.log("Second position datas" + value);
			    			$.each( value, function( keys, values ) {
			    				// console.log("Third position datas" + values);
			    				if (keys == 'dros') {
			    					$.each(values, function(keyess,valueess){
					    					// console.log("forth" + valueess);
				    					$.each(valueess, function(kkeyy,vvalueess){
				    						if (kkeyy == 'drp') {
				    							 //document.write(vvalueess + "<br>");
				    							$("#Es_Dictionary").prop('checked',true);
				    							$("#targetTexteng").append("  * ");
				    							$("#targetTexteng").append(vvalueess+"\n");
				    						
				    						}
			    						});	
				    				});
			    				};
			    				if (keys == 'fl') {
			    					//console.log("fl" + values);
			    					if(values == 'noun'){
			    						$('#Noun').prop('checked', true);
			    					}
			    					if(values == 'verb'){
			    						$('#Verb').prop('checked', true);
			    					}
			    					if(values == 'adjective'){
			    						$('#Adjective').prop('checked', true);
			    					}
			    					if(values == 'adverb'){
			    						$('#Adverb').prop('checked', true);
			    					}
			    					if(values == 'preposition'){
			    						$('#Preposition').prop('checked', true);
			    					}
			    					if(values == 'conjunction'){
			    						$('#Conjunction').prop('checked', true);
			    					}
			    					if(values == 'interjection'){
			    						$('#Interjection').prop('checked', true);
			    					}
			    					if(values == 'pronoun'){
			    						$('#Pronoun').prop('checked', true);
			    					}
			    					if(values == 'indefinite article'||values=='definite article'){
			    						$('#Article').prop('checked', true);
			    					}
		    					};


		    					if(keys == 'shortdef'){
		    						$.each(values, function(defkey,defvalue){
    									//console.log("sdef" + defvalue);
    									if(defvalue != ""){
    										$('#E_Dictionary').prop('checked',true);
    										$('#targetTexteEngmean').append("  * ");
		    								$('#targetTexteEngmean').append(defvalue+"\n");
			    						};
	    							});
	    						};
	    						    


			    			});
		    			};

					});
		      		// console.log("Data: " + data + "\nStatus: " + status);
		      		//console.log(data);
		    	});
			} 
			if($("#Dictinary").is(':not(:checked)')){
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			}
		  	});
	});



    function other_Em(Em_other){
  		var Emdisplaytxtbox = document.getElementById("Em_otherchkbox");
        Emdisplaytxtbox.style.display = Em_other.checked ? "block" : "none";
    }

    function other_Tm(Tm_other){
  		var Tm_displaytxtbox = document.getElementById("Tm_otherchkbox");
        Tm_displaytxtbox.style.display = Tm_other.checked ? "block" : "none";
    }
    function other_Es(Es_other){
  		var Es_displaytxtbox = document.getElementById("Es_otherchkbox");
        Es_displaytxtbox.style.display = Es_other.checked ? "block" : "none";
    }
    function other_Ts(Ts_other){
  		var Ts_displaytxtbox = document.getElementById("Ts_otherchkbox");
        Ts_displaytxtbox.style.display = Ts_other.checked ? "block" : "none";
    }
    function other_wt(wt_other){
  		var wt_displaytxtbox = document.getElementById("wt_otherchkbox");
        wt_displaytxtbox.style.display = wt_other.checked ? "block" : "none";
    }

    function wordType(wordtype){
            if(wordtype=="Noun"){
            document.getElementById('Noun').checked=true;
            }
            else if(wordtype=="Verb"){
            document.getElementById('Verb').checked=true;
            }
            else if(wordtype=="Adjective"){
            document.getElementById('Adjective').checked=true;
            }
            else if(wordtype=="Adverb"){
            document.getElementById('Adverb').checked=true;
            }
    }
    function wordReference(wordreference){
            if(wordreference=="Oxford"){
            document.getElementById('Oxford').checked=true;
            window.open("https://www.oxfordlearnersdictionaries.com/definition/english/"+document.getElementById('engword').value,"_blank");
            }
            else if(wordreference=="Cambridge") {
        document.getElementById('Cambridge').checked=true;
        window.open("https://dictionary.cambridge.org/dictionary/english/"+document.getElementById('engword').value,"_blank");
    }
    else if(wordreference=="Merriam") {
        document.getElementById('Merriam').checked=true;
        window.open("https://www.merriam-webster.com/dictionary/"+document.getElementById('engword').value,"_blank");
    }
    else if(wordreference=="Dictionary") {
        document.getElementById('Dictionary').checked=true;
        window.open("https://www.dictionary.com/browse/"+document.getElementById('engword').value,"_blank");
    }
    }
