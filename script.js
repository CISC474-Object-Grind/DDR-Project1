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
            $('#DanceFloor').show();
			self.running = true;
		});
		$('#StopBtn').on('click', function () {
			$('#GameStopped').show();
			$('#GameRunning').hide();
            self.running = false;
            $('#DanceFloor').hide();
			// self.game.reset();
			// self.refreshView();
		});
	};
	this.initialize();
}
