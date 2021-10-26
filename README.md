# Vue SpaceX LaunchPad, a database App using SpaceX API - Vue JS and Tailwind CSS ⚡️

## Project Briefing

This uses open API provided by SpaceX which is related to missions they've launched over the years. This displays details related to it through a beautiful user interface and filters provided. This uses Vue-Tailwind UI library in Vue for UI components which are powered by Tailwind CSS.

Made with ❤️ by **[@apfirebolt](https://github.com/Apfirebolt/)**
## Features

- Makes use of SpaceX public API to search for launches and filter them based on various parameters. 
- Vue-Tailwind components used for Tables and Modals inside the application. 

## Built With

* [Vue](https://vuejs.org//)
* [Vue-Tailwind](https://www.vue-tailwind.com//)
* [Tailwind CSS](https://tailwindcss.com//)

## Project setup

Simply install node modules for the app and run the serve script.

```
npm install
npm run serve
```

For production, run the build npm command and serve the static files through a production or development server.

```
npm run build
npm start
```

## Project Screenshots

Please find some of the screenshots of the application. Below is the screenshot of the Home Page.

![alt text](./screenshots/homepage.png)

Screenshot of the search and filter missions page where you can filter SpaceX missions by Type (success/failure), Rocket Name and 
is it upcoming mission.

![alt text](./screenshots/filter_rockets.png)

Screenshot of the Launch Page which lists all the missions by SpaceX.

![alt text](./screenshots/launch_page.png)

## To Do

- Filtering based on dates of mission launched, filter by last month, year.
- Docker deployment script with nginx 
- Vuex to be added for managing the store, could be an overkill though for this app though. 

