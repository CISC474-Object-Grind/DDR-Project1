var DDRUI=function(){
    var self = this;
    this.game = undefined;
    this.running = false;
    this.initialize = function(){

            $('#GameStopped').show();
            $('GameRunning').hide();

            $('#StartBtn').on('click',function(){
                $('#GameStopped').hide();
                $('#GameRunning').show();
                self.running = true;
            });
            $('#StopBtn').on('click',function(){
                $('#GameStopped').show();
                $('#GameRunning').hide();
                self.running = false;
                self.game.reset();
            });

    }

    this.initialize();
}