let mynd1 = new Image(300, 200);
mynd1.src = 'https://i.imgur.com/qqFsein.jpg';

let mynd2 = new Image(300, 200);
mynd2.src = 'https://i.imgur.com/QdOTqIR.jpg';

let mynd3 = new Image(300, 200);
mynd3.src = 'https://i.imgur.com/2F3Al82.jpg';

// document.body.appendChild(mynd1);
// document.body.appendChild(mynd2);
// document.body.appendChild(mynd3);

class myndaHlutir{
	constructor(mynd, tag){
		this._mynd = mynd;
		this._tag = tag;
	}
}

let myndEitt = new myndaHlutir(mynd1, "fjall");
let myndTvo = new myndaHlutir(mynd2, "bygging");
let myndThrju = new myndaHlutir(myndThrju, "sjor");

myndir = [myndEitt, myndTvo, myndThrju];

