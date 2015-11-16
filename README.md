# UV

browserify uservoice wrapper

### Installation

    $ npm install seed-uv
    
### Usage
  
```javascript

var uv = require('seed-uv');

var UserVoice = uv(user_voice_key);

// Set colors
UserVoice.set({
  accent_color: '#448dd6',
  trigger_color: 'white',
  trigger_background_color: 'rgba(46, 49, 51, 0.6)'
});

// Identify the user and pass traits
// To enable, replace sample data with actual user traits and uncomment the line
UserVoice.identify({
  email: user.email,
  name:  user.name
});

// Add default trigger to the bottom-right corner of the window:
UserVoice.addTrigger({ 
  mode: 'contact', 
  trigger_position: 'bottom-right'
});

```

### Author

Vladimir Popov <vlad@seedalpha.net>

### License

MIT