### Requirements

- Please do not put your code in a public repository!
- In the root folder, please include a `README` with instructions on how to build and start your project.
- Include your name in your project folder, like `first-lastname' or similar.
- Upload the source code of your completed solution someplace you can share it with us like Dropbox, Google Drive, your own server etc. (not iCloud, please). We are happy to run it locally so you don't need to deploy it to a server, though that would be cool!
- To keep file-size down, don't forget to remove any dependencies (eg. `node_modules`) from your folder!
- Include a README.md with a list of trade-offs and assumptions you are making.
- Ensure that your solution has tests. We are interested in seeing your approach to testing

## Photo Album App

Create a JavaScript application that allows a user to navigate photo albums. You can use the following user stories to help guide your design:

### User stories

1. As a user, I would like to see a list of my own albums along with their titles.
2. As someone interested in a particular album, I would like to see thumbnails of the photos in an album along with their titles.
3. As a user, I want to search for photo titles for a specific string. I would like the results returned to have the entire word italicized that matches the search parameter. Consider only single word search use cases and assume no special characters beyond just alphabetical characters. For example:
   1. If I were to search for "accu", the results would show the entire word "_accusamus_" as italicized.
   2. If I were to search for "fun" and there's a title with "refunds are not a fun time", the title would be displayed as "_refunds_ are not a _fun_ time". Both the word "refunds" and the word "fun" would be italicized.
   3. If I were to search for "fun", a string with the following substring would **not** be italicized "...fu n..."

```
📸 Albums:                          🖼 Photos:
+-------------------------+         +-------------------+
| quidem molestiae enim   |         |███████████████████|
+-------------------------+         |███████████████████|
+-------------------------+         |███████████████████|
| sunt qui excepturi pl…  |+------->|███████████████████|
+-------------------------+         |███████████████████|
+-------------------------+         +-------------------+
| omnis laborum odio      |         | accusamus beatae  |
+-------------------------+         +-------------------+
+-------------------------+
| eaque aut omnis a       |         +-------------------+
+-------------------------+         |███████████████████|
                                    |███████████████████|
                                    |███████████████████|
                                    |███████████████████|
                                    |███████████████████|
                                    +-------------------+
                                    | accusamus beatae  |
                                    +-------------------+
```

### API

- List of albums for a particular user: `https://jsonplaceholder.typicode.com/users/1/albums`
- Photos in an album: `https://jsonplaceholder.typicode.com/albums/:ALBUM_ID/photos`. Note that **:ALBUM_ID** is a parameter.

For more information see [JSONPlaceholder](https://jsonplaceholder.typicode.com)
