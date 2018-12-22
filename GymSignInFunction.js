/*
Author: China Moxey 
*/
  function Validation()
    {
        if(document.form["myform"]["f_name"].value==null||document.form["myform"]["f_name"].value=="")
            {
                alert("Please enter first name");
                return false;
               
            }
        if(document.form["myform"]["l_name"].value==null||document.form["myform"]["l_name"].value=="")
            {
                alert("Please enter last name");
                return false;
            }
        if(document.form["myform"]["phone"].value==null||document.form["myform"]["phone"].value=="")
            {
                alert("Please enter phone number");
                return false;
            }
              if(document.form["myform"]["email"].value==null||document.form["myform"]["email"].value=="")
            {
                alert("Please enter email");
                return false;
            }
         if(document.form["myform"]["city"].value==null||document.form["myform"]["city"].value=="")
            {
                alert("Please enter address");
                return false;
            }
         if(document.form["myform"]["state"].value==null||document.form["myform"]["state"].value=="")
            {
                alert("Please enter city");
                return false;
            }
         if(document.form["myform"]["zipcode"].value==null||document.form["myform"]["zipcode"].value=="")
            {
                alert("Please enter zip code");
                return false;
            }
         if(document.form["myform"]["cardnumber"].value==null||document.form["myform"]["cardnumber"].value=="")
            {
                alert("Please enter card number ");
                return false;
            }
         if(document.form["myform"][""].value==null||document.form["myform"][""].value=="")
            {
                alert("Please enter date");
                return false;
            }

        return true;
    }
   
