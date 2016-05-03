# IdleListenerManager
Javascript plugin that manages multiple idle listeners

# Reason
IdleListenerManager is manly used for webapplications that want to set tasks to fire when the browser has been idle for a desired length of time

# Usage

Currently IdleListenerManager is used like so
```javascript
IdleListeners.add(function(){
  console.log("Idle!");
}, 1000)
````

"Idle!" will be every 1000 miliseconds as long as the mouse or keyboard havent been touched
