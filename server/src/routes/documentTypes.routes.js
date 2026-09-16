import { Router } from "express";
import {
  createDocumentType,
  getAllDocumentTypes,
  getDocumentTypeById,
  updateDocumentType,
  deleteDocumentType,
} from "../services/documentType.service.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newDocType = await createDocumentType(name);
    res.status(201).json(newDocType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const docTypes = await getAllDocumentTypes();
    res.json(docTypes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const docType = await getDocumentTypeById(id);
    if (!docType) {
      return res.status(404).json({ error: "Tipo de documento no encontrado" });
    }
    res.json(docType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const updatedDocType = await updateDocumentType(id, name);
    res.json(updatedDocType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDocType = await deleteDocumentType(id);
    res.json(deletedDocType);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
