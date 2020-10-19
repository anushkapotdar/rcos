var width = 960,
    height = 500;

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

d3.json("data.json", function(json) {
    /* Define the data for the circles */
    var elem = svg.selectAll("g")
        .data(json.nodes)

    /*Create and place the "blocks" containing the circle and the text */  
    var elemEnter = elem.enter()
        .append("g")
        .attr("transform", function(d){return "translate("+d.x+",80)"})

    /*Create the circle for each block */
    var circle = elemEnter.append("circle")
        .attr("r", function(d){return d.r} )
        .attr("stroke","black")
        .attr("fill", "white")

    /* Create the text for each block */
    elemEnter.append("text")
        .attr("dx", function(d){return -20})
        .text(function(d){return d.label})
})