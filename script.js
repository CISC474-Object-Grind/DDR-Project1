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
<<<<<<< HEAD
			$('#DanceFloor').hide();
			self.running = false;
=======
            self.running = false;
            $('#DanceFloor').hide();
>>>>>>> ea989f876cb578247b28e2e731593f2b2e312eee
			// self.game.reset();
			// self.refreshView();
		});
	};
	this.initialize();
}
