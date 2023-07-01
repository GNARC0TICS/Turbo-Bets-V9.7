stop = (() => {
    let running;

    function bet() {
        return lbg.bet(lbg.amount)
    }

    (function() {
        running = setInterval(bet, -100);
    })()
    function stop() {
        clearInterval(running);
    }
    return stop;
})()

