var IdleListeners = new function(){
  var self = this;

  window.onmousemove = resetTimer;
  window.onmousedown = resetTimer;
  window.onclick = resetTimer;
  window.onscroll = resetTimer;
  window.onkeypress = resetTimer;

  function resetTimer() {
    for (var i = 0; i < self.listeners.length; i++) {
        self.listeners[i].reset();
    }
  }
}

IdleListeners.listeners = [];

IdleListeners.add = function(idleFunction, timeout){
  this.listeners.push(new IdleListener(idleFunction, timeout));
}

var IdleListener = function(idleFunction, timeout){
  this.idleFunciton = idleFunction;
  this.timeout = timeout;

  this.reset = function(){
    if (this.hasOwnProperty('interval')){
      clearInterval(this.interval);
    };
    this.interval = setInterval(this.idleFunciton, this.timeout);
  }
}
