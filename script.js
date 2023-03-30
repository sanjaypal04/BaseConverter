function convert()
{
   let from = document.getElementById("selector1").value;
   let to = document.getElementById("selector2").value;
   //let result = from.localeCompare("Octal");
   let userInput = document.getElementById("op1").value;


   if(from==to)
   {
         document.getElementById("op2").innerHTML=userInput;
         ans = "";
   }
   //---------------         Switch case         ---------------------------
   
    const con=from+" "+to
   switch (con) {
    case "Decimal Octal":
      var ans = parseInt(userInput).toString(8);
        document.getElementById("op2").innerHTML=ans;
        ans = "";
      break;

      case "Decimal Hexadecimal":
        var ans = parseInt(userInput).toString(16);
          document.getElementById("op2").innerHTML=ans.toUpperCase();
          ans = "";
        break;

      case "Decimal Binary":
        var ans = parseInt(userInput).toString(2);
          document.getElementById("op2").innerHTML=ans.toUpperCase();
          ans = "";
        break;
    // Other to Decimal
       
      case "Octal Decimal":
        var ans = parseInt(userInput,8);
         document.getElementById("op2").innerHTML=ans;
         ans = "";
        break;

      case "Hexadecimal Decimal":
        var ans = parseInt(userInput,16);
         document.getElementById("op2").innerHTML=ans;
         ans = "";
        break;

        case "Binary Decimal":
          var ans = parseInt(userInput,2);
           document.getElementById("op2").innerHTML=ans;
           ans = "";
          break;
          // ---Hexa to other----

          case "Hexadecimal Octal":
            var ans = parseInt(userInput,16).toString(8);
            document.getElementById("op2").innerHTML=ans;
            ans = "";
          break;

          case "Hexadecimal Binary":
            var ans = parseInt(userInput,16).toString(2);
            document.getElementById("op2").innerHTML=ans;
            ans = "";
          break;

          // octal to other
          case "Octal Hexadecimal":
            var ans = parseInt(userInput,8).toString(16);
            document.getElementById("op2").innerHTML=ans;
            ans = "";
          break;

          case "Octal Binary":
            var ans = parseInt(userInput,8).toString(2);
            document.getElementById("op2").innerHTML=ans;
            ans = "";
          break;

          // octal to other

          case "Binary Hexadecimal":
            var ans = parseInt(userInput,2).toString(16);
            document.getElementById("op2").innerHTML=ans;
            ans = "";
          break;

          case "Binary Octal":
            var ans = parseInt(userInput,2).toString(8);
            document.getElementById("op2").innerHTML=ans;
            ans = "";
          break;
    
    default:
        document.getElementById("op1").placeholder = "Enter First";
  }

}