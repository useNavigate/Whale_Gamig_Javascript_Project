/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/api */ \"./src/scripts/api.js\");\n/* harmony import */ var _scripts_mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/mainPage */ \"./src/scripts/mainPage.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Hello world!\");\n  //npm run watch to run webpack\n\n  //grab an html element for DOM manipulation\n  const main = document.getElementById(\"main\");\n  //   new Example(main);\n\n  (0,_scripts_api__WEBPACK_IMPORTED_MODULE_1__.useData)().then(data => {\n    console.log(data.allData[0].title);\n    //i need to decide how i am going to render this\n    (0,_scripts_mainPage__WEBPACK_IMPORTED_MODULE_2__.handleMainPage)(data.allData[0].title, main);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNBO0FBQ1k7QUFFcERHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzNCOztFQUVBO0VBQ0EsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUM7O0VBRUFQLHFEQUFPLEVBQUUsQ0FBQ1EsSUFBSSxDQUFFQyxJQUFJLElBQUs7SUFDdkJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDO0lBQ2xDO0lBQ0NWLGlFQUFjLENBQUNRLElBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxLQUFLLEVBQUVMLElBQUksQ0FBQztFQUM5QyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFsZWdhbWluZy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiO1xuaW1wb3J0IHsgdXNlRGF0YSB9IGZyb20gXCIuL3NjcmlwdHMvYXBpXCI7XG5pbXBvcnQgeyBoYW5kbGVNYWluUGFnZSB9IGZyb20gXCIuL3NjcmlwdHMvbWFpblBhZ2VcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkhlbGxvIHdvcmxkIVwiKTtcbiAgLy9ucG0gcnVuIHdhdGNoIHRvIHJ1biB3ZWJwYWNrXG5cbiAgLy9ncmFiIGFuIGh0bWwgZWxlbWVudCBmb3IgRE9NIG1hbmlwdWxhdGlvblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuICAvLyAgIG5ldyBFeGFtcGxlKG1haW4pO1xuXG4gIHVzZURhdGEoKS50aGVuKChkYXRhKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YS5hbGxEYXRhWzBdLnRpdGxlKVxuICAgIC8vaSBuZWVkIHRvIGRlY2lkZSBob3cgaSBhbSBnb2luZyB0byByZW5kZXIgdGhpc1xuICAgICBoYW5kbGVNYWluUGFnZShkYXRhLmFsbERhdGFbMF0udGl0bGUsIG1haW4pO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJ1c2VEYXRhIiwiaGFuZGxlTWFpblBhZ2UiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImdldEVsZW1lbnRCeUlkIiwidGhlbiIsImRhdGEiLCJhbGxEYXRhIiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllData\": function() { return /* binding */ getAllData; },\n/* harmony export */   \"useData\": function() { return /* binding */ useData; }\n/* harmony export */ });\nconst games = `https://mmo-games.p.rapidapi.com/games`;\nconst options = {\n  method: \"GET\",\n  headers: {\n    \"Content-Type\": \"application/json\",\n    \"Accept\": \"application/json\",\n    \"X-RapidAPI-Key\": \"5baae6da7amsh6d563cbf11ac2a0p1d6d56jsn48853ab50d67\",\n    \"X-RapidAPI-Host\": \"mmo-games.p.rapidapi.com\"\n  }\n};\nlet allData = null;\nlet gamesByGenre = null;\nasync function getAllData(url, options) {\n  try {\n    const response = await fetch(url, options);\n    const games = await response.json();\n    allData = games;\n\n    //storing data by genre aka category why do they have to name query and key differently? -.-\n\n    gamesByGenre = {};\n    for (const game of allData) {\n      const genre = game.genre;\n      if (!gamesByGenre[genre]) {\n        gamesByGenre[genre] = [];\n      }\n      gamesByGenre[genre].push(game);\n    }\n    /*\n      this part is important because whole point of storing in to variable is to use it\n      whenever i want to call it however, i might call the variable before it even get to store it\n      so i need to make sure it returns it as variable but it still going to return 'promise' because it\n      did not resolve yet it was undefined for LONG TIME LOL...\n    */\n    return {\n      allData,\n      gamesByGenre\n    }; // it actually needs to return the promise value that has these data i want\n  } catch (err) {\n    console.error(\"error:\" + err);\n  }\n}\n\n/*\n  this function returns data so i don't have to fetch every single time\n  this will only fetch if data is not there also it helps me to get out from call back\n  & chain hell that i was stuck for long time... 😭\n\n  and exporting this because exporting allData and gamesByGenre are useless... it still going to be undefined and its 'promise value'\n  so its better to export this function that actually returns the data i need\n*/\nasync function useData() {\n  if (!allData || !gamesByGenre) {\n    /* this is way to get out from call back hell and also we do not need to fetch EVERY SINGLE TIME*/\n    await getAllData(games, options);\n  }\n  //save in array because i'd rather loop through array...\n  // ok changing to object cuz actually i do forget which is which.. it is good to have key...\n  const data = {\n    allData,\n    gamesByGenre\n  };\n  return data;\n}\n\n// //data[0]=>all the data\n// //data[1]=> data saved by genre\n// useData().then((data) => console.log(data[0], data[1]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcGkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNQSxLQUFLLEdBQUksd0NBQXVDO0FBQ3RELE1BQU1DLE9BQU8sR0FBRztFQUNkQyxNQUFNLEVBQUUsS0FBSztFQUNiQyxPQUFPLEVBQUU7SUFDUCxjQUFjLEVBQUUsa0JBQWtCO0lBQ2xDLFFBQVEsRUFBRSxrQkFBa0I7SUFDNUIsZ0JBQWdCLEVBQUUsb0RBQW9EO0lBQ3RFLGlCQUFpQixFQUFFO0VBQ3JCO0FBQ0YsQ0FBQztBQUVELElBQUlDLE9BQU8sR0FBRyxJQUFJO0FBQ2xCLElBQUlDLFlBQVksR0FBRyxJQUFJO0FBRWhCLGVBQWVDLFVBQVVBLENBQUNDLEdBQUcsRUFBRU4sT0FBTyxFQUFFO0VBQzdDLElBQUk7SUFDRixNQUFNTyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLEVBQUVOLE9BQU8sQ0FBQztJQUMxQyxNQUFNRCxLQUFLLEdBQUcsTUFBTVEsUUFBUSxDQUFDRSxJQUFJLEVBQUU7SUFFbkNOLE9BQU8sR0FBR0osS0FBSzs7SUFFZjs7SUFFQUssWUFBWSxHQUFHLENBQUMsQ0FBQztJQUNqQixLQUFLLE1BQU1NLElBQUksSUFBSVAsT0FBTyxFQUFFO01BQzFCLE1BQU1RLEtBQUssR0FBR0QsSUFBSSxDQUFDQyxLQUFLO01BQ3hCLElBQUksQ0FBQ1AsWUFBWSxDQUFDTyxLQUFLLENBQUMsRUFBRTtRQUN4QlAsWUFBWSxDQUFDTyxLQUFLLENBQUMsR0FBRyxFQUFFO01BQzFCO01BQ0FQLFlBQVksQ0FBQ08sS0FBSyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsSUFBSSxDQUFDO0lBQ2hDO0lBQ0E7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ0ksT0FBTztNQUFDUCxPQUFPO01BQUVDO0lBQVksQ0FBQyxDQUFDLENBQUM7RUFDbEMsQ0FBQyxDQUFDLE9BQU9TLEdBQUcsRUFBRTtJQUNaQyxPQUFPLENBQUNDLEtBQUssQ0FBQyxRQUFRLEdBQUdGLEdBQUcsQ0FBQztFQUMvQjtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxlQUFlRyxPQUFPQSxDQUFBLEVBQUc7RUFDOUIsSUFBSSxDQUFDYixPQUFPLElBQUksQ0FBQ0MsWUFBWSxFQUFFO0lBQzdCO0lBQ0EsTUFBTUMsVUFBVSxDQUFDTixLQUFLLEVBQUVDLE9BQU8sQ0FBQztFQUNsQztFQUNBO0VBQ0E7RUFDQSxNQUFNaUIsSUFBSSxHQUFHO0lBQUNkLE9BQU87SUFBRUM7RUFBWSxDQUFDO0VBQ3BDLE9BQU9hLElBQUk7QUFDYjs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFsZWdhbWluZy8uL3NyYy9zY3JpcHRzL2FwaS5qcz9hMzk3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdhbWVzID0gYGh0dHBzOi8vbW1vLWdhbWVzLnAucmFwaWRhcGkuY29tL2dhbWVzYDtcbmNvbnN0IG9wdGlvbnMgPSB7XG4gIG1ldGhvZDogXCJHRVRcIixcbiAgaGVhZGVyczoge1xuICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIFwiWC1SYXBpZEFQSS1LZXlcIjogXCI1YmFhZTZkYTdhbXNoNmQ1NjNjYmYxMWFjMmEwcDFkNmQ1NmpzbjQ4ODUzYWI1MGQ2N1wiLFxuICAgIFwiWC1SYXBpZEFQSS1Ib3N0XCI6IFwibW1vLWdhbWVzLnAucmFwaWRhcGkuY29tXCIsXG4gIH0sXG59O1xuXG5sZXQgYWxsRGF0YSA9IG51bGw7XG5sZXQgZ2FtZXNCeUdlbnJlID0gbnVsbDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhdGEodXJsLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGdhbWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgYWxsRGF0YSA9IGdhbWVzO1xuXG4gICAgLy9zdG9yaW5nIGRhdGEgYnkgZ2VucmUgYWthIGNhdGVnb3J5IHdoeSBkbyB0aGV5IGhhdmUgdG8gbmFtZSBxdWVyeSBhbmQga2V5IGRpZmZlcmVudGx5PyAtLi1cblxuICAgIGdhbWVzQnlHZW5yZSA9IHt9O1xuICAgIGZvciAoY29uc3QgZ2FtZSBvZiBhbGxEYXRhKSB7XG4gICAgICBjb25zdCBnZW5yZSA9IGdhbWUuZ2VucmU7XG4gICAgICBpZiAoIWdhbWVzQnlHZW5yZVtnZW5yZV0pIHtcbiAgICAgICAgZ2FtZXNCeUdlbnJlW2dlbnJlXSA9IFtdO1xuICAgICAgfVxuICAgICAgZ2FtZXNCeUdlbnJlW2dlbnJlXS5wdXNoKGdhbWUpO1xuICAgIH1cbiAgICAvKlxuICAgICAgdGhpcyBwYXJ0IGlzIGltcG9ydGFudCBiZWNhdXNlIHdob2xlIHBvaW50IG9mIHN0b3JpbmcgaW4gdG8gdmFyaWFibGUgaXMgdG8gdXNlIGl0XG4gICAgICB3aGVuZXZlciBpIHdhbnQgdG8gY2FsbCBpdCBob3dldmVyLCBpIG1pZ2h0IGNhbGwgdGhlIHZhcmlhYmxlIGJlZm9yZSBpdCBldmVuIGdldCB0byBzdG9yZSBpdFxuICAgICAgc28gaSBuZWVkIHRvIG1ha2Ugc3VyZSBpdCByZXR1cm5zIGl0IGFzIHZhcmlhYmxlIGJ1dCBpdCBzdGlsbCBnb2luZyB0byByZXR1cm4gJ3Byb21pc2UnIGJlY2F1c2UgaXRcbiAgICAgIGRpZCBub3QgcmVzb2x2ZSB5ZXQgaXQgd2FzIHVuZGVmaW5lZCBmb3IgTE9ORyBUSU1FIExPTC4uLlxuICAgICovXG4gICAgcmV0dXJuIHthbGxEYXRhLCBnYW1lc0J5R2VucmV9OyAvLyBpdCBhY3R1YWxseSBuZWVkcyB0byByZXR1cm4gdGhlIHByb21pc2UgdmFsdWUgdGhhdCBoYXMgdGhlc2UgZGF0YSBpIHdhbnRcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcihcImVycm9yOlwiICsgZXJyKTtcbiAgfVxufVxuXG4vKlxuICB0aGlzIGZ1bmN0aW9uIHJldHVybnMgZGF0YSBzbyBpIGRvbid0IGhhdmUgdG8gZmV0Y2ggZXZlcnkgc2luZ2xlIHRpbWVcbiAgdGhpcyB3aWxsIG9ubHkgZmV0Y2ggaWYgZGF0YSBpcyBub3QgdGhlcmUgYWxzbyBpdCBoZWxwcyBtZSB0byBnZXQgb3V0IGZyb20gY2FsbCBiYWNrXG4gICYgY2hhaW4gaGVsbCB0aGF0IGkgd2FzIHN0dWNrIGZvciBsb25nIHRpbWUuLi4g8J+YrVxuXG4gIGFuZCBleHBvcnRpbmcgdGhpcyBiZWNhdXNlIGV4cG9ydGluZyBhbGxEYXRhIGFuZCBnYW1lc0J5R2VucmUgYXJlIHVzZWxlc3MuLi4gaXQgc3RpbGwgZ29pbmcgdG8gYmUgdW5kZWZpbmVkIGFuZCBpdHMgJ3Byb21pc2UgdmFsdWUnXG4gIHNvIGl0cyBiZXR0ZXIgdG8gZXhwb3J0IHRoaXMgZnVuY3Rpb24gdGhhdCBhY3R1YWxseSByZXR1cm5zIHRoZSBkYXRhIGkgbmVlZFxuKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1c2VEYXRhKCkge1xuICBpZiAoIWFsbERhdGEgfHwgIWdhbWVzQnlHZW5yZSkge1xuICAgIC8qIHRoaXMgaXMgd2F5IHRvIGdldCBvdXQgZnJvbSBjYWxsIGJhY2sgaGVsbCBhbmQgYWxzbyB3ZSBkbyBub3QgbmVlZCB0byBmZXRjaCBFVkVSWSBTSU5HTEUgVElNRSovXG4gICAgYXdhaXQgZ2V0QWxsRGF0YShnYW1lcywgb3B0aW9ucyk7XG4gIH1cbiAgLy9zYXZlIGluIGFycmF5IGJlY2F1c2UgaSdkIHJhdGhlciBsb29wIHRocm91Z2ggYXJyYXkuLi5cbiAgLy8gb2sgY2hhbmdpbmcgdG8gb2JqZWN0IGN1eiBhY3R1YWxseSBpIGRvIGZvcmdldCB3aGljaCBpcyB3aGljaC4uIGl0IGlzIGdvb2QgdG8gaGF2ZSBrZXkuLi5cbiAgY29uc3QgZGF0YSA9IHthbGxEYXRhLCBnYW1lc0J5R2VucmV9O1xuICByZXR1cm4gZGF0YTtcbn1cblxuLy8gLy9kYXRhWzBdPT5hbGwgdGhlIGRhdGFcbi8vIC8vZGF0YVsxXT0+IGRhdGEgc2F2ZWQgYnkgZ2VucmVcbi8vIHVzZURhdGEoKS50aGVuKChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhWzBdLCBkYXRhWzFdKSk7XG4iXSwibmFtZXMiOlsiZ2FtZXMiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImFsbERhdGEiLCJnYW1lc0J5R2VucmUiLCJnZXRBbGxEYXRhIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJnYW1lIiwiZ2VucmUiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwidXNlRGF0YSIsImRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/api.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's CAPY ALIVEEEE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this); //make sure its bound all the time\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n\n//to export\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDWkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2YsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLGdDQUFnQztJQUVyRCxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDaEQsSUFBSSxDQUFDSCxHQUFHLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNGLFdBQVcsQ0FBQztFQUN0RDtFQUVBQSxXQUFXQSxDQUFBLEVBQUc7SUFDWixJQUFJLENBQUNGLEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsT0FBTztFQUMxQztBQUNGOztBQUVBO0FBQ0EsK0RBQWVSLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFsZWdhbWluZy8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+SXQncyBDQVBZIEFMSVZFRUVFISEhPC9oMT5cIjtcblxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7IC8vbWFrZSBzdXJlIGl0cyBib3VuZCBhbGwgdGhlIHRpbWVcbiAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmVsZS5jaGlsZHJlblswXS5pbm5lclRleHQgPSBcIk91Y2ghXCI7XG4gIH1cbn1cblxuLy90byBleHBvcnRcbmV4cG9ydCBkZWZhdWx0IEV4YW1wbGU7XG4iXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/mainPage.js":
/*!*********************************!*\
  !*** ./src/scripts/mainPage.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleMainPage\": function() { return /* binding */ handleMainPage; }\n/* harmony export */ });\nconst handleMainPage = (data, div) => {\n  div.innerText = `<h1>${data}<h1>`;\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYWluUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsY0FBYyxHQUFDQSxDQUFDQyxJQUFJLEVBQUNDLEdBQUcsS0FBRztFQUNwQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcsT0FBTUYsSUFBSyxNQUFLO0FBQ3BDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFsZWdhbWluZy8uL3NyYy9zY3JpcHRzL21haW5QYWdlLmpzPzFjYTciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhhbmRsZU1haW5QYWdlPShkYXRhLGRpdik9PntcbiAgICBkaXYuaW5uZXJUZXh0ID1gPGgxPiR7ZGF0YX08aDE+YFxufVxuIl0sIm5hbWVzIjpbImhhbmRsZU1haW5QYWdlIiwiZGF0YSIsImRpdiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/mainPage.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aGFsZWdhbWluZy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;