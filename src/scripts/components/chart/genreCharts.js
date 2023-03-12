export function dispatchGenre(genres) {
  let genreData = [];

  for (const key in genres) {
    if (key !== " MMORPG") {
      genreData.push([[key], genres[key]]);
    }
  }
  console.log(genreData)
  return genreData
}

export function createMultiChart(data) {
  data.forEach((arr) => {
      let h1 = document.createElement("h1");
      h1.innerHTML = `<h1>${arr[0]}</h1>`;
      document.getElementById("main").appendChild(h1);
    const games = arr[1]
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
      Object.entries(totals).map(([year, count]) => ({ year: new Date(year, 0), count })),
      {
        x: (d) => d.year,
        y: (d) => d.count,
        yLabel: "Number of games",
        xLabel: "Released Year",
        width: 600,
        height: 400,
        // color: "red", seems like this line can overwrites the colors
        // specify the tick format for the x-axis
        xAxisFormat: d3.timeFormat("%Y"),
      }
    );


    document.getElementById("main").appendChild(chart);
  });
}

function LineChart(
  data,
  {
    x = ([x]) => x, // given d in data, returns the (temporal) x-value
    y = ([, y]) => y, // given d in data, returns the (quantitative) y-value
    defined, // for gaps in data
    curve = d3.curveLinear, // method of interpolation between points
    marginTop = 30, // top margin, in pixels
    marginRight = 30, // right margin, in pixels
    marginBottom = 30, // bottom margin, in pixels
    marginLeft = 30, // left margin, in pixels
    width = 500, // outer width, in pixels
    height = 400, // outer height, in pixels
    xType = d3.scaleUtc, // the x-scale type
    xDomain, // [xmin, xmax]
    xRange = [marginLeft, width - marginRight], // [left, right]
    yType = d3.scaleLinear, // the y-scale type
    yDomain, // [ymin, ymax]
    yRange = [height - marginBottom, marginTop], // [bottom, top]
    yFormat, // a format specifier string for the y-axis
    yLabel, // a label for the y-axis
    xLabel, // adding becauses i want x label
    color = "red", // stroke color of line
    strokeLinecap = "round", // stroke line cap of the line
    strokeLinejoin = "bevel", // stroke line join of the line
    strokeWidth = 2, // stroke width of line, in pixels
    strokeOpacity = 1, // stroke opacity of line
  } = {}
) {
  // Compute values.
  const X = d3.map(data, x);
  const Y = d3.map(data, y);
  const I = d3.range(X.length);
  if (defined === undefined) defined = (d, i) => !isNaN(X[i]) && !isNaN(Y[i]);
  const D = d3.map(data, defined);

  // Compute default domains.
  if (xDomain === undefined) xDomain = d3.extent(X);
  if (yDomain === undefined) yDomain = [0, d3.max(Y)];

  // Construct scales and axes.
  const xScale = xType(xDomain, xRange);
  const yScale = yType(yDomain, yRange);
  const xAxis = d3
    .axisBottom(xScale)
    .ticks(width / 50) // x range
    .tickSizeOuter(0);
  const yAxis = d3.axisLeft(yScale).ticks(height / 50, yFormat); //y range

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
    .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

  //x Axis line
  svg
    .append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(xAxis);

  // y Axis line
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
        .attr("fill", "red") //number of games text
        .attr("text-anchor", "start")
        .text(yLabel)
    );

  //graph
  svg
    .append("path")
    .attr("fill", "none")
    .attr("stroke", "pink") //graph stroke color
    .attr("stroke-width", strokeWidth)
    .attr("stroke-linecap", strokeLinecap)
    .attr("stroke-linejoin", strokeLinejoin)
    .attr("stroke-opacity", strokeOpacity)
    .attr("d", line(I));

  //label for x
  svg
    .append("text")
    .attr("x", width - marginRight * 10)
    .attr("y", height - marginBottom / 20)
    .attr("fill", "black") //release year
    .attr("text-anchor", "end")
    .text(xLabel);
  return svg.node();
}




