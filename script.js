const mediaQuery = window.matchMedia('(max-width: 576px)')

if (mediaQuery.matches) {
    
    function menuopen(){
        document.getElementById('link_list').style.visibility= 'visible' ;
        document.getElementById('dot').style.visibility= 'hidden';
        document.getElementById('x_mark').style.visibility= 'visible';
    }
    
    
    function menuclose(){
        document.getElementById('link_list').style.visibility = 'hidden' ;
        document.getElementById('dot').style.visibility= 'visible';
        document.getElementById('x_mark').style.visibility= 'hidden';
    }
  }
