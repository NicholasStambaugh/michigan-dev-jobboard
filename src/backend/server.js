const express = require('express');
const app = express();
const port = 3000;
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());

passport.use(new LocalStrategy(
    function(username, password, done) {
      // Here you should look up the user in your database
      // For now, we'll just use a dummy user
      const user = {username: 'test', password: 'test'};
  
      if (username === user.username && password === user.password) {
        return done(null, user);
      } else {
        return done(null, false, { message: 'Invalid credentials.\n' });
      }
    }
  ));


app.use(passport.session());

passport.serializeUser(function(user, done) {
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  // Here you should fetch the user from your database again
  // For now, we'll just use the same dummy user
  const user = {username: 'test', password: 'test'};
  done(null, user);
});

app.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function(req, res) {
    res.redirect('/');
  });
  
  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});