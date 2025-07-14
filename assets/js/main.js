"use strict";

/* ======= Header animation ======= */   
const header = document.getElementById('header');  

window.onload=function() 
{   
    headerAnimation(); 

};

window.onresize=function() 
{   
    headerAnimation(); 

}; 

window.onscroll=function() 
{ 
    headerAnimation(); 

}; 
    

function headerAnimation () {

    var scrollTop = window.scrollY;
	
	if ( scrollTop > 0 ) {	    
	    header.classList.add('navbar-fixed-top');    
	    	    
	} else {
	    header.classList.remove('navbar-fixed-top');
        // Ensure header stays clickable at top of page
        header.style.zIndex = '9999';
	}

}




let scrollLinks = document.querySelectorAll('.scrollto');
const pageNavWrapper = document.getElementById('navbar-collapse');

scrollLinks.forEach((scrollLink) => {

	scrollLink.addEventListener('click', (e) => {
		
		// Only prevent default for anchor links (scrollto), not regular page navigation
		const href = scrollLink.getAttribute("href");
		
		// Check if it's an anchor link (starts with #) or a page link (.html)
		if (href.startsWith('#')) {
			e.preventDefault();

			let element = document.querySelector(href);
			
			if (element) {
				const yOffset = 70; //page .header height
				
				const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
				
				window.scrollTo({top: y, behavior: 'smooth'});
			}
			
			//Collapse mobile menu after clicking
			if (pageNavWrapper.classList.contains('show')){
				pageNavWrapper.classList.remove('show');
			}
		}
		// For .html links, let the browser handle navigation normally
		// Don't prevent default, just collapse mobile menu if needed
		else if (pageNavWrapper.classList.contains('show')){
			pageNavWrapper.classList.remove('show');
		}
		
    });
	
});

/* ===== Gumshoe SrollSpy ===== */
/* Ref: https://github.com/cferdinandi/gumshoe  */

// Initialize Gumshoe
var spy = new Gumshoe('#nav-menu .nav-link', {
	offset: 70
});
