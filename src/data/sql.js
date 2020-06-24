export const INITDBSQL = `
CREATE TABLE IF NOT EXISTS expenses (
id INTEGER PRIMARY KEY NOT NULL,
date INTEGER NOT NULL,
amount REAL NOT NULL,
description TEXT
)
`;

export const ADDEXPENSESQL = `
INSERT INTO expenses (date,amount,description) VALUES (?,?,?)
`;

export const GETEXPENSESSQL = 'SELECT * FROM expenses';
