function registerscript()
{
    var username=document.forms["myregisterform"]["username"].value;
    var email=document.forms['myregisterform']["email"].value;
    var pass=document.forms["myregisterform"]["pass"].value;
    var passwordagain=document.forms['myregisterform']["passwordagain"].value;



    if(username==null || username=='')
    {
        document.getElementById('errorregbox').innerHTML="Enter the Username!!"
        return false;
    }
    if(email==null || email=='')
    {
        document.getElementById('errorregbox').innerHTML="Enter the E-mail ID!!"
        return false;
    }

    if(pass==null||pass=='')
    {
        document.getElementById('errorregbox').innerHTML="Enter the Password!!"
        return false;
    }
    if(passwordagain==null||passwordagain=='')
    {
        document.getElementById('errorregbox').innerHTML="Enter the Password again!!"
        return false;

    }
    if(pass!=passwordagain)
    {
        document.getElementById("errorregbox").innerHTML="Password Mismatch!!"
        return false;
    }

    if(username!='' && email!= '' && pass!='' && passwordagain!=''){
    }
}

    