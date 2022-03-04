search = document.getElementById("search");
ovr = document.getElementById("overall");
sht = document.getElementById("EVShot");
evo = document.getElementById("EVO");
tky = document.getElementById("TakeAway");
evd = document.getElementById("EVD");
pen = document.getElementById("penDif");
pp = document.getElementById("PP");
pk = document.getElementById("PK");
team = document.getElementById("team");
pos = document.getElementById("pos");
age = document.getElementById("age");
cap = document.getElementById("cap");
sugBox = document.getElementById("sugBox");



search.addEventListener("keyup", function (event) {
   if (event.key == "Enter") {
     getPlayerData(search.value);
     sugBox.style.visibility="hidden";
   }
 });
 search.addEventListener("input", function (event) {
     getMatchingData(search.value);

 });

sugBox.onclick = function () {
  search.value = sugBox.innerText;
  getPlayerData(search.value);
  sugBox.style.visibility = "hidden";
};

 async function getMatchingData(input){
  const response = await fetch("https://playercard-server.herokuapp.com/players");
  const data = await response.json();
  let matches = data.filter((player) => {
    const regex = new RegExp(`${input}`, "gi");
    return player.Player.match(regex);
  });
  if(input!=""){
    sugBox.style.visibility="visible";
    sugBox.innerText = matches[0].Player;
  } 
 }




async function getPlayerData(name) {
  const response = await fetch("https://playercard-server.herokuapp.com/players");
  const data = await response.json();
  for (item of data){
    if(item.Player==name){
      ovr.innerText = item.WARP;
      if (parseFloat(item.WARP) >=0 && parseFloat(item.WARP)<25) {
        ovr.style.backgroundColor = "red";
      }
      if (parseFloat(item.WARP) >= 25 && parseFloat(item.WARP) < 50) {
        ovr.style.backgroundColor = "grey";
      }
      if (parseFloat(item.WARP) >= 50 && parseFloat(item.WARP) < 75) {
        ovr.style.backgroundColor = "lightblue";
      }
      if (parseFloat(item.WARP) >= 75 && parseFloat(item.WARP) <= 100) {
        ovr.style.backgroundColor = "gold";
      }
      sht.innerText=item.EV_ShotP;
        if (parseFloat(item.EV_ShotP) >= 0 && parseFloat(item.EV_ShotP) < 25) {
          sht.style.backgroundColor = "red";
        }
        if (parseFloat(item.EV_ShotP) >= 25 && parseFloat(item.EV_ShotP) < 50) {
          sht.style.backgroundColor = "grey";
        }
        if (parseFloat(item.EV_ShotP) >= 50 && parseFloat(item.EV_ShotP) < 75) {
          sht.style.backgroundColor = "lightblue";
        }
        if (parseFloat(item.EV_ShotP) >= 75 && parseFloat(item.EV_ShotP) <= 100) {
          sht.style.backgroundColor = "gold";
        }
      evo.innerText=item.EVOP;
        if (parseFloat(item.EVOP) >= 0 && parseFloat(item.EVOP) < 25) {
          evo.style.backgroundColor = "red";
        }
        if (parseFloat(item.EVOP) >= 25 && parseFloat(item.EVOP) < 50) {
          evo.style.backgroundColor = "grey";
        }
        if (parseFloat(item.EVOP) >= 50 && parseFloat(item.EVOP) < 75) {
          evo.style.backgroundColor = "lightblue";
        }
        if (parseFloat(item.EVOP) >= 75 && parseFloat(item.EVOP) <= 100) {
          evo.style.backgroundColor = "gold";
        }
      tky.innerText=item.TKYP;
        if (parseFloat(item.TKYP) >= 0 && parseFloat(item.TKYP) < 25) {
          tky.style.backgroundColor = "red";
        }
        if (parseFloat(item.TKYP) >= 25 && parseFloat(item.TKYP) < 50) {
          tky.style.backgroundColor = "grey";
        }
        if (parseFloat(item.TKYP) >= 50 && parseFloat(item.TKYP) < 75) {
          tky.style.backgroundColor = "lightblue";
        }
        if (parseFloat(item.TKYP) >= 75 && parseFloat(item.TKYP) <= 100) {
          tky.style.backgroundColor = "gold";
        }
      evd.innerText=item.EVDP;
        if (parseFloat(item.EVDP) >= 0 && parseFloat(item.EVDP) < 25) {
          evd.style.backgroundColor = "red";
        }
        if (parseFloat(item.EVDP) >= 25 && parseFloat(item.EVDP) < 50) {
          evd.style.backgroundColor = "grey";
        }
        if (parseFloat(item.EVDP) >= 50 && parseFloat(item.EVDP) < 75) {
          evd.style.backgroundColor = "lightblue";
        }
        if (parseFloat(item.EVDP) >= 75 && parseFloat(item.EVDP) <= 100) {
          evd.style.backgroundColor = "gold";
        }
      pen.innerText=item.pensP;
        if (parseFloat(item.pensP) >= 0 && parseFloat(item.pensP) < 25) {
          pen.style.backgroundColor = "red";
        }
        if (parseFloat(item.pensP) >= 25 && parseFloat(item.pensP) < 50) {
          pen.style.backgroundColor = "grey";
        }
        if (parseFloat(item.pensP) >= 50 && parseFloat(item.pensP) < 75) {
          pen.style.backgroundColor = "lightblue";
        }
        if (parseFloat(item.pensP) >= 75 && parseFloat(item.pensP) <= 100) {
          pen.style.backgroundColor = "gold";
        }
      pp.innerText = item.PPP;
        if (parseFloat(item.PPP) >= 0 && parseFloat(item.PPP) < 25) {
          pp.style.backgroundColor = "red";
        }
        if (parseFloat(item.PPP) >= 25 && parseFloat(item.PPP) < 50) {
          pp.style.backgroundColor = "grey";
        }
        if (parseFloat(item.PPP) >= 50 && parseFloat(item.PPP) < 75) {
          pp.style.backgroundColor = "lightblue";
        }
        if (parseFloat(item.PPP) >= 75 && parseFloat(item.PPP) <= 100) {
          pp.style.backgroundColor = "gold";
        }
      pk.innerText = item.PKP;
        if (parseFloat(item.PKP) >= 0 && parseFloat(item.PKP) < 25) {
          pk.style.backgroundColor = "red";
        }
        if (parseFloat(item.PKP) >= 25 && parseFloat(item.PKP) < 50) {
          pk.style.backgroundColor = "grey";
        }
        if (parseFloat(item.PKP) >= 50 && parseFloat(item.PKP) < 75) {
          pk.style.backgroundColor = "lightlightblue";
        }
        if (parseFloat(item.PKP) >= 75 && parseFloat(item.PKP) <= 100) {
          pk.style.backgroundColor = "gold";
        }
      team.innerText="Team: ";
      if (item.Team.split("/").length>1) {
        for(let i=0; i<item.Team.split("/").length; i++){
          team.innerHTML += "<img src= ./logos/"+(item.Team).split("/")[i]+".png"+" alt='logo' style='width:50px;height:50px;'> ";
        }
      }
      else{
        team.innerHTML = "Team: <img src= ./logos/"+item.Team+".png"+" alt='logo' style='width:50px;height:50px;'> ";
      }
      pos.innerText = "POS: "+item.POS;
      age.innerText = "Age: "+item.Age;
      cap.innerText = "Cap: "+item.Cap.replace(/\B(?=(\d{3})+(?!\d))/g, ",");;

      

    }

  }
 

}










