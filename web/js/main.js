var zoomedElement = null;

var CANVAS_WIDTH = window.innerWidth - 40;
var CANVAS_HEIGHT = window.innerHeight - 40;

var svg = d3.select("#target").append("svg").attr("width", CANVAS_WIDTH).attr("height", CANVAS_HEIGHT);

var zoomer = d3.zoom().scaleExtent([0, 2]);
var g = svg.append("g");
var panner = function() {
  g.attr('transform', 'translate(' + (d3.event.transform.x - 20) + ',' + (d3.event.transform.y - 20) + ')');
};


svg.call(zoomer.on("zoom", panner));


var div = d3.select("#target").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

console.log(root);



var tree = d3.tree()
  //.size([window.innerWidth - 120, window.innerHeight - 120])
  .nodeSize([450, 300]);

var nodes = tree(root
    .sum(function(d) {
      return d.value;
    })
    .sort(function(a, b) {
      return b.height - a.height || b.value - a.value;
    }))
  .descendants();

console.log(nodes);

var cx = function(c) {
  return c.x + 30;
};
var cy = function(c) {
  return c.y + 30;
};

var lineFunction = d3.line()
  .x(cx)
  .y(cy);

nodes.forEach(function(n) {

  n.children && n.children.forEach(function(c) {
    console.log("c:" + c.data.name);
    console.log("n:" + n.data.name);
    g.append("path")
      .attr("d", lineFunction([n, c]))
      .attr("stroke", "black")
      .attr("stroke-width", 1)
      .attr("fill", "none");
  });
});

var groups = g
  .selectAll("circle")
  .data(nodes)
  .enter()
  .append("g");

var circles = groups
  .attr("transform", function(c) {
    return "translate(" + cx(c) + ',' + cy(c) + ")";
  })
  .append("circle")
  .attr("cx", "0")
  .attr("cy", "0")
  .attr("r", 20)
  .attr("fill", "#2e2e2e")
  .on("mouseover", function(d) {
    d3.select(this).attr("stroke", "#8e8e8e").transition().duration(200).attr("stroke-width", 4);
    /*
    div.transition()
      .duration(200)
      .style("opacity", .9);
    div.html(d.data.name)
      .style("left", (d.x + 30) + "px")
      .style("top", (d.y - 30) + "px");
      */
  })
  .on("click", function(d) {
    console.log(d3.event);
    var pos = [cx(d), cy(d)];
    var scale = 2.5;

    console.log(pos);
    if (d != zoomedElement) {
      g.transition()
        //.attr('transform', 'translate(-200,-200)')
        //.attr('transform', 'matrix(2.5, 0, 0, 2.5, ' + ((1 - scale) * pos[0]) + ',' + ((1 - scale) * pos[1]) + ')')
        .attr('transform', 'translate(' + ((CANVAS_WIDTH / 2) - pos[0] - 200) + ',' + ((CANVAS_HEIGHT / 2) - pos[1] - 100) + ')')
        // .attr('transform', 'translate(' + (1 - scale) * (pos[0] + 200) + ',' + ((1 - scale) * pos[1]) + ') ' /*scale(' + scale + ')'*/ )
        .on('end', function(a) {
          console.log(a);
        });

      zoomedElement = d;
    } else {
      g.transition().attr('transform', '');
      zoomedElement = null;
    }

  })
  .on("mouseout", function(d) {
    d3.select(this).transition().duration(200).attr("stroke-width", 0);
    /*
    div.transition()
      .duration(500)
      .style("opacity", 0);
      */
  });
/*
g.call(d3.drag()
  //.on("start", nudragstarted)
  .on("drag", function() {
    d3.select(this).attr('transform', 'translate(' + d3.event.x + ',' + d3.event.y + ')');
  }));
//        .on("end", dragended));
*/

console.log(circles);


/*
zoomer.translateBy(g, 100, 100);
debugger;
*/
//g.attr('transform', d3.zoomTransform(g.node()).toString());

groups.append("foreignObject").attr("x", 40).attr("y", -20).attr('width', 350).html(function(a) {
  console.log(a);
  return ' <div class="ibox" xmlns="http://www.w3.org/1999/xhtml"><h1>' + (a.data.headline || a.id) + '</h1>' +
    (a.data.summary || '') + '</div>';
});


g.append("circle")
  .attr("cx", -100)
  .attr("cy", -100)
  .attr("r", 30)
  .attr("fill", "blue")
  .on("click", function() {
    g.transition()
      .attr('transform', 'scale(0.3) translate(1500,1000)');
  });
