CREATE TABLE IF NOT EXISTS movie (
    movie_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    title varchar(255) NOT NULL,
    description text NOT NULL,
    image text NOT NULL,
    category text NOT NULL,
)

CREATE TABLE IF NOT EXISTS category (
    name text NOT NULL,
)

CREATE TABLE IF NOT EXISTS user (
    user_id integer NOT NULL GENERATED ALWAYS AS IDENTITY,
    firstName text NOT NULL,
    lastName text NOT NULL,
    age integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
)