class Form{
    constructor(){
        this.button = createButton("JOIN")
        
        this.input = createInput("Enter Your Name")
        
        this.greeting = createElement('h2')

        this.reset = createButton("RESET")
    }

    hide(){
        this.input.hide()
        this.greeting.hide()
        this.button.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("Diptam Cycle Racing Game")
        title.position(displayWidth/2-150 , 50)
 
        this.input.position(displayWidth/2-80 , displayHeight/2);

        this.button.position(displayWidth/2-30 , displayHeight/2 +100);
        
        this.reset.position(displayWidth -100,30);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name =  this.input.value()
            pCount += 1
            player.index = pCount
            player.update()

            player.updateCount(player.index)

            this.greeting.html("Hello !! " + player.name)
            this.greeting.position(displayWidth/2-150 , displayHeight/2)
 

        })

        this.reset.mousePressed( ()=>{
            player.updateCount(0);
            game.updateState(0);

            database.ref('players').remove();
        })
        
    }



}