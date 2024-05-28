require("dotenv/config");
const Koa = require("koa");
const cors = require("@koa/cors");

const { koaBody } = require("koa-body");
const router = require("./route/route");
const responseHandler = require("./handler/response");

const app = new Koa();

app.use(cors());
app.use(koaBody());
app.use(responseHandler());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3001, () => {
  console.log(`Server is running on port 3001`);
});
