function trElement(element){
    var elementClass = $(element).attr('class');
    if (elementClass != ''){
        console.log($(element).toggleClass('changed-angle'));
    }else{
        console.log('false')

    }

}
$(document).ready(function () {

});
