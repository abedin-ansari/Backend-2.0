export const register = (req, res) => {
  const obj = req.body;
  console.log(obj);

  res.status(200).json({
    success: true,
    message: "Account created successfully",
  });
};

export const login = (req, res) => {
  const obj2 = req.body;
  console.log(obj2);

  res.status(200).json({
    success: true,
    message: "Login Successfully",
  });
};
