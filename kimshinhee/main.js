function nightDayHandler(self){
    var target = document.querySelector('body');

    if(self.value === 'night'){
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'day';

        var alist = document.querySelectorAll('a');
        var i = 0;

        while (i < alist.length){
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
function changeImageSize(self){
    var isImageBig = document.querySelector('img');

    if(self.value === '짜란'){
        isImageBig.style.width = "400px";
        isImageBig.style.height = "400px";
        self.value = "귀엽쥬?"
    }
    else{
        isImageBig.style.width = "0px";
        isImageBig.style.height = "0px";
        self.value = "짜란"
    }

}