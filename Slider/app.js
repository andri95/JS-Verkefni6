class Einstaklingur{
	constructor(nafn, score){
		this._nafn = nafn;
		this._score = score;
	}
}

const einstEitt = new Einstaklingur("Kalli", "50"),
	einstTvo = new Einstaklingur("Gunna", "90"),
	einstThrju = new Einstaklingur("Siggi", "60"),
	einstFjogur = new Einstaklingur("Lea", "70"),
	einstFimm = new Einstaklingur("Arnar", "95");

const einstaklingar = [einstEitt, einstTvo, einstThrju, einstFjogur, einstFimm];

var range = document.getElementById('range');

const slide = noUiSlider.create(range, {

    range: {
        'min': 0,
        'max': 100
    },

    step: 5,

    // Handles start at ...
    start: [0, 100],

    // ... must be at least 300 apart
    // margin: 300,

    // ... but no more than 600
    // limit: 600,

    // Display colored bars between handles
    connect: true,

    // Put '0' at the bottom of the slider
    // direction: 'rtl',
    // orientation: 'vertical',

    // Move handle on tap, bars are draggable
    behaviour: 'tap-drag',
    tooltips: true,
    // format: wNumb({
    //     decimals: 0
    // }),

    // Show a scale with the slider
    pips: {
        mode: 'steps',
        stepped: true,
        density: 4
    }
});

const filterScore = (einstaklingar, val) => {
	return einstaklingar.filter((einstaklingur) => {
		return einstaklingur._score >= Math.round(val[0]) && einstaklingur._score <= Math.round(val[1])
	})
}
const render = (filteredEinstaklingar) => {
	let listi = document.querySelector('.nidurstada')
	listi.innerHTML = filteredEinstaklingar.map((filteredEinstaklingur) => {
		return (
			`
			<li>${filteredEinstaklingur._nafn}: ${filteredEinstaklingur._score}</li>
			`
		)
	}).join('')
}

slide.on('update', (val) => {
	let filteredEinstaklingar = filterScore(einstaklingar, val)
	render(filteredEinstaklingar)
});