stop = (() => {
let running;

function bet() {
return lbg.bet(lbg.amount).then((r)=>{
  if(r.profitAmount > 0)
  {
    clearInterval(running);
  }
});
}

(function() {
running = setInterval(bet, 100);
})()
function stop() {
clearInterval(running);
}
return stop;
})()
