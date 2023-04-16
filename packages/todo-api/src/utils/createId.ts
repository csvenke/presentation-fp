import cuid from "cuid";

export const createId = () => cuid();

export const isValidId = (id: string) => cuid.isCuid(id);
