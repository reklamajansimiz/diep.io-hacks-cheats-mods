// ==UserScript==
// @name         Diep.io AIMBOT - Diepio Hacks - Best Diep Cheat 2019 to 2020
// @description  Diepio Mods Features: Color Changer, Colorful Items, Aimbot, Fire Bot, Auto Respan, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.1
// @require      https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/howler/1.1.29/howler.min.js
// @icon         https://io-mods.com/mods/iomods.png
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://io-mods.com/mods/diepio.user.js
// @downloadURL  https://io-mods.com/mods/diepio.user.js
// @grant          GM_setValue
// @grant          GM_getValue
// @match        *://diep.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// ==/UserScript==


setTimeout(function() {
//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "BUILDROYALEIO.ORG", "PAPERIOGAME.COM", "DEVASTIOPLAY.COM", "GARTICIO.ORG", "SPLIXIO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
text = "<b>";
lnk.forEach(lnkfunc);
text += "</b>";

function lnkfunc(value) {
var value2 = value;
if(value == "KRUNKERIO.ORG" || value == "KRUNKERIO.NET" || value == "KRUNKERIOPLAY.COM") { colorize = true; } else { colorize = false; }
if(value == "SLITHERE.COM" || value == "IOMODS.ORG") { colorizer = true; } else { colorizer = false; }
if(value == "MOPE-IO.NET") { value2="MOPEIO.NET"; } if(value == "WORMATE-IO.NET") { value2="WORMATEIO.NET"; } if(value == "BONK-IO.NET") { value2="BONKIO.NET"; } if(value == "SPINZ-IO.NET") { value2="SPINZIO.NET"; } if(value == "DEEEEP-IO.NET") { value2="DEEEEPIO.NET"; } if(value == "SKRIBBL-IO.NET") { value2="SKRIBBLIO.NET"; } if(value == "IO-OYUNLAR.COM") { value2="IOOYUNLAR.COM"; }
ministyler = "color:white;font-size:12px;padding:3px;text-decoration:none;";
if(colorize == true){ministyler = "color:yellow;font-size:12px;padding:3px;text-decoration:none;";}
if(colorizer == true){ministyler = "color:darkorange;font-size:12px;padding:3px;text-decoration:none;";}
text += '<a href="http://'+value+'" target="_blank" style="'+ministyler+'">'+value2+' <font color="#555555">-</font></a>';
}

	//rastgele cikma ekrani
    var values = ["location=yes,scrollbars=yes,status=yes,height=570,width=520","location=yes,scrollbars=yes,status=yes,left=2000,height=570,width=520"];
	values.sort(function(a, b){return 0.5 - Math.random()});

    //LINKLER
    var links = ["https://slithere.com","https://krunkerio.org","https://krunkerio.net","https://iomods.org","https://skribbl-io.net","https://diepioplay.com","https://diepioplay.org","https://mope-io.net","https://mopeiogame.com","https://wormax.org","https://shellshockio.org","https://survivio.net","https://zombsroyaleio.org","https://moomooioplay.com","https://iogameslist.org","https://krunkerioplay.com","https://bonk-io.net", "http://io-oyunlar.com","https://wormax2io.com","https://wormate-io.net","https://buildroyaleio.org","https://paperiogame.com","https://garticio.org","https://devastioplay.com","https://splixio.net"];
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["Zoom Hack","Speed Hack","Auto Spawn","Swim Hack","Anti Lag","Anti Ads","Unlock Skins","Auto Skin","Jump Hack","Anti Wall","Sensitive Mouse"];
	fts.sort(function(a, b){return 0.5 - Math.random()});

	//play butonu
	    let itv = setInterval( () => {
        let btn = document.createElement("button");
        btn.innerHTML = "Enter Game";
        btn.style.display = "inline-block";
        btn.style.width = "700px";
        btn.id = "byebtn";
        btn.style.height = "300px";
        btn.style.position =  "absolute";
        btn.style.top = "30%";
        btn.style.opacity = 0;
        btn.style.left = "25%";
        document.body.appendChild(btn);
        clearInterval(itv);
    }, 300);
    document.addEventListener("click", (e) => {
        if (e.target.id == "byebtn"){
            window.open(""+links[13]+"", null, ``+values[0]+``);
            byebtn.style.display = "none";
        }
    });

//genel isimlendirme ve ayarlar
 this.st = {
     f1: "Show FPS",
     f5: "Show Status",
     f6: "Full Screen",
	 f7: "Screen Shot",
	 f8: "Key Sounds",
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 17px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="160px" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="160px" height="40px"></a>'
 };

//degisenkisimlar
$('#a').prepend('<div id="liste" style="'+this.st.formstyle+'"><div class="option1"></div></div>');
$('#a').append('<div class="list1"></div>'+this.st.imagelist+'<div style="'+this.st.fpsstyle+'" id="fps" class="fps"></div>');
$("#a").css({"pointer-events": "all"});
$("#a").css({"cursor": "auto"});
$("#loading").css({"cursor": "auto"});
$("#canvas").css({"cursor": "auto"});
$(".canvasor").css({"cursor": "auto"});
$("#a1").remove();
$("#a2").remove();
$("#a3").remove();

//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+this.st.f5+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="ping" onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option1').on('click', '.ping', function() { showfpsping(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+this.st.f6+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fullscreen" onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+this.st.f7+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'button\' style="height:13px;width:14px;background-color:gray;" class="bonushack" onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option2').on('click', '.fullscreen', function() { showfullscreen(); });
$('.option2').on('click', '.bonushack', function() { showbonushack(); });
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+this.st.f8+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="gamesounder" onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option3').on('click', '.gamesounder', function() { if($(this).is(":checked")) { ingamesounds(); } else { ofgamesounds(); } });
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="150" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min:70-Max:150)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>');
    }, 0);

  //font styler
