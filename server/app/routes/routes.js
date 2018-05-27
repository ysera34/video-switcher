module.exports = function(app) {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.post('/switch', (req, res) => {
    console.log(req.body);
    res.send('hello post');
  });

  app.get('/switch', (req, res) => {
    res.send('hello get');
  });
};
