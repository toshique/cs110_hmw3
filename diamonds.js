const stars = function(nstar){
	let box1="";
	for(let a=0; a<nstar; a=a+1){
		box1=box1+"*";
	}
	return box1;
}
const spaces = function(nspace){
	let box2="";
	for(let b=0; b<nspace; b=b+1){
		box2=box2+" ";
	}
	return box2;
}
const connect = function(nspace, nstar){
	return spaces(nspace)+stars(nstar);
}
const diamond = function(n){
	let c=0;
	while (c<(n+1)/2, c=c+1){
		 return connect((n+1)/2-c-1; 1+2c);
	}
	let d=0;
	while (d<(n-1)/2, d=d+1){
		 return connect(d+1; (n+1)/2-2d);
	}
};
 const D = diamond(5);
 console.log(D)