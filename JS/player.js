class Player{
    constructor(){
        this.name = null;
        this.distance = 0;
        this.score = 0;
        this.index = null
    }
    getPlayerCount(){
       database.ref('playerCount').on("value" ,(data)=>{
           pCount = data.val();
       })
    }

    updateCount(count){
     
        database.ref('/').update({
            playerCount:count

        } )
    }

    update(){

        var pIndex = "players/player"+this.index
        database.ref(pIndex).set( {
            name: this.name,
            distance : this.distance,
            score : this.score
        } )
    }

    static getPlayerInfo(){
        database.ref('players').on("value",(data)=>{
            allPlayers = data.val();
        })
    }
}