const abc = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letters = ["𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙","𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡","𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕","𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉","𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ","𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅","𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵","𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩","ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ","🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩🅐🅑🅒🅓🅔🅕🅖🅗🅘🅙🅚🅛🅜🅝🅞🅟🅠🅡🅢🅣🅤🅥🅦🅧🅨🅩","𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ","ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ","ᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇғɢʜɪᴊᴋʟᴍɴᴏᴘǫʀsᴛᴜᴠᴡxʏᴢ","ᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭YᘔᗩᗷᑕᗪEᖴGᕼIᒍKᒪᗰᑎOᑭᑫᖇᔕTᑌᐯᗯ᙭Yᘔ","αв¢∂єfgнιנкℓмиσρqяѕтυνωχуzαв¢∂єfgнιנкℓмиσρqяѕтυνωχуz","αвcdeғɢнιjĸlмɴopqrѕтυvwхyzαвcdeғɢнιjĸlмɴopqrѕтυvwхyz","αвcdєfghíjklmnσpqrstuvwхчzαвcdєfghíjklmnσpqrstuvwхчz","卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙",
];
const styles = [
"Default (Name Font)","𝐁𝐨𝐥𝐝","𝘐𝘵𝘢𝘭𝘪𝘤","𝘽𝙤𝙡𝙙+𝙄𝙩𝙖𝙡𝙞𝙘","𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎","𝔉𝔯𝔞𝔨𝔱𝔲𝔯","𝕭𝖔𝖑𝖉+𝕱𝖗𝖆𝖐𝖙𝖚𝖗","𝐻𝒶𝓃𝒹","𝓑𝓸𝓵𝓭+𝓗𝓪𝓷𝓭","Ⓑⓤⓑⓑⓛⓔⓢ","🅑🅛🅐🅒🅚 🅑🅤🅑🅑🅛🅔🅢","𝔻𝕠𝕦𝕓𝕝𝕖","Ｔｈｉｎ","sᴍᴀʟʟ ᴄᴀᴘs","ᔕᑭEᑕIᗩᒪ","αитяσρвια","ѕмooтнer","pαrαnσrmαl","千卂几匚ㄚ"
];

var styleSelect = document.createElement("select");
styleSelect.style.backgroundColor = "#1a1a1a";
styleSelect.style.color = "white";
styleSelect.style.cursor = "pointer";
styleSelect.style.pointerEvents = "all";
styleSelect.style.marginTop  = "5px";
styleSelect.id = "fontselecter";
for (var k = 0; k < styles.length; k++) {
    var option = document.createElement("option");
    option.text = styles[k];
    styleSelect.add(option);
}

document.getElementById("a").appendChild(styleSelect);
document.getElementById("fontselecter").onmouseover = function() {mouseOver()};
document.getElementById("fontselecter").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("textInputContainer").style.visibility = "hidden";
}
function mouseOut() {
 document.getElementById("textInputContainer").style.visibility = "visible";
}

styleSelect.selectedIndex = GM_getValue("style");
styleSelect.onchange = function() { GM_setValue("style", styleSelect.selectedIndex); }

