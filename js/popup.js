/*
 * --------------------------------------------------------------------
 *  
 *  iTaiwan Radio v1.3 - popup.js
 *  http://franks543.blogspot.tw/2011/04/hinet-radio-list-in-json-format.html
 *  http://tsmhome.homeip.net/blog/?p=1085
 *  
 * --------------------------------------------------------------------
 */

var oldChromeVersion = !chrome.runtime;

$(function() {
			$( "button" ).button();
		});
		
	//var jsonStations = [{id:'1001',title:'BravoFM台北都會休閒音樂台',uri:'mms://bcr.media.hinet.net/RADRM081'},{id:'1120',title:'Classical台中古典音樂台',uri:'mms://bcr.media.hinet.net/RADRM041'},{id:'228',title:'E-Classical台北愛樂',uri:'mms://bcr.media.hinet.net/RA000018'},{id:'308',title:'KISSRADIO網路音樂台',uri:'mms://bcr.media.hinet.net/RA000042'},{id:'156',title:'KISSRADIO大眾廣播電台',uri:'mms://bcr.media.hinet.net/RA000040'},{id:'206',title:'中廣音樂網iradio',uri:'mms://bcr.media.hinet.net/RA000007'},{id:'205',title:'中廣流行網ilike',uri:'mms://bcr.media.hinet.net/RA000009'},{id:'222',title:'HitFM聯播網北部',uri:'mms://bcr.media.hinet.net/RA000036'},{id:'88',title:'HitFM聯播網中部',uri:'mms://bcr.media.hinet.net/RA000035'},{id:'90',title:'HitFM聯播網南部',uri:'mms://bcr.media.hinet.net/RA000034'},{id:'370',title:'POPRadio台北流行音樂電台',uri:'mms://bcr.media.hinet.net/RA000080'},{id:'294',title:'奇美古典音樂網',uri:'mms://bcr.media.hinet.net/RA000014'},{id:'212',title:'BestRadio台北好事',uri:'mms://bcr.media.hinet.net/RA000013'},{id:'213',title:'BestRadio高雄港都',uri:'mms://bcr.media.hinet.net/RA000012'},{id:'211',title:'BestRadio台中好事',uri:'mms://bcr.media.hinet.net/RA000010'},{id:'303',title:'BestRadio花蓮好事',uri:'mms://bcr.media.hinet.net/RA000011'},{id:'248',title:'AppleLine蘋果線上',uri:'mms://bcr.media.hinet.net/RA000001'},{id:'321',title:'ASIAFM衛星音樂台',uri:'mms://bcr.media.hinet.net/RA000004'},{id:'357',title:'Flyradio飛揚調頻',uri:'mms://bcr.media.hinet.net/RA000019'},{id:'313',title:'RTI央廣音樂',uri:'mms://bcr.media.hinet.net/RA000061'},{id:'340',title:'佳音現代聖樂網',uri:'mms://bcr.media.hinet.net/RA000031'},{id:'338',title:'全國廣播音樂網',uri:'http://bcr.media.hinet.net/RA000047'},{id:'289',title:'太陽電台',uri:'mms://bcr.media.hinet.net/RA000064'},{id:'1060',title:'needsRADIO信義之聲',uri:'mms://bcr.media.hinet.net/RADRM039'},{id:'1143',title:'古都電台',uri:'mms://bcr.media.hinet.net/RADRM085'},{id:'232',title:'飛碟電台',uri:'mms://bcr.media.hinet.net/RA000072'},{id:'210',title:'ASIAFM亞州電台',uri:'mms://bcr.media.hinet.net/RA000003'},{id:'295',title:'ASIAFM亞太電台',uri:'mms://bcr.media.hinet.net/RA000002'},{id:'148',title:'IC之音',uri:'mms://bcr.media.hinet.net/RA000037'},{id:'282',title:'環宇電台',uri:'mms://bcr.media.hinet.net/RA000020'},{id:'202',title:'全國廣播',uri:'http://bcr.media.hinet.net/RA000068'},{id:'201',title:'佳音電台',uri:'mms://bcr.media.hinet.net/RA000029'},{id:'250',title:'佳音經典音樂網',uri:'mms://bcr.media.hinet.net/RA000030'},{id:'229',title:'GOLDFM台北健康電台',uri:'mms://bcr.media.hinet.net/RA000027'},{id:'226',title:'GOLDFM台中城市廣播',uri:'mms://bcr.media.hinet.net/RA000028'},{id:'238',title:'臺北廣播電臺喔海洋頻道',uri:'http://bcr.media.hinet.net/RADRM069'},{id:'208',title:'臺北廣播電臺都會資訊頻道',uri:'http://bcr.media.hinet.net/RADRM070'},{id:'109',title:'大千電台',uri:'mms://bcr.media.hinet.net/RA000067'},{id:'301',title:'EZRadio宜蘭中山電台',uri:'mms://bcr.media.hinet.net/RADRM065'},{id:'217',title:'真心之音廣播電台',uri:'mms://bcr.media.hinet.net/RA000033'},{id:'207',title:'中廣新聞網',uri:'mms://bcr.media.hinet.net/RA000008'},{id:'187',title:'NEWS98新聞網',uri:'mms://bcr.media.hinet.net/RA000073'},{id:'1080',title:'台灣之聲',uri:'mms://bcr.media.hinet.net/RADRM046'},{id:'1020',title:'正義電台',uri:'mms://bcr.media.hinet.net/RA000022'},{id:'198',title:'正聲台北調頻台',uri:'mms://bcr.media.hinet.net/RA000016'},{id:'317',title:'正聲台北調幅台',uri:'mms://bcr.media.hinet.net/RA000015'},{id:'286',title:'復興廣播電台第一網',uri:'mms://bcr.media.hinet.net/RADRM024'},{id:'287',title:'復興廣播電台第二網',uri:'mms://bcr.media.hinet.net/RA000025'},{id:'288',title:'復興廣播電台短波網',uri:'mms://bcr.media.hinet.net/RA000026'},{id:'216',title:'漢聲廣播電台全國調頻網',uri:'mms://bcr.media.hinet.net/RA000076'},{id:'215',title:'漢聲廣播電台',uri:'mms://bcr.media.hinet.net/RA000074'},{id:'309',title:'漢聲光華網短波',uri:'mms://bcr.media.hinet.net/RA000077'},{id:'281',title:'漢聲光華網中波',uri:'mms://bcr.media.hinet.net/RA000075'},{id:'315',title:'RTI央廣國語',uri:'mms://bcr.media.hinet.net/RA000063'},{id:'327',title:'綠色和平台灣文化廣播電台',uri:'mms://bcr.media.hinet.net/RA000032'},{id:'177',title:'ICRT',uri:'mms://bcr.media.hinet.net/RA000038'},{id:'314',title:'RTI央廣歐美及方言',uri:'mms://bcr.media.hinet.net/RA000062'},{id:'312',title:'RTI央廣FM',uri:'mms://bcr.media.hinet.net/RA000060'},{id:'311',title:'RTI央廣亞洲頻道',uri:'mms://bcr.media.hinet.net/RA000059'},{id:'1170',title:'BestRadio南方之音',uri:'http://bcr.media.hinet.net/RADRM044'},{id:'1180',title:'Nice923宜蘭生活廣播',uri:'mms://bcr.media.hinet.net/RADRM086'},{id:'259',title:'寶島新聲廣播電台',uri:'mms://bcr.media.hinet.net/RA000066'},{id:'1140',title:'快樂聯播網－台北',uri:'mms://bcr.media.hinet.net/RADRM082'},{id:'1141',title:'快樂聯播網－嘉義',uri:'mms://bcr.media.hinet.net/RADRM083'},{id:'1142',title:'快樂聯播網－高雄',uri:'mms://bcr.media.hinet.net/RADRM084'},{id:'1040',title:'非凡音電台',uri:'http://bcr.media.hinet.net/RADRM071'},{id:'160',title:'igo531',uri:'mms://bcr.media.hinet.net/RA000006'},{id:'300',title:'大漢之音',uri:'mms://bcr.media.hinet.net/RADRM021'},{id:'241',title:'寶島客家廣播電台',uri:'http://bcr.media.hinet.net/RADRM023'},{id:'254',title:'新客家廣播電台',uri:'http://bcr.media.hinet.net/RADRM048'},{id:'298',title:'高屏溪客家廣播電台',uri:'mms://bcr.media.hinet.net/RADRM045'},{id:'356',title:'青春線上',uri:'mms://bcr.media.hinet.net/RA000079'},{id:'162',title:'中廣寶島網',uri:'mms://bcr.media.hinet.net/RA000005'},{id:'1100',title:'警廣全國交通網',uri:'http://bcr.media.hinet.net/RADRM049'},{id:'1103',title:'警廣台中台',uri:'http://bcr.media.hinet.net/RADRM053'},{id:'1101',title:'警廣台北台',uri:'http://bcr.media.hinet.net/RADRM050'},{id:'1104',title:'警廣台南台',uri:'http://bcr.media.hinet.net/RADRM054'},{id:'1108',title:'警廣台東台',uri:'http://bcr.media.hinet.net/RADRM058'},{id:'1106',title:'警廣宜蘭台',uri:'http://bcr.media.hinet.net/RADRM057'},{id:'1102',title:'警廣新竹台',uri:'http://bcr.media.hinet.net/RADRM052'},{id:'1107',title:'警廣花蓮台',uri:'http://bcr.media.hinet.net/RADRM056'},{id:'1109',title:'警廣長青網',uri:'http://bcr.media.hinet.net/RADRM051'},{id:'1105',title:'警廣高雄台',uri:'http://bcr.media.hinet.net/RADRM055'}];
	var jsonStations = [{id:'1001',title:'BravoFM台北都會休閒音樂台',uri:'mms://bcr.media.hinet.net/RADRM081'},{id:'1120',title:'Classical台中古典音樂台',uri:'mms://bcr.media.hinet.net/RADRM041'},{id:'228',title:'E-Classical台北愛樂',uri:'mms://bcr.media.hinet.net/RA000018'},{id:'308',title:'KISSRADIO網路音樂台',uri:'mms://bcr.media.hinet.net/RA000042'},{id:'156',title:'KISSRADIO大眾廣播電台',uri:'mms://bcr.media.hinet.net/RA000040'},{id:'206',title:'中廣音樂網iradio',uri:'mms://bcr.media.hinet.net/RA000007'},{id:'205',title:'中廣流行網ilike',uri:'mms://bcr.media.hinet.net/RA000009'},{id:'222',title:'HitFM聯播網北部',uri:'mms://bcr.media.hinet.net/RA000036'},{id:'88',title:'HitFM聯播網中部',uri:'mms://bcr.media.hinet.net/RA000035'},{id:'90',title:'HitFM聯播網南部',uri:'mms://bcr.media.hinet.net/RA000034'},{id:'370',title:'POPRadio台北流行音樂電台',uri:'mms://bcr.media.hinet.net/RA000080'},{id:'294',title:'奇美古典音樂網',uri:'mms://bcr.media.hinet.net/RA000014'},{id:'212',title:'BestRadio台北好事',uri:'mms://bcr.media.hinet.net/RA000013'},{id:'213',title:'BestRadio高雄港都',uri:'mms://bcr.media.hinet.net/RA000012'},{id:'211',title:'BestRadio台中好事',uri:'mms://bcr.media.hinet.net/RA000010'},{id:'303',title:'BestRadio花蓮好事',uri:'mms://bcr.media.hinet.net/RA000011'},{id:'248',title:'AppleLine蘋果線上',uri:'mms://bcr.media.hinet.net/RA000001'},{id:'321',title:'ASIAFM衛星音樂台',uri:'mms://bcr.media.hinet.net/RA000004'},{id:'357',title:'Flyradio飛揚調頻',uri:'mms://bcr.media.hinet.net/RA000019'},{id:'313',title:'RTI央廣音樂',uri:'mms://bcr.media.hinet.net/RA000061'},{id:'340',title:'佳音現代聖樂網',uri:'mms://bcr.media.hinet.net/RA000031'},{id:'338',title:'全國廣播音樂網',uri:'mms://bcr.media.hinet.net/RA000047'},{id:'289',title:'太陽電台',uri:'mms://bcr.media.hinet.net/RA000064'},{id:'1060',title:'needsRADIO信義之聲',uri:'mms://bcr.media.hinet.net/RADRM039'},{id:'1143',title:'古都電台',uri:'mms://bcr.media.hinet.net/RADRM085'},{id:'232',title:'飛碟電台',uri:'mms://bcr.media.hinet.net/RA000072'},{id:'210',title:'ASIAFM亞州電台',uri:'mms://bcr.media.hinet.net/RA000003'},{id:'295',title:'ASIAFM亞太電台',uri:'mms://bcr.media.hinet.net/RA000002'},{id:'148',title:'IC之音',uri:'mms://bcr.media.hinet.net/RA000037'},{id:'282',title:'環宇電台',uri:'mms://bcr.media.hinet.net/RA000020'},{id:'202',title:'全國廣播',uri:'mms://bcr.media.hinet.net/RA000068'},{id:'201',title:'佳音電台',uri:'mms://bcr.media.hinet.net/RA000029'},{id:'250',title:'佳音經典音樂網',uri:'mms://bcr.media.hinet.net/RA000030'},{id:'229',title:'GOLDFM台北健康電台',uri:'mms://bcr.media.hinet.net/RA000027'},{id:'226',title:'GOLDFM台中城市廣播',uri:'mms://bcr.media.hinet.net/RA000028'},{id:'238',title:'臺北廣播電臺喔海洋頻道',uri:'http://bcr.media.hinet.net/RADRM069'},{id:'208',title:'臺北廣播電臺都會資訊頻道',uri:'http://bcr.media.hinet.net/RADRM070'},{id:'109',title:'大千電台',uri:'mms://bcr.media.hinet.net/RA000067'},{id:'301',title:'EZRadio宜蘭中山電台',uri:'mms://bcr.media.hinet.net/RADRM065'},{id:'217',title:'真心之音廣播電台',uri:'mms://bcr.media.hinet.net/RA000033'},{id:'207',title:'中廣新聞網',uri:'mms://bcr.media.hinet.net/RA000008'},{id:'187',title:'NEWS98新聞網',uri:'mms://bcr.media.hinet.net/RA000073'},{id:'1080',title:'台灣之聲',uri:'mms://bcr.media.hinet.net/RADRM046'},{id:'1020',title:'正義電台',uri:'mms://bcr.media.hinet.net/RA000022'},{id:'198',title:'正聲台北調頻台',uri:'mms://bcr.media.hinet.net/RA000016'},{id:'317',title:'正聲台北調幅台',uri:'mms://bcr.media.hinet.net/RA000015'},{id:'286',title:'復興廣播電台第一網',uri:'mms://bcr.media.hinet.net/RADRM024'},{id:'287',title:'復興廣播電台第二網',uri:'mms://bcr.media.hinet.net/RA000025'},{id:'288',title:'復興廣播電台短波網',uri:'mms://bcr.media.hinet.net/RA000026'},{id:'216',title:'漢聲廣播電台全國調頻網',uri:'mms://bcr.media.hinet.net/RA000076'},{id:'215',title:'漢聲廣播電台',uri:'mms://bcr.media.hinet.net/RA000074'},{id:'309',title:'漢聲光華網短波',uri:'mms://bcr.media.hinet.net/RA000077'},{id:'281',title:'漢聲光華網中波',uri:'mms://bcr.media.hinet.net/RA000075'},{id:'315',title:'RTI央廣國語',uri:'mms://bcr.media.hinet.net/RA000063'},{id:'327',title:'綠色和平台灣文化廣播電台',uri:'mms://bcr.media.hinet.net/RA000032'},{id:'177',title:'ICRT',uri:'mms://bcr.media.hinet.net/RA000038'},{id:'314',title:'RTI央廣歐美及方言',uri:'mms://bcr.media.hinet.net/RA000062'},{id:'312',title:'RTI央廣FM',uri:'mms://bcr.media.hinet.net/RA000060'},{id:'311',title:'RTI央廣亞洲頻道',uri:'mms://bcr.media.hinet.net/RA000059'},{id:'1170',title:'BestRadio南方之音',uri:'http://bcr.media.hinet.net/RADRM044'},{id:'1180',title:'Nice923宜蘭生活廣播',uri:'mms://bcr.media.hinet.net/RADRM086'},{id:'259',title:'寶島新聲廣播電台',uri:'mms://bcr.media.hinet.net/RA000066'},{id:'1140',title:'快樂聯播網－台北',uri:'mms://bcr.media.hinet.net/RADRM082'},{id:'1141',title:'快樂聯播網－嘉義',uri:'mms://bcr.media.hinet.net/RADRM083'},{id:'1142',title:'快樂聯播網－高雄',uri:'mms://bcr.media.hinet.net/RADRM084'},{id:'1040',title:'非凡音電台',uri:'http://bcr.media.hinet.net/RADRM071'},{id:'160',title:'igo531',uri:'mms://bcr.media.hinet.net/RA000006'},{id:'300',title:'大漢之音',uri:'mms://bcr.media.hinet.net/RADRM021'},{id:'241',title:'寶島客家廣播電台',uri:'http://bcr.media.hinet.net/RADRM023'},{id:'254',title:'新客家廣播電台',uri:'http://bcr.media.hinet.net/RADRM048'},{id:'298',title:'高屏溪客家廣播電台',uri:'mms://bcr.media.hinet.net/RADRM045'},{id:'356',title:'青春線上',uri:'mms://bcr.media.hinet.net/RA000079'},{id:'162',title:'中廣寶島網',uri:'mms://bcr.media.hinet.net/RA000005'},{id:'1100',title:'警廣全國交通網',uri:'http://bcr.media.hinet.net/RADRM049'},{id:'1103',title:'警廣台中台',uri:'http://bcr.media.hinet.net/RADRM053'},{id:'1101',title:'警廣台北台',uri:'http://bcr.media.hinet.net/RADRM050'},{id:'1104',title:'警廣台南台',uri:'http://bcr.media.hinet.net/RADRM054'},{id:'1108',title:'警廣台東台',uri:'http://bcr.media.hinet.net/RADRM058'},{id:'1106',title:'警廣宜蘭台',uri:'http://bcr.media.hinet.net/RADRM057'},{id:'1102',title:'警廣新竹台',uri:'http://bcr.media.hinet.net/RADRM052'},{id:'1107',title:'警廣花蓮台',uri:'http://bcr.media.hinet.net/RADRM056'},{id:'1109',title:'警廣長青網',uri:'http://bcr.media.hinet.net/RADRM051'},{id:'1105',title:'警廣高雄台',uri:'http://bcr.media.hinet.net/RADRM055'},{id:'9999',title:'AnimeNfo Radio #1',uri:'http://momori.animenfo.com:8000'}];
        
        $.fn.addItems = function(data) {
            return this.each(function() {
                var list = this;
                $.each(data, function(index, itemData) {
                    var option = new Option(itemData.title, itemData.uri);
                    list.add(option);
                });
            });
        };
        
