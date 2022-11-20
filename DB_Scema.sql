-- creating table for country_profile_variales 

CREATE TABLE country_profile (
    country char(255),
    region char(255),
    population numeric(12,2),
    population_density numeric(10,2),
    gdp numeric(10,2),
    gdp_per_capital numeric(10,2),
    CONSTRAINT "pk_country" PRIMARY KEY ("country")
        
 );
 
-- creating table for olympics_country_medal_wise

 CREATE TABLE olympics_medals_country(
	 
  	country char(255),
    summer_participations integer,
	summer_gold integer,
    summer_silver integer,
	summer_bronze integer,
	summer_total integer,
	winter_participations integer,
	winer_gold integer,
    winter_silver integer,
	winter_bronze integer,
	winter_total integer,
	total_participations integer,
	total_gold integer,
    total_silver integer,
	total_bronze integer,
	total integer,
	 
	 PRIMARY KEY (country)
);

-- inner Join 2 tables
SELECT 
	cp.country, 
	cp.region , 
	cp.population, 
	cp.population_density, 
	cp.gdp, 
	cp.gdp_per_capital
	
FROM
	country_profile as cp
INNER JOIN
	olympics_medals_country mc
ON
	cp.country = mc.country;

	
