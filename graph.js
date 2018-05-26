/**
 * Created by rubenkrueger on 5/25/18.
 */


var i,
    s,
    g = {
        nodes: [],
        edges: []
    };

function Component(id, x, y, result, color, critical, location) {
    this.label = id;
    this.id = id;
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = 0.5;
    this.vulnerability = result;
    this.critical = critical;
    this.location = location
}

function Edge(id, source, target, size, color) {
    this.is = id;
    this.source = source;
    this.target = target;
    this.size = size;
    this.color = color;
}


var switch1 = new Component("Switch 1", 120, 100, "Old firmware", "black", "Critical", "A32, near cabinent");
var switch2 = new Component("Switch 2", 200, 100, "Old firmware", "black", "Critical", "B35, in C panel");
var switch3 = new Component("Switch 3", 180, 200, "Old firmware", "black", "Critical", "E56, near engine E");

var generator1 = new Component("Generator 1", 250, 150, "Unsecured controller", "chocolate", "Not Critical", "Engine room");
var generator2 = new Component("Generator 2", 250, 300, "Unsecured controller", "chocolate", "Critical", "Engine room");

var plc1 = new Component("PLC 1", 75, 50, "Default password", "darkcyan", "Critical", "Hallway A");
var plc2 = new Component("PLC 2", 100, 150, "Default password", "darkcyan", "Not Critical", "Hallway A");
var plc3 = new Component("PLC 3", 50, 200, "Default password", "darkcyan", "Not Critical", "Hallway A");
var plc4 = new Component("PLC 4", 80, 300, "Default password", "darkcyan", "Critical","Hallway A");

var server1 =  new Component("Server 1", 135, 135, "Unsecured FTP", 'darkred', "Critical", "Com room 2, near B panel")
var server2 =  new Component("Server 2", 70, 135, "Unsecured FTP", 'darkred', "Critical", "Com room 2, near A panel")

var nav =  new Component("Nav System Interface", 400, 400, "No authentification", 'black', "Critical", "Near server 1")
var bridge =  new Component("Bridge System Interface", 400, 400, "No authentification", 'black', "Critical","Near server 2")


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


// var e1 = new Edge("e1", "PLC 4", "Generator 2", 0.5, "grey");
// g.edges.push(e1);




g.edges.push({
    id: '1',
    source: 'PLC 4',
    target: 'Generator 2',
    size: 0.5,
    color: 'grey'
});
g.edges.push({
    id: '2',
    source: 'PLC 4',
    target: 'PLC 3',
    size: 0.5,
    color: 'black'
});
g.edges.push({
    id: '3',
    source: 'Server 1',
    target: 'PLC 2',
    size: 0.5,
    color: 'grey'
});
g.edges.push({
    id: '4',
    source: 'Switch 2',
    target: 'Generator 1',
    size: 0.5,
    color: 'grey'
});
g.edges.push({
    id: '5',
    source: 'Server 1',
    target: 'Server 2',
    size: 0.5,
    color: 'grey'
});
g.edges.push({
    id: '6',
    source: 'Switch 1',
    target: 'PLC 1',
    size: 0.5,
    color: 'grey'
});
g.edges.push({
    id: '7',
    source: 'Switch 1',
    target: 'Generator 1',
    size: 0.5,
    color: 'grey'
});
g.edges.push({
    id: '8',
    source: 'Nav System Interface',
    target: 'Server 1',
    size: 0.5,
    color: 'grey'
});
g.edges.push({
    id: '9',
    source: 'Switch 3',
    target: 'Generator 2',
    size: 0.5,
    color: 'grey'
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
    document.getElementById('location').innerHTML = e.data.node.location;
    document.getElementById('critical').innerHTML = e.data.node.critical;

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