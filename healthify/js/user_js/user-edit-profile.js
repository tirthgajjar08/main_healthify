// for chaging images 
var uimg1=document.getElementById("user-img-change")
function readURL(input){

    if(input.files)
    {
            var reader=new FileReader();
            reader.readAsDataURL(input.files[0]);
            reader.onload=(e)=>{
                     uimg1.src=e.target.result;

            }
    }
   
}