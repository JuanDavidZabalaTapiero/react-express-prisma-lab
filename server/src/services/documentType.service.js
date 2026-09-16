import prisma from "../prisma.js";

export const createDocumentType = async (name) => {
  return await prisma.documentType.create({ data: { name } });
};

export const getAllDocumentTypes = async () => {
  return await prisma.documentType.findMany();
};

export const getDocumentTypeById = async (id) => {
  return await prisma.documentType.findUnique({
    where: { id: Number(id) },
  });
};

export const updateDocumentType = async (id, name) => {
  return await prisma.documentType.update({
    where: { id: Number(id) },
    data: { name },
  });
};

export const deleteDocumentType = async (id) => {
  return await prisma.documentType.delete({
    where: { id: Number(id) },
  });
};