String.format = function()
{

    if( arguments.length == 0 )
    {
        return null; 
    }
    
    var str = arguments[0]; 

    for(var i=1;i<arguments.length;i++)
    {

        var re = new RegExp('\\{' + (i-1) + '\\}','gm');
        str = str.replace(re, arguments[i]);
    }
    return str;
}

	//volume = -3500 ~ -0
	//var strPlayer = "<embed id='Player' type='application/x-mplayer2' pluginspage='http://www.microsoft.com/Windows/MediaPlayer/' src='{0}' name='Player' autostart='true' volume='{1}' showcontrol='1' showtracker='false' width='250' height='45'></embed>";
	//var init_Params = {"AudioStream":"-1", "AutoSize":"0", "AutoStart":"-1", "AnimationAtStart":"0", "AllowScan":"-1", "AllowChangeDisplaySize":"-1", "AutoRewind":"0", "Balance":"0", "BaseURL":"", "BufferingTime":"5", "CaptioningID":"", "ClickToPlay":"-1", "CursorType":"0", "CurrentPosition":"-1", "CurrentMarker":"0", "DefaultFrame":"", "DisplayBackColor":"0", "DisplayForeColor":"16777215", "DisplayMode":"0", "DisplaySize":"4", "Enabled":"-1", "EnableContextMenu":"-1", "EnablePositionControls":"-1", "EnableFullScreenControls":"0", "EnableTracker":"-1", "Filename":"http://video.vdat.com/playfile.asp?brand=VN&file=countdown_56.asf&stream=w", "InvokeURLs":"-1", "Language":"-1", "Mute":"0", "PlayCount":"1", "PreviewMode":"0", "Rate":"1", "SAMILang":"", "SAMIStyle":"", "SAMIFileName":"", "SelectionStart":"-1", "SelectionEnd":"-1", "SendOpenStateChangeEvents":"-1", "SendWarningEvents":"-1", "SendErrorEvents":"-1", "SendKeyboardEvents":"0", "SendMouseClickEvents":"0", "SendMouseMoveEvents":"0", "SendPlayStateChangeEvents":"-1", "ShowCaptioning":"0", "ShowControls":"-1", "ShowAudioControls":"-1", "ShowDisplay":"0", "ShowGotoBar":"0", "ShowPositionControls":"0", "ShowStatusBar":"-1", "ShowTracker":"0", "TransparentAtStart":"0", "VideoBorderWidth":"0", "VideoBorderColor":"0", "VideoBorder3D":"0", "Volume":"-600", "WindowlessVideo":"0"};
  	
  	function setStation(radioStation){
  		
  		chrome.extension.getBackgroundPage().setmmsURL(radioStation);
  		
  	}
  	
  	function setVolume(iVolume){
  		
  		chrome.extension.getBackgroundPage().setVolume(iVolume);
  		
  	}
  	
  	function callBGRadioPlayer(Func) {
		
		chrome.extension.getBackgroundPage().radioPlayerFunc(Func);
		
	}
	
	/*
	function genRadioPlayer(playerType){
		
		var playerObject = null;
		
		if(playerType == "vlc"){
			
	     playerObject = document.createElement("embed");
            playerObject.id = "vlcPlayer";
            playerObject.type = "application/x-vlc-plugin"
            playerObject.setAttribute("version", "VideoLAN.VLCPlugin.2")
            playerObject.setAttribute("hidden", "true");
            
		}else if(playerType == "wmp"){
			
	     playerObject = document.createElement("OBJECT");
            playerObject.id = "objMediaPlayer";
            playerObject.type = "application/x-oleobject";
            playerObject.setAttribute("classid", "CLSID:22d6f312-b0f6-11d0-94ab-0080c74c7e95");
            playerObject.setAttribute("codebase", "http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701");
            playerObject.setAttribute("STANDBY", "Loading Microsoft Windows Media Player components...");
            for (var i in init_Params) {
	        var param = document.createElement ("PARAM");
	        param.name = i;
	        param.value = init_Params[i];
	        playerObject.appendChild (param);
	     }
	     var embed = document.createElement("embed");
            embed.id = "mediaPlayer";
            embed.type = "application/x-mplayer2";
            embed.setAttribute("autostart", "false");
            embed.uiMode = "invisible";
            playerObject.appendChild (embed);
            
		}else{
			//Unknown playerType...
			return null;
		}
		
		return playerObject;
	}
	*/
	
	function genRadioPlayer(playerType){
		
		var embed = document.createElement("embed");
		
		if(playerType == "vlc"){
			
            embed.id = "vlcPlayer";
            embed.type = "application/x-vlc-plugin"
            embed.setAttribute("version", "VideoLAN.VLCPlugin.2")
            embed.setAttribute("hidden", "true");
            
		}else if(playerType == "wmp"){
			
            embed.id = "mediaPlayer";
            embed.type = "application/x-mplayer2";
            embed.setAttribute("autostart", "false");
            embed.uiMode = "invisible";
            
		}else{
			//Unknown playerType...
			return null;
		}
		
		return embed;
	}
	
	function pageInit(){
		
		$("#Stations").addItems(jsonStations);
		
		var bgPlayerType = null;
		bgPlayerType = chrome.extension.getBackgroundPage().getplayerType();
		
		if(bgPlayerType == null){
			var mimeTypes = window.navigator.mimeTypes;
			var playerType = null;
			
			if(mimeTypes.namedItem('application/x-vlc-plugin') != null){
				playerType = "vlc";
			}else if(mimeTypes.namedItem('application/x-mplayer2') != null){
				playerType = "wmp";
			}
			
			// Force to use WMP Player.
			//playerType = "wmp";       // For Test ONLY.
			
			if(playerType != null){
				// Create Player Object.
				var objEmbed = genRadioPlayer(playerType);
				if(objEmbed != null){
					//Send Player into BackgroundPage.
					chrome.extension.getBackgroundPage().initBGRadioPlayer(objEmbed);
					//Set playerType to BackgroundPage.
					chrome.extension.getBackgroundPage().setplayerType(playerType);
					//Try to Initialize the VLC Player.
					if(playerType == "vlc"){
						callBGRadioPlayer("play");
					}
				}else{
					alert("播放器 初始化 失敗！");
				}
			}else{
				alert("請至少安裝 VLC Player 或 Windows Media Player！");
			}
		}
		
		var strState = getInputState();
		var strStateHTML = ""
		var dv_radioPlayerState = document.getElementById("dv_radioPlayerState");
		
		if(strState == "播放中"){
			strStateHTML = "<img src='images/okay.png' alt='Playing' /> : " + strState;
		}else if(strState == "開啟中..." || strState == "緩衝中..." || strState == "等待中..." || strState == "準備中..."){
			strStateHTML = "<img src='images/ajax-loader.gif' alt='Loading' width='24' height='24' /> : " + strState;
			// Call Interval Function.
			doChkRadioPlayerState(true);
		}else if(strState == "錯誤" || strState == "未知的訊息"){
			strStateHTML = "<img src='images/warning.png' alt='Warning' /> : " + strState;
			doChkRadioPlayerState(false);
		}else{
			strStateHTML = "<img src='images/info.png' alt='Info' /> : " + strState;
			doChkRadioPlayerState(false);
		}
		
		dv_radioPlayerState.innerHTML = strStateHTML;
		
		// Initialize Mute Button.
		var isMute = chrome.extension.getBackgroundPage().isMute();
		if(isMute){
			document.getElementById("btn_Mute").style.color = "#FF0000";
		}
		
		var slcRadioStation = document.getElementById("Stations");
		var slcVolume = document.getElementById("volume");
		var mmsURL = chrome.extension.getBackgroundPage().getmmsURL() != null ? chrome.extension.getBackgroundPage().getmmsURL() : "n/a";
		var volume = chrome.extension.getBackgroundPage().getVolume() != null ? chrome.extension.getBackgroundPage().getVolume() : 60;
		//Initialize Volume.
		if(chrome.extension.getBackgroundPage().getVolume() == null){
			chrome.extension.getBackgroundPage().setVolume(volume);
		}
		
		var init_slcRadioStation = function(){
			$('select#Stations').selectmenu({maxHeight: 150});
		};
		
		var init_slcVolume = function(){$(function() {
			var select = $( "#volume" );
			var slider = $( "<div id='slider' style='top:45px;'></div>" ).insertAfter( select ).slider({
				min: 0,
				max: 100,
				range: "min",
				value: volume,
				slide: function( event, ui ) {
					select[ 0 ].selectedIndex = ui.value;
					$( "#amount" ).text( ui.value );
					//Set Volume to BackgroundPage.
					setVolume(ui.value);
				}
			});
			$( "#volume" ).change(function() {
				slider.slider( "value", this.selectedIndex + 1 );
			});
			$( "#amount" ).text( $( "#slider" ).slider( "value" ) );
		});};
		
		
		for (var i = 0; i <= slcRadioStation.length - 1; i++) {
			if (slcRadioStation[i].value == mmsURL) {
				slcRadioStation[i].selected = true;
			}
		}
		
		init_slcRadioStation();
		
		for (var i = 0; i <= slcVolume.length - 1; i++) {
			if (slcVolume[i].value == volume) {
				slcVolume[i].selected = true;
			}
		}
		
		init_slcVolume();
		
		// Initialize Version Info.
		var dv_VersionInfo = document.getElementById("dv_VersionInfo");
		var strVersionInfo = chrome.extension.getBackgroundPage().getVersionInfo();
		dv_VersionInfo.innerHTML = strVersionInfo;
	}
	
	function getInputState(){
		var strState = chrome.extension.getBackgroundPage().getInputState();
		return strState;
	}
	
	function doChkRadioPlayerState(funcFlag){
		
		if(funcFlag){
			console.log(Math.round((1/60.0) * 100) / 100);
			chrome.alarms.create("iTaiwanRadioAlarm", {"when": 1000, "periodInMinutes": Math.round((1/60.0) * 100) / 100});
		}else{
			//chrome.alarms.clear("iTaiwanRadioAlarm");
			chrome.alarms.clearAll();
		}
		
	}
	
	function chkRadioPlayerState(){
		
		var strState = getInputState();
		//console.log(strState);
		var strStateHTML = ""
		var dv_radioPlayerState = document.getElementById("dv_radioPlayerState");
		
		if(strState == "播放中"){
			strStateHTML = "<img src='images/okay.png' alt='Playing' /> : " + strState;
		}else if(strState == "開啟中..." || strState == "緩衝中..." || strState == "等待中..." || strState == "準備中..."){
			strStateHTML = "<img src='images/ajax-loader.gif' alt='Loading' width='24' height='24' /> : " + strState;
		}else if(strState == "錯誤" || strState == "未知的訊息"){
			strStateHTML = "<img src='images/warning.png' alt='Warning' /> : " + strState;
			doChkRadioPlayerState(false);
		}else{
			strStateHTML = "<img src='images/info.png' alt='Info' /> : " + strState;
			doChkRadioPlayerState(false);
		}
		
		dv_radioPlayerState.innerHTML = strStateHTML;
		
	}
	
	function clickHandler(evt) {
		
		var elemID = null;
		elemID = this.id;
		
		//console.log(elemID);
		
		if(elemID == "btn_Play"){
			if(document.getElementById('Stations').value != 'n/a'){
				setStation(document.getElementById('Stations').value);
				callBGRadioPlayer('play');
				doChkRadioPlayerState(true);
			}else{
				alert('請選擇電台！');
				doChkRadioPlayerState(false);
			}
		}else if(elemID == "btn_Stop"){
			callBGRadioPlayer('stop');
			chkRadioPlayerState();
			doChkRadioPlayerState(false);
		}else if(elemID == "btn_Mute"){
			callBGRadioPlayer('mute');
			if(this.style.color == 'rgb(255, 255, 255)' || this.style.color == ''){
				this.style.color='#FF0000';
			}else{
				this.style.color='#FFFFFF';
			}
		}else{
			alert('Something WRONG！');
		}
	  	
	}
	
	// Add event listeners once the DOM has fully loaded by listening for the
	// `DOMContentLoaded` event on the document, and adding your listeners to
	// specific elements when it triggers.
	document.addEventListener('DOMContentLoaded', function () {
	  document.getElementById('btn_Play').addEventListener('click', clickHandler);
	  document.getElementById('btn_Stop').addEventListener('click', clickHandler);
	  document.getElementById('btn_Mute').addEventListener('click', clickHandler);
	  
	  // 
	  chrome.alarms.onAlarm.addListener(function(alarm) {
		  //console.log("Time's up!");
		  chkRadioPlayerState()
	  });
	  
	  // Init Popup Page.
	  if (oldChromeVersion) {
	    	//console.log("Old Version!");
			pageInit();
		} else {
			//console.log("New Version!");
			chrome.runtime.onInstalled.addListener(pageInit);
			pageInit();
		}
	});