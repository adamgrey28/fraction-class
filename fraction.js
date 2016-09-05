'use strict';

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
    if ( !argsIsIntegers(numer2, denum2) || denum2 === 0 )
      throw new Error('Only integers > 0!');
 		
    let newNumer = this.numer * numer2,
        newDenum = this.denum * denum2,
        gcd = gcdEuclid(newNumer, newDenum);
				
    if (gcd > 1)
      return `${newNumer / gcd}/${newDenum / gcd}`;
    return `${newNumer}/${newDenum}`;
  }
	
	
  this.div = function(numer2, denum2 = 1) {
    if ( !argsIsIntegers(numer2, denum2) || denum2 === 0 )
      throw new Error('Only integers > 0!'); 		
		
    let newNumer = this.numer * denum2,
        newDenum = this.denum * numer2,
        gcd = gcdEuclid(newNumer, newDenum);
				
    if (gcd > 1)
      return `${newNumer / gcd}/${newDenum / gcd}`;
    return `${newNumer}/${newDenum}`;
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
