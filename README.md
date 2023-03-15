# 🐳Whale Gaming Javascript Project
Javascript  Project based on live game API 🎮




## Background
> Welcome to `Whale Gaming`, a gaming website that offers information and data visualization based on the MMOBomb API. Our website aims to provide a user-friendly and informative platform for gamers and enthusiasts to explore and discover games based on different categories and genres.🐋.





## Functionality & MVPs
 In  `Whale Gaming` , users will be able to:
> - View data visualization
>   - Whale Gaming provides a visually appealing and interactive way of exploring the number of games released per year based on categories

> - Use the search functionality
>   -  Users can search for their favorite games using our search bar

> - View game details
>   - Users can click on a game card to view its details such as description, gameplay, and more. This helps users to get a better understanding of the game before deciding to play or purchase it

## Wireframes
 ### Main Page
> ![image](https://user-images.githubusercontent.com/106133580/225347911-77703b4a-d1fd-41ae-a4db-2c4b4bc72d1b.png)


 ### Cards for Quick Views
> ![image](https://user-images.githubusercontent.com/106133580/225348069-9148d092-97c0-4077-812d-70c7c2775246.png)


 ### Detail Sections
> ![image](https://user-images.githubusercontent.com/106133580/225348352-847bfc8f-ad42-49b6-b286-47e34cfa10e3.png)


 ### Data Visualzation
> ![image](https://user-images.githubusercontent.com/106133580/225348426-4131a92e-1a79-4242-b7ca-8e5e581ae2d5.png)





## Technologies, Libraries, APIs
> -  `mmobomb-api` (https://www.mmobomb.com/api)
> - `d3.js` (https://d3js.org/)



## Implementation Timeline
 ### Friday
> - fetch all the API data
>   - store as a variable to reduce amount of unnecessary fetch calls
> - render basic html
>   - navbar / main page

 ### Saturday
> - Construct Data
>   - restructure the fetched data into a suitable format for data visualization, which enable accurate representation of trends and patterns in the gaming industry
> - Learn about d3 line graph
> - Parse data to csv

 ### Sunday
> - Render basic d3 line graph
> - Add tool tip for the graph

 ### Monday
> - DOM
>   - Added featured functionality eventlistners for
>      - Click ( navbar / main page / cards / filter)
>   - Input (search)
>      - improved the search functionality by implementing a delay in fetching results. the API won't be called immediately when the user types in the search bar, but rather after a brief pause in typing to reduce unnecessary API calls.

 ### Tuesday
> - Added favicon
> - CSS for Styling
> - linkes all the component by reconstructing DOM
> - Fixed minor bugs


 ### Wednesday
> - Testing
>   - finalize the website
> - Update README.md
> - Practice for the presentation
> - Added github link


