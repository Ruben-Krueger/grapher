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

function Edge(id, source, target, size, color) {
    this.is = id;
    this.source = source;
    this.target = target;
    this.size = size;
    this.color = color;
}


var switch1 = new Component("Switch", "Switch 1", 100, 100, "Old firmware", "black", "False");
var switch2 = new Component("Switch", "Switch 2", 200, 100, "Old firmware", "black", "False");
var switch3 = new Component("Switch", "Switch 3", 200, 200, "Old firmware", "black", "False");

var generator1 = new Component("Generator", "Generator 1", 250, 150, "Unsecured controller", "chocolate", "True");
var generator2 = new Component("Generator", "Generator 2", 250, 300, "Unsecured controller", "chocolate", "True");

var plc1 = new Component("PLC", "PLC 1", 75, 50, "Default password", "darkcyan", "False");
var plc2 = new Component("PLC", "PLC 2", 100, 150, "Default password", "darkcyan", "False");
var plc3 = new Component("PLC", "PLC 3", 50, 200, "Default password", "darkcyan", "False");
var plc4 = new Component("PLC", "PLC 4", 80, 300, "Default password", "darkcyan", "False");

var server1 =  new Component("Server", "Server 1", 135, 135, "Unsecured FTP", 'darkred', "true")
var server2 =  new Component("Server", "Server 2", 70, 135, "Unsecured FTP", 'darkred', "true")

var nav =  new Component("Nav", "Nav System Interface", 400, 400, "No authentification", 'black', "true")


g.nodes.push(switch1);
g.nodes.push(switch2);
g.nodes.push(switch3);
g.nodes.push(generator1);
g.nodes.push(generator2);
g.nodes.push(plc1);
g.nodes.push(plc2);
g.nodes.push(plc3);
g.nodes.push(plc4);
g.nodes.push(server1);
g.nodes.push(server2);
g.nodes.push(nav);


var e1 = new Edge("e1", "PLC 4", "Generator 2", 0.5, "grey");

g.edges.push({
    id: 'n' + i,
    label: 'Node ' + i,
    x: Math.random(),
    y: Math.random(),
    size: Math.random(),
    color: '#666'
});


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