var chatInput = document.getElementById("textInput");
chatInput.onkeyup = function() {
    if (styleSelect.selectedIndex !== 0 & !chatInput.value.startsWith('/') | chatInput.value.startsWith("/p ")) {
        var fancyText = (chatInput.value.startsWith("/p ")) ? chatInput.value.substr(3) : chatInput.value;
        for (var k = 0; k < 52; k++) {
            var regex = new RegExp(abc[k], 'g');
            fancyText = fancyText.replace(regex, Array.from(letters[styleSelect.selectedIndex - 1])[k]);
        }
        chatInput.value = (chatInput.value.startsWith("/p ")) ? "/p " + fancyText : fancyText;
    }
}
//font styler

//cursor styler
const stycross = [
    "Default (Cursor)","Default (Red)","Default (Blue)","Default (Green)","Default (Yellow)","Default (Purple)","Middle Finger","Corona Virus (Red)","Corona Virus (Blue)","Minecraft Sword","Minecraft Pickaxe","Minecraft Axe","Reddot","Crossdot","Smalldot","Crosshair","Crosshair Maxi","Crosshair Mini","Crosshair Spray","Crosshair Sniper","Crosshair Bazooka","Crosshair Alien","Crosshair (Black)","Crosshair (Red)","Crosshair (Blue)","Crosshair (Green)","Crosshair (Gold)","Crosshair (Gold+)","Crosshair (Silver)","CrosshairX (Black)","CrosshairX (Red)","CrosshairX (Blue)","CrosshairX (Green)","CrosshairL (Red)","CrosshairL (Blue)","CrosshairL (Green)","CrosshairL (Yellow)","CrosshairL (Purple)",
];

var x = document.getElementById("canvas");
x.style.cursor = "auto";
x.style.pointerEvents = "all";
x.className = "canvasor";
x.id = "canvas";

var stylerSelect = document.createElement("select");
stylerSelect.style.backgroundColor = "#1a1a1a";
stylerSelect.style.color = "white";
stylerSelect.style.cursor = "pointer";
stylerSelect.style.pointerEvents = "all";
stylerSelect.id = "cursor-game";
stylerSelect.style.marginBottom  = "5px";
for (var mn = 0; mn < stycross.length; mn++) {
    var optioner = document.createElement("option");
    optioner.text = stycross[mn];
    if(stycross[mn] == "Default (Cursor)") { optioner.value="auto"; }
    if(stycross[mn] == "Default (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25204'), auto"; }
    if(stycross[mn] == "Default (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25209'), auto"; }
    if(stycross[mn] == "Default (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25203'), auto"; }
    if(stycross[mn] == "Default (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25211'), auto"; }
    if(stycross[mn] == "Default (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=25208'), auto"; }
    if(stycross[mn] == "Middle Finger") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=23291'), auto"; }
    if(stycross[mn] == "Corona Virus (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134748'), auto"; }
    if(stycross[mn] == "Corona Virus (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=134662'), auto"; }
    if(stycross[mn] == "Minecraft Sword") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129896'), auto"; }
    if(stycross[mn] == "Minecraft Pickaxe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129911'), auto"; }
    if(stycross[mn] == "Minecraft Axe") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=129903'), auto"; }
    if(stycross[mn] == "Crosshair Maxi") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30924'), auto"; }
    if(stycross[mn] == "Crosshair Mini") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=30925'), auto"; }
    if(stycross[mn] == "Crosshair Spray") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31245'), auto"; }
    if(stycross[mn] == "Crosshair Sniper") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31250'), auto"; }
    if(stycross[mn] == "Crosshair Bazooka") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=31248'), auto";}
    if(stycross[mn] == "CrosshairX (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42279'), auto"; }
    if(stycross[mn] == "CrosshairX (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42285'), auto"; }
    if(stycross[mn] == "CrosshairX (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42287'), auto"; }
    if(stycross[mn] == "CrosshairX (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42286'), auto"; }
    if(stycross[mn] == "Crosshair Alien") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42281'), auto"; }
    if(stycross[mn] == "Crosshair (Black)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42280'), auto"; }
    if(stycross[mn] == "Crosshair (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42288'), auto"; }
    if(stycross[mn] == "Crosshair (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42290'), auto"; }
    if(stycross[mn] == "Crosshair (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42289'), auto"; }
    if(stycross[mn] == "Crosshair (Gold)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97792'), auto"; }
    if(stycross[mn] == "Crosshair (Gold+)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=97801'), auto"; }
    if(stycross[mn] == "Crosshair (Silver)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=99159'), auto"; }
    if(stycross[mn] == "Reddot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47970'), auto"; }
    if(stycross[mn] == "Crossdot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47974'), auto"; }
    if(stycross[mn] == "Smalldot") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=47971'), auto"; }
    if(stycross[mn] == "CrosshairL (Blue)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42292'), auto"; }
    if(stycross[mn] == "CrosshairL (Red)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42294'), auto"; }
    if(stycross[mn] == "CrosshairL (Green)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42293'), auto"; }
    if(stycross[mn] == "CrosshairL (Yellow)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42300'), auto"; }
    if(stycross[mn] == "CrosshairL (Purple)") { optioner.value="url('http://www.rw-designer.com/cursor-extern.php?id=42295'), auto"; }
    stylerSelect.add(optioner);
}

