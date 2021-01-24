$(function(){
    //variables
        var mode = false; //app mode
        var action; //variable for set main interval
        var action2; //variable for set lapinterval
        var timeCounter =0 ;//time counter
        var lapCounter =0 ; //lap counter
        var lapNumber// number of laps
        var parser; //used to help with the parsing functions
        var timer = {minutes:0, seconds:0, centiseconds:0, parser:0};
        var lap = {minutes:0, seconds:0, centiseconds:0, parser:0};//minutes, seconds centiseonds for the lap
    
    //On App Load show start and lap buttons
    $(".row2").hide();
    showbuttons("#b-s", "#b-l");
    //Click Start button
    $("#b-s").click(function(){
        //mode on
        mode = true;
        //show stop and lap buttons
        $("#b-s").toggle();
        showbuttons("#b-n", "#b-l");
        //start counter
        clickStart();
    });     
    //Click StopButoon
    $("#b-n").click(function(){
       //show resume and reset button
        $(".row2").toggle();
        $(".row1").toggle();
        showbuttons("#b-rm", "#b-rs");
       //stop counter
        mode = false;
    });
    //click on resumeButton
    $("#b-rm").click(function(){
            mode = true; });
    $("#b-rs").click(function(){
           location.reload(); });
    //click on resetButton
        //reload the apge
    
    //click on lapButton
    $("#b-l").click(function(){
        //if mode is ON
        clickLap();
        if(mode==true){
            //print lap details
        $("#laplist").append(function(n){
            n++;
            return "<li> Lap:" + n + " " + lap.minutes +":" + lap.seconds +":" +lap.centiseconds+ "</li>";
        });  
        }
            //resetLap 
        lapCounter = 0;
            //start action
        
    });
    
    //Functions
        function clickStart(){
            mode = true;
            $("#strt").toggle();
            
            action = setInterval(function(){
            //timer counts and we reset when it exeeds an hour
            timeCounter++;
            if(timeCounter == 100*60*100){
                timeCounter= 0;   
            }
            updatemainTime();
              } , 10);
        }
        function clickLap(){
            action = setInterval(function(){
            lapCounter++;
            if(lapCounter == 100*60*100){
                lapCounter = 0;   
            }
            updatesideTime();
              } , 10);
        }
        function updatemainTime(){
            if(mode==true){
                //Changing the centiseconds column in the main    
                timer.centiseconds = timeCounter%100;
                lap.centiseconds = lapCounter%100;
                appchange("#time-main3",timer.centiseconds);
            //Changing the seconds column in the main
                timer.seconds = Math.floor((timeCounter/100)%60);
                lap.seconds = Math.floor((lapCounter/100)%60);
                appchange("#time-main2",timer.seconds);
            //Changing the minutes column in the main
                timer.minutes = Math.floor((timeCounter)/6000);
                lap.minutes = Math.floor((lapCounter)/6000);
                appchange("#time-main1",timer.minutes);
            //rinse and repeat for laps
            }
        }
        function updatesideTime(){
                //Changing the centiseconds column in the main    
                lap.centiseconds = lapCounter%100;
                appchange("#lap-side3",lap.centiseconds);
            //Changing the seconds column in the main
                lap.seconds = Math.floor((lapCounter/100)%60);
                appchange("#lap-side2",lap.seconds); 
            //Changing the minutes column in the main
                lap.minutes = Math.floor((lapCounter)/6000);
                appchange("#lap-side1",lap.minutes);
            
        }
        function showbuttons(x,y){
                $(x).show();
                $(y).show();
        }
        function appchange(app_e,content) {
            if(mode == true){
                $(app_e).text(content)
            }
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});