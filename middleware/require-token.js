export const requireToken = (response, request, next) => {
  const token = request.headers.authorization.split(" ")[1] || null;
  if (!token) {
    response.status(401).json({ message: "Token required" });
  }
  try {
    const user = jwt.verify(token, JWT_SECRET);
    request.user = user;
    next();
  } catch (err) {
    console.log(err);
    response.status(401).json({ message: "Invalid or expired token" });
  }
};