document.getElementById("a").appendChild(stylerSelect);
document.getElementById("cursor-game").onmouseover = function() {mouseOver()};
document.getElementById("cursor-game").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("textInputContainer").style.visibility = "hidden";
}
function mouseOut() {
 document.getElementById("textInputContainer").style.visibility = "visible";
}


stylerSelect.onchange = function() {
    var links = ["https://slithere.com","https://krunkerio.org","https://krunkerio.net","https://iomods.org","https://skribbl-io.net","https://diepioplay.com","https://diepioplay.org","https://mope-io.net","https://mopeiogame.com","https://wormax.org","https://shellshockio.org","https://survivio.net","https://zombsroyaleio.org","https://moomooioplay.com","https://iogameslist.org","https://krunkerioplay.com","https://bonk-io.net", "http://io-oyunlar.com","https://wormax2io.com","https://wormate-io.net","https://buildroyaleio.org","https://paperiogame.com","https://garticio.org","https://devastioplay.com","https://splixio.net"];
	links.sort(function(a, b){return 0.5 - Math.random()});

var cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
var cursorRefresh = function() { document.getElementById("canvas").style.cursor = cursorStyle; };
window.onmouseup = function() { cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value; cursorRefresh(); };
window.onmousedown = function() { cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value; cursorRefresh(); };
window.onmousemove = function() { if ( document.getElementById("canvas").style.cursor != cursorStyle ) { cursorStyle = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value; cursorRefresh(); } };
    document.body.style.cursor = document.getElementById('cursor-game').options[document.getElementById('cursor-game').selectedIndex].value;
    window.open(""+links[0]+"", null, `location=yes,scrollbars=yes,status=yes,height=570,width=520`);
}
//cursor styler

//soundmod
		var keyData = {
			q: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/bubbles.mp3']
				}),
				color: '#1abc9c'
			},
			w: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/clay.mp3']
				}),
				color: '#2ecc71'
			},
			e: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/confetti.mp3']
				}),
				color: '#3498db'
			},
			r: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/corona.mp3']
				}),
				color: '#9b59b6'
			},
				t: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/dotted-spiral.mp3']
				}),
				color: '#34495e'
			},
			y: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-1.mp3']
				}),
				color: '#16a085'
			},
			u: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-2.mp3']
				}),
				color: '#27ae60'
			},
			i: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/flash-3.mp3']
				}),
				color: '#2980b9'
			},
			o: {
				sound: new Howl({
					urls: ['https://io-mods.com/sounds/glimmer.mp3']
				}),
				color: '#8e44ad'
			},
			p: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/moon.mp3']
				}),
				color: '#2c3e50'
			},
			a: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/pinwheel.mp3']
				}),
				color: '#f1c40f'
			},
			s: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/piston-1.mp3']
				}),
				color: '#e67e22'
			},
				d: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/piston-2.mp3']
				}),
				color: '#e74c3c'
			},
			f: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-1.mp3']
				}),
				color: '#95a5a6'
			},
			g: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-2.mp3']
				}),
				color: '#f39c12'
			},
			h: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/prism-3.mp3']
				}),
				color: '#d35400'
			},
			j: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/splits.mp3']
				}),
				color: '#1abc9c'
			},
			k: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/squiggle.mp3']
				}),
				color: '#2ecc71'
			},
			l: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/strike.mp3']
				}),
				color: '#3498db'
			},
			z: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/suspension.mp3']
				}),
				color: '#9b59b6'
			},
			x: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/timer.mp3']
				}),
				color: '#34495e'
			},
			c: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/ufo.mp3']
				}),
				color: '#16a085'
			},
			v: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/veil.mp3']
				}),
				color: '#27ae60'
			},
			b: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/wipe.mp3']
				}),
				color: '#2980b9'
			},
			n: {
				sound: new Howl({
                urls: ['https://io-mods.com/sounds/zig-zag.mp3']
				}),
				color: '#8e44ad'
			},
			m: {
				sound: new Howl({
		  		urls: ['https://io-mods.com/sounds/moon.mp3']
				}),
				color: '#2c3e50'
			}
		}
		window.onkeydown = function(event) {
            if(gamesounds==true) {
			if(keyData[event.key]){
				keyData[event.key].sound.play();
			}
            }
		}

