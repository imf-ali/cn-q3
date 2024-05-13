class ApplicationError extends Error{
  constructor(message, statuscode){
    super(message);
    this.statuscode = statuscode;
  }
};

export const applicationErrorMiddleware = (err, req, res, next) => {
  if(err instanceof ApplicationError){
    return res.status(err.statuscode).json({
      success: false,
      message: err.message
    });
  }
  return res.status(400).json({ success: false, message: err.message });
}

export default ApplicationError;