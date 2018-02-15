var colors = ['#FBB65B', '#513551', '#de3163'];

var data = [
  {day: 'Mon', apricots: 120, blueberries: 180, cherries: 100},
  {day: 'Tue', apricots: 60, blueberries: 185, cherries: 105},
  {day: 'Wed', apricots: 100, blueberries: 215, cherries: 110},
  {day: 'Thu', apricots: 80, blueberries: 230, cherries: 105},
  {day: 'Fri', apricots: 120, blueberries: 240, cherries: 105}
];

var stack = d3.stack()
  .keys(['apricots', 'blueberries', 'cherries']);

var stackedSeries = stack(data);

// Create a g element for each series
var g = d3.select('g')
    .selectAll('g.series')
    .data(stackedSeries)
    .enter()
    .append('g')
    .classed('series', true)
    .style('fill', function(d, i) {
        return colors[i];
    });

// For each series create a rect element for each day
g.selectAll('rect')
    .data(function(d) {
        return d;
    })
    .enter()
    .append('rect')
    .attr('width', function(d) {
        return d[1] - d[0];
    })
    .attr('x', function(d) {
        return d[0];
    })
    .attr('y', function(d, i) {
        return i * 20;
    })
    .attr('height', 19);