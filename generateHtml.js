
const {makeEngineerCard , makeInternCard , makeManagerCard} =require('./team.js')

 

function assembleTeam(teamMembers){
let cards = '';
    teamMembers.forEach(member => {
        console.log("this is memeber:", member.getRole())

        if (member.getRole()==="Intern"){
            
            cards+=makeInternCard(member)
        }
         else if (member.getRole()==="Engineer"){
             
            cards+=makeEngineerCard(member)
        }
        else if (member.getRole()==="Manager"){
           
            cards+=makeManagerCard(member)
        }
        
       
    });
   const makeTeam= generateHtml(cards)
   return makeTeam
}




function generateHtml(teamMembers) {




    return ( `
    <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>👔Team Profile👓</title>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<link rel="stylesheet" href="style.css"/>
</head>
<body>
<header>
<nav class="navbar" id="navbar">
  <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
</nav>
</header>
<main>
<div class="container">
  <div class="row justify-content-center" id="team-cards"> 
             
      ${teamMembers}
  </div>
</div>
</main>


</body>
<footer class="signature"><a href="https://github.com/Staycold" target="_blank">🧊A Staycold Production🧊</a></footer>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
</html>
    `)
      

  }



  module.exports=assembleTeam;