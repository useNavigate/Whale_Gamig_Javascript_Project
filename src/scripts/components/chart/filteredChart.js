import { useData } from "../../api";
import { scrollToTop } from "../navbar";

export function filteredChart(title, data) {
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
      title,
    })),
    {
      x: (d) => d.year,
      y: (d) => d.count,
      z: (d) => d.title,
      yLabel: "Number of games",
      xLabel: "Released Year",
      width: 700,
      height: 400,
      color: "#007fff",
      // color: "red", seems like this line can overwrites the colors
      // specify the tick format for the x-axis
      xAxisFormat: d3.timeFormat("%Y"),
    }
  );

  // Append the chart to the DOM
  let prev = document.getElementById("chart_all");
  prev.innerHTML = "";
  let h1 = document.createElement("h1");

  if (title === "Card Game") {
    h1.innerHTML = `<h1>Number of The Live <span>Card</span> Games Released per Year</h1>`;
  } else {
    h1.innerHTML = `<h1>Number of The Live <span>${title}</span> Games Released per Year</h1>`;
  }
  useData().then((allData) => {
    handleFilter(allData.gamesByGenre);

    //adding class for main
    const main = document.getElementById("main");
    main.classList.add("data");
  });

  let p = document.createElement("div");

  p.innerHTML = ` <p>This graph displays the number of games released per year, with the
        y-axis representing the total number of games and the x-axis
        representing the year of release. The graph provides a visual
        representation of the trend of game releases over time and can be used
        to identify any patterns or changes in the industry.</p>`;

  const handleFilter = (genres) => {
    const main = document.querySelector("#main");
    const genreSelect = document.createElement("select");
    genreSelect.classList.add("genre_select");

    // const sideInfo = document.querySelector(".chart_sideInfo");
    const selectGoesHere = document.querySelector(".selectGoesHere")
   selectGoesHere.appendChild(genreSelect);

    const selectOption = document.createElement("option");
    selectOption.setAttribute("label", "Select Category");
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
      key[1];

      genreList.innerHTML = `${key[0]}`;

      genreSelect.appendChild(genreList);
    });

    // (filtered)
    let selectedOption = "nocap";

    genreSelect.addEventListener("change", (event) => {
      event.preventDefault();
      if (event.target.value !== selectedOption) {
        event.target.value;
        selectedOption = event.target.value;
        //creatingChart
        filteredChart(selectedOption, genres[selectedOption]);
      }

      //omg finally got it
      genres[selectedOption];
    });

    // return genres[selectedOption]
  };

  // useData().then((allData) => {
  //   handleFilter(allData.gamesByGenre);

  //   //adding class for main
  //   const main = document.getElementById("main");
  //   main.classList.add("data");
  // });

  prev.appendChild(h1);
  prev.appendChild(p);
  prev.appendChild(chart);

  const about = {
    Shooter:
      "Shooter video games or shooters are a subgenre of action video games where the focus is almost entirely on the defeat of the character's enemies using the weapons given to the player.",
    MMORPG:
      "(Massively Multiplayer Online Role-Playing Game) is a genre of online game that focuses more on traditional RPG elements, such as character development, questing, and story progression. Players typically create and control their own character in a persistent virtual world and interact with other players to complete quests, explore the world, and engage in player versus player combat. Examples of MMORPGs include World of Warcraft, Final Fantasy XIV, and Guild Wars 2.",
    MMOARPG:
      "(Massively Multiplayer Online Action Role-Playing Game) is a genre of online game that blends action-oriented gameplay with role-playing elements. Players typically control a single character in a virtual world and engage in real-time combat against enemies, completing quests, and gaining experience points to level up their characters. Examples of MMOARPGs include Diablo, Path of Exile, and Torchlight.",
    ARPG: "(Action Role-Playing Game): A video game genre that combines elements of traditional role-playing games with real-time action combat. Players control a character in a fantasy world, battling enemies and gaining experience points to level up and acquire new skills and equipment. Example: Diablo series, Path of Exile.",
    BattleRoyale:
      "A genre of online multiplayer video games in which a large number of players (typically 100) fight to be the last person or team standing. Players start with minimal equipment and must scavenge for weapons and items while avoiding a constantly shrinking play area. Example: Fortnite, PUBG.",
    Strategy:
      "A video game genre that emphasizes tactical and strategic decision-making, resource management, and long-term planning. Players control armies or civilizations, build and manage infrastructure, and engage in combat against opponents. Example: Civilization series, Age of Empires.",
    Fighting:
      "A genre of video games in which players compete against each other in hand-to-hand combat using a variety of martial arts moves and special attacks. Example: Street Fighter, Mortal Kombat.",
    CardGame:
      "A genre of video games that involve collectible cards as the primary gameplay element. Players build decks of cards with different abilities and strengths, and then use them to battle against opponents. Example: Hearthstone, Magic: The Gathering Arena.",
    ActionRPG:
      "A genre of role-playing games that emphasizes real-time combat and fast-paced action. Players control a character in a fantasy world, battling enemies and gaining experience points to level up and acquire new skills and equipment. Example: Dark Souls, Kingdoms of Amalur.",
    Racing:
      "A video game genre that simulates racing vehicles, either on land, sea, or air. Players compete against each other or against the clock to complete courses or races, trying to get the fastest time or cross the finish line first. Example: Forza Horizon, Need for Speed.",
    MOBA: "(Multiplayer Online Battle Arena): A genre of online multiplayer video games in which players control a single character in a team-based battle against opponents. The goal is to destroy the opposing team's base while protecting their own. Example: League of Legends, Dota 2.",
    Sports:
      "A video game genre that simulates real-world sports, such as soccer, football, basketball, or tennis. Players control individual athletes or teams, competing against each other to win matches or championships. Example: FIFA, NBA 2K.",
    MMOFPS:
      "(Massively Multiplayer Online First-Person Shooter): A genre of online multiplayer video games that involve shooting and combat from a first-person perspective in a persistent virtual world. Players engage in battles against other players or non-player characters to gain experience points and advance their characters. Example: Destiny, Warframe.",
    MMO: "(Massively Multiplayer Online): A genre of online multiplayer video games that support a large number of players in a shared virtual world. Players can interact with each other and engage in various activities such as completing quests, exploring the world, or battling enemies. Example: World of Warcraft, Guild Wars 2.",
    Social:
      "A video game genre that emphasizes social interaction between players. Players can create and customize their avatars, chat with other players, participate in activities, and build relationships. Example: Second Life, The Sims.",
    Fantasy:
      "sA video game genre that features elements of mythology, magic, and fictional creatures. Players can explore and interact with a virtual world filled with fantastical locations and characters. Example: The Elder Scrolls series, Final Fantasy series.",
  };
  const sideInfo = document.querySelector(".chart_sideInfo");

  sideInfo.innerHTML = "";
  sideInfo.innerHTML = `
<div  class="selectGoesHere">
  <h1>what is <span>${title}</span> game?</h1>
  <p >${about[title.split(" ").join("")]}</p>
</div>`;

  const about_ul = document.createElement("ul");
  about_ul.classList.add("about_ul");
  const description_li = document.createElement("h4");
  description_li.innerHTML = `${title} Game Data Information List`;

  about_ul.appendChild(description_li);

  data.forEach((obj, i) => {
    let about_li = document.createElement("li");
    about_li.innerHTML = `<span class ="order">${i + 1}</span> - ${
      obj.title
    } (${obj.release_date})
  `;

    about_ul.appendChild(about_li);
  });

  sideInfo.appendChild(about_ul);
  scrollToTop();

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
