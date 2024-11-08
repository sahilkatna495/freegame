
    async function gameIdData() {
        const gameid = "422";
        const aurl = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameid}`;
        try {
            const data = await fetchDataFromAPI(aurl); 
            console.log("test");
            const title= data.title;
            const short_description= data.short_description;
            const description= data.description;
            const t = document.getElementById("title");
            const s = document.getElementById("short_description");
            const d = document.getElementById("description");
            d.innerHTML = description;
            t.innerHTML= title;
            s.innerHTML =short_description;
        }
        catch (error) {
            console.error('Error during swiper initialization:', error);
        }
    } 
    gameIdData();