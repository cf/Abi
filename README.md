Abi
===

Abi, imaginary numbers for Javascript

Copyright (c) 2013 Carter Feldman, All rights reserved.

#Example operations

##Adding
```javascript
var w=new Abi(2,3);
var z=new Abi(5,-13);
var res=w.add(z);// (2+3i) + (5-13i) = 7-10i
```

##Subtracting
```javascript
var w=new Abi(2,3);
var z=new Abi(5,-13);
var res=w.sub(z);// (2+3i) - (5-13i) = -3+16i
```

##Multiplying
```javascript
var w=new Abi(2,3);
var z=new Abi(5,-13);
var res=w.mul(z);// (2+3i) * (5-13i) = -165-11i
```

##Dividing
```javascript
var w=new Abi(2,3);
var z=new Abi(3,2);
var res=w.div(z);// (2+3i) / (3+2i) = 12/13+5/13i
```

##Exponentiating
```javascript
var w=new Abi(6,3);
var z=new Abi(5,2);
var res=w.pow(z);// (6+3i) ^ (5+2i) = 5306.99643361028-847.1030264556741i
```

