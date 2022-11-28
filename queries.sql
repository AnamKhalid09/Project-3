CREATE TABLE country_socioeconomic (
    country char(255),
	region char(255),
    population integer,
    GDP integer,
   	CONSTRAINT "pk_country" PRIMARY KEY ("country")
 );
 
 Select * from country_socioeconomic;
 CREATE TABLE country_olympics(
  	country char(255),
	summer_total integer,
    winter_total integer,
	total_participation integer,
	total_won integer,
	PRIMARY KEY (country)
);
-- Join 2 tables
SELECT
	cs.country,
	cs.population,
	cs.GDP,
	cs.region
	
FROM
	country_socioeconomic as cs
INNER JOIN
<<<<<<< HEAD
	 mc as new_country_olympics_transformed
=======
	 country_olympics as co
>>>>>>> c6da892e9ab65f29e7d1211a4beba4efb3fea9ec
ON
	cs.country = co.country;