const app = require("./app");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 5000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/testdb";

// MongoDB connection
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB error:", err.message));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});