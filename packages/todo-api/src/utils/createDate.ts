export const createDate = () => new Date().toISOString();

export const isValidDate = (date: string) => new Date(Date.parse(date)).toISOString() === date;
