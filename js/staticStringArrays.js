//Array of status 

var statusArray = [
	"The red cup only makes me happier. Got MoonBucks.",
	"Why does McGrill University have so many SheetFaces?",
	"I see the power of Jackie and I pay my respect to him. Go Jackie!!",
	"Why? Just why? Just why cant people litter any more ?",
	"Bacon!! Bacon!! Bacon!!",
	"We need more plastic and oil spills. That might save Earth.",
	"Why would someone eat salad when Bacon is so healty ?",
	"OMG! BACON CURES CANCER! I can now save a lot of people.",
	"The Cardasians are always chasing nuts.",
	"#StraighPride",
	"Drive more Volkswagen to save Earth.",
	"Pollution is the only way to get more global warning",
	"I truly believe there will be a day when the whole world will be a big dump and a safe place.",
	"Rob Ford is has saved us again. What would we have done with out Robbie. <3",
	"Why are pigs killing so many people ? Whats wrong with the world?"
];

//Key value pair of profile images and user names.
var imgSource = {
	"foxyGrandma" : "../img/ProfilePictures/$$$Foxy_grandma$$$.jpg",
	"adamMcDonald" : "../img/ProfilePictures/AdamMcdonald.jpg",
	"aubreyHarriot" : "../img/ProfilePictures/AubreyHarriot.jpg",
	"baldy" : "../img/ProfilePictures/Baldy.jpg",
	"batman420" : "../img/ProfilePictures/Batman420.jpg",
	"biancaGonzales" : "../img/ProfilePictures/BiancaGonzales.jpg",
	"brokkLee" : "../img/ProfilePictures/BrokkLee.jpg",
	"bubsyBob" : "../img/ProfilePictures/BubsyBob.jpg",
	"bunnyFace" : "../img/ProfilePictures/BunnyFace.jpg",
	"catLover333" : "../img/ProfilePictures/CatLover333.jpg",
	"cyborg0070" : "../img/ProfilePictures/Cyborg0070.jpg",
	"drFreezefire" : "../img/ProfilePictures/DrFreezefire.jpg",
	"dustyTheHedgehog" : "../img/ProfilePictures/DustyTheHedgehog.jpg",
	"feelTheRage" : "../img/ProfilePictures/FeelTheRage.jpg",
	"figsTucker" : "../img/ProfilePictures/FigsTucker.jpg",
	"hellfireSalamander666" : "../img/ProfilePictures/HellfireSalamander666.jpg",
	"iLIKeBaNAnaS444" : "../img/ProfilePictures/ILIKeBaNAnaS444.jpg",
	"jackieRoostisaurus" : "../img/ProfilePictures/JackieRoostisaurus.jpg",
	"jamesSteller" : "../img/ProfilePictures/JamesSteller.jpg",
	"jerryHavleton" : "../img/ProfilePictures/JerryHavleton.jpg",
	"johosaphatVonJohanus" : "../img/ProfilePictures/JohosaphatVonJohanus.jpg",
	"juan690" : "../img/ProfilePictures/Juan690.jpg",
	"junior" : "../img/ProfilePictures/Junior.jpg",
	"maryJane" : "../img/ProfilePictures/MaryJane.jpg",
	"mikoHigurasaki" : "../img/ProfilePictures/MikoHigurasaki.jpg",
	"noLifeDX" : "../img/ProfilePictures/NoLifeDX.jpg",
	"normanStevenson" : "../img/ProfilePictures/NormanStevenson.jpg",
	"oboralWababnanosk" : "../img/ProfilePictures/OboralWababnanosk.jpg",
	"pastorJohn" : "../img/ProfilePictures/PastorJohn.jpg",
	"princeEdwardsIV" : "../img/ProfilePictures/PrinceEdwardsIV.jpg",
	"qMalDemar" : "../img/ProfilePictures/Q'malDemar.jpg",
	"sonic_Mario469970143" : "../img/ProfilePictures/Sonic_Mario469970143.jpg",
	"sunWukong" : "../img/ProfilePictures/SunWukong.jpg",
	"superpieboy" : "../img/ProfilePictures/Superpieboy.jpg",
	"twilightSparkle3840" : "../img/ProfilePictures/TwilightSparkle3840.jpg",
	"uG" : "../img/ProfilePictures/UG.jpg",
	"wolfgangSchnitzer" : "../img/ProfilePictures/WolfgangSchnitzer.jpg",
	"xinZhuLao" : "../img/ProfilePictures/XinZhuLao.jpg",
	"xxX_Deathstalker_XxX" : "../img/ProfilePictures/XxX_Deathstalker_XxX.jpg",
	"xxX_Pyromasterz_XxX" : "../img/ProfilePictures/XxX_Pyromasterz_XxX.jpg",
	"zeroxDaniel" : "../img/ProfilePictures/ZeroxDaniel.jpg",
	"paradeFlag" : "../img/paradeFlag.png",
	"cardashian" : "../img/paradeFlag.png",
	"jackie" : "../img/paradeFlag.png"

};

//Color wheel.
var colorWheel = [
            "#39add1", // light blue
            // "#3079ab", // dark blue
            "#c25975", // mauve
            "#e15258", // red
            "#f9845b", // orange
            "#838cc7", // lavender
            // "#7d669e", // purple
            "#53bbb4", // aqua
            "#51b46d", // green
            "#e0ab18", // mustard
            "#637a91", // dark gray
            "#f092b0", // pink
            "#b7c0c7", // light gray
            "#88CC88" //light green
            // "#8E591B", //brown
            // "#185A8D" //blue
            // "#6C399E"  //

    ];



