let browserName =()=> {
    
    let browserId = navigator.userAgent;
    
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
    
    else if (document.documentMode || /Edge/.test(browserId)) {/*здесь Edge c помощью метода test сопоставляется со значением browserId, если ок возвращает true*/
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
        break
    
    case 'Firefox':
        console.log(2);
        
        document.querySelectorAll('.product-btn').forEach((e)=>{
            e.style.paddingRight = "18px";
        })    
        
        break
        
    case 'Opera':
        console.log(3);
        break
    
    case 'Safari':
        console.log(4);
        break
        
    case 'Internet Explorer':
        console.log(5);
        
        //Polifill forEach for IE
        
        if (window.NodeList && !NodeList.prototype.forEach) {
            NodeList.prototype.forEach = Array.prototype.forEach;
        }
        
        document.querySelectorAll('.product-btn').forEach(e=>{
            e.style.paddingRight = "18px";
        })
        
        
        
        
        
        
        
        break
        
    case 'Unknown browser':    
        console.log('Unknown browser')
        
        break       
}