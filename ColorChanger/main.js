var red, green, blue, alpha,rS,gS,bS,aSs;
red=0;
green=0;
blue=0;
alpha=1.0;
rS=0;
gS=0;
bS=0;
aSs=0;
var value,color,string,colorValue,maxV;
function loadNumbers()
{
document.getElementById("redValue").innerHTML=red;
document.getElementById("greenValue").innerHTML=green;
document.getElementById("blueValue").innerHTML=blue;
document.getElementById("alphaValue").innerHTML=alpha;
convertToHexadecimal(red,green,blue,alpha);
document.getElementById("sR").innerHTML=rS;
document.getElementById("sG").innerHTML=gS;
document.getElementById("sB").innerHTML=bS;
document.getElementById("sA").innerHTML=aSs;
convertToHexadecimalSwatch(rS,gS,bS,aSs);
}
mouse = false;

function mousedown(color,string,value,maxV)
{
  mouse = true;
  callEvent(color,string,value,maxV);
}
function mouseup()
{
  mouse = false;
}
function callEvent(color,string,value,maxV)
{
 if(mouse)
 {
	if ( (color + value) >=0 && (color + value) <= maxV)
	{
		colorValue = (string+"Value");
		var x = document.getElementById("backgroundContainer");
		color += value;
		if(string == "red"){red = color;}
		else if(string == "green"){green = color;}
		else if(string == "blue"){blue = color;}
		else if(string == "alpha")
			{
				color = color.toPrecision(2)*1;
				alpha = color;
			}
		document.getElementById(colorValue).innerHTML=color;
		
		x.style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")";
		convertToHexadecimal(red,green,blue,alpha);
	}

   setTimeout(callEvent,100,color,string,value,maxV);
 }
 else
 return;
}
var r,g,b,a;
function randomColor(r,g,b,a)
{
	var x = document.getElementById("backgroundContainer");
	if (r)
	{
		red = Math.floor(Math.random()*256);
	}
	if (g)
	{
		green = Math.floor(Math.random()*256);
	}
	if (b)
	{
		blue = Math.floor(Math.random()*256);
	}
	if (a)
	{
		alpha = Math.random().toPrecision(2)*1;
	}
	
	document.getElementById("redValue").innerHTML=red;
	document.getElementById("greenValue").innerHTML=green;
	document.getElementById("blueValue").innerHTML=blue;
	document.getElementById("alphaValue").innerHTML=alpha;
	x.style.backgroundColor = "rgba("+red+","+green+","+blue+","+alpha+")";
	convertToHexadecimal(red,green,blue,alpha);
}

var hexaArray = [];
hexaArray = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

function convertToHexadecimal(red,green,blue,alpha)
{
	var r1,r2,g1,g2,b1,b1,newAlpha;
	r1 = Math.floor(red/16);
	r2 = red%16;
	g1 = Math.floor(green/16);
	g2 = green%16;
	b1 = Math.floor(blue/16);
	b2 = blue%16;
	newAlpha = Math.floor(alpha.toPrecision(2)*100);
	//newAlpha = (newAlpha*10000)/100)*1;
	
	document.getElementById("hexadecimalValue").innerHTML=(hexaArray[r1]+hexaArray[r2]+hexaArray[g1]+hexaArray[g2]+hexaArray[b1]+hexaArray[b2]+" "+newAlpha+"% Saturation");
}

function checkBoundsLow(start,end)
{
	var newStart = start;
	if (start > end)
	{
		newStart = end;
	}
	else if(start == end && start > 1 )
	{
		newStart -= 1;
	}
	return newStart;
}
function checkBoundsHigh(start,end)
{
	var newEnd = end;
	if (start > end)
	{
		newEnd = start;
	}
	else if(start == end && start < 1)
	{
		newEnd += 1;
	}
	return newEnd;
}


function randomSwatchColor()
{
	
	var rS = Math.floor(Math.random()*256);
	var gS = Math.floor(Math.random()*256);
	var bS = Math.floor(Math.random()*256);
	var aSs = Math.random().toPrecision(2)*1;
	document.getElementById("sR").innerHTML=rS;
	document.getElementById("sG").innerHTML=gS;
	document.getElementById("sB").innerHTML=bS;
	document.getElementById("sA").innerHTML=aSs;
	convertToHexadecimalSwatch(rS,gS,bS,aSs);
	return "rgba("+rS+","+gS+","+bS+","+aSs+")";
}

function convertToHexadecimalSwatch(red,green,blue,alpha)
{
	var r1,r2,g1,g2,b1,b1,newAlpha;
	r1 = Math.floor(red/16);
	r2 = red%16;
	g1 = Math.floor(green/16);
	g2 = green%16;
	b1 = Math.floor(blue/16);
	b2 = blue%16;
	newAlpha = Math.floor(alpha.toPrecision(2)*100);
	//newAlpha = (newAlpha*10000)/100)*1;
	
	document.getElementById("hexiSwatch").innerHTML=(hexaArray[r1]+hexaArray[r2]+hexaArray[g1]+hexaArray[g2]+hexaArray[b1]+hexaArray[b2]+" "+newAlpha+"% Saturation");
}