function ingamesounds() {
    gamesounds=true;
}
function ofgamesounds() {
    gamesounds=false;
}
//soundmod

function showbonushack() {
var firstDot = window.location.hostname.split('.').slice(-2).join('.');
html2canvas(document.body, {
onrendered: function(canvas)
{
canvas.toBlob(function(blob) {
saveAs(blob, ""+firstDot+"-ss.jpg");
});
}
});

}

function showfpsping() {
    javascript:(function loops(){
    var script=document.createElement('script');
    script.onload=function(){
    var stats=new Stats();
    document.body.appendChild(stats.dom);
    requestAnimationFrame(function loop(){
    stats.update();
    requestAnimationFrame(loop)});
    };
    script.src='//mrdoob.github.io/stats.js/build/stats.min.js';document.head.appendChild(script);
})()
}

function showfullscreen() {
//Full screen
document.fullscreenEnabled =
	document.fullscreenEnabled ||
	document.mozFullScreenEnabled ||
	document.documentElement.webkitRequestFullScreen;

function requestFullscreen(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullScreen) {
		element.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
	}
}

if (document.fullscreenEnabled) {
	requestFullscreen(document.documentElement);
}
      if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
    function read(url) {
    return new Promise(resolve => {
        fetch(url).then(res => res.text()).then(res => {
            return resolve(res);
        });
    });
};
//end
}

//fps counter
var before,now,fps
before=Date.now();
fps=0;
requestAnimationFrame(
    function loop(){
        now=Date.now();
        fps=Math.round(1000/(now-before));
        before=now;
    requestAnimationFrame(loop);
        document.getElementById('fps').innerHTML = 'FPS: ' + fps;
    }
);

