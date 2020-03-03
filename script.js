<<<<<<< HEAD
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
=======
var DDRUI = function () {
	var self = this;
	this.game = undefined;
	this.running = false;
	this.initialize = function () {
	
		$('#GameStopped').show();
		$('#GameRunning').hide();
		$('#DanceFloor').hide();

		$('#StartBtn').on('click', function () {
			$('#GameStopped').hide();
			$('#GameRunning').show();
			self.running = true;
		});
		$('#StopBtn').on('click', function () {
			$('#GameStopped').show();
			$('#GameRunning').hide();
			self.running = false;
			// self.game.reset();
			// self.refreshView();
		});
	};
	this.initialize();
}
>>>>>>> be20d5745659f4863e0ab803b4b4c7a9b9bc9b7d
