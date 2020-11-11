
var admins=
    {
        "username":["fezo","foda"],
        "pass":["13","24"]
    };

function login()
{
    var admin_name=false;   
    for(var i=0;i<2;i++)
        {
            if(document.getElementById("username").value==admins.username[i])
                {
                    admin_name=true;
                    if(document.getElementById("pass").value==admins.pass[i])
                     {
                        var user=document.getElementById("username").value;
                        alert("ahlan ya"+' '+user);
                         if(i==0){
                             document.getElementById("logid").action="Main(fezo)/Main.html";
                         }
                         else{
                              document.getElementById("logid").action="Main(foda)/Main.html";
                         }
                        return true;
                     }
                    else{
                        alert("d5l youm s7!!!")
                        return false;
                    }
                }
        }
    
    
    alert("d5l asmk s7!!!");
    return false;
}