function createARandomSwatch()
{
	
	var playground = document.getElementById("playground");
	var bounds = playground.getBoundingClientRect();
	var xStart = bounds.left;
	var xEnd = bounds.right;
	var yStart = bounds.top;
	var yEnd = bounds.bottom;
	var width = xEnd - xStart;
	var height = yEnd - yStart;
	
	
	var randLeft = Math.random()*width;
	var randRight = Math.random()*width;
	var swatchLeft = checkBoundsLow(randLeft,randRight);
	var swatchRight = checkBoundsHigh(randLeft,randRight);
	var randWidth = swatchRight - swatchLeft;
	
	var randTop = Math.random()*height;
	var randBottom = Math.random()*height;
	var swatchTop = checkBoundsLow(randTop,randBottom);
	var swatchBottom =checkBoundsHigh(randTop,randBottom);
	var randHeight = swatchBottom - swatchTop;
	
	
	if(!(document.getElementById("randomSwatch") == null))
	{
		document.getElementById("playground").removeChild(document.getElementById("randomSwatch"));
	}
	
	var divElement = document.createElement("div");
	divElement.id = "randomSwatch";

	
	
	
	divElement.style.position ="relative";
	divElement.style.left = swatchLeft+"px";
	divElement.style.width = randWidth+"px";
	divElement.style.top = swatchTop+"px";
	divElement.style.height = randHeight+"px";
	divElement.style.backgroundColor = randomSwatchColor();
	divElement.style.margin="0px";
	divElement.style.padding="0px";
	
	playground.appendChild(divElement);
	
}

function createBtn()
{
	var innerContainer = document.getElementById("innerContainer");

	var btn = document.createElement("button");
	var str = "sideButton"+count;
	btn.id=str;
	var red = document.getElementById("sR").textContent;
	var green = document.getElementById("sG").textContent;
	var blue = document.getElementById("sB").textContent;
	var alpha = document.getElementById("sA").textContent;
	btn.innerHTML = "rgba("+red+","+green+","+blue+","+alpha+")";
	innerContainer.appendChild(btn);
	
	
}

function createOtherBtn()
{
	var innerContainer = document.getElementById("innerContainer");

	var btn = document.createElement("button");
	var str = "sideButton"+count;
	btn.id=str;
	var red = document.getElementById("redValue").textContent;
	var green = document.getElementById("greenValue").textContent;
	var blue = document.getElementById("blueValue").textContent;
	var alpha = document.getElementById("alphaValue").textContent;
	btn.innerHTML = "rgba("+red+","+green+","+blue+","+alpha+")";
	innerContainer.appendChild(btn);
}

function saveColorSwatch()
{
	
	counter();
	createBtn();
	var red = document.getElementById("sR").textContent;
	var green = document.getElementById("sG").textContent;
	var blue = document.getElementById("sB").textContent;
	var alpha = document.getElementById("sA").textContent;
	var str = "sideButton"+count;
	btnNew = document.getElementById(str);
	btnNew.addEventListener("click", function()
	{
		var x = document.getElementById("backgroundContainer");
		var theColor = document.getElementById(str).textContent;
		x.style.backgroundColor=theColor;
		document.getElementById("redValue").innerHTML=red;
		document.getElementById("greenValue").innerHTML=green;
		document.getElementById("blueValue").innerHTML=blue;
		document.getElementById("alphaValue").innerHTML=alpha;
		var r1,r2,g1,g2,b1,b1,newAlpha;
		r1 = Math.floor(red/16);
		r2 = red%16;
		g1 = Math.floor(green/16);
		g2 = green%16;
		b1 = Math.floor(blue/16);
		b2 = blue%16;
		newAlpha = Math.floor(alpha*100);
		document.getElementById("hexadecimalValue").innerHTML=(hexaArray[r1]+hexaArray[r2]+hexaArray[g1]+hexaArray[g2]+hexaArray[b1]+hexaArray[b2]+" "+newAlpha+"% Saturation");
	});
	
}
function saveColorOther()
{
	
	counter();
	createOtherBtn();
	var red = document.getElementById("redValue").textContent;
	var green = document.getElementById("greenValue").textContent;
	var blue = document.getElementById("blueValue").textContent;
	var alpha = document.getElementById("alphaValue").textContent;
	var str = "sideButton"+count;
	btnNew = document.getElementById(str);
	btnNew.addEventListener("click", function()
	{
		var x = document.getElementById("backgroundContainer");
		var theColor = document.getElementById(str).textContent;
		x.style.backgroundColor=theColor;
		document.getElementById("redValue").innerHTML=red;
		document.getElementById("greenValue").innerHTML=green;
		document.getElementById("blueValue").innerHTML=blue;
		document.getElementById("alphaValue").innerHTML=alpha;
		var r1,r2,g1,g2,b1,b1,newAlpha;
		r1 = Math.floor(red/16);
		r2 = red%16;
		g1 = Math.floor(green/16);
		g2 = green%16;
		b1 = Math.floor(blue/16);
		b2 = blue%16;
		newAlpha = Math.floor(alpha*100);
		document.getElementById("hexadecimalValue").innerHTML=(hexaArray[r1]+hexaArray[r2]+hexaArray[g1]+hexaArray[g2]+hexaArray[b1]+hexaArray[b2]+" "+newAlpha+"% Saturation");
	});
	
}

var count = 0;


function counter()
{
	count += 1;
}

