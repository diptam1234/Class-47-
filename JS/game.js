class Game{
    constructor(){}

    
    gameState(){
       database.ref('gameState').on("value" ,(data)=>{
           gState = data.val();
       })
    }

    updateState(state){
     
        database.ref('/').update({
            gameState:state

        } )
    }

    start(){

        if(gState === 0){
            form = new Form()
            form.display()
         
            player = new Player();
            player.getPlayerCount();


        }

        p1 = createSprite(300,200,100,100);
        p1.addImage(player1Image);
        p1.scale = 0.09;

        p2 = createSprite(300,320,100,100);
        p2.addImage(player2Image);
        p2.scale = 0.09;

        p3 = createSprite(300,444,100,100);
        p3.addImage(player3Image);
        p3.scale = 0.09;

        PLAYER= [p1,p2,p3]
    

    }

    play(){
        form.hide()
       Player.getPlayerInfo()
    
       
       
       if(PLAYER!==undefined){
    
           background("white")
           image (bgImg,displayWidth-displayWidth/2.5,0,displayWidth*5,displayHeight)
           text(mouseX + ' , '+ mouseY, mouseX, mouseY)
           var index=0
           var x,y=167
           for (var plr in PLAYER) {
            index=index+1
              /* x=x+200 
               y=displayHeight-allPlayers[plr].distance*/
               y=y+200
               x=displayWidth-PLAYER[plr].distance
               PLAYER[index-1].x=x
              PLAYER[index-1].y=y
              

               if(index===player.index){
                                    
                   
                   fill("red")
                   ellipse(x,y,50,50)
                //camera .position.x=displayWidth/2
                //camera.position.y=horses[index -1 ].y
                camera.position.x=PLAYER[index-1].x
                camera.position.y= displayHeight/2
               }
               
                   
              
           }
       }
       if(keyDown(RIGHT_ARROW)&&player.index!==null){
        player.distance-=10
        player.update()
    }
   
    
    
    drawSprites()
    }
    
    }


