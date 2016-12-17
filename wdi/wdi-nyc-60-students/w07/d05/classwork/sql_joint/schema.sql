
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS cohorts;


CREATE TABLE cohorts (
   cohort_id SERIAL PRIMARY KEY,
   name VARCHAR NOT NULL,
   class VARCHAR NOT NULL
);



CREATE TABLE students (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR NOT NULL,
	cohort_id INT
);


COMMIT;
