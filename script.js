document.addEventListener('keydown', function (event) {
    setTimeout(function(){
    if (event.target.id === 'fname') {
       
        document.getElementById('t1-short-fname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t1-short-and').innerText = '&';
        document.getElementById('t1-fname').innerText = event.target.value;
        document.getElementById('t1-fname-and').innerText = '&';

        document.getElementById('t2-short-fname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t2-short-and').innerText = '&';
        document.getElementById('t2-fname').innerText = event.target.value;
        document.getElementById('t2-fname-and').innerText = '&';


        document.getElementById('t3-short-fname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t3-short-and').innerText = '&';
        document.getElementById('t3-fname').innerText = event.target.value;
        document.getElementById('t3-fname-and').innerText = '&';


        document.getElementById('t4-short-fname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t4-short-and').innerText = '&';
        document.getElementById('t4-fname').innerText = event.target.value;
        document.getElementById('t4-fname-and').innerText = '&';


    }
    if (event.target.id === 'sname') {
        document.getElementById('t1-short-sname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t1-sname').innerText = event.target.value;

        document.getElementById('t2-short-sname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t2-sname').innerText = event.target.value;

        document.getElementById('t3-short-sname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t3-sname').innerText = event.target.value;

        document.getElementById('t4-short-sname').innerText = event.target.value[0].toUpperCase();
        document.getElementById('t4-sname').innerText = event.target.value;
    }
    if (event.target.id === 'wdate') {
        document.getElementById('t1-wdate').innerText = event.target.value;
        
        document.getElementById('t2-wdate').innerText = event.target.value;

        document.getElementById('t3-wdate').innerText = event.target.value;

        document.getElementById('t4-wdate').innerText = event.target.value;
    }
    if (event.target.id === 'wloc') 
    {
        document.getElementById('t1-wloc').innerText = event.target.value;

        document.getElementById('t2-wloc').innerText = event.target.value;

        document.getElementById('t3-wloc').innerText = event.target.value;

        document.getElementById('t4-wloc').innerText = event.target.value;
    }
    if (event.target.id === 'wmsg'){
        document.getElementById('t1-msg').innerText = event.target.value;

        document.getElementById('t2-msg').innerText = event.target.value;

        document.getElementById('t3-msg').innerText = event.target.value;

        document.getElementById('t4-msg').innerText = event.target.value;
    }
}, 10);
});

function ShowCards(cardName)
{
    console.log(cardName);
    document.getElementById('template1').style.display="none";
    document.getElementById('template2').style.display="none";
    document.getElementById('template3').style.display="none";
    document.getElementById('template4').style.display="none";
 
    if(cardName==='autumn')
    {
        document.getElementById('template1').style.display="block";
    }
    else if(cardName==='winter')
    {
        document.getElementById('template2').style.display="block";
    }
    else if(cardName==='spring')
    {
        document.getElementById('template3').style.display="block";
    }
    else if(cardName==="summer")
    {
        document.getElementById('template4').style.display="block";
    }
}
