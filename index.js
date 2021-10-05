let btnid = () => {
    let input = document.getElementById('inputId');
        let inputValue = input.value ; 
          /*   console.log(inputValue); */
            input.value = '' ;

        let url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`
        fetch(url) 
        .then(res => res.json())
        .then(data => showDetails(data.teams))

}
    let showDetails = teams => {
        // console.log(teams);

        let teamShows = document.getElementById('teamShow');
            

            teams.forEach(team => {
                let div = document.createElement('div');
                div.classList.add('col')
                    div.innerHTML = `
                    <h1>Team Name: ${team.strTeam} </h1>
                    <img src=" ${team.strStadiumThumb} " class="card-img-top" width="250" height="250" alt="...">
                    
                    <div class="card-body"  onclick="loadTeamId(${team.idTeam})" >
                      <h5 class="card-title"> ${team.strLeague} </h5>
                      <p class="card-text"> ${team.strStadiumDescription.slice(0, 220)} </p>
                      <a href=" ${team.strWebsite} " class="btn btn-primary">Go to website</a>
                    </div>
                    `;
                    teamShows.appendChild(div);
                 
            
            })
            let loadTeamId = teamId =>{

                let urls = `https://www.thesportsdb.com/api/v1/json/{APIKEY}/searchteams.php?sname= ${teamId}
                ` ;
                    fetch(urls)
                        .then(response => response.json())
                        .then(datas => displayallteams(datas.teams[0]))
                    }
            
    }
    let displayallteams = team => {
        let singleTeam = document.getElementById('singleTeams');
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <h1>Team Name: ${team.strTeam} </h1>
        <img src=" ${team.strStadiumThumb} " class="card-img-top" width="250" height="250" alt="...">
        <div class="card-body" >
          <h5 class="card-title"> ${team.strLeague} </h5>
          <p class="card-text"> ${team.strStadiumDescription.slice(0, 220)} </p>
          <a href=" ${team.strWebsite} " class="btn btn-primary">Go to website</a>
        </div>
        `;
        singleTeam.appendChild(div);
        
        
    }