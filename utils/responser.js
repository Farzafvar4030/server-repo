const success = (request, response, message) => {
  const requestPath = request.path;

  return response.json({
    requestPath,
    status: "SUCCESS",
    message,
  });
};

const error = (request, response, message) => {
  const requestPath = request.path;

  return response.json({
    requestPath,
    status: "ERROR",
    message,
  });
};
