/**
 * Created by rubenkrueger on 5/25/18.
 */
var i,
    s,
    g = {
        nodes: [],
        edges: []
    };

function Component(type, id, x, y, result, color, critical) {
    this.label = id;
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 0.5;
    this.vulnerability = result;
    this.critical = critical;

}


var switch1 = new Component("Switch", "Switch 1", 100, 100, "Unknown", "black", "False");
var switch2 = new Component("Switch", "Switch 2", 200, 100, "Unknown", "black", "False");
var switch3 = new Component("Switch", "Switch 3", 200, 200, "Unknown", "black", "False");

var generator1 = new Component("Generator", "Generator 1", 250, 150, "Unknown", "chocolate", "True");
var generator2 = new Component("Generator", "Generator 2", 250, 300, "Unknown", "chocolate", "False");

var plc1 = new Component("PLC", "PLC 1", 75, 50, "Unknown", "darkcyan", "False");
var plc2 = new Component("PLC", "PLC 2", 100, 150, "Unknown", "darkcyan", "False");
var plc3 = new Component("PLC", "PLC 3", 50, 200, "Unknown", "darkcyan", "False");
var plc4 = new Component("PLC", "PLC 4", 80, 300, "Unknown", "darkcyan", "False");


g.nodes.push(switch1);
g.nodes.push(switch2);
g.nodes.push(switch3);
g.nodes.push(generator1);
g.nodes.push(generator2);
g.nodes.push(plc1);
g.nodes.push(plc2);
g.nodes.push(plc3);
g.nodes.push(plc4);

s = new sigma({
    graph: g,
    renderer: {
        container: document.getElementById('graph-container'),
        type: 'canvas'
    },
    settings: {
        doubleClickEnabled: false,
        minEdgeSize: 0.5,
        maxEdgeSize: 4,
        enableEdgeHovering: true,
        edgeHoverColor: 'edge',
        defaultEdgeHoverColor: '#000',
        edgeHoverSizeRatio: 1,
        edgeHoverExtremities: true
    }
});

// Bind the events:
s.bind('overNode outNode clickNode doubleClickNode rightClickNode', function(e) {
    console.log(e.type, e.data.node.label, e.data.captor);
    document.getElementById('title').innerHTML = e.data.node.label
    document.getElementById('data').innerHTML = e.data.node.vulnerability;

});
s.bind('overEdge outEdge clickEdge doubleClickEdge rightClickEdge', function(e) {
    console.log(e.type, e.data.edge, e.data.captor);
});
s.bind('clickStage', function(e) {
    console.log(e.type, e.data.captor);
});
s.bind('doubleClickStage rightClickStage', function(e) {
    console.log(e.type, e.data.captor);
});