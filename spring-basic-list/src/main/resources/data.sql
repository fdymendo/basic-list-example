DROP TABLE IF EXISTS dataprocess;

CREATE TABLE dataprocess (
  id INT AUTO_INCREMENT  PRIMARY KEY,
  first_name VARCHAR(250) NOT NULL,
  surname VARCHAR(250) NOT NULL,
  process boolean DEFAULT false
);