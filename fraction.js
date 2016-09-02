'use strict';

/*
*	Class Fraction takes 2 integer args: numerator, denumerator > 0. 
*	Interfaces:
*		1. get(); Returns the fraction as string
*		2. set(numerator, denumerator > 0); Create new fraction in same instance
*			Next methods returns result of arifmethic operation of two fractions and reduces result: 
*				3. plus(numerator, denumerator > 0); Returns sum 
*				4. minus(numerator, denumerator > 0); Returns difference 
*				5. mult(numerator, denumerator > 0); Returns product 
*				6. div(numerator, denumerator > 0); Returns quotient 
*/


function Fraction (numerator, denumerator) {
		if ( !argsIsIntegers(numerator, denumerator) || denumerator === 0)
			throw new Error('Only integers > 0!'); 
		
		this.numer = numerator;
		this.denum = denumerator;
		let that = this; 
	
	function argsIsIntegers(...args) { //Check arguments for integers 
		for (let item of args) {
			if ( !Number.isInteger(item) )
				return false;
		};
		return true;
	}
	
	
	this.get = function() {
		return `${this.numer}/${this.denum}`; 
	}
	
	
	this.set = function(num, den) {
		this.numer = num;
		this.denum = den; 
	}
	
	
	this.mult = function (numer2, denum2 = 1) {
		if ( !argsIsIntegers(arguments) )
			throw new Error('Only integers > 0!');
 		
		let foo = this.numer * numer2,
		    bar = this.denum * denum2,
				gcd = this.gcdEuclid(foo, bar);
		if (gcd > 1)
			return `${foo / gcd}/${bar / gcd}`;
		return `${foo}/${bar}`;
	}
	
	
	this.div = function(numer2, denum2 = 1) {
		if ( !argsIsIntegers(arguments) )
			throw new Error('Only integers > 0!'); 		
		
		let foo = this.numer * denum2,
		    bar = this.denum * numer2,
				gcd = this.gcdEuclid(foo, bar);
		if (gcd > 1)
			return `${foo / gcd}/${bar / gcd}`;
		return `${foo}/${bar}`;
	}
	
	
	function gcdEuclid(a, b) { //Private method
		let c;
		while (b) {
			c = a % b;
			a = b;
			b = c;
		};
		return Math.abs(a);
	}

	
	function getLCM(numer2, denum2) { //Private method
		return that.denum * denum2 / gcdEuclid(that.denum, denum2);
	}
	
	
	this.plus = function (numer2, denum2 = 1) { 
		if ( !argsIsIntegers(numer2, denum2) || denum2 === 0)
			throw new Error('Only integers > 0!'); 
		
		let lcm = getLCM (this.denum, denum2), 
				sumNumer = this.numer * (lcm /this.denum), 
				sumNumer2 = numer2 * (lcm / denum2),
				sumRes = sumNumer + sumNumer2,
				gcd = gcdEuclid(sumRes, lcm);
				
		if (gcd > 1)
			return `${sumRes / gcd}/${lcm / gcd}`;
		return `${sumRes}/${lcm}`;
	}


	this.minus = function (numer2, denum2 = 1) { 
		if ( !argsIsIntegers(numer2, denum2) || denum2 === 0 )
			throw new Error('Only integers > 0!'); 
		
		let lcm = getLCM (this.denum, denum2), 
				sumNumer = this.numer * (lcm /this.denum), 
				sumNumer2 = numer2 * (lcm / denum2),
				sumRes = sumNumer - sumNumer2,
				gcd = gcdEuclid(sumRes, lcm);
				
		if (gcd > 1)
			return `${sumRes / gcd}/${lcm / gcd}`;
		return `${sumRes}/${lcm}`;
	}
}
