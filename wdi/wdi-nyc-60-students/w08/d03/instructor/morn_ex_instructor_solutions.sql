-- These next few lines undo some of the changes made in this file
DELETE FROM Movies WHERE title='One Two Three';
UPDATE Movies SET rating=NULL WHERE rating='G';



-- 1. Select the title of all movies
SELECT title FROM Movies;

-- 2. Show all the distinct ratings in the database.
SELECT rating FROM Movies GROUP BY rating;
SELECT distinct(rating) FROM Movies;
-- Both seem to include NULL as a distinct rating

-- 3. Show all unrated movies.
SELECT title FROM Movies WHERE rating IS NULL;

-- 4. Select all movie theaters that are not currently showing a movie.
SELECT name FROM MovieTheaters WHERE movie IS NULL;

-- 5. Select all data from all movie theaters and, additionally, the data from the movie that is being shown in the theater (if one is being shown).
SELECT * FROM MovieTheaters LEFT JOIN Movies ON MovieTheaters.movie = Movies.code WHERE MovieTheaters.movie IS NOT NULL;

-- 6. Select all data from all movies and, if that movie is being shown in a theater, show the data from the theater.
SELECT * FROM Movies LEFT JOIN MovieTheaters ON MovieTheaters.movie = Movies.code WHERE MovieTheaters.movie IS NOT NULL;

-- 7. Show the titles of movies not currently being shown in any theaters.
SELECT Movies.title FROM Movies LEFT JOIN MovieTheaters ON MovieTheaters.movie = Movies.code WHERE MovieTheaters.movie IS NULL;

-- 8. Add the unrated movie "One, Two, Three".
INSERT INTO Movies(code,title,rating) VALUES(8,'One Two Three',NULL);

-- 9. Set the rating of all unrated movies to "G".
UPDATE Movies SET rating='G' WHERE rating IS NULL;

-- 10. Remove movie theaters projecting movies rated "NC-17".
DELETE FROM MovieTheaters WHERE movie IN (SELECT Movies.code FROM Movies WHERE rating='NC-17');

-- Matt B.
DELETE FROM movietheaters USING movies
WHERE movietheaters.movie = movies.code
AND movies.rating = 'NC-17';