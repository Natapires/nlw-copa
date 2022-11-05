function creatGame(player1, hour, player2){
    return `
   <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira de ${player1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}

let delay = -0.4;
function creatCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
         ${games}
         </ul>
    </div>
    `
}


document.querySelector('#cards').innerHTML =
        creatCard('24/11', 'quinta', creatGame("switzerland", "7:00", "cameroon") + creatGame("uruguay", "10:00", "south korea") + 
        creatGame("portugal", "13:00", "ghana") + creatGame("brazil", "16:00", "serbia")) + 
        
        creatCard('28/11', 'segunda', creatGame("cameroon", "7:00", "serbia") + creatGame("south korea", "10:00", "ghana") + 
        creatGame("brazil", "13:00", "switzerland") + creatGame("portugal", "16:00", "uruguay")) +

        creatCard('02/12', 'sexta', creatGame("south korea", "12:00", "portugal") + creatGame("ghana", "12:00", "uruguay") + 
        creatGame("serbia", "16:00", "switzerland") + creatGame("cameroon", "16:00", "brazil"))
        
