
document.addEventListener("input",bg_change);

function bg_change() {
    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var opt = document.getElementById('opt');
    //console.log(opt,opt.value);
    document.body.style.background = 'linear-gradient(' + opt.value + ',' + c1.value + ',' + c2.value + ')';
    document.getElementById('code').innerHTML = document.body.style.background + ';';

}