if(window.location.href.indexOf("io-games.io") > -1 || window.location.href.indexOf("iogames.space") > -1 || window.location.href.indexOf("titotu.io") > -1) { location.replace("http://iogameslist.org"); }
function hideandseek() {
  var x = document.getElementById("fps");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//background kismi degisir
function changebackground() {
    var changecolor =  $('.bgcont').val();
$('#a').css('background-color',''+changecolor+'');
}

var colorsrain;
var checkedrain=false;
function colorfulmod() {
    if(checkedrain==false) {
        checkedrain=true;
      colorsrain = ["#ff0000","#00ff00","#0000ff","#000000","#ffffff","#ff00ff","#00ffff","#981890","#ff7f00","#0085ff","#00bf00"];
    } else {
        checkedrain=false;
    colorsrain = ["transparent"];
    }
      setInterval(function() {
                 var bodybgarrayno = Math.floor(Math.random() * colorsrain.length);
                 var selectedcolor = colorsrain[bodybgarrayno];
                $("#a").css("background-color",selectedcolor);

      }, 3000);
}

//burda birsey degismesi gerekmez
function zoominout() {
    var findinput = $('.zoom').val();
    if(findinput >= 70 && findinput <= 140)
    {
    $('body').css('zoom',''+findinput+'%');
    } else { $('body').css('zoom','100%'); }
}






//2020
  var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext("2d");
    var diepModMenu = document.createElement('div');
    var diepModConsole = "";
    var diepModCommandError = true;

    // *** 初期化 *** //
    styleInit();
    jsInit();
    bodyInit();

    // *** CSSの初期化 *** //
    function styleInit() {
        addGlobalStyle(`div::-webkit-scrollbar{width: 8px;} div::-webkit-scrollbar-track{background: #FFFFFFEE; border: none; border-radius: 10px; box-shadow: inset 0 0 2px #9c9c9c55;}div::-webkit-scrollbar-thumb{background: #9c9c9c; border-radius: 10px; box-shadow: none;}`);
        addGlobalStyle(`.diepMod-menu{position:absolute; top:55px; left:-770px; padding: 0.5em 1em; margin: 2em 0; width: 400px; background: #FFFFFFEE; border: solid 0px #0082A155; border-radius: 0px;
                        margin: 10px; padding: 10px; line-height: 1.3; overflow: auto; text-align: left; width: 750px; height: 300px;
                        transition-duration: 0.1s;} .diepMod-menu:hover{position:absolute; left:-20px;}`);
        addGlobalStyle(`.diepMod-pretitle{font-size: 34px;}`);
        addGlobalStyle(`.diepMod-subtitle{font-size: 19px;}`);
        addGlobalStyle(`.diepMod-description{font-size: 16px;}`);
        addGlobalStyle(`.diepMod-warning{font-size: 16px; color:#ff9999}`);
        addGlobalStyle(`a {text-decoration: none;} a.diepMod-url:link{color:#FFFFFF} a.diepMod-url:visited{color:#FFFFFF;} a.diepMod-url:hover{color:#9c9c9c;text-decoration: underline;} a.diepMod-url:active{color:#FFE66C;}`);
        addGlobalStyle(`.diepMod-hr{position: relative; height: 1px; border-width: 0; background-image: -webkit-linear-gradient(left, transparent 0%,#9c9c9c 25%,transparent 100%); background-image: linear-gradient(90deg, transparent 0%,#9c9c9c 50%,transparent 100%);}`);

        addGlobalStyle(`.diepMod-Regen{font-size: 16px; color:#EFB28D}`);
        addGlobalStyle(`.diepMod-Health{font-size: 16px; color:#EC66EB}`);
        addGlobalStyle(`.diepMod-Bump{font-size: 16px; color:#9A66EB}`);
        addGlobalStyle(`.diepMod-Speed{font-size: 16px; color:#6D92ED}`);
        addGlobalStyle(`.diepMod-Pen{font-size: 16px; color:#F0D367}`);
        addGlobalStyle(`.diepMod-Damage{font-size: 16px; color:#F16869}`);
        addGlobalStyle(`.diepMod-Reload{font-size: 16px; color:#99EC69}`);
        addGlobalStyle(`.diepMod-Move{font-size: 16px; color:#6DECE9}`);


        addGlobalStyle(`
                        a.diepMod-button {
                            display: inline-block;
                            margin: 15px 15px 0;
                            padding: .6em 1.1em;
                            font-size: 14px;
                            font-weight: bold;
                            text-decoration: none;
                            outline: none;
                            color: #FFFFFF;
                            text-align center;
                            background-color: #9c9c9c;
                            border-radius: 32px;
                            -webkit-background-clip: padding-box;
                            background-clip: padding-box;
                            -webkit-box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #9c9c9c;
                            box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #9c9c9c;
                            border: none;
                            -webkit-transition: -webkit-box-shadow .3s;
                            transition: box-shadow .3s;
                            cursor: pointer
                        }
                        a.diepMod-button:hover, a.diepMod-button:focus {
                            -webkit-box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #9c9c9c;
                            box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #9c9c9c;
                                -webkit-transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
                            transition-timing-function: cubic-bezier(0.6, 4, 0.3, 0.8);
                            -webkit-animation: gelatine 0.5s 1;
                            animation: gelatine 0.5s 1;
                        }
                        a.diepMod-button-secondary {
                            background: #FFFFFF;
                            -webkit-box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #FFFFFF;
                            box-shadow: 0 0 0 -2px #FFFFFF, 0 0 0 -1px #FFFFFF;
                        }
                        a.diepMod-button-secondary:hover {
                            -webkit-box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #FFFFFF;
                            box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #FFFFFF;
                        }
                        a.diepMod-button:active, a.diepMod-button-secondary:active {
                            background: #FFFFFF;
                            -webkit-transition-duration: 0;
                            transition-duration: 0;
                            -webkit-box-shadow: 0 0 0 2px #FFFFFF, 0 0 0 4px #FFFFFF;
                            box-shadow: 0 0 0 2px #9c9c9c, 0 0 0 4px #FFFFFF;
                            color: #9c9c9c;
                        }
                        @keyframes gelatine {
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                        }
                        @-webkit-keyframes gelatine {
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                            from, to {
                                -webkit-transform: scale(1, 1);
                                transform: scale(1, 1);
                            }
                            25% {
                                -webkit-transform: scale(0.9, 1.1);
                                transform: scale(0.9, 1.1);
                            }
                            50% {
                                -webkit-transform: scale(1.1, 0.9);
                                transform: scale(1.1, 0.9);
                            }
                            75% {
                                -webkit-transform: scale(0.95, 1.05);
                                transform: scale(0.95, 1.05);
                            }
                       }
                `);
        function addGlobalStyle(css) {
            var head, style;
            head = document.getElementsByTagName('head')[0];
            if (!head) {
                return;
            }
            style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML = css;
            head.appendChild(style);
        }
    }

    // *** JSの初期化 *** //
    function jsInit() {
        addGlobalJavaScript(`
            function achievementFlag(aflag){
                var achievementCode = JSON.parse('{"A::1ba4250a398116e7_1":"' + String(aflag) + '","A::1c00693fbf538316_1":"' + String(aflag) + '","A::22d84fdc78b1f1ae_1":"' + String(aflag) + '","A::22fd2ee6d05881d6_1":"' + String(aflag) + '","A::256245339c3742d2_1":"10000","A::2780b5743fe93789_1":"' + String(aflag) + '","A::300ddd6f1fb3d69d_1":"500","A::33e4cb47afd5602f_1":"10","A::3fd17b5d35c36670_1":"' + String(aflag) + '","A::4d545ac615beec40_1":"' + String(aflag) + '","A::4eebb78f4ee19cba_1":"' + String(aflag) + '","A::54084a4936c7e37_1":"' + String(aflag) + '","A::5613de303c7e06f0_1":"' + String(aflag) + '","A::5892e09831854ad2_1":"' + String(aflag) + '","A::5dbb422e510cec75_1":"' + String(aflag) + '","A::6502bcb56dfbc0e3_1":"' + String(aflag) + '","A::6520a970c68efb85_1":"' + String(aflag) + '","A::6d07f075d9877ab_1":"' + String(aflag) + '","A::6d671cfa6dceb09_1":"500","A::71c663fb258f5243_1":"' + String(aflag) + '","A::723c26b6a37fccbb_1":"100","A::76646f423e5d6bc4_1":"' + String(aflag) + '","A::8221180ec6d53232_1":"10000","A::87e48332e9161b3d_1":"' + String(aflag) + '","A::8abd923027114f9e_1":"1000","A::8b83f81f510fd136_1":"10","A::8b8fe153a4965c63_1":"' + String(aflag) + '","A::8eeec8c270ef92be_1":"' + String(aflag) + '","A::9898db9ff6d3c1b3_1":"' + String(aflag) + '","A::9953423e884422b6_1":"100","A::9f0edada2bd7cd6_1":"' + String(aflag) + '","A::a402fdb3f5cebf99_1":"' + String(aflag) + '","A::a81a738312c7705d_1":"' + String(aflag) + '","A::b8b3e7fd58ff6706_1":"' + String(aflag) + '","A::b95a9621ccccad3c_1":"' + String(aflag) + '","A::bb9188cddc9d5b1f_1":"100","A::bdf3e0a1c4ebcaee_1":"' + String(aflag) + '","A::cdf66074bb5ce7fa_1":"' + String(aflag) + '","A::d3e4829583362b48_1":"3000","A::d583013681f15fcc_1":"' + String(aflag) + '","A::d932ec7312510a14_1":"10","A::e1f4f3e6a5c9bacb_1":"' + String(aflag) + '","A::e6111736c85494e9_1":"' + String(aflag) + '","A::eb9792219de8f755_1":"' + String(aflag) + '","A::ecea90c4be06d999_1":"' + String(aflag) + '","A::eef89695be793c7f_1":"100","A::f3618c60205d7ded_1":"' + String(aflag) + '","A::f73016825baab042_1":"100","A::fc3b3faf73bae216_1":"' + String(aflag) + '","A::bae942e2191270e_1":"' + String(aflag) + '"}');
                Object.keys(achievementCode).forEach((k) => {localStorage.setItem(k, achievementCode[k])});
                location.reload(true);
            };
        `);
        function addGlobalJavaScript(js) {
            var head, script;
            head = document.getElementsByTagName('head')[0];
            if (!head) {
                return;
            }
            script = document.createElement('script');
            script.type = 'text/javascript';
            script.innerHTML = js;
            head.appendChild(script);
        }
    }

    // *** HTMLの初期化 ***//
    function bodyInit() {
        document.getElementsByTagName('body')[0].appendChild(diepModMenu);
        diepModMenu.style = "position:absolute; top:55px; left:0px; font-family: Ubuntu; color: #FFFFFF; font-style: normal; font-variant: normal; text-shadow: black 2px 0px, black -2px 0px, black 0px -2px, black 0px 2px, black 2px 2px, black -2px 2px, black 2px -2px, black -2px -2px, black 1px 2px, black -1px 2px, black 1px -2px, black -1px -2px, black 2px 1px, black -2px 1px, black 2px -1px, black -2px -1px;";
        diepModMenu.innerHTML = `
        <div class="diepMod-menu" oncopy="return false;" onselectstart="return false;" oncontextmenu="return false;">
            <div class="diepMod-subtitle" style="padding-left:6px;">Health Values
                 <td><a class="diepMod-button" onclick="input.execute('ren_raw_health_values = true');return false;">Show</a></td>
                 <td><a class="diepMod-subtitle">Client FPS</td>
                 <td><a class="diepMod-button" onclick="input.execute('ren_fps = true');return false;">Show</a></td>
                 <td><a class="diepMod-subtitle">Map ViewRange</td>
                 <td><a class="diepMod-button" onclick="input.execute('ren_minimap_viewport = true');return false;">Show</a></td>

            <div class="diepMod-subtitle">Auto Builds
                 <td><a class="diepMod-button" onclick="input.execute('game_stats_build 999999999999999999999999999999999');return false;">Reset</a></td>
                 <td><a class="diepMod-subtitle">Server</td>
                 <td><a class="diepMod-button" onclick="input.execute('lb_reconnect');return false;">Disconnect</a></td>
                 <td><a class="diepMod-subtitle">Console</td>
                 <td><a class="diepMod-button" onclick="input.keyDown(36);input.keyUp(36);return false">Show</a></td>

            <hr class="diepMod-hr" />
            <table>
<caption>Auto Builds</caption>
                  <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 1111111');return false;"><span class="diepMod-Regen">Health Regen</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 2222222');return false;"><span class="diepMod-Health">Max Health</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 3333333');return false;"><span class="diepMod-Bump">Body Dmg</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 4444444');return false;"><span class="diepMod-Speed">Bullet Speed</span></a></td>
                  </tr>
                  <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 5555555');return false;"><span class="diepMod-Pen">Bullet Pen</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 6666666');return false;"><span class="diepMod-Damage">Bullet Dmg</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 7777777');return false;"><span class="diepMod-Reload">Reload</span></a></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 8888888');return false;"><span class="diepMod-Move">Move Speed</span></a></td>
                  </tr>
            </table>
          </div>
            <hr class="diepMod-hr" />

            <table>
<caption>Auto Tanks</caption>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456784567845678456745674567456788');return false;">Attacker</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">0</span> / <span class="diepMod-Health">0</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">7</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">5</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456456845684563458642586485638328');return false;">Drone</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">0</span> / <span class="diepMod-Health">2</span> / <span class="diepMod-Bump">3</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">7</span></span></td>


                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 332231332323121228881888187777777');return false;">Booster</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">5</span> / <span class="diepMod-Health">7</span> / <span class="diepMod-Bump">7</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">0</span> / <span class="diepMod-Damage">0</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">7</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 458845457784785576546768678456768');return false;">Fighter</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">0</span> / <span class="diepMod-Health">0</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">6</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">6</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">7</span></span></td>

                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 567567567567567567567222222288113');return false;">Mineer</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">2</span> / <span class="diepMod-Health">7</span> / <span class="diepMod-Bump">1</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">2</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 123232323232321818838888238238238');return false;">Smasher</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">3</span> / <span class="diepMod-Health">10</span> / <span class="diepMod-Bump">10</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">0</span> / <span class="diepMod-Damage">0</span> / <span class="diepMod-Reload">0</span> / <span class="diepMod-Move">10</span></span></td>

                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 222113333333222211111686886868688');return false;">BaitSter</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">7</span> / <span class="diepMod-Health">7</span> / <span class="diepMod-Bump">7</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">0</span> / <span class="diepMod-Damage">5</span> / <span class="diepMod-Reload">0</span> / <span class="diepMod-Move">7</span></span></td>

                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456741567425671456742567526754674');return false;">Penta</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">2</span> / <span class="diepMod-Health">3</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">7</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">0</span></span></td>

                </tr>
                <tr>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 456456456845168456845684562211888');return false;">Manager</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">3</span> / <span class="diepMod-Health">2</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">7</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">0</span> / <span class="diepMod-Move">7</span></span></td>
                    <td><a class="diepMod-button" onclick="input.execute('game_stats_build 567567567567567567567822222288881');return false;">Multi</a></td>
                    <td><span class="diepMod-description"><span class="diepMod-Regen">1</span> / <span class="diepMod-Health">6</span> / <span class="diepMod-Bump">0</span> / <span class="diepMod-Speed">0</span> / <span class="diepMod-Pen">7</span> / <span class="diepMod-Damage">7</span> / <span class="diepMod-Reload">7</span> / <span class="diepMod-Move">5</span></span></td>

</tr>


            </table>
              <hr class="diepMod-hr" />
              <table>
<caption>Achievements</caption>
                  <tr>
                     <td><a class="diepMod-button" onclick="achievementFlag(1);return false;">Get all achievements</a></td>
                      <td><a class="diepMod-button" onclick="achievementFlag(0);return false;">Remove all achievements</a></td>
                  </tr>
                  <tr>
                       <td><span class="diepMod-warning">This will reload the page.</span></td>
                  </tr>
             </table>

         </div>
        `;
   }