//String array with words
var wordsArray = [
	"The", 
"a", 
"you", 
"we", 
"them", 
"when", 
"where", 
"what", 
"who", 
"I", 
"me", 
"they", 
"there", 
"chicken", 
"face", 
"sheet", 
"heaven", 
"food", 
"bacon", 
"explain", 
"knock", 
"yee", 
"how", 
"hill", 
"mountain", 
"train", 
"car", 
"tube", 
"lard", 
"marshmellows", 
"pop", 
"can", 
"music", 
"your", 
"sword", 
"gun", 
"bus", 
"crazy", 
"super", 
"great", 
"fantastic", 
"hip", 
"hop", 
"burger", 
"fries", 
"corndog", 
"cat", 
"fish", 
"ostrich", 
"polarbear", 
"strip",
"Angery",
"say",
"dont",
"blind",
"see",
"heard",
"hurt",
"planes",
"APple",
"monkey",
"manga",
"janes",
"snake",
"As", 
"we", 
"prepared", 
"to", 
"go", 
"to",
"the",
"gallery",
"I",
"thought",
"about",
"seeing",
"these",
"photographs",
"hanging",
"on",
"the",
"wall,",
"the",
"life",
"Jen",
"and",
"I",
"had",
"together,",
"and",
"the",
"emotions",
"that",
"would",
"surely",
"pour",
"out",
"of",
"me.",
"It",
"still",
"feels",
"unreal",
"that",
"all",
"of",
"this",
"even",
"happened,",
"that",
"Jen",
"isnt",
"physically",
"here",
"any",
"more...that",
"I",
"cant",
"hold",
"her.",
"Sure",
"enough,",
"the",
"minute",
"I",
"walked",
"into",
"the",
"gallery",
"I",
"felt",
"that",
"feeling",
"in",
"my",
"stomach",
"-",
"the",
"reality",
"that",
"Jen",
"passed.",
"Since",
"Jens",
"death",
"Ive",
"been",
"blessed",
"in",
"many",
"ways.",
"People",
"have",
"responded",
"to",
"our",
"story",
"with",
"incredible",
"kindness",
"#",
"?",
"@",
"!",
"$",
"%",
"1",
"2",
"3",
"4",
"5",
"6",
"7",
"8",
"9",
"0",
"^",
"&",
"*",
"(",
"&",
"$saf",
"\\",
"\t",
"!!!",
"????",
"!?!?!?!?!",
",,,",
"...",
".......",
". . . . . . .  . . ",
"!!!!!!!!!!!!!!!!!!!!!!!!!!!",
" . . . . . . . . . . . . . . .  . . .",
"???",
"and",
"Jens",
"legacy",
"is",
"growing",
"into",
"something",
"beautiful,",
"something",
"that",
"is",
"inspiring",
"people",
"all",
"over",
"the",
"world",
"to",
"embrace",
"life.",
"These",
"are",
"two",
"of",
"the",
"biggest",
"reasons",
"why",
"today",
"I",
"am",
"not",
"a",
"complete",
"mess.",
"As",
"I",
"watched",
"people",
"looking",
"at",
"our",
"life",
"I",
"wondered",
"what",
"they",
"were",
"feeling.",
"My",
"hope",
"is",
"that",
"people",
"see",
"beyond",
"cancer",
"and",
"death;",
"that",
"after",
"seeing",
"our",
"story",
"they",
"will",
"hold",
"their",
"loved",
"ones",
"closer.",
"I",
"hope",
"people",
"will",
"see",
"the",
"beauty",
"in",
"life,",
"the",
"simple",
"things",
"that",
"make",
"difficult",
"moments",
"bearable.",
"I",
"hope",
"more",
"than",
"anything",
"that",
"people",
"will",
"see",
"that",
"these",
"photographs",
"are",
"about",
"love",
"and",
"life,",
"about",
"following",
"your",
"dreams",
"and",
"never",
"letting",
"go...no",
"matter",
"how",
"hard",
"life",
"gets",
"Do", 
"it",
"Just", 
"do", 
"it",
"Don",
"t", 
"let", 
"your", 
"dreams", 
"be", 
"dreams",
"Yesterday", 
"you", 
"said", 
"tomorrow",
"So", 
"just", 
"do", 
"it",
"Make", 
"your", 
"dreams", 
"come", 
"true",
"Just", 
"do", 
"it",
"Some", 
"people", 
"dream", 
"of", 
"success",
"While", 
"you",
"re", 
"gonna", 
"wake", 
"up", 
"and", 
"work", 
"hard", 
"at", 
"it",
"Nothing", 
"is", 
"impossible",
"You", 
"should",
 "get", 
 "to", 
 "the", 
 "point",
"Where", 
"anyone", 
"else", 
"would", 
"quit",
"And", 
"you,",
"re", 
"not", 
"going", 
"to", 
"stop", 
"there",
"No,", 
"what", 
"are", 
"you", 
"waiting", 
"for?",
"Do", 
"it",
"Just", 
"do", 
"it",
"Yes", 
"you", 
"can",
"Just", 
"do", 
"it",
"If", 
"you,",
"re", 
"tired", 
"of", 
"starting", 
"over",
"Stop", 
"giving", 
"up"
];














