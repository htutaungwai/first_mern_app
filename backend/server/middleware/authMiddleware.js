const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  // Check for the token
  const token = req.header("x-auth-token");

  //   Check if not token
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denies" });

  // Verify Token

  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decode.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is not valid.", type: "error" });
  }
};
