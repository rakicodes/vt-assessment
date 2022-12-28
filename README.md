# VT Assessment

# Development
1. In the terminal, run `npm install` in the root directory
2. In the client directory, run `npm install` in your terminal
3. Set up your `.env` file in the root directory. Fill up the `.env` with your postgreSQL credentials and port number. It should look something like this but with your info:<br><br>
PORT = 8000<br>
USERNAME = userName<br>
HOST = hostName<br>
DB = dbName<br>
PASSWORD = password<br>
DBPORT = 5432<br><br>
2. Set up your `.env` file inside the client directory. Fill up the url with the proper development and production url you are using. It should look something like this but with your urls:<br><br>
REACT_APP_API_URL_DEV=http://<development_url>/api/blogs<br>
REACT_APP_API_URL_PROD=https://<production_url>/api/blogs<br><br>
3. To start the server, in the terminal type: `npm run serverDev`
    * Make sure you’re in the root directory
4. To start the client, in the terminal type: `npm run clientDev`
    * Make sure you’re in the root directory
    
# Production
1. Set up your .env file in the root directory. Fill up the .env with your postgreSQL credentials and port number. It should look something like this but with your info:
PORT = 8000<br><br>
USERNAME = userName<br>
HOST = hostName<br>
DB = dbName<br>
PASSWORD = password<br>
DBPORT = 5432<br><br>
2. Set up your .env file inside the client directory. Fill up the url with the proper development and production url you are using. It should look something like this but with your urls:<br><br>
REACT_APP_API_URL_DEV=http://<development_url>/api/blogs<br>
REACT_APP_API_URL_PROD=https://<production_url>/api/blogs<br><br>
3. To create your production build for the client, run `npm run build`
    * Make sure you’re in the client folder
4. To create and run your production build for the server, run `npm build && npm start` in the root directory

Check out the live site here: [vt-assessment.netlify.app](vt-assessment.netlify.app)