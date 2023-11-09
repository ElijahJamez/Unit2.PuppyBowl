// first im going to try and get the API in here

const globalApi = async () => {                                                                                         //1.) This function goes to get our API 
    const responseData = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-FT-SF/players`);         //2.) API - renamed `responseData`
    const playerInfo = await responseData.json();                                                                       //3.) Converts `promise` response that fetch got us into somthing useable - renamed to `playerInfo`                       
    const playerList = playerInfo.data;                                                                                 //5.) Narrows down our response even more to just the players
    renderAllPlayers(playerList);                                                                                       //7.) calling this function here to seperate the rendering function (below) for better organization
}

const renderAllPlayers = (listOfPlayers) => {                                                                           //6.) This is a finction that will take all these players and render them onto the screen. - `renamed to listOfPlayes`
    const main = document.querySelector(`main`);                                                                        //8.) Here we begin trying to turn our array into a bunch of list titems
    const h2 = document.createElement(`h2`);                                                                            //9.) Created <h2>
          h2.innerText = `Player List`;                                                                                 //10.) <h2> text
          main.appendChild(h2);                                                                                         //11.) Merges element to page
    
   const playerListItems = listOfPlayers.players.map((singlePlayer) => {                                                //12.) Here we have to turn the .player objects winthin the response-array into a .map-array (string data.
    console.log(singlePlayer)
    return `<li> ${singlePlayer.name} ${singlePlayer.breed} ${singlePlayer.status} </li>`;                              //13.) We typed it out as HTML so we can append it. 
}); 

// ${singlePlayer.imageUrl}
const ul = document.createElement(`ul`);                                                                                //14.) Created our initial <ul> tag here to place the list items in side
      ul.innerHTML = playerListItems.join(``);                                                                          //15.) Told the <ul> tag to take in all of the <li> elements we have in that playerListItems array - .join removes the ugly commas
      main.appendChild(ul)                                                                                              //16.) Merges the <ul> to the page
    
                                
 }                                                      




globalApi();                                                                                                            //4.) invokes API function from the very beginning