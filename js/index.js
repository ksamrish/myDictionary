
$(document).ready(function(){
		  	$("#submit").click(function(){
		  		$('#Merriam').prop('checked',true);
		  		$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#Article').prop('checked', false);
				$('#Preposition').prop('checked', false);
				$('#Pronoun').prop('checked', false);
				$('#Conjunction').prop('checked', false);
				$('#Interjection').prop('checked', false);
	  			/*$("#Dictionary").prop('checked', false);
				$('#Oxford').prop('checked',false);
				$('#Cambridge').prop('checked',false);
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');*/
				$val = document.getElementById('engword').value;
		    	$.get("https://www.dictionaryapi.com/api/v3/references/learners/json/" + $val + "?key=e3b93d66-0116-4963-8920-23236f84f830", function(data, status){
		    		// console.log("Original Array" + data);
		    		$.each( data, function( key, value ) {
		    			if(key == [0]){
		    			 //console.log("Second position datas" + value);
			    			$.each( value, function( keys, values ) {
			    				// console.log("Third position datas" + values);
			    				
			    				if (keys == 'fl') {
			    					//console.log("fl" + values);
			    					if(values == 'noun'){
			    						$('#Noun').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
			    					if(values == 'verb'){
			    						$('#Verb').prop('checked', true);
			    						$("#targetTexteEngmean").text(values+":\n");	
			    						$("#targetTexteng").text(values+":\n");	
			    					}
			    					if(values == 'adjective'){
			    						$('#Adjective').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
			    					if(values == 'adverb'){
			    						$('#Adverb').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
			    					if(values == 'preposition'){
			    						$('#Preposition').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
			    					if(values == 'conjunction'){
			    						$('#Conjunction').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
			    					if(values == 'interjection'){
			    						$('#Interjection').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
			    					if(values == 'pronoun'){
			    						$('#Pronoun').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
			    					if(values == 'indefinite article'||values=='definite article'){
			    						$('#Article').prop('checked', true);
			    						$("#targetTexteng").text(values+":\n");
			    						$("#targetTexteEngmean").text(values+":\n");
			    					}
		    					};

		    					if (keys == 'dros') {
			    					$.each(values, function(keyess,valueess){
					    					// console.log("forth" + valueess);
				    					$.each(valueess, function(kkeyy,vvalueess){

				    						if (kkeyy == 'drp') {
				    							 //document.write(vvalueess + "<br>");
				    							$("#Es_Merriam").prop('checked',true);
				    							$("#targetTexteng").append("  * ");
				    							$("#targetTexteng").append(vvalueess+"\n");
				    							var Es_textarea = document.getElementById("targetTexteng");
        										Es_textarea.style.display = Es_Merriam.checked ? "block" : "none";
				    						}
			    						});	
				    				});
			    				};

		    					if(keys == 'shortdef'){
		    						$.each(values, function(defkey,defvalue){
    									//console.log("sdef" + defvalue);
    									if(defvalue != ""){
    										$('#E_Merriam').prop('checked',true);

    										$('#targetTexteEngmean').append("  * ");
		    								$('#targetTexteEngmean').append(defvalue+"\n");	
		    								var Em_textarea = document.getElementById("targetTexteEngmean");
        										Em_textarea.style.display = E_Merriam.checked ? "block" : "none";
		  		    						};
	    							});
	    						};
	    						    


			    			});
		    			};

					});
		      		// console.log("Data: " + data + "\nStatus: " + status);
		      		//console.log(data);
		    	});
			 
			/*if($("#Dictinary").is(':not(:checked)')){
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			}*/
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
		  	$("#submit").click(function(){
		  		
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
			    				
			    				if (keys == 'fl') {
			    					//console.log("fl" + values);
			    					if(values == 'noun'){
			    						$('#Noun').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'verb'){
			    						$('#Verb').prop('checked', true);
			    						$("#targetTexteEngmean").append("\n"+values+":\n");	
			    						$("#targetTexteng").append("\n"+values+":\n");	
			    					}
			    					if(values == 'adjective'){
			    						$('#Adjective').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'adverb'){
			    						$('#Adverb').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'preposition'){
			    						$('#Preposition').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'conjunction'){
			    						$('#Conjunction').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'interjection'){
			    						$('#Interjection').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'pronoun'){
			    						$('#Pronoun').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'indefinite article'||values=='definite article'){
			    						$('#Article').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
		    					};

		    					if (keys == 'dros') {
			    					$.each(values, function(keyess,valueess){
					    					// console.log("forth" + valueess);
				    					$.each(valueess, function(kkeyy,vvalueess){

				    						if (kkeyy == 'drp') {
				    							 //document.write(vvalueess + "<br>");
				    							$("#Es_Merriam").prop('checked',true);
				    							$("#targetTexteng").append("  * ");
				    							$("#targetTexteng").append(vvalueess+"\n");
				    							var Es_textarea = document.getElementById("targetTexteng");
        										Es_textarea.style.display = Es_Merriam.checked ? "block" : "none";
				    						}
			    						});	
				    				});
			    				}
			   

		

		    					if(keys == 'shortdef'){
		    						$.each(values, function(defkey,defvalue){
    									//console.log("sdef" + defvalue);
    									if(defvalue != ""){
    										$('#E_Merriam').prop('checked',true);

    										$('#targetTexteEngmean').append("  * ");
		    								$('#targetTexteEngmean').append(defvalue+"\n");	
		    								var Em_textarea = document.getElementById("targetTexteEngmean");
        										Em_textarea.style.display = E_Merriam.checked ? "block" : "none";
		  		    						};
	    							});
	    						};
	    						    


			    			});
		    			};

					});
		      		// console.log("Data: " + data + "\nStatus: " + status);
		      		//console.log(data);
		    	});
			 
			/*if($("#Dictinary").is(':not(:checked)')){
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			}*/
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

$(document).ready(function(){
		  	$("#submit").click(function(){
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
			    				
			    				if (keys == 'fl') {
			    					//console.log("fl" + values);
			    					if(values == 'noun'){
			    						$('#Noun').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'verb'){
			    						$('#Verb').prop('checked', true);
			    						$("#targetTexteEngmean").append("\n"+values+":\n");	
			    						$("#targetTexteng").append("\n"+values+":\n");	
			    					}
			    					if(values == 'adjective'){
			    						$('#Adjective').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'adverb'){
			    						$('#Adverb').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'preposition'){
			    						$('#Preposition').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'conjunction'){
			    						$('#Conjunction').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'interjection'){
			    						$('#Interjection').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'pronoun'){
			    						$('#Pronoun').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
			    					if(values == 'indefinite article'||values=='definite article'){
			    						$('#Article').prop('checked', true);
			    						$("#targetTexteng").append("\n"+values+":\n");
			    						$("#targetTexteEngmean").append("\n"+values+":\n");
			    					}
		    					};

		    					if (keys == 'dros') {
			    					$.each(values, function(keyess,valueess){
					    					// console.log("forth" + valueess);
				    					$.each(valueess, function(kkeyy,vvalueess){

				    						if (kkeyy == 'drp') {
				    							 //document.write(vvalueess + "<br>");
				    							$("#Es_Merriam").prop('checked',true);
				    							$("#targetTexteng").append("  * ");
				    							$("#targetTexteng").append(vvalueess+"\n");
				    							var Es_textarea = document.getElementById("targetTexteng");
        										Es_textarea.style.display = Es_Merriam.checked ? "block" : "none";
				    						}
			    						});	
				    				});
			    				};

		    					if(keys == 'shortdef'){
		    						$.each(values, function(defkey,defvalue){
    									//console.log("sdef" + defvalue);
    									if(defvalue != ""){
    										$('#E_Merriam').prop('checked',true);

    										$('#targetTexteEngmean').append("  * ");
		    								$('#targetTexteEngmean').append(defvalue+"\n");	
		    								var Em_textarea = document.getElementById("targetTexteEngmean");
        										Em_textarea.style.display = E_Merriam.checked ? "block" : "none";
		  		    						};
	    							});
	    						};
	    						    


			    			});
		    			};

					});
		      		// console.log("Data: " + data + "\nStatus: " + status);
		      		//console.log(data);
		    	});
			 
			/*if($("#Dictinary").is(':not(:checked)')){
				$('#Noun').prop('checked', false);
				$('#Verb').prop('checked', false);
				$('#Adjective').prop('checked', false);
				$('#Adverb').prop('checked', false);
				$('#E_Dictionary').prop('checked',false);
				$('#targetTexteEngmean').empty();
				$('#targetTexteng').val('');
			}*/
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


		




    /*function other_Em(Em_other){
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
    }*/

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
            
            window.open("https://www.oxfordlearnersdictionaries.com/definition/english/"+document.getElementById('engword').value,"_blank");
            }
            else if(wordreference=="Cambridge") {
        
        window.open("https://dictionary.cambridge.org/dictionary/english/"+document.getElementById('engword').value,"_blank");
    }
    else if(wordreference=="Merriam") {
        
        window.open("https://www.merriam-webster.com/dictionary/"+document.getElementById('engword').value,"_blank");
    }
    else if(wordreference=="Dictionary") {
        
        window.open("https://www.dictionary.com/browse/"+document.getElementById('engword').value,"_blank");
    }
    }

$(document).ready(function(){
		  	$("#pronoun").click(function(){
		    	$.get("https://www.dictionaryapi.com/api/v3/references/learners/json/" + document.getElementById('engword').value + "?key=e3b93d66-0116-4963-8920-23236f84f830", function(data, status){
		    		// console.log("Original Array" + data);
		    		$.each( data, function( key, value ) {
		    			if(key == [0]){
		    			 //console.log("Second position datas" + value);
			    			$.each( value, function( keys, values ) {
			    				// console.log("Third position datas" + values);
	    						    
	    							if(keys == 'hwi'){
										$.each(values, function(soundkey,soundvalue){
											if(soundkey == 'prs'){
												$.each(soundvalue, function(soundkeys,soundvalues){
													$.each(soundvalues, function(soundkeyes,soundvaluess){
														if(soundkeyes == 'sound'){
															$.each(soundvaluess, function(sdkey,sdvalue){
																console.log("prsss" + sdvalue );
																var firstletter = $('#engword').val().charAt(0).toLowerCase();
																var win = new Audio("https://media.merriam-webster.com/soundc11/" + firstletter +"/" + sdvalue +".wav");
																win.play();
																var sdvalue="";
																$('#engword').empty();
															});
														};
													});
												});
											};
										});
									};
								


			    			});
		    			};

					});
		    	});
		  	});
		});

