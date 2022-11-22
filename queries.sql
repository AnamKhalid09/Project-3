CREATE TABLE new_country_socioeconomic_transformed (
    country char(255),
    population numeric(12,2),
    GDP numeric(10,2),
   CONSTRAINT "pk_country" PRIMARY KEY ("country")
 );
 CREATE TABLE new_country_olympics_transformed(
	
  	country char(255),
	summer_total integer,
    winter_total integer,
	total_participations integer,
	
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