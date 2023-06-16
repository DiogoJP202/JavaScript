function random(max = 0, min = 0){
	max *= 1000;
	min *= 1000;
	return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve(msg);
        }, time);
    })
};


async function listener(){
	const level01 = await wait("Level01", random(1, 3));
	console.log(level01);

	const level02 = await wait("Level02", random(1, 3));
	console.log(level02);

	const level03 = await wait("Level03", random(1, 3));
	console.log(level03);
}

listener();