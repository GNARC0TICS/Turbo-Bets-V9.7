stop = (() => {
    let running;

    function bet() {
        return dg.bet(dg.amount)
    }

    (function() {
        running = setInterval(bet, -100);
    })()
    function stop() {
        clearInterval(running);
    }
    return stop;
})()

