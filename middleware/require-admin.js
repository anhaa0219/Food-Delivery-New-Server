export const requireAdmin = (response, request, next) => {
  if (request.user.role !== "admin") {
    response.status(403).json({ message: "You do not have access" });
  } else {
    next();
  }
};
