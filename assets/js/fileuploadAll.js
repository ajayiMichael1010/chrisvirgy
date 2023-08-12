$(document).ready(function() {
//$('#filePath').html('filePath');
$(function(){
	$('#chooseFile').click(function(){
		$('#uploadFile').click();
	});
$('#uploadFile').change(function(){
	var fileSize=this.files[0].size/1024/1024;//define file size in MB
	var imageFile=this.files[0].type;//define imageFile type
	(imageFile);
	var imageMatch=["image/jpeg","image/jpg","image/png"];
	var itsRealImage=$.inArray(imageFile,imageMatch);//check if the imageFile Type is in Array
	//Test for existence of image to indicate its real image
	if(itsRealImage==-1){
	//alert("File not supported");
	//return false;

	}	
	else{
var reader= new FileReader();
reader.onload=function(g){
	$('img#imgFile').css({"width":"150","height":"150px"}); 
	$('img#imgFile').attr("src",g.target.result);
}
        reader.readAsDataURL(this.files[0]);
	}
		
});
 });

});
