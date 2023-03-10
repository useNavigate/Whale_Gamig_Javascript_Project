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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/api */ \"./src/scripts/api.js\");\n/* harmony import */ var _scripts_mainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/mainPage */ \"./src/scripts/mainPage.js\");\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  console.log(\"Hello world!\");\n  //npm run watch to run webpack\n\n  //grab an html element for DOM manipulation\n  const main = document.getElementById(\"main\");\n  //   new Example(main);\n  //  handleButtonClick(); can add all the eventlistner like this\n  //need to make some html for navbar and search section so we can save it as variable to have handle events\n\n  (0,_scripts_api__WEBPACK_IMPORTED_MODULE_1__.useData)().then(data => console.log(data));\n});\n\n// useData().then((data) => {\n\n//   console.log(data.allData[0].title)\n//   //i need to decide how i am going to render this\n//    handleMainPage(data.allData[0].title, main);\n// });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF3QztBQUNBO0FBQ1k7QUFFcERHLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsTUFBTTtFQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsY0FBYyxDQUFDO0VBQzNCOztFQUVBO0VBQ0EsTUFBTUMsSUFBSSxHQUFHSixRQUFRLENBQUNLLGNBQWMsQ0FBQyxNQUFNLENBQUM7RUFDNUM7RUFDRjtFQUNFOztFQUVBUCxxREFBTyxFQUFFLENBQUNRLElBQUksQ0FBRUMsSUFBSSxJQUFJTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksSUFBSSxDQUFFLENBQUM7QUFDN0MsQ0FBQyxDQUFDOztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhbGVnYW1pbmcvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIjtcbmltcG9ydCB7IHVzZURhdGEgfSBmcm9tIFwiLi9zY3JpcHRzL2FwaVwiO1xuaW1wb3J0IHsgaGFuZGxlTWFpblBhZ2UgfSBmcm9tIFwiLi9zY3JpcHRzL21haW5QYWdlXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJIZWxsbyB3b3JsZCFcIik7XG4gIC8vbnBtIHJ1biB3YXRjaCB0byBydW4gd2VicGFja1xuXG4gIC8vZ3JhYiBhbiBodG1sIGVsZW1lbnQgZm9yIERPTSBtYW5pcHVsYXRpb25cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgLy8gICBuZXcgRXhhbXBsZShtYWluKTtcbi8vICBoYW5kbGVCdXR0b25DbGljaygpOyBjYW4gYWRkIGFsbCB0aGUgZXZlbnRsaXN0bmVyIGxpa2UgdGhpc1xuICAvL25lZWQgdG8gbWFrZSBzb21lIGh0bWwgZm9yIG5hdmJhciBhbmQgc2VhcmNoIHNlY3Rpb24gc28gd2UgY2FuIHNhdmUgaXQgYXMgdmFyaWFibGUgdG8gaGF2ZSBoYW5kbGUgZXZlbnRzXG5cbiAgdXNlRGF0YSgpLnRoZW4oKGRhdGEpPT4oY29uc29sZS5sb2coZGF0YSkpKVxufSk7XG5cblxuICAvLyB1c2VEYXRhKCkudGhlbigoZGF0YSkgPT4ge1xuXG4gIC8vICAgY29uc29sZS5sb2coZGF0YS5hbGxEYXRhWzBdLnRpdGxlKVxuICAvLyAgIC8vaSBuZWVkIHRvIGRlY2lkZSBob3cgaSBhbSBnb2luZyB0byByZW5kZXIgdGhpc1xuICAvLyAgICBoYW5kbGVNYWluUGFnZShkYXRhLmFsbERhdGFbMF0udGl0bGUsIG1haW4pO1xuICAvLyB9KTtcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwidXNlRGF0YSIsImhhbmRsZU1haW5QYWdlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJnZXRFbGVtZW50QnlJZCIsInRoZW4iLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/api.js":
/*!****************************!*\
  !*** ./src/scripts/api.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllData\": function() { return /* binding */ getAllData; },\n/* harmony export */   \"useData\": function() { return /* binding */ useData; }\n/* harmony export */ });\nconst games = `https://mmo-games.p.rapidapi.com/games`;\nconst options = {\n  method: \"GET\",\n  headers: {\n    \"Content-Type\": \"application/json\",\n    \"Accept\": \"application/json\",\n    \"X-RapidAPI-Key\": \"5baae6da7amsh6d563cbf11ac2a0p1d6d56jsn48853ab50d67\",\n    \"X-RapidAPI-Host\": \"mmo-games.p.rapidapi.com\"\n  }\n};\nlet allData = null;\nlet gamesByGenre = null;\nlet gamesByPlatform = null;\nlet gamesByPublisher = null;\nasync function getAllData(url, options) {\n  try {\n    const response = await fetch(url, options);\n    const games = await response.json();\n    allData = games;\n\n    //storing data by genre aka category why do they have to name query and key differently? -.-\n\n    gamesByGenre = {};\n    for (const game of allData) {\n      const genre = game.genre;\n      if (!gamesByGenre[genre]) {\n        gamesByGenre[genre] = [];\n      }\n      gamesByGenre[genre].push(game);\n    }\n    gamesByPlatform = {};\n    for (const game of allData) {\n      const platform = game.platform;\n      if (!gamesByPlatform[platform]) {\n        gamesByPlatform[platform] = [];\n      }\n      gamesByPlatform[platform].push(game);\n    }\n    gamesByPublisher = {};\n    for (const game of allData) {\n      const publisher = game.publisher;\n      if (!gamesByPublisher[publisher]) {\n        gamesByPublisher[publisher] = [];\n      }\n      gamesByPublisher[publisher].push(game);\n    }\n    /*\n      this part is important because whole point of storing in to variable is to use it\n      whenever i want to call it however, i might call the variable before it even get to store it\n      so i need to make sure it returns it as variable but it still going to return 'promise' because it\n      did not resolve yet it was undefined for LONG TIME LOL...\n    */\n    return {\n      allData,\n      gamesByGenre,\n      gamesByPlatform,\n      gamesByPublisher\n    }; // it actually needs to return the promise value that has these data i want\n  } catch (err) {\n    console.error(\"error:\" + err);\n  }\n}\n\n/*\n  this function returns data so i don't have to fetch every single time\n  this will only fetch if data is not there also it helps me to get out from call back\n  & chain hell that i was stuck for long time... 😭\n\n  and exporting this because exporting allData and gamesByGenre are useless... it still going to be undefined and its 'promise value'\n  so its better to export this function that actually returns the data i need\n*/\nasync function useData() {\n  if (!allData || !gamesByGenre || !gamesByPlatform || !gamesByPublisher) {\n    /* this is way to get out from call back hell and also we do not need to fetch EVERY SINGLE TIME*/\n    await getAllData(games, options);\n  }\n  //save in array because i'd rather loop through array...\n  // ok changing to object cuz actually i do forget which is which.. it is good to have key...\n  const data = {\n    allData,\n    gamesByGenre,\n    gamesByPlatform,\n    gamesByPublisher\n  };\n  return data;\n}\n\n/*re-fetch-able\nsort_by\nonclick => fetch\nlet sort =['release-date', 'popularity', 'alphabetical']\nGET `https://www.mmobomb.com/api1/games?sort-by=${alphabetical}`\n\n Return details from a specific game\n**once user click certain game then refetch\nonclick => fetch\n GET https://www.mmobomb.com/api1/game?id=452\n\n\n */\n\n// //data[0]=>all the data\n// //data[1]=> data saved by genre\n// useData().then((data) => console.log(data[0], data[1]));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZSxJQUFJO0FBQ2I7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2hhbGVnYW1pbmcvLi9zcmMvc2NyaXB0cy9hcGkuanM/YTM5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnYW1lcyA9IGBodHRwczovL21tby1nYW1lcy5wLnJhcGlkYXBpLmNvbS9nYW1lc2A7XG5jb25zdCBvcHRpb25zID0ge1xuICBtZXRob2Q6IFwiR0VUXCIsXG4gIGhlYWRlcnM6IHtcbiAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIkFjY2VwdFwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICBcIlgtUmFwaWRBUEktS2V5XCI6IFwiNWJhYWU2ZGE3YW1zaDZkNTYzY2JmMTFhYzJhMHAxZDZkNTZqc240ODg1M2FiNTBkNjdcIixcbiAgICBcIlgtUmFwaWRBUEktSG9zdFwiOiBcIm1tby1nYW1lcy5wLnJhcGlkYXBpLmNvbVwiLFxuICB9LFxufTtcblxubGV0IGFsbERhdGEgPSBudWxsO1xubGV0IGdhbWVzQnlHZW5yZSA9IG51bGw7XG5sZXQgZ2FtZXNCeVBsYXRmb3JtID0gbnVsbDtcbmxldCBnYW1lc0J5UHVibGlzaGVyID0gbnVsbDtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbERhdGEodXJsLCBvcHRpb25zKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIG9wdGlvbnMpO1xuICAgIGNvbnN0IGdhbWVzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgYWxsRGF0YSA9IGdhbWVzO1xuXG4gICAgLy9zdG9yaW5nIGRhdGEgYnkgZ2VucmUgYWthIGNhdGVnb3J5IHdoeSBkbyB0aGV5IGhhdmUgdG8gbmFtZSBxdWVyeSBhbmQga2V5IGRpZmZlcmVudGx5PyAtLi1cblxuICAgIGdhbWVzQnlHZW5yZSA9IHt9O1xuICAgIGZvciAoY29uc3QgZ2FtZSBvZiBhbGxEYXRhKSB7XG4gICAgICBjb25zdCBnZW5yZSA9IGdhbWUuZ2VucmU7XG4gICAgICBpZiAoIWdhbWVzQnlHZW5yZVtnZW5yZV0pIHtcbiAgICAgICAgZ2FtZXNCeUdlbnJlW2dlbnJlXSA9IFtdO1xuICAgICAgfVxuICAgICAgZ2FtZXNCeUdlbnJlW2dlbnJlXS5wdXNoKGdhbWUpO1xuICAgIH1cblxuXG4gICAgZ2FtZXNCeVBsYXRmb3JtID17fVxuICAgICBmb3IgKGNvbnN0IGdhbWUgb2YgYWxsRGF0YSkge1xuICAgICAgIGNvbnN0IHBsYXRmb3JtID0gZ2FtZS5wbGF0Zm9ybTtcbiAgICAgICBpZiAoIWdhbWVzQnlQbGF0Zm9ybVtwbGF0Zm9ybV0pIHtcbiAgICAgICAgIGdhbWVzQnlQbGF0Zm9ybVtwbGF0Zm9ybV0gPSBbXTtcbiAgICAgICB9XG4gICAgICAgZ2FtZXNCeVBsYXRmb3JtW3BsYXRmb3JtXS5wdXNoKGdhbWUpO1xuICAgICB9XG5cbiAgICAgZ2FtZXNCeVB1Ymxpc2hlcj17fVxuICAgICAgIGZvciAoY29uc3QgZ2FtZSBvZiBhbGxEYXRhKSB7XG4gICAgICAgICBjb25zdCBwdWJsaXNoZXIgPSBnYW1lLnB1Ymxpc2hlcjtcbiAgICAgICAgIGlmICghZ2FtZXNCeVB1Ymxpc2hlcltwdWJsaXNoZXJdKSB7XG4gICAgICAgICAgIGdhbWVzQnlQdWJsaXNoZXJbcHVibGlzaGVyXSA9IFtdO1xuICAgICAgICAgfVxuICAgICAgICAgZ2FtZXNCeVB1Ymxpc2hlcltwdWJsaXNoZXJdLnB1c2goZ2FtZSk7XG4gICAgICAgfVxuICAgIC8qXG4gICAgICB0aGlzIHBhcnQgaXMgaW1wb3J0YW50IGJlY2F1c2Ugd2hvbGUgcG9pbnQgb2Ygc3RvcmluZyBpbiB0byB2YXJpYWJsZSBpcyB0byB1c2UgaXRcbiAgICAgIHdoZW5ldmVyIGkgd2FudCB0byBjYWxsIGl0IGhvd2V2ZXIsIGkgbWlnaHQgY2FsbCB0aGUgdmFyaWFibGUgYmVmb3JlIGl0IGV2ZW4gZ2V0IHRvIHN0b3JlIGl0XG4gICAgICBzbyBpIG5lZWQgdG8gbWFrZSBzdXJlIGl0IHJldHVybnMgaXQgYXMgdmFyaWFibGUgYnV0IGl0IHN0aWxsIGdvaW5nIHRvIHJldHVybiAncHJvbWlzZScgYmVjYXVzZSBpdFxuICAgICAgZGlkIG5vdCByZXNvbHZlIHlldCBpdCB3YXMgdW5kZWZpbmVkIGZvciBMT05HIFRJTUUgTE9MLi4uXG4gICAgKi9cbiAgICByZXR1cm4ge2FsbERhdGEsIGdhbWVzQnlHZW5yZSxnYW1lc0J5UGxhdGZvcm0sZ2FtZXNCeVB1Ymxpc2hlcn07IC8vIGl0IGFjdHVhbGx5IG5lZWRzIHRvIHJldHVybiB0aGUgcHJvbWlzZSB2YWx1ZSB0aGF0IGhhcyB0aGVzZSBkYXRhIGkgd2FudFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiZXJyb3I6XCIgKyBlcnIpO1xuICB9XG59XG5cbi8qXG4gIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBkYXRhIHNvIGkgZG9uJ3QgaGF2ZSB0byBmZXRjaCBldmVyeSBzaW5nbGUgdGltZVxuICB0aGlzIHdpbGwgb25seSBmZXRjaCBpZiBkYXRhIGlzIG5vdCB0aGVyZSBhbHNvIGl0IGhlbHBzIG1lIHRvIGdldCBvdXQgZnJvbSBjYWxsIGJhY2tcbiAgJiBjaGFpbiBoZWxsIHRoYXQgaSB3YXMgc3R1Y2sgZm9yIGxvbmcgdGltZS4uLiDwn5itXG5cbiAgYW5kIGV4cG9ydGluZyB0aGlzIGJlY2F1c2UgZXhwb3J0aW5nIGFsbERhdGEgYW5kIGdhbWVzQnlHZW5yZSBhcmUgdXNlbGVzcy4uLiBpdCBzdGlsbCBnb2luZyB0byBiZSB1bmRlZmluZWQgYW5kIGl0cyAncHJvbWlzZSB2YWx1ZSdcbiAgc28gaXRzIGJldHRlciB0byBleHBvcnQgdGhpcyBmdW5jdGlvbiB0aGF0IGFjdHVhbGx5IHJldHVybnMgdGhlIGRhdGEgaSBuZWVkXG4qL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVzZURhdGEoKSB7XG4gIGlmICghYWxsRGF0YSB8fCAhZ2FtZXNCeUdlbnJlIHx8ICFnYW1lc0J5UGxhdGZvcm0gfHwgIWdhbWVzQnlQdWJsaXNoZXIpIHtcbiAgICAvKiB0aGlzIGlzIHdheSB0byBnZXQgb3V0IGZyb20gY2FsbCBiYWNrIGhlbGwgYW5kIGFsc28gd2UgZG8gbm90IG5lZWQgdG8gZmV0Y2ggRVZFUlkgU0lOR0xFIFRJTUUqL1xuICAgIGF3YWl0IGdldEFsbERhdGEoZ2FtZXMsIG9wdGlvbnMpO1xuICB9XG4gIC8vc2F2ZSBpbiBhcnJheSBiZWNhdXNlIGknZCByYXRoZXIgbG9vcCB0aHJvdWdoIGFycmF5Li4uXG4gIC8vIG9rIGNoYW5naW5nIHRvIG9iamVjdCBjdXogYWN0dWFsbHkgaSBkbyBmb3JnZXQgd2hpY2ggaXMgd2hpY2guLiBpdCBpcyBnb29kIHRvIGhhdmUga2V5Li4uXG4gIGNvbnN0IGRhdGEgPSB7YWxsRGF0YSwgZ2FtZXNCeUdlbnJlLGdhbWVzQnlQbGF0Zm9ybSxnYW1lc0J5UHVibGlzaGVyfTtcbiAgcmV0dXJuIGRhdGE7XG59XG5cblxuXG5cbi8qcmUtZmV0Y2gtYWJsZVxuc29ydF9ieVxub25jbGljayA9PiBmZXRjaFxubGV0IHNvcnQgPVsncmVsZWFzZS1kYXRlJywgJ3BvcHVsYXJpdHknLCAnYWxwaGFiZXRpY2FsJ11cbkdFVCBgaHR0cHM6Ly93d3cubW1vYm9tYi5jb20vYXBpMS9nYW1lcz9zb3J0LWJ5PSR7YWxwaGFiZXRpY2FsfWBcblxuIFJldHVybiBkZXRhaWxzIGZyb20gYSBzcGVjaWZpYyBnYW1lXG4qKm9uY2UgdXNlciBjbGljayBjZXJ0YWluIGdhbWUgdGhlbiByZWZldGNoXG5vbmNsaWNrID0+IGZldGNoXG4gR0VUIGh0dHBzOi8vd3d3Lm1tb2JvbWIuY29tL2FwaTEvZ2FtZT9pZD00NTJcblxuXG4gKi9cblxuXG5cblxuXG4vLyAvL2RhdGFbMF09PmFsbCB0aGUgZGF0YVxuLy8gLy9kYXRhWzFdPT4gZGF0YSBzYXZlZCBieSBnZW5yZVxuLy8gdXNlRGF0YSgpLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGFbMF0sIGRhdGFbMV0pKTtcbiJdLCJuYW1lcyI6WyJnYW1lcyIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYWxsRGF0YSIsImdhbWVzQnlHZW5yZSIsImdhbWVzQnlQbGF0Zm9ybSIsImdhbWVzQnlQdWJsaXNoZXIiLCJnZXRBbGxEYXRhIiwidXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImpzb24iLCJnYW1lIiwiZ2VucmUiLCJwdXNoIiwicGxhdGZvcm0iLCJwdWJsaXNoZXIiLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJ1c2VEYXRhIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/api.js\n");

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