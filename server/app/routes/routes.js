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

  app.get('/videos/:id', (req, res) => {
    const id = req.params.id;

    switch (id) {
      case '1':
          console.log('id: ' + id);
          res.render('video11.pug');
        break;
      case '2':
          console.log('id: ' + id);
          res.render('video12.pug');
        break;
      default:
        res.render('index');
    }
  });
};
