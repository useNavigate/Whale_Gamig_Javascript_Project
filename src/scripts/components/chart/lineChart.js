
import { filteredChart } from "./filteredChart";
import { useData } from "../../api";


export function createChart(data,genre) {
  // Extract the release year from each game and create an array of objects
  const games = data
    .filter((d) => d.release_date !== "0000") // exclude games with release year of "0000"
    .map((d) => {
      const year = Date.parse(d.release_date) //if its not parsable that means its 0000 one
        ? new Date(d.release_date).getFullYear()
        : null;
      return { release_year: year };
    });

  // Count the number of games released in each year
  const totals = games.reduce((acc, game) => {
    if (game.release_year !== null) {
      if (!acc[game.release_year]) {
        acc[game.release_year] = 0;
      }
      acc[game.release_year]++;
    }
    return acc;
  }, {});

  // Create a line chart using D3
  const chart = LineChart(
    //converts the totals object into an array of key-value pairs because i fetched the api and response.json()
    // needs to convert this because d3 only takes cvs data which is same as text/json
    Object.entries(totals).map(([year, count, title]) => ({
      year: new Date(year, 0),
      count,
    })),
    {
      x: (d) => d.year,
      y: (d) => d.count,
      yLabel: "Number of games",
      xLabel: "Released Year",
      width: 700,
      height: 400,
      color: "#007fff", //seems like this line can overwrites the colors
      // specify the tick format for the x-axis
      xAxisFormat: d3.timeFormat("%Y"),
    }
  );

  // Append the chart to the DOM
const main = document.getElementById('main')

 main.classList.add("data");
  let h1 = document.createElement("h1");
  let mainChart = document.createElement("div");

  h1.innerHTML = `Number of <span>All</span> The Live Games Released per Year`;

  let p = document.createElement("div");
  p.innerHTML = `<p> This graph displays the number of games released per year, with the
        y-axis representing the total number of games and the x-axis
        representing the year of release. The graph provides a visual
        representation of the trend of game releases over time and can be used
        to identify any patterns or changes in the industry.</p>`;

  mainChart.setAttribute("id", "chart_all");

  document.getElementById("main").appendChild(mainChart);
  mainChart.appendChild(h1);
  mainChart.appendChild(p);
  // description.appendChild(chartDiv);
   mainChart.appendChild(chart);

  //aside dom
let sideInfo = document.createElement("div")
sideInfo.classList.add("chart_sideInfo")

sideInfo.innerHTML = "";
sideInfo.innerHTML = `
<div >
  <h1>What is the <span>future</span> of the <span>gaming industry</span>??</h1>
  <p>Gaming is now a bigger industry than movies and sports combined. Revenue for gaming reached $184 billion in 2022, and the number of gamers is expected to grow to 3.6 billion by 2025. It's not just kids either: 38 percent of gamers are between the ages of 18 and 34 years, and 16 percent are older than 55.</p>
</div>`;


 main.appendChild(sideInfo)


const genreForFilter = [];


Object.keys(genre).forEach((keys) => {
  if (keys !== " MMORPG") {
    genreForFilter.push(keys);
  }
});

//get the percentage of each genre
const genresFilter = genreForFilter.map((key) => {
  return [key, genre[key].length];
});

console.log(genresFilter)

const about_ul = document.createElement("ul")
about_ul.classList.add("about_ul")
const description_li = document.createElement("h4")
description_li.innerHTML=`Category - Total Amount of Games`

about_ul.appendChild(description_li)


genresFilter.forEach((arr,i)=>{
  let about_li = document.createElement("li")
  about_li.innerHTML=`<span class="order">${i+1}</span> - ${arr[0]} : ${arr[1]}`

  about_ul.appendChild(about_li)
})

sideInfo.appendChild(about_ul)

handleFilter(genre)
  // Copyright 2021 Observable, Inc.
  // Released under the ISC license.
  // https://observablehq.com/@d3/multi-line-chart

  function LineChart(
    data,
    {
      x = ([x]) => x, // given d in data, returns the (temporal) x-value
      y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
      // z = ([z]) => z, this is not working
      title, // given d in data, returns the title text
      defined, // for gaps in data
      curve = d3.curveLinear, // method of interpolation between points
      marginTop = 20, // top margin, in pixels
      marginRight = 30, // right margin, in pixels
      marginBottom = 30, // bottom margin, in pixels
      marginLeft = 40, // left margin, in pixels
      width = 640, // outer width, in pixels
      height = 400, // outer height, in pixels
      xType = d3.scaleUtc, // type of x-scale
      xDomain, // [xmin, xmax]
      xRange = [marginLeft, width - marginRight], // [left, right]
      yType = d3.scaleLinear, // type of y-scale
      yDomain, // [ymin, ymax]
      yRange = [height - marginBottom, marginTop], // [bottom, top]
      color = "currentColor", // stroke color of line
      strokeWidth = 1.5, // stroke width of line, in pixels
      strokeLinejoin = "round", // stroke line join of line
      strokeLinecap = "round", // stroke line cap of line
      yFormat, // a format specifier string for the y-axis
      yLabel, // a label for the y-axis
    } = {}
  ) {
    // Compute values.
    const X = d3.map(data, x);
    const Y = d3.map(data, y);
    const O = d3.map(data, (d) => d);
    const I = d3.map(data, (_, i) => i);

    // Compute which data points are considered defined.
    if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
    const D = d3.map(data, defined);

    // Compute default domains.
    if (xDomain === undefined) xDomain = d3.extent(X);
    if (yDomain === undefined) yDomain = [0, d3.max(Y)];

    // Construct scales and axes.
    const xScale = xType(xDomain, xRange);
    const yScale = yType(yDomain, yRange);
    // const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0);
    const xAxis = d3
      .axisBottom(xScale)
      .ticks(width / 80)
      .tickFormat(d3.timeFormat("%Y"))
      .tickSizeOuter(0);
    const yAxis = d3.axisLeft(yScale).ticks(height / 40, yFormat);

    // Compute titles.
    if (title === undefined) {
      const formatDate = xScale.tickFormat(null, "%b %-d, %Y");
      const formatValue = yScale.tickFormat(100, yFormat);
      title = (i) => `${formatDate(X[i])}\n${formatValue(Y[i])}`;
    } else {
      const O = d3.map(data, (d) => d);
      const T = title;
      title = (i) => T(O[i], i, data);
    }

    // Construct a line generator.
    const line = d3
      .line()
      .defined((i) => D[i])
      .curve(curve)
      .x((i) => xScale(X[i]))
      .y((i) => yScale(Y[i]));

    const svg = d3
      .create("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto; height: intrinsic;")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .style("-webkit-tap-highlight-color", "transparent")
      .style("overflow", "visible")
      .on("pointerenter pointermove", pointermoved)
      .on("pointerleave", pointerleft)
      .on("touchstart", (event) => event.preventDefault());

    svg
      .append("g")
      .attr("transform", `translate(0,${height - marginBottom})`)
      .call(xAxis);

    svg
      .append("g")
      .attr("transform", `translate(${marginLeft},0)`)
      .call(yAxis)
      .call((g) => g.select(".domain").remove())
      .call((g) =>
        g
          .selectAll(".tick line")
          .clone()
          .attr("x2", width - marginLeft - marginRight)
          .attr("stroke-opacity", 0.1)
      )
      .call((g) =>
        g
          .append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text(yLabel)
      );

    svg
      .append("path")
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", strokeWidth)
      .attr("stroke-linejoin", strokeLinejoin)
      .attr("stroke-linecap", strokeLinecap)
      .attr("d", line(I));

    const tooltip = svg.append("g").style("pointer-events", "none");

    function pointermoved(event) {
      const i = d3.bisectCenter(X, xScale.invert(d3.pointer(event)[0]));
      tooltip.style("display", null);
      tooltip.attr("transform", `translate(${xScale(X[i])},${yScale(Y[i])})`);

      const path = tooltip
        .selectAll("path")
        .data([,])
        .join("path")
        .attr("fill", "white")
        .attr("stroke", "black");

      const text = tooltip
        .selectAll("text")
        .data([,])
        .join("text")
        .call((text) =>
          text
            .selectAll("tspan")
            .data(`${title(i)}`.split(/\n/))
            .join("tspan")
            .attr("x", 0)
            .attr("y", (_, i) => `${i * 1.1}em`)
            .attr("font-weight", (_, i) => (i ? null : "bold"))
            .text((d) => d)
        );

      const { x, y, width: w, height: h } = text.node().getBBox();
      text.attr("transform", `translate(${-w / 2},${15 - y})`);
      path.attr(
        "d",
        `M${-w / 2 - 10},5H-5l5,-5l5,5H${w / 2 + 10}v${h + 20}h-${w + 20}z`
      );
      svg.property("value", O[i]).dispatch("input", { bubbles: true });
    }

    function pointerleft() {
      tooltip.style("display", "none");
      svg.node().value = null;
      svg.dispatch("input", { bubbles: true });
    }

    return Object.assign(svg.node(), { value: null });
  }
}




 const handleFilter = (genres) => {
  const main = document.querySelector("#main");
  const genreSelect = document.createElement("select");
  genreSelect.classList.add("genre_select");

  const sideInfo = document.querySelector(".chart_sideInfo");
  sideInfo.appendChild(genreSelect);

  const selectOption = document.createElement("option");
  selectOption.setAttribute("label", "Select Options");
  selectOption.setAttribute("value", "nocap");
  selectOption.selected = true;
  selectOption.disabled = true;
  genreSelect.appendChild(selectOption);

  ("coming from linearChart");
  //getting name of genres for filtering
  const genreForFilter = [];

  Object.keys(genres).forEach((keys) => {
    if (keys !== " MMORPG") {
      genreForFilter.push(keys);
    }
  });

  //get the percentage of each genre
  const genresFilter = genreForFilter.map((key) => {
    return [key, genres[key].length];
  });

  // (genresFilter);

  //assigning keys to ul
  genresFilter.forEach((key, i) => {
    const genreList = document.createElement("option");
    genreList.setAttribute("value", `${key[0]}`);
    genreList.setAttribute("id", `${key[0]}`);
    (key[1]);

    genreList.innerHTML = `${key[0]}`;

    genreSelect.appendChild(genreList);
  });

  const filtered = document.getElementById("Shooter");
  // (filtered)
  let selectedOption = "nocap";

  genreSelect.addEventListener("change", (event) => {
    event.preventDefault();
    if (event.target.value !== selectedOption) {
      (event.target.value);
      selectedOption = event.target.value;
      //creatingChart
      filteredChart(selectedOption, genres[selectedOption]);
    }

    //omg finally got it
    (genres[selectedOption]);
  });

  // return genres[selectedOption]
};

