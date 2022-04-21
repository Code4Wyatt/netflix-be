import Movie from "./movie.js";
import User from "./user.js";
import MovieCategory from "./movieCategory.js";

// One to many relationship between users and movies.

User.hasMany(Movie, { onDelete: "CASCADE" });
Movie.belongsTo(User, { onDelete: "CASCADE" });

// Many to many between movies and categories

Movie.belongsToMany(Category, { through: MovieCategory, onDelete: "CASCADE" });

export {Movie, User, MovieCategory};