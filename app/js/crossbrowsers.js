let browserName =()=> {
    
    let browserId = navigator.userAgent;
    
    console.log(browserId);
    
    if (browserId.search(/Chrome/)!=-1){
        return 'Google Chrome';
    }
    
    else if (browserId.search(/Firefox/)!==-1){
        return 'Firefox';
    }
    
    else if (browserId.search(/Opera/)!==-1){
        return 'Opera';
    }
    
    else if (browserId.search(/Safari/)!==-1){
        return 'Safari';
    }
    
    else if (browserId.search(/MSIE/)!==-1){
        return 'Internet Explorer';
    }
    
    else {
        console.log('Unknown browser');
    }
}


let browser = browserName();

switch(browser){
        
    case 'Google Chrome':
        console.log(1);
        document.write('<style>.footer-top {background: red;  background-size: cover;    box-shadow: 0px 5px 0px 0px rgba(222, 213, 183, 0.92);}</style>');
        break
    
    case 'Firefox':
        console.log(2);
         
        break
        
    case 'Opera':
        console.log(3);
        break
    
    case 'Safari':
        console.log(4);
        break
        
    case 'Internet Explorer':
        console.log(5);
        
        break
        
    case 'Unknown browser':    
        console.log('Unknown browser')
        break       
}