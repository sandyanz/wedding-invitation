document.addEventListener('keydown', function (event) {
    setTimeout(function(){
    if (event.target.id === 'fname') {
        document.getElementById('t1-short-fname').innerText = event.target.value[0].toUpperCase()  + ' &';
        document.getElementById('t1-fname').innerText = event.target.value;
    }
    if (event.target.id === 'sname') {
        document.getElementById('t1-short-sname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t1-sname').innerText = event.target.value;
    }
    if (event.target.id === 'wdate') {
        document.getElementById('t1-wdate').innerText = event.target.value;
    }
    if (event.target.id === 'wloc') 
    {
        document.getElementById('t1-wloc').innerText = event.target.value;
    }
    if (event.target.id === 'wmsg'){
        document.getElementById('t1-msg').innerText = event.target.value;
    }
}, 10);
});