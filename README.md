# Photo Album App

we use `Create-React-App` for first config of this project and use bellow libraries ...

- `Axios` - Data Fetching
- `React-Router-Dom` - routing between pages
- `React-Toastify` - display toast message
- `react-html-replace` - for italicized search values
- `sass` - design app by using sass

### Pages:

- `Albums Page` - display list of album what fetched from api
- `Photos Page` - display photos of each album by `albumId`
- `Single Photo Page` - display photo in wide page

### Instructions:

first, we fetch list of albums from `jsonPlaceHolder` Api and display them on Albums Page. when user click on every
album, album id sent to next page and in this new page fetch photos of this `albumId` from related api. on photos page
user can click on each photo to see photo in full page(third page)\

for search, I did this steps :

- add input to the photos page
- manage state of search input
- before map of photos to display them, I filter them by this regex `/\S*{{SEARCH_VALUE}}/S*/g` to find evey word
  includes search value
- finally, use `react-html-replace` to italicize every word include my search text
- Photos.test.js file can show my `testing approch`

for run project, in terminal of project folder run `npm install` to install dependencies then `npm start` and
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.\
for build project run `npm run build`
