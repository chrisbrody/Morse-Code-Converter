var english, english2;
function userEnglishInput() {
    english = document.getElementById('englishInput').value.toLowerCase();
    var replaceObj = {
    	a: '.- / ',
    	b: '-... / ',
    	c: '-.-. / ',
    	d: '-.. / ',
    	e: '. / ',
    	f: '..-. / ',
    	g: '--. / ',
    	h: '.... / ', 
    	i: '.. / ', 
    	j: '.--- / ', 
    	k: '-.- / ', 
    	l: '.-.. / ', 
    	m: '-- / ', 
    	n: '-. / ', 
    	o: '--- / ', 
    	p: '.--. / ', 
    	q: '--.- / ',
    	r: '.-. / ', 
    	s: '... / ', 
    	t: '- / ', 
    	u: '..- / ', 
    	v: '...- / ', 
    	w: '.-- / ', 
    	x: '-..- / ', 
    	y: '-.-- / ', 
    	z: '--.. / ',
    	'0': '----- / ',
    	'1': '.---- / ',
    	'2': '..-- / ',
    	'3': '...-- / ',
    	'4': '....- / ',
    	'5': '----- / ',
    	'6': '-.... / ',
    	'7': '--.... / ',
    	'8': '---.. / ',
    	'9': '----. / ',
    	'.': '.-.-.- / ',
    	',': '--..-- / ',
    	':': '---... / ',
    	"'": '.----. / ',
    	'"': '.----. / ',
    	'-': '-....- / ',
    	'@': '.--.-. / ',
    	'=': '-...- / ',
    	' ': "",
    	'?': '..--.. / ',
    	'\/': '-..-. / '
    }
    english2 = english.replace(/a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z|0|1|2|3|4|5|6|7|8|9|@|.|,|:|"|'|=|\s+|[?=]|\//gi, function(matched) {   	
    	return replaceObj[matched];
    });
    document.getElementById('morse').innerHTML = english2;
    console.log(english2.trim());
    if (english.length === 0) {
    	document.getElementById('morseWrapper').style.display="none";
    } else{
    	document.getElementById('morseWrapper').style.display="block";
    };
    
}
function runScript(e) {
    if (e.keyCode == 13) {
        return false;
    }
}