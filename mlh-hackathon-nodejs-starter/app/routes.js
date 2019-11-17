const controllers = require("./controllers");
const config = require("../config");

module.exports.registerRoutes = app => {
  app.use("/", controllers.home);
  app.use("/auth", controllers.auth);
  app.use("/tutorial", controllers.tutorial);
  app.use("/testpage", controllers.testpage);
  app.use("/buy", controllers.buy);
  app.use("/buyshirts", controllers.buyshirts);
  app.use("/buypants", controllers.buypants);
  app.use("/buymisc", controllers.buymisc);
  app.use("/sellpants", controllers.sellpants);
  app.use("/sellshirts", controllers.sellshirts);
  app.use("/sellmisc", controllers.sellmisc);
  app.use("/sell", controllers.sell);
};

module.exports.registerErrorHandlers = app => {
  app.use(function(err, req, res, next) {
    console.error(err.message);
    res.status(err.status || 500);
    res.render("500", {
      message: err.message,
      error: config.env === "development" ? err : {}
    });
  });
};
