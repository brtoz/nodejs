const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  if(ctx.originalUrl === '/about'){
    ctx.response.type = 'text/html';
    ctx.body = `<h1>Hakkimizda Sayfasi</h1>`;
  }
  else if(ctx.originalUrl === '/contact'){
    ctx.response.type = 'text/html';
    ctx.body = `<h1>Iletişim Sayfasi</h1>`
  }
  else if(ctx.originalUrl === '/'){
    ctx.response.type = 'text/html';
    ctx.body = `<h1>Anasayfa</h1>`
  }
  else {
    ctx.response.type = 'text/html';
    ctx.body = `<h2>404 sayfa bulunamadi</h2>`
  }

});

app.listen(3000);