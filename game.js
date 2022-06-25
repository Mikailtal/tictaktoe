

let count=0;
var exit=0;

var td=document.querySelectorAll("td");
var h= document.querySelector("h1");

var restart=document.querySelector('#b');








function clearBoard(){
    for(var i=0;i<td.length;i++){

    td[i].textContent='';
    count=0;
    }

  }

restart.addEventListener('click',clearBoard)



function myfunction(){
  if(count%2==0)
  {
  this.textContent="X";}
  else{
    this.textContent="O";
  }
  count++;

  if(td[0].textContent==td[1].textContent && td[0].textContent==td[2].textContent  &&td[0].textContent.length>0)
  {
    h.textContent=td[0].textContent+" Won"

  }
  if(td[0].textContent==td[3].textContent && td[0].textContent==td[6].textContent && td[0].textContent.length>0 )
  {
      h.textContent=td[0].textContent+" Won"

  }
  if(td[0].textContent==td[4].textContent && td[0].textContent==td[8].textContent && td[0].textContent.length>0 )
  {
      h.textContent=td[0].textContent+" Won"

  }
  if(td[3].textContent==td[4].textContent && td[3].textContent==td[5].textContent && td[3].textContent.length>0 )
  {
    h.textContent=td[3].textContent+" Won"

  }
  if(td[6].textContent==td[7].textContent && td[6].textContent==td[8].textContent && td[6].textContent.length>0 )
  {
    h.textContent=td[6].textContent+" Won"

  }

  if(td[2].textContent==td[4].textContent && td[2].textContent==td[6].textContent && td[2].textContent.length>0)
  {
    h.textContent=td[2].textContent+" Won"

  }
}



  for(var i=0;i<td.length;i++){

  td[i].addEventListener('click',myfunction)
  }

  restart.addEventListener('click',restart)
