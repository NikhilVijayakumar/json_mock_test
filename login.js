const db = require("./db.json");
const { v4: uuidv4 } = require("uuid");

const loginHandler = (req, res) => {
  const { email, password } = req.body;

  // Replace this with your actual authentication logic
  const user = db.users.find((user) => user.email === email && user.password === password);

  if (user) {
    // Replace this with your actual authentication logic to generate a token
    const token = uuidv4();
    user.token = token;
    user.password = undefined;
    res.status(200).json({ message: "Login successful", user });
  } else {
    res.status(401).json({ message: "Invalid email or password","email":email, "password":password,"body":req.body });
  }
};

module.exports = {
  loginHandler,
};
