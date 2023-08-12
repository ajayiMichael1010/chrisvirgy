function selectOptionCaption(id,name){
	var getOptionCaption=""
		getOptionCaption=$(id).find("option:selected").html();
		$(document).on("change",id,function(){
			getOptionCaption=$(this).find("option:selected").html();
	
			$(this).closest(name).val(getOptionCaption);
			
		});
		//$(name).val(getOptionCaption);
		
		

}


