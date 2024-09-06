function loginscript()
{
    var loginusername=document.forms["myloginform"]["loginusername"].value;
    var loginpass=document.forms["myloginform"]["loginpass"].value;



if(loginusername==null || loginusername=='')
{
    document.getElementById('errorloginbox').innerHTML="Enter the Username!!"
    return false;
}
if(loginpass==null || loginpass=='')
{
    document.getElementById('errorloginbox').innerHTML="Enter the Password!!"
    return false;
}

if(loginusername!='' && loginpass!= ''){
return true;
}
}