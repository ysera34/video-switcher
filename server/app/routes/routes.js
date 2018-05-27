module.exports = function(app) {
  app.post('/switch', (req, res) => {
    console.log(req.body);
    res.send('hello post');
  });

  app.get('/switch', (req, res) => {
    res.send('hello get');
  });
};
