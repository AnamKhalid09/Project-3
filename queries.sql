CREATE TABLE country_socioeconomic (
    country char(255),
	region char(255),
    population integer,
    GDP integer
   CONSTRAINT "pk_country" PRIMARY KEY ("country")
 );
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
	cp.country,
	cp.population,
	cp.GDP
	
FROM
	new_country_socioeconomic_transformed as cp
INNER JOIN
	 mc new_country_olympics_transformed
ON
	cp.country = mc.country;