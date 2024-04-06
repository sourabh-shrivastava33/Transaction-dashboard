export const errorHandlerMiddleware = (err, req, res, next) => {
  const message = err.message || "Something went wrong";
  const status = err.statusCode || 500;
  res.status(status).json({ message });
};
