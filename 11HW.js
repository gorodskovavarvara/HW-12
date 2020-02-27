function Gal() {
	var chbox;
	chbox=document.getElementById('check');
	let btn=document.getElementById('ok')
		if (chbox.checked) {
			btn.disabled=false		
		}
		else {
			btn.disabled=true
		}
	}




function OK()
{
	var flag = true; 
	var count = my.getElementsByTagName("input").length;
	for(var i = 0; i < count;i++)
	{
		if(my.getElementsByTagName("input")[i].value == "" )
		{
			flag = false;
			Age()
		}
	  }
	  if(!flag) 
	 {
		 alert("Please fill all the fields");
		 
	 }
	 else
	 {
		AgeA() 
		
	 }
}

function Age(){
	let age = document.getElementById('age')

	 if(age.value >= 16){
	
	
	 }
	 else{
	alert("You must be older then 16");
        
	 }

}

function AgeA(){
	let age = document.getElementById('age')

	 if(age.value >= 16){
		if(confirm("is all right?")) {
			
			alert("Welcome!")
			
        } 
        else{
            my.fio.value = "";
            my.age.value = "";
            my.tel.value = "";
            my.mail.value = "";
        }
	
	
	 }
	 else{
	alert("You must be older then 16");
        
	 }

}