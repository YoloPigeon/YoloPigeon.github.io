// JavaScript Document
		
	// detect enter keypress
$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode == '13') {
      validate();
    }
});
// Note: Like all Javascript password scripts, this is hopelessly insecure as the user can see 
//the valid usernames/passwords and the redirect url simply with View Source.  
// And the user can obtain another three tries simply by refreshing the page.  
//So do not use for anything serious!

var count = 2;
function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["flyingnerd123@gmail.com", "etdood@gmail.com", "gabrieljudewheeler@gmail.com"];  // as many as you like - no comma after final entry
var pwArray = ["joseph", "ethan", "gabriel"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
//alert ("Login was successful");
window.location = "Teampage.html";
	document.getElementById("error-text").innerHTML = "";
return false;
}
else {
document.getElementById("error-text").innerHTML = "Incorrect Username or Password";
return false;
}

}

/* var _0x13ba=['Y0prdFc=','cFZHaXc=','bENwdWw=','Y291bnRlcg==','c3RyaW5n','a1ZSdE4=','c3pybk8=','c3pCaHE=','SWpSS3A=','aFRUY2E=','cnRWWEo=','d2NMa3k=','UnhrcVg=','ZXdwdnU=','b1ZTemw=','eHZpSGM=','dHdaVVM=','T1VVa2U=','b3VMR3c=','VmZKTW0=','YUNybm0=','TnlSY2Q=','RGFzR2E=','cmVJWkE=','Y2FsbA==','c29ZWG8=','c0hacnA=','dUVGaW4=','bFhLaXU=','YmNwYUI=','R2J2eXA=','UGt3TWQ=','bWpVTGE=','VEhGU1U=','RU5BZVY=','YXBwbHk=','WXNvak4=','cmV0dXJuIChmdW5jdGlvbigpIA==','e30uY29uc3RydWN0b3IoInJldHVybiB0aGlzIikoICk=','U0hCUVg=','QUpLV20=','ZnVuY3Rpb24gKlwoICpcKQ==','XCtcKyAqKD86XzB4KD86W2EtZjAtOV0pezQsNn18KD86XGJ8XGQpW2EtejAtOV17MSw0fSg/OlxifFxkKSk=','Y2hhaW4=','aW5wdXQ=','YXR0cmlidXRl','ZXJyb3ItdGV4dA==','SmJiaU8=','YlpUT0o=','UkljUEY=','YXdwcGQ=','YmxyeU8=','RGJsQXE=','d3pIRVU=','TG5BVng=','c2prVmI=','ZkxsdFo=','dXpoQmY=','RXVSc3c=','a1BtTFU=','dmFDUFU=','WEVDeGE=','c3BFTU8=','d3hsVlA=','TUdubEM=','ZlNrbkk=','akdKcGY=','aXRlbQ==','dmFsdWU=','QUtLVVo=','bWZJcmI=','RFlhcVE=','cmVwbGFjZQ==','c3BsaXQ=','QmlpTnQ=','QmpyYUc=','WWtyUE4=','UlFUQ3c=','a2tCQXk=','RGpFcW8=','cmVKUmg=','dEJHdnQ=','ZkVNUFE=','aW5pdA==','dGVzdA==','bXZqYWk=','ZG5JUUk=','RFZxbEE=','Y0VJa1U=','RWVreko=','Y2hhckNvZGVBdA==','S1RtbXQ=','T09JVWY=','SGpWbWE=','bWhmTm8=','YlFNcXM=','bGVuZ3Ro','U0hmVlM=','c2JLRG8=','a25qUkc=','b2NSYmc=','YmNsc2c=','UEhCb0c=','eXZheHg=','cXhlcUg=','TENFcEM=','S1dueHc=','aW5kZXhPZg==','eWVGS1k=','d3lRWnQ=','eVBuVks=','emFHbHA=','aW5uZXJIVE1M','RHhlY1o=','dldaR2w=','clhMenk=','WGlEWkI=','Z0t1c0E=','TFdBeng=','ZGVidQ==','dHhDYWo=','QlVZbnM=','eVlndHI=','VktnWng=','dmxnVmg=','a2V5Q29kZQ==','d2hpY2g=','ZEtEdHE=','Y29uc3RydWN0b3I=','Z2dlcg==','c3RhdGVPYmplY3Q=','VHRuV1A=','aURFeUQ=','SVhQTVU=','d3V1ZUI=','S012R0w=','QlJPdk0=','cXVHSlc=','Y0ROaFc=','RWZiZlU=','a2V5cHJlc3M=','c0h0S00=','R2tvclg=','ZXRkb29kQGdtYWlsLmNvbQ==','am9zZXBo','Z2FicmllbA==','SkhmdmQ=','QmFFRWg=','VGVhbXBhZ2UuaHRtbA==','cUlIYlI=','SW5jb3JyZWN0IFVzZXJuYW1lIG9yIFBhc3N3b3Jk','dXNlcm5hbWU=','bXlmb3Jt','cHdvcmQ=','Zmx5aW5nbmVyZDEyM0BnbWFpbC5jb20=','Q0Nnd1g=','Z2FicmllbGp1ZGV3aGVlbGVyQGdtYWlsLmNvbQ==','c0JFcWE=','R2VQWUs=','cFVkSFQ=','QnNrdGk=','dktrTVY=','Vmtmb1c=','Ym9vbWc=','bUlCUWI=','R3ZoaG8=','Y2daTE0=','bG9jYXRpb24=','R0NlZ28=','Z2V0RWxlbWVudEJ5SWQ=','b3FGTGE=','Y3R4eWU=','ellMaWw='];(function(_0x1d0591,_0x50e42b){var _0x475f68=function(_0x1c476f){while(--_0x1c476f){_0x1d0591['push'](_0x1d0591['shift']());}};var _0x31c138=function(){var _0x1e2ba2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xbb4506,_0x572f78,_0x165f92,_0x15a72c){_0x15a72c=_0x15a72c||{};var _0x535cc3=_0x572f78+'='+_0x165f92;var _0xda6ffb=0x0;for(var _0xda6ffb=0x0,_0x31489d=_0xbb4506['length'];_0xda6ffb<_0x31489d;_0xda6ffb++){var _0x214572=_0xbb4506[_0xda6ffb];_0x535cc3+=';\x20'+_0x214572;var _0x3c6a17=_0xbb4506[_0x214572];_0xbb4506['push'](_0x3c6a17);_0x31489d=_0xbb4506['length'];if(_0x3c6a17!==!![]){_0x535cc3+='='+_0x3c6a17;}}_0x15a72c['cookie']=_0x535cc3;},'removeCookie':function(){return'dev';},'getCookie':function(_0x44dddb,_0x4ffa5b){_0x44dddb=_0x44dddb||function(_0x9b397d){return _0x9b397d;};var _0x51c2a8=_0x44dddb(new RegExp('(?:^|;\x20)'+_0x4ffa5b['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x34a9bd=function(_0x42eb22,_0x5d42a9){_0x42eb22(++_0x5d42a9);};_0x34a9bd(_0x475f68,_0x50e42b);return _0x51c2a8?decodeURIComponent(_0x51c2a8[0x1]):undefined;}};var _0x32a076=function(){var _0x33be73=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x33be73['test'](_0x1e2ba2['removeCookie']['toString']());};_0x1e2ba2['updateCookie']=_0x32a076;var _0x375aa2='';var _0x4972e8=_0x1e2ba2['updateCookie']();if(!_0x4972e8){_0x1e2ba2['setCookie'](['*'],'counter',0x1);}else if(_0x4972e8){_0x375aa2=_0x1e2ba2['getCookie'](null,'counter');}else{_0x1e2ba2['removeCookie']();}};_0x31c138();}(_0x13ba,0x17b));var _0x377e=function(_0x1787bf,_0x50ed81){_0x1787bf=_0x1787bf-0x0;var _0x4e8b98=_0x13ba[_0x1787bf];if(_0x377e['yZgTuv']===undefined){(function(){var _0x799567=function(){var _0x495916;try{_0x495916=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x51c069){_0x495916=window;}return _0x495916;};var _0x3cb969=_0x799567();var _0x1076fa='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3cb969['atob']||(_0x3cb969['atob']=function(_0x4f220d){var _0x4ee2fb=String(_0x4f220d)['replace'](/=+$/,'');for(var _0x3c2abd=0x0,_0x10efdf,_0xa218e5,_0x3904d0=0x0,_0x2b328d='';_0xa218e5=_0x4ee2fb['charAt'](_0x3904d0++);~_0xa218e5&&(_0x10efdf=_0x3c2abd%0x4?_0x10efdf*0x40+_0xa218e5:_0xa218e5,_0x3c2abd++%0x4)?_0x2b328d+=String['fromCharCode'](0xff&_0x10efdf>>(-0x2*_0x3c2abd&0x6)):0x0){_0xa218e5=_0x1076fa['indexOf'](_0xa218e5);}return _0x2b328d;});}());_0x377e['GnMhBM']=function(_0x3a3ebd){var _0x2bed83=atob(_0x3a3ebd);var _0x545df7=[];for(var _0x6b67c0=0x0,_0x29aef3=_0x2bed83['length'];_0x6b67c0<_0x29aef3;_0x6b67c0++){_0x545df7+='%'+('00'+_0x2bed83['charCodeAt'](_0x6b67c0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x545df7);};_0x377e['wGphwY']={};_0x377e['yZgTuv']=!![];}var _0x365dbf=_0x377e['wGphwY'][_0x1787bf];if(_0x365dbf===undefined){var _0x265264=function(_0x5a6b4d){this['YEYZOY']=_0x5a6b4d;this['xXTYjM']=[0x1,0x0,0x0];this['uwqNdF']=function(){return'newState';};this['NSWPfF']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['TRhujK']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x265264['prototype']['QEuSyK']=function(){var _0x30b22e=new RegExp(this['NSWPfF']+this['TRhujK']);var _0x5f38a3=_0x30b22e['test'](this['uwqNdF']['toString']())?--this['xXTYjM'][0x1]:--this['xXTYjM'][0x0];return this['PzYDgn'](_0x5f38a3);};_0x265264['prototype']['PzYDgn']=function(_0x25ecd8){if(!Boolean(~_0x25ecd8)){return _0x25ecd8;}return this['HZSWTJ'](this['YEYZOY']);};_0x265264['prototype']['HZSWTJ']=function(_0x44460c){for(var _0x14208e=0x0,_0x5402e5=this['xXTYjM']['length'];_0x14208e<_0x5402e5;_0x14208e++){this['xXTYjM']['push'](Math['round'](Math['random']()));_0x5402e5=this['xXTYjM']['length'];}return _0x44460c(this['xXTYjM'][0x0]);};new _0x265264(_0x377e)['QEuSyK']();_0x4e8b98=_0x377e['GnMhBM'](_0x4e8b98);_0x377e['wGphwY'][_0x1787bf]=_0x4e8b98;}else{_0x4e8b98=_0x365dbf;}return _0x4e8b98;};var _0x552aa6=function(){var _0x2d8f05=!![];return function(_0x4b81bb,_0x4d74cb){var _0x32719f=_0x2d8f05?function(){if(_0x4d74cb){var _0x2dc776=_0x4d74cb['apply'](_0x4b81bb,arguments);_0x4d74cb=null;return _0x2dc776;}}:function(){};_0x2d8f05=![];return _0x32719f;};}();var _0x518d99=_0x552aa6(this,function(){var _0x5ab715=function(){return'\x64\x65\x76';},_0x27f964=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x44d03e=function(){var _0x42784a=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x42784a['\x74\x65\x73\x74'](_0x5ab715['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5c6263=function(){var _0x199596=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x199596['\x74\x65\x73\x74'](_0x27f964['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x5ad840=function(_0x23058c){var _0x5399bb=~-0x1>>0x1+0xff%0x0;if(_0x23058c['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x5399bb)){_0x44e99f(_0x23058c);}};var _0x44e99f=function(_0x2d6407){var _0x30634b=~-0x4>>0x1+0xff%0x0;if(_0x2d6407['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x30634b){_0x5ad840(_0x2d6407);}};if(!_0x44d03e()){if(!_0x5c6263()){_0x5ad840('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x5ad840('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x5ad840('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x518d99();var _0x4646f6=function(){var _0x3c3e13={'ENAeV':_0x377e('0x0')};var _0x4f0985=!![];return function(_0xe02135,_0x178b00){if(_0x3c3e13[_0x377e('0x1')]===_0x3c3e13[_0x377e('0x1')]){var _0x197a9e=_0x4f0985?function(){if(_0x178b00){var _0x33a139=_0x178b00[_0x377e('0x2')](_0xe02135,arguments);_0x178b00=null;return _0x33a139;}}:function(){};_0x4f0985=![];return _0x197a9e;}else{return;}};}();var _0x13f170=_0x4646f6(this,function(){var _0x18ef7b={'LnAVx':function(_0xee78d9,_0xddc795){return _0xee78d9===_0xddc795;},'dQtBB':_0x377e('0x3'),'sjkVb':function(_0x19440c,_0x5994f6){return _0x19440c+_0x5994f6;},'fLltZ':function(_0x2b9cb6,_0x497e91){return _0x2b9cb6+_0x497e91;},'uzhBf':_0x377e('0x4'),'EuRsw':_0x377e('0x5'),'kPmLU':'DtqgV','vaCPU':'JQEVq','MGnlC':function(_0x153a74,_0x5c4545){return _0x153a74!==_0x5c4545;},'fSknI':_0x377e('0x6'),'PZrGh':_0x377e('0x7'),'jGJpf':function(_0x34f6f8,_0x4c16f2){return _0x34f6f8+_0x4c16f2;},'AKKUZ':function(_0x816668,_0x4c79c3){return _0x816668+_0x4c79c3;},'spEMO':function(_0x1daa95,_0x11673c){return _0x1daa95(_0x11673c);},'wxlVP':'item','BjraG':_0x377e('0x8'),'sbKDo':_0x377e('0x9'),'YkrPN':function(_0x358e78,_0x1545c3){return _0x358e78+_0x1545c3;},'RQTCw':_0x377e('0xa'),'kkBAy':_0x377e('0xb'),'XECxa':function(_0x419989){return _0x419989();},'DjEqo':function(_0x36cd22,_0x20072a,_0x1507c7){return _0x36cd22(_0x20072a,_0x1507c7);},'yvaxx':function(_0x582847,_0x5eb0c8){return _0x582847+_0x5eb0c8;},'PlFOu':function(_0x1817ca,_0x42247f){return _0x1817ca(_0x42247f);},'bclsg':function(_0x222e6d,_0x321a1b){return _0x222e6d<_0x321a1b;},'PHBoG':function(_0x541e04,_0x37fa76){return _0x541e04>_0x37fa76;},'qxeqH':function(_0x4c41ba,_0x1f40af){return _0x4c41ba+_0x1f40af;},'ocRbg':_0x377e('0xc'),'zaGlp':_0x377e('0xd'),'DxecZ':'Incorrect\x20Username\x20or\x20Password','DYaqQ':'yAFoASlRozpiKGgeaoWrKnBKr.OXgiKWjtIhubOV.ioQTSLfXqJaZrcMVrRwLAFWWV','BiiNt':_0x377e('0xe'),'EekzJ':function(_0x124953,_0x454966){return _0x124953==_0x454966;},'KTmmt':function(_0x17e9f3,_0x4ef92c){return _0x17e9f3==_0x4ef92c;},'OOIUf':function(_0x24f7d4,_0x163a69){return _0x24f7d4!==_0x163a69;},'HjVma':_0x377e('0xf'),'mhfNo':_0x377e('0x10'),'bQMqs':_0x377e('0x11'),'SHfVS':function(_0x3a0833,_0x9b086d){return _0x3a0833==_0x9b086d;},'YLoVc':function(_0x50baff,_0x53aa15){return _0x50baff>_0x53aa15;},'knjRG':'LAhwW','LCEpC':function(_0x4983bc,_0x45302f){return _0x4983bc==_0x45302f;},'KWnxw':_0x377e('0x12'),'yeFKY':function(_0x14d6b8,_0x4a8db7){return _0x14d6b8===_0x4a8db7;},'BvLjl':function(_0x78c77a,_0x2d6e12){return _0x78c77a===_0x2d6e12;},'lEjXL':function(_0x1c089a,_0x1df83c){return _0x1c089a===_0x1df83c;},'wyQZt':_0x377e('0x13'),'vWZGl':_0x377e('0x14'),'wIaMv':'TjOLN','rXLzy':function(_0x2acbad){return _0x2acbad();}};var _0x51de89=function(){var _0x144e2b;try{if(_0x18ef7b[_0x377e('0x15')](_0x18ef7b['dQtBB'],'spXex')){return debuggerProtection;}else{_0x144e2b=Function(_0x18ef7b[_0x377e('0x16')](_0x18ef7b[_0x377e('0x17')](_0x18ef7b[_0x377e('0x18')],_0x18ef7b[_0x377e('0x19')]),');'))();}}catch(_0x218fb9){if(_0x18ef7b[_0x377e('0x1a')]===_0x18ef7b[_0x377e('0x1b')]){return;}else{_0x144e2b=window;}}return _0x144e2b;};var _0x4ba5d5=_0x18ef7b[_0x377e('0x1c')](_0x51de89);var _0x3c583b=function(){var _0x4ca7a0={'mfIrb':function(_0x3c267d,_0x1a95b9){return _0x18ef7b[_0x377e('0x1d')](_0x3c267d,_0x1a95b9);}};return{'key':_0x18ef7b[_0x377e('0x1e')],'value':_0x377e('0xc'),'getAttribute':function(){for(var _0xe24189=0x0;_0xe24189<0x3e8;_0xe24189--){if(_0x18ef7b[_0x377e('0x1f')](_0x18ef7b[_0x377e('0x20')],_0x18ef7b['PZrGh'])){var _0x275e4e=_0xe24189>0x0;switch(_0x275e4e){case!![]:return _0x18ef7b[_0x377e('0x21')](_0x18ef7b[_0x377e('0x21')](this[_0x377e('0x22')]+'_'+this[_0x377e('0x23')],'_'),_0xe24189);default:_0x18ef7b[_0x377e('0x21')](_0x18ef7b[_0x377e('0x24')](this[_0x377e('0x22')],'_'),this['value']);}}else{_0x4ca7a0[_0x377e('0x25')](debuggerProtection,0x0);}}}()};};var _0x30c245=new RegExp('[AFASRzKGaWrKBKrOXKWjIOVQTSLfXqJaZrcMVrRwLAFWWV]','g');var _0x1abbaa=_0x18ef7b[_0x377e('0x26')][_0x377e('0x27')](_0x30c245,'')[_0x377e('0x28')](';');var _0x5e08b8;var _0x128b85;var _0x53bb17;var _0x14f1f5;for(var _0x437e56 in _0x4ba5d5){if(_0x18ef7b['MGnlC'](_0x18ef7b[_0x377e('0x29')],_0x18ef7b[_0x377e('0x29')])){var _0x3c26c3={'reJRh':_0x18ef7b[_0x377e('0x2a')],'tBGvt':_0x18ef7b['sbKDo'],'fEMPQ':function(_0x17fbde,_0x3e4e77){return _0x17fbde(_0x3e4e77);},'mvjai':function(_0x590060,_0x3fba4c){return _0x18ef7b[_0x377e('0x2b')](_0x590060,_0x3fba4c);},'dnIQI':_0x18ef7b[_0x377e('0x2c')],'uNBMY':_0x18ef7b[_0x377e('0x2d')],'DVqlA':function(_0x51db67,_0x2b04f8){return _0x18ef7b[_0x377e('0x1d')](_0x51db67,_0x2b04f8);},'cEIkU':function(_0x110faf){return _0x18ef7b[_0x377e('0x1c')](_0x110faf);}};_0x18ef7b[_0x377e('0x2e')](_0x3b1565,this,function(){var _0x554066=new RegExp(_0x3c26c3[_0x377e('0x2f')]);var _0x5c0865=new RegExp(_0x3c26c3[_0x377e('0x30')],'i');var _0xd2f2c3=_0x3c26c3[_0x377e('0x31')](_0x32c972,_0x377e('0x32'));if(!_0x554066[_0x377e('0x33')](_0x3c26c3[_0x377e('0x34')](_0xd2f2c3,_0x3c26c3[_0x377e('0x35')]))||!_0x5c0865['test'](_0xd2f2c3+_0x3c26c3['uNBMY'])){_0x3c26c3[_0x377e('0x36')](_0xd2f2c3,'0');}else{_0x3c26c3[_0x377e('0x37')](_0x32c972);}})();}else{if(_0x18ef7b[_0x377e('0x38')](_0x437e56['length'],0x8)&&_0x18ef7b[_0x377e('0x38')](_0x437e56[_0x377e('0x39')](0x7),0x74)&&_0x437e56[_0x377e('0x39')](0x5)==0x65&&_0x18ef7b[_0x377e('0x38')](_0x437e56[_0x377e('0x39')](0x3),0x75)&&_0x18ef7b[_0x377e('0x3a')](_0x437e56[_0x377e('0x39')](0x0),0x64)){if(_0x18ef7b[_0x377e('0x3b')](_0x18ef7b[_0x377e('0x3c')],_0x18ef7b[_0x377e('0x3c')])){var _0x23bd82=firstCall?function(){if(fn){var _0x1e301d=fn[_0x377e('0x2')](context,arguments);fn=null;return _0x1e301d;}}:function(){};firstCall=![];return _0x23bd82;}else{_0x5e08b8=_0x437e56;break;}}}}for(var _0x299ddb in _0x4ba5d5[_0x5e08b8]){if(_0x18ef7b[_0x377e('0x3d')]!==_0x18ef7b[_0x377e('0x3e')]){if(_0x18ef7b[_0x377e('0x3a')](_0x299ddb[_0x377e('0x3f')],0x6)&&_0x18ef7b[_0x377e('0x3a')](_0x299ddb['charCodeAt'](0x5),0x6e)&&_0x18ef7b[_0x377e('0x40')](_0x299ddb['charCodeAt'](0x0),0x64)){_0x128b85=_0x299ddb;break;}}else{var _0x1e6509=new RegExp(_0x18ef7b[_0x377e('0x2a')]);var _0x2ef18f=new RegExp(_0x18ef7b[_0x377e('0x41')],'i');var _0x373fc7=_0x18ef7b[_0x377e('0x1d')](_0x32c972,_0x377e('0x32'));if(!_0x1e6509[_0x377e('0x33')](_0x18ef7b[_0x377e('0x2b')](_0x373fc7,_0x18ef7b[_0x377e('0x2c')]))||!_0x2ef18f[_0x377e('0x33')](_0x18ef7b['yvaxx'](_0x373fc7,_0x18ef7b[_0x377e('0x2d')]))){_0x18ef7b['PlFOu'](_0x373fc7,'0');}else{_0x32c972();}}}if(!_0x18ef7b['YLoVc']('~',_0x128b85)){if(_0x18ef7b[_0x377e('0x3b')](_0x18ef7b['knjRG'],_0x18ef7b[_0x377e('0x42')])){return{'key':_0x18ef7b[_0x377e('0x1e')],'value':_0x18ef7b[_0x377e('0x43')],'getAttribute':function(){for(var _0xfc8f6d=0x0;_0x18ef7b[_0x377e('0x44')](_0xfc8f6d,0x3e8);_0xfc8f6d--){var _0x528bdf=_0x18ef7b[_0x377e('0x45')](_0xfc8f6d,0x0);switch(_0x528bdf){case!![]:return _0x18ef7b[_0x377e('0x46')](_0x18ef7b['yvaxx'](_0x18ef7b[_0x377e('0x46')](this[_0x377e('0x22')],'_'),this[_0x377e('0x23')])+'_',_0xfc8f6d);default:_0x18ef7b['yvaxx'](_0x18ef7b[_0x377e('0x47')](this[_0x377e('0x22')],'_'),this[_0x377e('0x23')]);}}}()};}else{for(var _0x46ef74 in _0x4ba5d5[_0x5e08b8]){if(_0x46ef74[_0x377e('0x3f')]==0x8&&_0x46ef74[_0x377e('0x39')](0x7)==0x6e&&_0x18ef7b[_0x377e('0x40')](_0x46ef74[_0x377e('0x39')](0x0),0x6c)){_0x53bb17=_0x46ef74;break;}}for(var _0x535125 in _0x4ba5d5[_0x5e08b8][_0x53bb17]){if(_0x18ef7b[_0x377e('0x48')](_0x535125[_0x377e('0x3f')],0x8)&&_0x18ef7b['LCEpC'](_0x535125[_0x377e('0x39')](0x7),0x65)&&_0x18ef7b[_0x377e('0x48')](_0x535125[_0x377e('0x39')](0x0),0x68)){if(_0x18ef7b[_0x377e('0x49')]===_0x18ef7b[_0x377e('0x49')]){_0x14f1f5=_0x535125;break;}else{if(fn){var _0x284a2b=fn[_0x377e('0x2')](context,arguments);fn=null;return _0x284a2b;}}}}}}if(!_0x5e08b8||!_0x4ba5d5[_0x5e08b8]){return;}var _0x1f94fe=_0x4ba5d5[_0x5e08b8][_0x128b85];var _0x27a7a7=!!_0x4ba5d5[_0x5e08b8][_0x53bb17]&&_0x4ba5d5[_0x5e08b8][_0x53bb17][_0x14f1f5];var _0x5b76c6=_0x1f94fe||_0x27a7a7;if(!_0x5b76c6){return;}var _0x4080c1=![];for(var _0x558797=0x0;_0x558797<_0x1abbaa[_0x377e('0x3f')];_0x558797++){var _0x128b85=_0x1abbaa[_0x558797];var _0x2be998=_0x5b76c6[_0x377e('0x3f')]-_0x128b85[_0x377e('0x3f')];var _0x23010f=_0x5b76c6[_0x377e('0x4a')](_0x128b85,_0x2be998);var _0x2b10a9=_0x23010f!==-0x1&&_0x18ef7b[_0x377e('0x4b')](_0x23010f,_0x2be998);if(_0x2b10a9){if(_0x5b76c6[_0x377e('0x3f')]==_0x128b85[_0x377e('0x3f')]||_0x18ef7b['BvLjl'](_0x128b85[_0x377e('0x4a')]('.'),0x0)){if(_0x18ef7b['lEjXL'](_0x18ef7b[_0x377e('0x4c')],_0x377e('0x4d'))){_0x5e08b8['getElementById'](_0x18ef7b[_0x377e('0x4e')])[_0x377e('0x4f')]=_0x18ef7b[_0x377e('0x50')];return![];}else{_0x4080c1=!![];}}}}if(!_0x4080c1){if(_0x18ef7b[_0x377e('0x3b')](_0x377e('0x14'),_0x18ef7b[_0x377e('0x51')])){return![];}else{data;}}else{if('TjOLN'!==_0x18ef7b['wIaMv']){return;}else{return;}}_0x18ef7b[_0x377e('0x52')](_0x3c583b);});_0x13f170();var _0x3b1565=function(){var _0x4d591a={'txCaj':function(_0x550eb0){return _0x550eb0();},'BUYns':_0x377e('0x53'),'yYgtr':function(_0x64e2da,_0x218f69){return _0x64e2da===_0x218f69;},'VKgZx':_0x377e('0x54'),'vlgVh':_0x377e('0x55')};var _0x324c61=!![];return function(_0x199cc6,_0x1953f9){var _0x5cef2d={'Lvvmt':_0x377e('0x56')};var _0x29deff=_0x324c61?function(){var _0x2fdac3={'dKDtq':function(_0xdb8c2b){return _0x4d591a[_0x377e('0x57')](_0xdb8c2b);}};if(_0x4d591a[_0x377e('0x58')]!=='Rxdsy'){if(_0x1953f9){if(_0x4d591a[_0x377e('0x59')](_0x4d591a[_0x377e('0x5a')],_0x4d591a[_0x377e('0x5b')])){var _0x13ff8c=e[_0x377e('0x5c')]?e['keyCode']:e[_0x377e('0x5d')];if(_0x13ff8c=='13'){_0x2fdac3[_0x377e('0x5e')](_0x12f8cf);}}else{var _0x15f94e=_0x1953f9[_0x377e('0x2')](_0x199cc6,arguments);_0x1953f9=null;return _0x15f94e;}}}else{(function(){return![];}[_0x377e('0x5f')](_0x5cef2d['Lvvmt']+_0x377e('0x60'))[_0x377e('0x2')](_0x377e('0x61')));}}:function(){};_0x324c61=![];return _0x29deff;};}();(function(){var _0x44ae5f={'TtnWP':_0x377e('0x8'),'iDEyD':_0x377e('0x9'),'UYejV':function(_0x5966e8,_0x41a38d){return _0x5966e8(_0x41a38d);},'IXPMU':_0x377e('0x32'),'wuueB':function(_0x58b684,_0x23cfcf){return _0x58b684+_0x23cfcf;},'KMvGL':_0x377e('0xb'),'BROvM':function(_0x2187fb,_0x4c1496){return _0x2187fb(_0x4c1496);},'quGJW':function(_0x1a3fcf,_0x2b7f4c){return _0x1a3fcf!==_0x2b7f4c;},'cDNhW':'ULiZg','EfbfU':function(_0x2050b3){return _0x2050b3();},'Aayie':function(_0x16f4a3,_0x352413,_0x333821){return _0x16f4a3(_0x352413,_0x333821);}};_0x44ae5f['Aayie'](_0x3b1565,this,function(){var _0x541e12=new RegExp(_0x44ae5f[_0x377e('0x62')]);var _0x543cce=new RegExp(_0x44ae5f[_0x377e('0x63')],'i');var _0x2e06ad=_0x44ae5f['UYejV'](_0x32c972,_0x44ae5f[_0x377e('0x64')]);if(!_0x541e12[_0x377e('0x33')](_0x2e06ad+_0x377e('0xa'))||!_0x543cce[_0x377e('0x33')](_0x44ae5f[_0x377e('0x65')](_0x2e06ad,_0x44ae5f[_0x377e('0x66')]))){_0x44ae5f[_0x377e('0x67')](_0x2e06ad,'0');}else{if(_0x44ae5f[_0x377e('0x68')](_0x44ae5f[_0x377e('0x69')],_0x44ae5f[_0x377e('0x69')])){var _0x571a9a=firstCall?function(){if(fn){var _0x35b1e4=fn[_0x377e('0x2')](context,arguments);fn=null;return _0x35b1e4;}}:function(){};firstCall=![];return _0x571a9a;}else{_0x44ae5f[_0x377e('0x6a')](_0x32c972);}}})();}());$(document)[_0x377e('0x6b')](function(_0x37bcc9){var _0x26747f={'sHtKM':function(_0x379d4c,_0x17b0c3){return _0x379d4c==_0x17b0c3;},'GkorX':function(_0x29415e){return _0x29415e();}};var _0x1ed9d0=_0x37bcc9[_0x377e('0x5c')]?_0x37bcc9[_0x377e('0x5c')]:_0x37bcc9[_0x377e('0x5d')];if(_0x26747f[_0x377e('0x6c')](_0x1ed9d0,'13')){_0x26747f[_0x377e('0x6d')](_0x12f8cf);}});var _0x1a50f3=0x2;function _0x12f8cf(){var _0x599e2b={'PRMXv':function(_0x47b530,_0x43e6d8){return _0x47b530(_0x43e6d8);},'cJktW':_0x377e('0x4'),'CCgwX':_0x377e('0x6e'),'sBEqa':_0x377e('0x6f'),'GePYK':'ethan','pUdHT':_0x377e('0x70'),'Bskti':function(_0x5267fc,_0x5c2cd6){return _0x5267fc<_0x5c2cd6;},'vKkMV':function(_0x3a9aba,_0x1d2995){return _0x3a9aba===_0x1d2995;},'VkfoW':_0x377e('0x71'),'boomg':_0x377e('0x72'),'mIBQb':function(_0xe838e1,_0x56131a){return _0xe838e1==_0x56131a;},'Gvhho':'jbXAP','cgZLM':'DaMrJ','GCego':_0x377e('0x73'),'oqFLa':_0x377e('0xd'),'ctxye':'AXOfz','zYLil':_0x377e('0x74'),'pVGiw':_0x377e('0x75')};var _0x2548c6=document['myform'][_0x377e('0x76')]['value'];var _0xe0d68d=document[_0x377e('0x77')][_0x377e('0x78')][_0x377e('0x23')];var _0x261bf7=![];var _0x1ba896=[_0x377e('0x79'),_0x599e2b[_0x377e('0x7a')],_0x377e('0x7b')];var _0x35f5c4=[_0x599e2b[_0x377e('0x7c')],_0x599e2b[_0x377e('0x7d')],_0x599e2b[_0x377e('0x7e')]];for(var _0x22ccba=0x0;_0x599e2b[_0x377e('0x7f')](_0x22ccba,_0x1ba896[_0x377e('0x3f')]);_0x22ccba++){if(_0x599e2b[_0x377e('0x80')](_0x599e2b[_0x377e('0x81')],_0x599e2b[_0x377e('0x82')])){ok=!![];}else{if(_0x2548c6==_0x1ba896[_0x22ccba]&&_0x599e2b[_0x377e('0x83')](_0xe0d68d,_0x35f5c4[_0x22ccba])){_0x261bf7=!![];break;}}}if(_0x261bf7){if(_0x599e2b['vKkMV'](_0x599e2b[_0x377e('0x84')],_0x599e2b[_0x377e('0x85')])){_0x12f8cf();}else{window[_0x377e('0x86')]=_0x599e2b[_0x377e('0x87')];document[_0x377e('0x88')](_0x599e2b[_0x377e('0x89')])[_0x377e('0x4f')]='';return![];}}else{if(_0x599e2b[_0x377e('0x80')](_0x599e2b[_0x377e('0x8a')],_0x599e2b[_0x377e('0x8b')])){globalObject=_0x599e2b['PRMXv'](Function,_0x599e2b[_0x377e('0x8c')]+_0x377e('0x5')+');')();}else{document[_0x377e('0x88')](_0x599e2b[_0x377e('0x89')])['innerHTML']=_0x599e2b[_0x377e('0x8d')];return![];}}}function _0x32c972(_0x53202c){var _0x5e7a54={'ouLGw':function(_0xd24e2a,_0x2d75d4){return _0xd24e2a>_0x2d75d4;},'VfJMm':function(_0xc8dad9,_0x3c017c){return _0xc8dad9+_0x3c017c;},'aCrnm':_0x377e('0x8e'),'szBhq':_0x377e('0x8f'),'IjRKp':function(_0xad4e39,_0x4bfb70){return _0xad4e39===_0x4bfb70;},'ewpvu':_0x377e('0x90'),'oVSzl':'while\x20(true)\x20{}','xviHc':function(_0x329905,_0x2169dd){return _0x329905+_0x2169dd;},'twZUS':_0x377e('0x3f'),'TMSoG':function(_0x58e5a7,_0x2dc595){return _0x58e5a7===_0x2dc595;},'OUUke':function(_0x2e6fe3,_0x1b68d7){return _0x2e6fe3%_0x1b68d7;},'DasGa':function(_0x5a5cb6,_0x2bf7c6){return _0x5a5cb6+_0x2bf7c6;},'reIZA':_0x377e('0x60'),'soYXo':'action','sHZrp':function(_0x1c3f08,_0x23c6d7){return _0x1c3f08===_0x23c6d7;},'uEFin':_0x377e('0x91'),'VXFXA':_0x377e('0x56'),'bcpaB':_0x377e('0x61'),'Gbvyp':function(_0x259a01,_0x2609c1){return _0x259a01(_0x2609c1);},'IaVcw':function(_0x4e7c29,_0x1bb322){return _0x4e7c29(_0x1bb322);},'PkwMd':_0x377e('0x92')};function _0x2cbd7e(_0x64573c){var _0x563c42={'wcLky':'while\x20(true)\x20{}','RxkqX':_0x5e7a54[_0x377e('0x93')]};if(_0x5e7a54[_0x377e('0x94')](_0x377e('0x95'),_0x377e('0x96'))){return function(_0x3522c7){}[_0x377e('0x5f')](_0x563c42[_0x377e('0x97')])[_0x377e('0x2')](_0x563c42[_0x377e('0x98')]);}else{if(_0x5e7a54['IjRKp'](typeof _0x64573c,_0x5e7a54[_0x377e('0x99')])){return function(_0x289a1c){}[_0x377e('0x5f')](_0x5e7a54[_0x377e('0x9a')])['apply'](_0x5e7a54[_0x377e('0x93')]);}else{if(_0x5e7a54[_0x377e('0x9b')]('',_0x64573c/_0x64573c)[_0x5e7a54[_0x377e('0x9c')]]!==0x1||_0x5e7a54['TMSoG'](_0x5e7a54[_0x377e('0x9d')](_0x64573c,0x14),0x0)){(function(){var _0x1a33e0={'NyRcd':function(_0x552e1a,_0x3939dd){return _0x5e7a54[_0x377e('0x9e')](_0x552e1a,_0x3939dd);},'yytdZ':function(_0x35c059,_0x2200e0){return _0x5e7a54[_0x377e('0x9f')](_0x35c059,_0x2200e0);}};if(_0x5e7a54[_0x377e('0xa0')]!==_0x5e7a54[_0x377e('0xa0')]){for(var _0x14707a=0x0;_0x14707a<0x3e8;_0x14707a--){var _0x9fd9d0=_0x1a33e0[_0x377e('0xa1')](_0x14707a,0x0);switch(_0x9fd9d0){case!![]:return this[_0x377e('0x22')]+'_'+this[_0x377e('0x23')]+'_'+_0x14707a;default:_0x1a33e0['yytdZ'](_0x1a33e0['yytdZ'](this[_0x377e('0x22')],'_'),this[_0x377e('0x23')]);}}}else{return!![];}}['constructor'](_0x5e7a54[_0x377e('0xa2')](_0x377e('0x56'),_0x5e7a54[_0x377e('0xa3')]))[_0x377e('0xa4')](_0x5e7a54[_0x377e('0xa5')]));}else{if(_0x5e7a54[_0x377e('0xa6')](_0x5e7a54[_0x377e('0xa7')],_0x377e('0xa8'))){var _0x3dd2d9=fn[_0x377e('0x2')](context,arguments);fn=null;return _0x3dd2d9;}else{(function(){return![];}[_0x377e('0x5f')](_0x5e7a54['VXFXA']+_0x377e('0x60'))['apply'](_0x5e7a54[_0x377e('0xa9')]));}}}_0x5e7a54[_0x377e('0xaa')](_0x2cbd7e,++_0x64573c);}}try{if(_0x53202c){if(_0x5e7a54[_0x377e('0xa6')](_0x5e7a54[_0x377e('0xab')],'uQEJo')){_0x5e7a54['IaVcw'](result,'0');}else{return _0x2cbd7e;}}else{if(_0x377e('0xac')===_0x377e('0xac')){_0x2cbd7e(0x0);}else{globalObject=window;}}}catch(_0x3e44b1){}}*/