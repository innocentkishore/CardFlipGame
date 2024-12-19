let score=0; 
let cont=0; 
function flip(sec){

        let card=[1,2,3];
        
        let random=Math.floor(Math.random()*3+1);
        console.log("random"+random);
        let f=0;
        if(cont==0){
        for(let i=0;i<card.length;i++){
            if(card[i]==random){
                document.getElementById(card[i]).src="joker.jpg";
                console.log("fr"+card[i]);
                
            }
            else if(f==0){
                document.getElementById(card[i]).src="king.jpg";
                if(sec==card[i]){
                score+=1000
                console.log("f0"+card[i]);}
                f=1;

            }
            else{
                document.getElementById(card[i]).src="queen.jpg";
                if(sec==card[i]){
                score+=500;
                }
                console.log("f1"+card[i]);
                
            }

        }
        document.getElementById("total").innerHTML="Your Score is "+score;

        setTimeout(resetimg,1000);
    }

        if(sec==random){
            cont=1;
         document.getElementById("stop").innerHTML="You Lose!!"
        
        }



}

function resetimg(){
    document.getElementById(1).src="back view.jpeg.jpg" ;
    document.getElementById(2).src="back view.jpeg.jpg" ;
    document.getElementById(3).src="back view.jpeg.jpg" ;
}

function replay(){
    location.reload();
}