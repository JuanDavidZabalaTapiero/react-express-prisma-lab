import express from "express";
import documentTypeRoutes from "./routes/documentTypes.routes.js";

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use("/api/document-types", documentTypeRoutes);

app.listen(3000, () => {
  console.log("Servidor Express ejecutándose en http://localhost:3000");
});
