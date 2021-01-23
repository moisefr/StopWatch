$(function(){
    //variables
        var mode = false; //app mode
        var timeCounter;//time counter
        var lapCounter; //lap counter
        var interval//variable for set interval
        var lapNumber// number of laps
        var timer = {minutes:0, seconds:0, centiseconds:0};
        var lap = {minutes:0, seconds:0, centiseconds:0};//minutes, seconds centiseonds for the lap
    
    //On App Load show start and lap buttons
//    $(".row-but").hide();
    showbuttons("#strt", "#lap");
    
    clickStart();
        
    //Click Start button
        //mode on
        //show stop and lap buttons
        //start counter
    
    //Click StopButoon
        //show resume and reset button
        //stop counter
    
    //click on resumeButton
        //show resume and reset buttons
        //star action
    
    //click on resetButton
        //reload the apge
    
    //click on lapButton
        //if mode is ON
            //stop action
            //resetLap and print lap details
            //start action
    
    //Functions
        function clickStart(){
            mode = true;
            showbuttons("#nah", "#lap");
//            $("#strt").hide();
            timeCounter = $("#time-main").innerHTML;
            setInterval(function(){interval = 1;} , 10);
            timer.minutes = Math.round(interval/1000);
    }
        function showbuttons(x,y){
            $(x).show();
            $(y).show();
    };
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
});