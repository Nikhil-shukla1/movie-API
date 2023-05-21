const { constants } = require("../constant");

const errorHandler = function (err, req, res, next) {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "validation faild",
        message: err.message,
        stackTrace: err.stack,
      });
    break;
    case constants.UNAUTHORIZED:
      res.json({
        title: "unauthorized acess",
        message: err.message,
        stackTrace: err.stack,
      });
    break;
    case constants.NOT_FOUND:
      res.json({
        title: "not found",
        message: err.message,
        stackTrace: err.stack,
      });
    break;
    case constants.SERVER_ERROR:
      res.json({
        title: "internal server error",
        message: err.message,
        stackTrace: err.stack,
      });
    break;
    case constants.FORBIDDEN:
      res.json({
        title: "forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
        console.log("all clear no problem")
    break;
  }
};

module.exports = errorHandler;

// whenever we interact with mogodb or mongoose we get a promise hance we nee to make this async function or we can use built in middlewaRE asyncHandler