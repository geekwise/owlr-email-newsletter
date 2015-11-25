var css_rules;
var index;
var length;
var collection;
var pointer;


convert_css = function(){

    css_rules = document.styleSheets[document.styleSheets.length-1].cssRules;
    index = 0;
    length = css_rules.length;
    
 	for(index, css_rules.length; index < css_rules.length; index++){

	    collection = document.querySelectorAll(css_rules[index].selectorText);
	    pointer = 0;

	        for(pointer; pointer < collection.length; pointer++){
	            collection[pointer].style.cssText += css_rules[index].style.cssText;
	        };
	};

};


document.addEventListener('DOMContentLoaded',function(event){
    
    convert_css();

});