-- 1
SELECT title FROM movies;

-- 2
SELECT DISTINCT(rating) FROM movies;

-- 3
SELECT * FROM movies WHERE rating IS NULL;

-- 4
SELECT name FROM movietheaters WHERE movie IS NULL;

-- 5
SELECT * FROM movietheaters
LEFT JOIN movies
  ON movies.code = movietheaters.movie
WHERE movietheaters.movie IS NOT NULL;

-- 6
SELECT * FROM movies
LEFT JOIN movietheaters
  ON movies.code = movietheaters.movie
WHERE movietheaters.name IS NOT NULL;

-- 7
SELECT  movies.title FROM movies
LEFT JOIN movietheaters
ON movietheaters.movie = movies.code
WHERE movietheaters.movie IS NULL;

-- 8
INSERT INTO movies(code, title, rating) VALUES(8, 'One Two Three', NULL));

-- 9
UPDATE movies SET rating='G' WHERE rating IS NULL;

-- 10
DELETE FROM movietheaters
  USING movies
WHERE movietheaters.movie = movies.code
AND movies.rating = 'NC-17';

-- Trevor's Solution
DELETE FROM movietheaters
WHERE movie
IN (SELECT movies.code FROM movies WHERE rating='NC-17');

















