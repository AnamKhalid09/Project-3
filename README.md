# Project-3
# Project-Title: What measurable factors contribute to the success of countries in the Olympic games.

![image](https://statathlon.com/wp-content/uploads/2018/01/rio-de-janeiro-2016-summer-olympics-e1467812135773.png)


## Background

-"The modern Olympic Games or Olympics are the leading international sporting events featuring summer and winter sports competitions in which thousands of athletes from around the world participate in a variety of competitions. The Olympic Games are considered the world's foremost sports competition with more than 200 teams, representing sovereign states and territories, participating. The Olympic Games are normally held every four years, and since 1994, have alternated between the Summer and Winter Olympics every two years during the four-year period." (see Reference 2)

According to nbcsports, United States of America has always been on the top and have won maximum medals in the history of Olympic games. Then Russia, Germany, Great Britain and France are among the top performers in the descending order. (See Reference 1)

We decided to conduct our own analysis and to test some of the measurable factors contributing to the success of a countrys' performance in Olympic games. Does GDP or/and population of a country contributes to their success in the Olympic games? Let's visualize!

### Before You Begin

1. Create a new repository for this project and name it as **project-3**. 
   **Do not add this to an existing repository**.

2. Clone the new repository to your computer and as it's a group project, copy the url and send it to the contributors so that they can also clone on their computers. Don't forget to add them as contributors first by going into the project settings. We created branches so that the contributors can contribute in their own branch and later we can just push the final product to the main.

3. Inside your local Git repository, create a directory. Use a folder name such as: **Resources**.

4. Inside the folder you just created, put your csv files named as country_profile_variables.csv and olympics_medals_country_wise.csv. These will be the two datasets that you'll be using for your project. We got these datasets from [Kaggle](https://www.kaggle.com/).

5. Firstly, for the ETL process, create two files namely queries.sql and data_etl.ipynb. These are the files where you'll write your main code for ETL, we'll discuss it further later on.

6. Add a .gitignore file as a good practice in case you want to keep any confidential files in it like your API keys, your password or username. .gitignore file will keep all the files hidden from being published publicly even if your repository is public. For username and password, open your .gitignore file and in the first line type the following:

```python
# Adding config.py file.
config.py
```

7. Add a README.md file to share your approach towards project.

8. Push the above changes to GitHub.

## Project Proposal

The project proposal is attached in repo in the pdf form, please refer to the pdf file with name 'Project Proposal' for understanding of the project in detail.

## Extracting, Transforming and Loading process (ETL)

### Extract

Extracting includes reading the data from multiple sources. we are using two datasets (CSV files) which you can find in 'Resources' folder as described above. If you're looking for datasets of your choice, keep in mind that they don't have to be CSV files necessarily. They could be any of the following:
- CSV files
- JSON files
- HTML tables
- SQL databases
- Spreadsheets

Apart from this, following are a few suggestions where you can find data from:
- https://www.data.world/
- https://www.kaggle.com/
- https://www.data.gov.au/
- https://github.com/awesomedata/awesome-public-datasets
- https://github.com/n0shake/Public-APIs
- https://github.com/Kikobeats/awesome-api

Before extraction using python and pandas, create a new database called 'olympics' in pgAdmin. In the newly created database, create two tables and inner join them using query tools. This joined table (currently empty) will later hold the data that we're interested in at the end of the ETL process. You'll use python and pandas for ETL process in Jupiter notebook. And at the end of the process, you'll load the DataFrames into the postgreSQL table that we created in the beginning. Note that the names of the columns in postgreSQL ad Pandas should be same to save yourself falling in troubles during the loading process.

#### Extraction in steps:

- Import dependencies (pandas, create_engine and inspect from sqlalchemy, config) in Jupiter notebook.
- Store CSV files into a DataFrame. For this set the path to the CSV files and read and display the dataframes using pandas.


### Transform

Transformation includes cleaning and structuring the data in desired form. Structuring includes summarization, selection, joining, filtering and aggregating the data depending on the business needs. Transformation can be done using SQL or specialized ETL tools but here you'll be using Python and Pandas.

- For transformation, clean the dataframe by keeping the copy of the columns that you're interested in. Using a copy and not the original data will save us from troubles.


### Load

Loading includes writing the data into a relational (sql) or non-relational (mongodb) database for storage. This data could be used for business applications or analysis purposes in future.

#### Loading in steps:

- Connect to the local database. Here create a config.py file and keep your username and password in it and save the config.py file in .gitignore file to keep your username and password confidential. If it's not confidential, you can put it straight away in the code and you won't have to create config.py or .gitignore file then.
- Check for the tables
- Use pandas to load csv converted DataFrames into database 
- Confirm data has been added by querying the tables in both pandas and postgreSQL
- Join the two tables in pgAdmin or join the two tables in with Pandas and SQLAlchemy.


## Findings



**Note:** The data used is not fresh at the time of publication, therefore trends might change in future. For that, it is recommended to use the fresh data for this project. Recommendations and pull requests are welcome!
 
## References:
1: [https://medium.datadriveninvestor.com/is-data-science-ranked-as-the-sexiest-job-for-2023-and-beyond-cf66d8ba5585](https://www.nbcsports.com/bayarea/beijing-2022-winter-olympics/which-countries-have-won-most-olympic-medals)

2: https://en.wikipedia.org/wiki/Olympic_Games

