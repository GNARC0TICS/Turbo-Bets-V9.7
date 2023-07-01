stop = (() => {
    let running;

    function bet() {
        return hdg.bet(hdg.amount)
    }

    (function() {
        running = setInterval(bet, -100);
    })()
    function stop() {
        clearInterval(running);
    }
    return stop;
})()

