CREATE TABLE IF NOT EXISTS notes (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    name TEXT NOT NULL,
    modified TIMESTAMP NOT NULL DEFAULT now(),
    content TEXT NOT NULL

);