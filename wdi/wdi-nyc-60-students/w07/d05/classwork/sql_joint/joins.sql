--LEFT JOIN
-- SELECT * FROM students
-- LEFT JOIN cohorts
-- ON (students.cohort_id = cohorts.cohort_id);


-- SELECT
-- 	students.name AS student_name,
-- 	cohorts.name AS cohort_name,
-- 	cohorts.class AS class
-- FROM students
-- LEFT JOIN cohorts
-- ON (students.cohort_id = cohorts.cohort_id);



-- FAIL
-- SELECT
-- 	students.name AS student_name,
-- 	cohorts.name AS cohort_name,
-- 	cohorts.class AS class
-- FROM students
-- LEFT JOIN cohorts
-- ON (students.cohort_id = NULL);




-- SELECT *
-- FROM students
-- INNER JOIN cohorts
-- ON (students.cohort_id = cohorts.cohort_id);


-- SELECT
-- 	students.name AS students,
-- 	cohorts.name AS cohorts
-- FROM students
-- INNER JOIN cohorts
--  ON (students.cohort_id = cohorts.cohort_id)
-- WHERE cohorts.name = 'Melville';
