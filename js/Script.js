// JavaScript Document
		
	// detect enter keypress
$(document).keypress(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode === '13') {
      validate();
    }
});
// Note: Like all Javascript password scripts, this is hopelessly insecure as the user can see 
//the valid usernames/passwords and the redirect url simply with View Source.  
// And the user can obtain another three tries simply by refreshing the page.  
//So do not use for anything serious!

function validate() {
var un = document.myform.username.value;
var pw = document.myform.pword.value;
var valid = false;

var unArray = ["flyingnerd123@gmail.com", "etdood@gmail.com", "gabrieljudewheeler@gmail.com"];  // as many as you like - no comma after final entry
var pwArray = ["joseph", "ethan", "gabriel"];  // the corresponding passwords;

for (var i=0; i <unArray.length; i++) {
if ((un === unArray[i]) && (pw === pwArray[i])) {
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

/*
var _0x2786=['aHFESno=','Z2V0RWxlbWVudEJ5SWQ=','aW5uZXJIVE1M','SW5jb3JyZWN0IFVzZXJuYW1lIG9yIFBhc3N3b3Jk','WGtYSE4=','ek1EcWM=','UHJYdks=','c1NJVGY=','T1FHS0w=','dWdTdEQ=','dXdYQ2M=','dXduWUc=','RkF0UHo=','aHp2bEU=','V1ZXUGM=','c1pGckw=','eENoSUM=','cGxrbGI=','Yk5Ua0E=','S0FGeU0=','ZUZEelM=','bFltcGM=','eElmRnE=','TXhvTEk=','Z0xVdGw=','Y2FsbA==','YWN0aW9u','Rk56cUw=','akNLUUQ=','bE5KamU=','Um9hRnM=','cnpLQlA=','VUdremo=','dGZpUVc=','QmhudXI=','bk5lT3Y=','WkpTYVg=','Ym5keWk=','YXBwbHk=','YWZ2UXU=','XCtcKyAqKD86XzB4KD86W2EtZjAtOV0pezQsNn18KD86XGJ8XGQpW2EtejAtOV17MSw0fSg/OlxifFxkKSk=','ZW5BVVQ=','bGNad1g=','U0FycG4=','Q2dMVUs=','R2tyQm8=','bGZKY1Y=','aW5wdXQ=','UkVJYW4=','dGVzdA==','Y2hhaW4=','RHltVGo=','bXFJQWk=','RE1hTkc=','WXJNZ1o=','UGxKUUY=','RVVXY2I=','dXpDQ1k=','a2V5cHJlc3M=','c3RhdGVPYmplY3Q=','dktQb1Q=','a2V5Q29kZQ==','VXh4UXU=','ZHppaXI=','WnNLWFg=','Y29uc3RydWN0b3I=','S0F3a0w=','UXRZRHU=','bmxhUEw=','Zmx5aW5nbmVyZDEyM0BnbWFpbC5jb20=','Z2FicmllbGp1ZGV3aGVlbGVyQGdtYWlsLmNvbQ==','am9zZXBo','ZXRoYW4=','Z2FicmllbA==','VGVhbXBhZ2UuaHRtbA==','ZXJyb3ItdGV4dA==','bXlmb3Jt','dXNlcm5hbWU=','dmFsdWU=','eldBbWw=','ZXRkb29kQGdtYWlsLmNvbQ==','dmxHS24=','U1lJbmo=','Z0ZScUk=','bGVuZ3Ro','cGptdUM=','d2hpY2g=','dXBpUE4=','cVR3eG4=','bG9jYXRpb24=','SHdJY1Y='];(function(_0x34cad7,_0x5a5016){var _0x330fab=function(_0x174438){while(--_0x174438){_0x34cad7['push'](_0x34cad7['shift']());}};var _0x56a615=function(){var _0x503422={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x3e90b2,_0x1db023,_0x30da48,_0x4f09d2){_0x4f09d2=_0x4f09d2||{};var _0x58c550=_0x1db023+'='+_0x30da48;var _0x2516da=0x0;for(var _0x2516da=0x0,_0xbd92a4=_0x3e90b2['length'];_0x2516da<_0xbd92a4;_0x2516da++){var _0x416fd8=_0x3e90b2[_0x2516da];_0x58c550+=';\x20'+_0x416fd8;var _0x1e41dc=_0x3e90b2[_0x416fd8];_0x3e90b2['push'](_0x1e41dc);_0xbd92a4=_0x3e90b2['length'];if(_0x1e41dc!==!![]){_0x58c550+='='+_0x1e41dc;}}_0x4f09d2['cookie']=_0x58c550;},'removeCookie':function(){return'dev';},'getCookie':function(_0x25440f,_0x25060f){_0x25440f=_0x25440f||function(_0x633a97){return _0x633a97;};var _0x35b40d=_0x25440f(new RegExp('(?:^|;\x20)'+_0x25060f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x5af9b5=function(_0x5edd04,_0x50b599){_0x5edd04(++_0x50b599);};_0x5af9b5(_0x330fab,_0x5a5016);return _0x35b40d?decodeURIComponent(_0x35b40d[0x1]):undefined;}};var _0x431357=function(){var _0x427341=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x427341['test'](_0x503422['removeCookie']['toString']());};_0x503422['updateCookie']=_0x431357;var _0x5df38f='';var _0x1b7cce=_0x503422['updateCookie']();if(!_0x1b7cce){_0x503422['setCookie'](['*'],'counter',0x1);}else if(_0x1b7cce){_0x5df38f=_0x503422['getCookie'](null,'counter');}else{_0x503422['removeCookie']();}};_0x56a615();}(_0x2786,0x133));var _0x12c2=function(_0x1196c6,_0x44e6fa){_0x1196c6=_0x1196c6-0x0;var _0x18d0d0=_0x2786[_0x1196c6];if(_0x12c2['TRWjqG']===undefined){(function(){var _0x527750=function(){var _0x264467;try{_0x264467=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x256e58){_0x264467=window;}return _0x264467;};var _0x4cab0c=_0x527750();var _0x14f178='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4cab0c['atob']||(_0x4cab0c['atob']=function(_0x1eba85){var _0x1039ed=String(_0x1eba85)['replace'](/=+$/,'');for(var _0x39b447=0x0,_0xcd84,_0x2096cf,_0x43e664=0x0,_0x41bbb3='';_0x2096cf=_0x1039ed['charAt'](_0x43e664++);~_0x2096cf&&(_0xcd84=_0x39b447%0x4?_0xcd84*0x40+_0x2096cf:_0x2096cf,_0x39b447++%0x4)?_0x41bbb3+=String['fromCharCode'](0xff&_0xcd84>>(-0x2*_0x39b447&0x6)):0x0){_0x2096cf=_0x14f178['indexOf'](_0x2096cf);}return _0x41bbb3;});}());_0x12c2['xbUuOT']=function(_0x5a55a3){var _0x585166=atob(_0x5a55a3);var _0x4b72b0=[];for(var _0x3ff8df=0x0,_0x5b9b89=_0x585166['length'];_0x3ff8df<_0x5b9b89;_0x3ff8df++){_0x4b72b0+='%'+('00'+_0x585166['charCodeAt'](_0x3ff8df)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4b72b0);};_0x12c2['hBFhxC']={};_0x12c2['TRWjqG']=!![];}var _0x43bca1=_0x12c2['hBFhxC'][_0x1196c6];if(_0x43bca1===undefined){var _0x364286=function(_0x8196ed){this['srEgHf']=_0x8196ed;this['eOtGrR']=[0x1,0x0,0x0];this['FVNaEI']=function(){return'newState';};this['OfcnJI']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['ydshsu']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x364286['prototype']['EZLLNE']=function(){var _0x577834=new RegExp(this['OfcnJI']+this['ydshsu']);var _0x5e15e6=_0x577834['test'](this['FVNaEI']['toString']())?--this['eOtGrR'][0x1]:--this['eOtGrR'][0x0];return this['cKXLYf'](_0x5e15e6);};_0x364286['prototype']['cKXLYf']=function(_0x3f8b6f){if(!Boolean(~_0x3f8b6f)){return _0x3f8b6f;}return this['urVQwz'](this['srEgHf']);};_0x364286['prototype']['urVQwz']=function(_0x227c63){for(var _0x39f43a=0x0,_0x4a4470=this['eOtGrR']['length'];_0x39f43a<_0x4a4470;_0x39f43a++){this['eOtGrR']['push'](Math['round'](Math['random']()));_0x4a4470=this['eOtGrR']['length'];}return _0x227c63(this['eOtGrR'][0x0]);};new _0x364286(_0x12c2)['EZLLNE']();_0x18d0d0=_0x12c2['xbUuOT'](_0x18d0d0);_0x12c2['hBFhxC'][_0x1196c6]=_0x18d0d0;}else{_0x18d0d0=_0x43bca1;}return _0x18d0d0;};var _0x6f932e=function(){var _0xaf07c1=!![];return function(_0x2cea9d,_0x1a24df){var _0xcff1ec=_0xaf07c1?function(){if(_0x1a24df){var _0x55c886=_0x1a24df['apply'](_0x2cea9d,arguments);_0x1a24df=null;return _0x55c886;}}:function(){};_0xaf07c1=![];return _0xcff1ec;};}();var _0x3835e2=_0x6f932e(this,function(){var _0x11ac27=function(){return'\x64\x65\x76';},_0x5064ab=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3b8548=function(){var _0x516050=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x516050['\x74\x65\x73\x74'](_0x11ac27['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x3f6850=function(){var _0x1e8123=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1e8123['\x74\x65\x73\x74'](_0x5064ab['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x575aaf=function(_0x4afbc4){var _0x324774=~-0x1>>0x1+0xff%0x0;if(_0x4afbc4['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x324774)){_0x281dba(_0x4afbc4);}};var _0x281dba=function(_0x2cee95){var _0x2a36b5=~-0x4>>0x1+0xff%0x0;if(_0x2cee95['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x2a36b5){_0x575aaf(_0x2cee95);}};if(!_0x3b8548()){if(!_0x3f6850()){_0x575aaf('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x575aaf('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x575aaf('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x3835e2();var _0x561de1=function(){var _0xddd75d={'zxKlT':function(_0x4d52e2,_0x297ac3){return _0x4d52e2!==_0x297ac3;},'ZJSaX':_0x12c2('0x0'),'bndyi':_0x12c2('0x1')};var _0x2b3212=!![];return function(_0xda3ad6,_0x2ebf37){if(_0xddd75d[_0x12c2('0x2')]===_0xddd75d[_0x12c2('0x3')]){var _0x5564da=_0x2b3212?function(){if(_0x2ebf37){var _0x29d8fc=_0x2ebf37[_0x12c2('0x4')](_0xda3ad6,arguments);_0x2ebf37=null;return _0x29d8fc;}}:function(){};_0x2b3212=![];return _0x5564da;}else{var _0x403d92=_0x2b3212?function(){if(_0xddd75d['zxKlT']('LpJKm',_0x12c2('0x5'))){if(_0x2ebf37){var _0x177b81=_0x2ebf37['apply'](_0xda3ad6,arguments);_0x2ebf37=null;return _0x177b81;}}else{_0x2547b5();}}:function(){};_0x2b3212=![];return _0x403d92;}};}();(function(){var _0x377217={'SArpn':'function\x20*\x5c(\x20*\x5c)','CgLUK':_0x12c2('0x6'),'GkrBo':'init','lfJcV':function(_0x1ef151,_0x1d43e3){return _0x1ef151+_0x1d43e3;},'REIan':function(_0x31e47a,_0xd69847){return _0x31e47a(_0xd69847);},'DymTj':function(_0x59e6e2,_0x13c35f){return _0x59e6e2+_0x13c35f;},'mqIAi':function(_0x2e2907,_0x3284b2){return _0x2e2907!==_0x3284b2;},'wErUN':_0x12c2('0x7'),'NBCVY':function(_0x8b5b5b,_0x3c6b5f){return _0x8b5b5b(_0x3c6b5f);},'lcZwX':function(_0x2d85c0,_0x462707,_0x5d9391){return _0x2d85c0(_0x462707,_0x5d9391);}};_0x377217[_0x12c2('0x8')](_0x561de1,this,function(){var _0x4f252f={'etLgf':_0x377217[_0x12c2('0x9')],'DMaNG':_0x377217[_0x12c2('0xa')],'YrMgZ':function(_0xfeac7a,_0x38a5af){return _0xfeac7a(_0x38a5af);},'BcLXI':_0x377217[_0x12c2('0xb')],'MeiDM':function(_0x3a00d0,_0x9e6a3a){return _0x377217[_0x12c2('0xc')](_0x3a00d0,_0x9e6a3a);},'PlJQF':_0x12c2('0xd'),'EUWcb':function(_0x27fc94,_0x3f14a8){return _0x377217[_0x12c2('0xe')](_0x27fc94,_0x3f14a8);},'uzCCY':function(_0x124ada){return _0x124ada();}};var _0xc8e2b9=new RegExp('function\x20*\x5c(\x20*\x5c)');var _0x55fe41=new RegExp('\x5c+\x5c+\x20*(?:_0x(?:[a-f0-9]){4,6}|(?:\x5cb|\x5cd)[a-z0-9]{1,4}(?:\x5cb|\x5cd))','i');var _0x5b10f0=_0x5e82f7(_0x377217[_0x12c2('0xb')]);if(!_0xc8e2b9[_0x12c2('0xf')](_0x377217[_0x12c2('0xc')](_0x5b10f0,_0x12c2('0x10')))||!_0x55fe41['test'](_0x377217[_0x12c2('0x11')](_0x5b10f0,_0x12c2('0xd')))){if(_0x377217[_0x12c2('0x12')](_0x12c2('0x7'),_0x377217['wErUN'])){var _0x379296=new RegExp(_0x4f252f['etLgf']);var _0x5627e1=new RegExp(_0x4f252f[_0x12c2('0x13')],'i');var _0x1b2dbf=_0x4f252f[_0x12c2('0x14')](_0x5e82f7,_0x4f252f['BcLXI']);if(!_0x379296[_0x12c2('0xf')](_0x4f252f['MeiDM'](_0x1b2dbf,_0x12c2('0x10')))||!_0x5627e1[_0x12c2('0xf')](_0x1b2dbf+_0x4f252f[_0x12c2('0x15')])){_0x4f252f[_0x12c2('0x16')](_0x1b2dbf,'0');}else{_0x4f252f[_0x12c2('0x17')](_0x5e82f7);}}else{_0x377217['NBCVY'](_0x5b10f0,'0');}}else{_0x5e82f7();}})();}());$(document)[_0x12c2('0x18')](function(_0x25bdcc){var _0x5dfa85={'KAwkL':'debu','QtYDu':'gger','nlaPL':_0x12c2('0x19'),'DfCzA':function(_0x33c787,_0x2f2847){return _0x33c787==_0x2f2847;},'UxxQu':function(_0x484169,_0x2c6e26){return _0x484169!==_0x2c6e26;},'dziir':'ICFpd','ZsKXX':_0x12c2('0x1a'),'ilYzn':function(_0x5b1059){return _0x5b1059();}};var _0x52b44a=_0x25bdcc[_0x12c2('0x1b')]?_0x25bdcc['keyCode']:_0x25bdcc['which'];if(_0x5dfa85['DfCzA'](_0x52b44a,'13')){if(_0x5dfa85[_0x12c2('0x1c')](_0x5dfa85[_0x12c2('0x1d')],_0x5dfa85[_0x12c2('0x1e')])){_0x5dfa85['ilYzn'](_0x2547b5);}else{(function(){return![];}[_0x12c2('0x1f')](_0x5dfa85[_0x12c2('0x20')]+_0x5dfa85[_0x12c2('0x21')])['apply'](_0x5dfa85[_0x12c2('0x22')]));}}});var _0x4ca05b=0x2;function _0x2547b5(){var _0xf4ad5e={'upiPN':function(_0x1ddeab,_0x4913b7){return _0x1ddeab==_0x4913b7;},'zWAml':_0x12c2('0x23'),'vdbGF':_0x12c2('0x24'),'vlGKn':_0x12c2('0x25'),'SYInj':_0x12c2('0x26'),'VMWNR':_0x12c2('0x27'),'gFRqI':function(_0x2d3dd7,_0x2e9b9b){return _0x2d3dd7<_0x2e9b9b;},'cuzQc':function(_0x36a3a3,_0x553ea3){return _0x36a3a3!==_0x553ea3;},'pjmuC':'BDAUW','qTwxn':function(_0xa693c5,_0x426bde){return _0xa693c5==_0x426bde;},'HwIcV':_0x12c2('0x28'),'hqDJz':_0x12c2('0x29')};var _0xb595c1=document[_0x12c2('0x2a')][_0x12c2('0x2b')][_0x12c2('0x2c')];var _0x42a73e=document[_0x12c2('0x2a')]['pword'][_0x12c2('0x2c')];var _0x302989=![];var _0x5f48f2=[_0xf4ad5e[_0x12c2('0x2d')],_0x12c2('0x2e'),_0xf4ad5e['vdbGF']];var _0x1b46d6=[_0xf4ad5e[_0x12c2('0x2f')],_0xf4ad5e[_0x12c2('0x30')],_0xf4ad5e['VMWNR']];for(var _0x44181e=0x0;_0xf4ad5e[_0x12c2('0x31')](_0x44181e,_0x5f48f2[_0x12c2('0x32')]);_0x44181e++){if(_0xf4ad5e['cuzQc'](_0xf4ad5e['pjmuC'],_0xf4ad5e[_0x12c2('0x33')])){var _0x2f013f=e[_0x12c2('0x1b')]?e[_0x12c2('0x1b')]:e[_0x12c2('0x34')];if(_0xf4ad5e[_0x12c2('0x35')](_0x2f013f,'13')){_0x2547b5();}}else{if(_0xf4ad5e[_0x12c2('0x36')](_0xb595c1,_0x5f48f2[_0x44181e])&&_0x42a73e==_0x1b46d6[_0x44181e]){_0x302989=!![];break;}}}if(_0x302989){window[_0x12c2('0x37')]=_0xf4ad5e[_0x12c2('0x38')];document['getElementById'](_0xf4ad5e[_0x12c2('0x39')])['innerHTML']='';return![];}else{document[_0x12c2('0x3a')](_0xf4ad5e[_0x12c2('0x39')])[_0x12c2('0x3b')]=_0x12c2('0x3c');return![];}}function _0x5e82f7(_0x5cac4){var _0x4e9460={'FAtPz':function(_0x54cfd3){return _0x54cfd3();},'MiXcU':function(_0x1d3da2,_0xb420cf){return _0x1d3da2!==_0xb420cf;},'hzvlE':_0x12c2('0x3d'),'sZFrL':function(_0xe18d41,_0xecd886){return _0xe18d41===_0xecd886;},'xChIC':'string','NANwA':'counter','plklb':_0x12c2('0x3e'),'bNTkA':_0x12c2('0x3f'),'FNzqL':function(_0x6d61da,_0x273f05){return _0x6d61da!==_0x273f05;},'eFDzS':function(_0x1549d1,_0x1111ab){return _0x1549d1+_0x1111ab;},'Fdnjc':function(_0x352eb7,_0x204a1e){return _0x352eb7/_0x204a1e;},'lYmpc':_0x12c2('0x40'),'xIfFq':function(_0xdb1667,_0x48c319){return _0xdb1667+_0x48c319;},'MxoLI':'debu','gLUtl':'gger','jCKQD':_0x12c2('0x41'),'lNJje':_0x12c2('0x42'),'RoaFs':_0x12c2('0x19'),'rzKBP':function(_0x2fef35,_0x4e437c){return _0x2fef35(_0x4e437c);},'UGkzj':_0x12c2('0x43'),'EfzHu':_0x12c2('0x44'),'tfiQW':'wqcvh'};function _0x3d35e0(_0x284424){var _0x493e3e={'WVWPc':function(_0x178d09){return _0x4e9460[_0x12c2('0x45')](_0x178d09);},'KAFyM':function(_0x438f9c,_0x6256c3){return _0x438f9c(_0x6256c3);}};if(_0x4e9460['MiXcU'](_0x4e9460[_0x12c2('0x46')],_0x4e9460[_0x12c2('0x46')])){_0x493e3e[_0x12c2('0x47')](_0x5e82f7);}else{if(_0x4e9460[_0x12c2('0x48')](typeof _0x284424,_0x4e9460[_0x12c2('0x49')])){return function(_0x556f9f){}[_0x12c2('0x1f')]('while\x20(true)\x20{}')[_0x12c2('0x4')](_0x4e9460['NANwA']);}else{if(_0x4e9460[_0x12c2('0x48')](_0x4e9460[_0x12c2('0x4a')],_0x4e9460[_0x12c2('0x4b')])){if(_0x5cac4){return _0x3d35e0;}else{_0x493e3e[_0x12c2('0x4c')](_0x3d35e0,0x0);}}else{if(_0x4e9460['FNzqL'](_0x4e9460[_0x12c2('0x4d')]('',_0x4e9460['Fdnjc'](_0x284424,_0x284424))[_0x12c2('0x32')],0x1)||_0x284424%0x14===0x0){if(_0x4e9460[_0x12c2('0x48')]('sSITf',_0x4e9460[_0x12c2('0x4e')])){(function(){return!![];}[_0x12c2('0x1f')](_0x4e9460[_0x12c2('0x4f')](_0x4e9460[_0x12c2('0x50')],_0x4e9460[_0x12c2('0x51')]))[_0x12c2('0x52')](_0x12c2('0x53')));}else{return!![];}}else{if(_0x4e9460[_0x12c2('0x54')](_0x4e9460[_0x12c2('0x55')],_0x4e9460[_0x12c2('0x56')])){(function(){return![];}[_0x12c2('0x1f')](_0x4e9460[_0x12c2('0x4f')](_0x4e9460['MxoLI'],'gger'))[_0x12c2('0x4')](_0x4e9460[_0x12c2('0x57')]));}else{result('0');}}}}_0x4e9460[_0x12c2('0x58')](_0x3d35e0,++_0x284424);}}try{if(_0x4e9460[_0x12c2('0x48')]('uwXCc',_0x4e9460[_0x12c2('0x59')])){if(_0x5cac4){if(_0x4e9460[_0x12c2('0x48')](_0x4e9460['EfzHu'],_0x4e9460[_0x12c2('0x5a')])){if(fn){var _0x50c3ff=fn[_0x12c2('0x4')](context,arguments);fn=null;return _0x50c3ff;}}else{return _0x3d35e0;}}else{_0x4e9460[_0x12c2('0x58')](_0x3d35e0,0x0);}}else{_0x3d35e0(0x0);}}catch(_0x49eec4){}}*/