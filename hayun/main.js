function nightDayHandler(self){
    var target = document.querySelector('body');

    if(self.value === 'night'){
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';

        var alist = document.querySelectorAll('a');
        var i = 0;

        while(i < alist.length){
            alist[i].style.color = 'powderblue';
            i = i + 1;
        }
    }
    else{
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'night';

        var alist = document.querySelectorAll('a');
        var i = 0;

        while(i < alist.length){
            alist[i].style.color = 'blue';
            i = i + 1;
        }
    }
}

var isImageBig = false;
var originWidth, originHeight;

function changeImageSize(self) {
    var img = document.getElementById('myImage');
    
    if(!isImageBig){
        img.style.width = '400px';
        img.style.height = '400px';
        isImageBig = true;
    } else {
        img.style.width = '0';
        img.style.height = '0';
        isImageBig = false;
    }
}