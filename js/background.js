/*
 * --------------------------------------------------------------------
 *  
 *  iTaiwan Radio v1.3 - background.js
 *  
 * --------------------------------------------------------------------
 */

var playerType;
var mmsURL;
var volume;

function setplayerType(iplayerType){
	playerType = iplayerType;
}

function getplayerType(){
	return playerType;
}

function setmmsURL(immsURL){
	mmsURL = immsURL;
}

function getmmsURL(){
	return mmsURL != null ? mmsURL : "";
}

function getInputState(){
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	var stateCode = null;
	
	if(playerType == "vlc"){
		
		stateCode = parseInt(radioPlayer.input.state);
		
		if(stateCode == 0){
			// IDLE/CLOSE
			return "閒置中";
		}else if(stateCode == 1){
			// OPENING
			return "開啟中...";
		}else if(stateCode == 2){
			// BUFFERING
			return "緩衝中...";
		}else if(stateCode == 3){
			// PLAYING
			return "播放中";
		}else if(stateCode == 4){
			// PAUSED
			return "暫停";
		}else if(stateCode == 5){
			// STOPPING
			return "已停止";
		}else if(stateCode == 6){
			// ENDED
			return "已停止";
		}else if(stateCode == 7){
			// ERROR
			return "錯誤";
		}else{
			// Unknown State Code
			return "未知的訊息";
		}
		
	}else if(playerType == "wmp"){
		
		stateCode = parseInt(radioPlayer.playState);
		
		if(stateCode == 1){
			// stopped
			return "已停止";
		}else if(stateCode == 2){
			// paused
			return "暫停";
		}else if(stateCode == 3){
			// playing
			return "播放中";
		}else if(stateCode == 4){
			// forward
			return "快轉";
		}else if(stateCode == 5){
			// reverse
			return "倒帶";
		}else if(stateCode == 6){
			// buffering
			return "緩衝中...";
		}else if(stateCode == 7){
			// waiting
			return "等待中...";
		}else if(stateCode == 8){
			// reached the end of the media
			return "播放完畢";
		}else if(stateCode == 9){
			// preparing
			return "準備中...";
		}else if(stateCode == 10){
			// ready
			return "已完成";
		}else{
			// Unknown State Code
			return "未知的訊息";
		}
		
	}
	
}

function setVolume(iVolume){
	
	volume = parseInt(iVolume);
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	
	if(playerType == "vlc"){
		
		if(radioPlayer != null){
			if(!isMute()){
				radioPlayer.audio.volume = parseInt(volume);
			}
		}else{
			alert("radioPlayer init Error !");
		}
		
	}else if(playerType == "wmp"){
		
		if(radioPlayer != null && radioPlayer.controls != null){
			if(!isMute()){
				var clearErrors = function() {
	            if (radioPlayer.error != null && radioPlayer.error.errorCount > 0)
	            	radioPlayer.error.clearErrorQueue();
		        };
				clearErrors();
				radioPlayer.settings.volume = parseInt(volume);
			}
		}else{
			alert("radioPlayer init Error !");
		}
		
	}
	
}

function getVolume(){
	return volume;
}

function getPlayerID(){
	return this.playerType == "vlc" ? "vlcPlayer" : "mediaPlayer";
}

function isMute(){
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	var isMute = null;
	
	if(playerType == "vlc"){
		isMute = radioPlayer.audio.mute;
	}else if(playerType == "wmp"){
		isMute = radioPlayer.settings.mute;
	}
	
	return isMute;
}

function getVersionInfo(){
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	
	if(playerType == "vlc"){
		return "<img src='images/VLC.png' alt='VLC Player' width='16' height='16' /> VLC Player " + radioPlayer.versionInfo();
	}else if(playerType == "wmp"){
		return "<img src='images/WMP.png' alt='Windows Media Player' width='20' height='15' /> Windows Media Player";
	}else{
		return null;
	}
}

function initBGRadioPlayer(radioPlayer) {
	
	// clear all elements first.
	clearBGRadioPlayer();
	
	// then add radioPlayer into body tag.
	document.body.appendChild(radioPlayer);
	
}

function radioPlayerFunc(Func){
	
	var playerID = getPlayerID();
	var radioPlayer = document.getElementById(playerID);
	
	if(playerType == "vlc"){
		
		if(radioPlayer != null){
			
			if(Func == "play"){
				var trackId = radioPlayer.playlist.add(getmmsURL());
				//console.log(trackId + " - " + getmmsURL());
                		radioPlayer.playlist.playItem(trackId);
                		// Try to Init Volume Once Again. Only for VLC Player.
                		if(volume != null){
                			setVolume(volume);
                		}
			}else if(Func == "stop"){
				radioPlayer.playlist.stop();
			}else if(Func == "pause"){
				radioPlayer.playlist.togglePause();
			}else if(Func == "mute"){
				radioPlayer.audio.toggleMute();
				setVolume(volume);
			}else{
				alert("Func Error : " + Func);
			}
			
		}else{
			alert("radioPlayer init Error !");
		}
		
	}else if(playerType == "wmp"){
		
		if(radioPlayer != null && radioPlayer.controls != null){
			var clearErrors = function() {
	            if (radioPlayer.error != null && radioPlayer.error.errorCount > 0)
	                radioPlayer.error.clearErrorQueue();
	        };
			clearErrors();
			if(Func == "play"){
				radioPlayer.URL = getmmsURL();
				radioPlayer.controls.play();
			}else if(Func == "stop"){
				radioPlayer.controls.stop();
			}else if(Func == "pause"){
				radioPlayer.controls.pause();
			}else if(Func == "mute"){
				radioPlayer.settings.mute = !radioPlayer.settings.mute;
				setVolume(volume);
			}else{
				alert("Func Error : " + Func);
			}
		}else{
			alert("radioPlayer init Error !");
		}
		
	}
	
}

function clearBGRadioPlayer() {
	
	var objChilds = document.body.getElementsByTagName("embed");
	for (i = 0; i <= objChilds.length - 1; i = i++)
	{
		document.body.removeChild(objChilds[i]);
	}
	
}
