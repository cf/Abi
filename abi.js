/*

           _     _        _  _____ 
     /\   | |   (_)      | |/ ____|
    /  \  | |__  _       | | (___  
   / /\ \ | '_ \| |  _   | |\___ \ 
  / ____ \| |_) | | | |__| |____) |
 /_/    \_\_.__/|_|  \____/|_____/ 
                                   
                                   
	Copyright (c) 2013 Carter Feldman, All rights reserved.
*/
function Abi(a,b)// new Abi(a,b) = a+bi
{
	this.a=a;
	this.b=b;
}
function imm(a,b)// imm(a,b) = a+bi
{
	return new Abi(a,b);
}
Abi.prototype.add=function(z)// this+z
{
	return new Abi(this.a+z.a,this.b+z.b);
};
Abi.prototype.sub=function(z)// this-z
{
	return new Abi(this.a-z.a,this.b-z.b);
};
Abi.prototype.mul=function(z)// this*z
{
	return new Abi(this.a*this.a-z.b*z.b,this.a*z.b+this.b*z.a);
};
Abi.prototype.div=function(z)// this/z
{
	var dn=z.a*z.a+z.b*z.b;
	return new Abi((this.a*z.a+this.b*z.b)/dn,(this.b*z.a-this.a*z.b)/dn);
};
Abi.prototype.pow=function(z)// this^z
{
	var c=this.a*this.a+this.b*this.b;
	var e=Math.pow(c,z.a/2)*Math.pow(Math.E,-z.b*Math.atan2(this.b,this.a));
	var t=z.a*Math.atan2(this.b,this.a)+Math.log(c)*z.b/2;
	return new Abi(e*Math.cos(t),e*Math.sin(t));
};
//Start special functions
function cosh(x)
{
	var t=Math.pow(Math.E,x);
	return (t+1/t)/2;
}
function sinh(x)
{
	var t=Math.pow(Math.E,x);
	return (t-1/t)/2;
}
Abi.prototype.sin=function()
{
	return new Abi(Math.sin(this.a)*cosh(this.b),Math.cos(this.a)*sinh(this.b));
};
Abi.prototype.cos=function()
{
	return new Abi(Math.cos(this.a)*cosh(this.b),Math.sin(this.a)*sinh(this.b));
};
Abi.prototype.tan=function()
{
	var b=Math.cos(2*this.a)+cosh(2*this.b);
	return new Abi(Math.sin(2*this.a)/b,sinh(2*this.b)/b);
};
//End special functions