window.onload =	function Gym_Memebership()
	{
	  
	                 document.body.style.backgroundColor = "DodgerBlue";


	var div_one = document.createElement("DIV");
	div_one.style.position = "absolute";
	div_one.style.top = "200px";
	div_one.style.left = "560px";
    div_one.style.width = "100%";
    div_one.style.heigth = "100%";
	document.getElementById("first_section").appendChild(div_one);
		
		        	var div_two = document.createElement("DIV");
                	div_two.style.position = "absolute";
                	div_two.style.top = "200px";
                	div_two.style.left = "745px";
                    div_two.style.width = "100%";
                    div_two.style.heigth = "100%";
                	document.getElementById("first_section2").appendChild(div_two);
		
		
		                    	var div_three = document.createElement("DIV");
                            	div_three.style.position = "absolute";
                            	div_three.style.top = "250px";
	                            div_three.style.left = "560px";
                                div_three.style.width = "100%";
                                div_three.style.heigth = "100%";
	                            document.getElementById("first_section3").appendChild(div_three);
	                                    
	                                    	var div_four = document.createElement("DIV");
                                        	div_four.style.position = "absolute";
                                        	div_four.style.top = "250px";
                                        	div_four.style.left = "745px";                                    
                                            div_four.style.width = "100%";
                                            div_four.style.heigth = "100%";                                                       
                                        	document.getElementById("first_section4").appendChild(div_four);
                                        	
                                        	
                                	var div_five = document.createElement("DIV");
	                                div_five.style.position = "absolute";
                                	div_five.style.top = "300px";
                                	div_five.style.left = "560px";
                                    div_five.style.width = "100%";
                                    div_five.style.heigth = "100%";
                                	document.getElementById("first_section5").appendChild(div_five);
		
		  	var div_six = document.createElement("DIV");
        	div_six.style.position = "absolute";
        	div_six.style.top = "350px";
	        div_six.style.left = "560px"; 
	       div_six.style.width = "100%";
        div_six.style.heigth = "100%"; 
    document.getElementById("first_section6").appendChild(div_six);
	        
	                        	var div_seven = document.createElement("DIV");
                            	div_seven.style.position = "absolute";
                            	div_seven.style.top = "350px";
                            	div_seven.style.left = "750px";
                                div_seven.style.width = "100%";
                                div_seven.style.heigth = "100%";
                            	document.getElementById("first_section7").appendChild(div_seven);
                            	
                	var div_eight = document.createElement("DIV");
                	div_eight.style.position = "absolute";
                	div_eight.style.top = "350px";
                	div_eight.style.left = "865px";
                	div_eight.style.width = "100%";
                    div_eight.style.heigth = "100%";
    document.getElementById("first_section8").appendChild(div_eight);
                	
                	
                	            	var div_nine = document.createElement("DIV");
                                	div_nine.style.position = "absolute";
                                	div_nine.style.top = "450px";
                                	div_nine.style.left = "560px";
                                    div_nine.style.width = "100%";
                                    div_nine.style.heigth = "100%";
                                	document.getElementById("first_section9").appendChild(div_nine);
                                	
                	var div_ten = document.createElement("DIV");
	                div_ten.style.position = "absolute";
                	div_ten.style.top = "500px";
                	div_ten.style.left = "560px";
                    div_ten.style.width = "100%";
                    div_ten.style.heigth = "100%";
                	document.getElementById("first_section10").appendChild(div_ten);
					
							var div_eleven = document.createElement("DIV");
							div_eleven.style.position = "absolute";
							div_eleven.style.top = "500px";
							div_eleven.style.left = "745px";
                            div_eleven.style.width = "100%";
                            div_eleven.style.heigth = "100%";
							document.getElementById("first_section12").appendChild(div_eleven);
    var div_checkbox = document.createElement("DIV");
    div_checkbox.style.position = "absolute";
    div_checkbox.style.top = "460px";
    div_checkbox.style.width = "100%";
    div_checkbox.style.heigth = "100%";
    document.getElementById("mycheckbox").appendChild(div_checkbox);
    
		
var format = document.createElement("form");
	 format.style.marginTop = "10px";
format.style.marginBottom = "10px";
    format.name = "form";
	 document.body.appendChild(format);
	 

	    var title = document.createElement("h1");
		//title.style.position = "absolute";
			title.style.textAlign = "center";
	    title.style.color = "Black";
		format.appendChild(title);
	    title.appendChild(document.createTextNode("Phat Gym: Sign Up"));
			
			
        	
            	format.appendChild(document.createElement("br"));
        	var input_First_Name = document.createElement("INPUT");
            	format.appendChild(input_First_Name);
            input_First_Name.name = "f_name";
        	input_First_Name.type = "text";
			input_First_Name.required = "true";
			input_First_Name.title = "Please enter a first name.";
	          format.appendChild(document.createElement("br"));
                        
                        
	                    
	                     div_one.appendChild(format.appendChild(document.createTextNode("First Name:")));
	                     div_one.appendChild(format.appendChild(document.createElement("br")));
	                        div_one.appendChild(input_First_Name);
	
	var input_Last_Name = document.createElement("INPUT");
    	format.appendChild(input_Last_Name);
        input_Last_Name.name = "l_name";
	    input_Last_Name.type = "text";
		input_Last_Name.required = "true";
		input_Last_Name.title = "Please enter a last name.";
    	format.appendChild(document.createElement("br"));
    	
    	        div_two.appendChild(format.appendChild(document.createTextNode("Last Name:")));
    	        div_two.appendChild(format.appendChild(document.createElement("br")));
    	            div_two.appendChild(input_Last_Name);

                    	var input_Phone = document.createElement("INPUT");
	                    format.appendChild(input_Phone);
                            input_Phone.name= "phone";
	                       input_Phone.type = "number";
						   input_Phone.required = "true";
						   input_Phone.pattern = "[0-9]{10}";
						   input_Phone.title = "Please put in a 10 digit phone number";
	                    format.appendChild(document.createElement("br"));
	                                
	                                div_three.appendChild(format.appendChild(document.createTextNode("Phone Number:")));
	                                div_three.appendChild(format.appendChild(document.createElement("br")));
	                                div_three.appendChild(input_Phone);
	

	var input_Email = document.createElement("INPUT");
    	format.appendChild(input_Email);
        input_Email.name = "email"
		input_Email.type = "text";
		input_Email.required = "true";
      //  input_Email.pattern = "/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/";
		input_Email.title = "Please enter a valid email address, example: johndoe@gmail.com";
    	format.appendChild(document.createElement("br"));
				
    	       div_four.appendChild(format.appendChild(document.createTextNode("Email Address:")));
    	       div_four.appendChild(format.appendChild(document.createElement("br")));
    	       div_four.appendChild(input_Email);
		
                	
                    	
                	var input_Address = document.createElement("INPUT");
                    	format.appendChild(input_Address);
                        input_Address.name = "address";
						input_Address.type = "text";
						input_Address.required = "true";
						//input_Address.pattern = "[a-zA-Z0-9]+"; 
						input_Address.title = "Please enter an address.";
                    	format.appendChild(document.createElement("br"));
                    	
                    	            div_five.appendChild(format.appendChild(document.createTextNode("Address:")));
                    	            div_five.appendChild(format.appendChild(document.createElement("br")));
                    	            div_five.appendChild(input_Address);
	
	var input_City = document.createElement("INPUT");
    	input_City.type = "text";
        input_City.name = "city"
		input_City.required = "true";
		//input_City.pattern = "[A-Z]";
		input_City.title = "Please enter the name of a city";
	input_City.setAttribute('city','hCity');
	
    	format.appendChild(document.createElement("br"));
    	
    	                            div_six.appendChild(format.appendChild(document.createTextNode("City:")));
    	                            div_six.appendChild(format.appendChild(document.createElement("br")));
    	                            div_six.appendChild(input_City);
		
               
							
							  var option_x = document.createElement("SELECT");   
								option_x.setAttribute("id", "mySelect");
								document.body.appendChild(option_x);
                                option_x.name = "state";
    
								var option_one = document.createElement("option");
								option_one.setAttribute("value", "NY");
								var option1 = document.createTextNode("New York");
								option_one.appendChild(option1);
							document.getElementById("mySelect").appendChild(option_one);
									
										var option_two = document.createElement("option");
								option_two.setAttribute("value", "AR");
								var option2 = document.createTextNode("Arizona");
								option_two.appendChild(option2);
							document.getElementById("mySelect").appendChild(option_two);
							
							
												var option_three = document.createElement("option");
								option_three.setAttribute("value", "CL");
								var option3 = document.createTextNode("California");
								option_three.appendChild(option3);
							document.getElementById("mySelect").appendChild(option_three);
							
												var option_four = document.createElement("option");
								option_four.setAttribute("value", "TX");
								var option4 = document.createTextNode("Texas");
								option_four.appendChild(option4);
							document.getElementById("mySelect").appendChild(option_four);
							
												var option_five = document.createElement("option");
								option_five.setAttribute("value", "NM");
								var option5 = document.createTextNode("New Mexico");
								option_five.appendChild(option5);
							document.getElementById("mySelect").appendChild(option_five);
							
										var option_six = document.createElement("option");
								option_six.setAttribute("value", "FL");
								var option6 = document.createTextNode("Florida");
								option_six.appendChild(option6);
							document.getElementById("mySelect").appendChild(option_six);
		  
						 
					
            	     format.appendChild(option_x);
                    	
	                format.appendChild(document.createElement("br"));
	                
	                                div_seven.appendChild(format.appendChild(document.createTextNode("State:")));
	                                div_seven.appendChild(format.appendChild(document.createElement("br")));
	                                div_seven.appendChild(option_x);

	
	var input_Zip_Code = document.createElement("INPUT");
         format.appendChild(input_Zip_Code);
    input_Zip_Code.name = "zipcode";
	input_Zip_Code.type = "number";
	input_Zip_Code.required = "true";
	input_Zip_Code.pattern = "[0-9]{5}";
	input_Zip_Code.title = "Zip code needs to be 5 digits long.";
         format.appendChild(document.createElement("br"));
         
                                div_eight.appendChild(format.appendChild(document.createTextNode("Zip Code:")));
                                div_eight.appendChild(format.appendChild(document.createElement("br")));
                                div_eight.appendChild(input_Zip_Code);
    
	                   
                        
                             format.appendChild(document.createElement("br"));
                             
                                div_nine.appendChild(format.appendChild(document.createTextNode("Billing Information:")));
                                div_nine.appendChild(format.appendChild(document.createElement("br")));
								 
    
                                
	var  input_Card_Number = document.createElement("INPUT");
    	format.appendChild(input_Card_Number);
        input_Card_Number.name = "cardnumber";
		input_Card_Number.type = "number";
		input_Card_Number.required = "true";
		input_Card_Number.maxlength = "16";
		input_Card_Number.pattern = "[0-9] {16}";
		input_Card_Number.title = "Card number needs to be 16 digits long.";
    	format.appendChild(document.createElement("br"));

	
	
	                            div_ten.appendChild(format.appendChild(document.createTextNode("Card Number:")));
	                            div_ten.appendChild(format.appendChild(document.createElement("br")));
	                            div_ten.appendChild(input_Card_Number);
								

  
	
	
	div_eleven.appendChild(format.appendChild(document.createTextNode("Expiration Date:")));
	div_eleven.appendChild(format.appendChild(document.createElement("br")));
	var expirationDate = document.createElement("INPUT");
	div_eleven.appendChild(format.appendChild(expirationDate));
	expirationDate.name = "ExpirationDate";
	expirationDate.required = "true";
	expirationDate.type = "month";
	var date = new Date();
	vart = date.getFullYear() + "-"+date.getMonth();
	expirationDate.min = "2017-12";
	div_eleven.appendChild(format.appendChild(document.createElement("br")));
                                     
										  
};
    
   