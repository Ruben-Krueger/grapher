/**
 * Created by rubenkrueger on 5/25/18.
 */
/**
 * Created by rubenkrueger on 5/25/18.
 */
var i,
    s,
    N = 20,
    E = 30,
    g = {
        nodes: [],
        edges: []
    };

function generate_vulnerability() {
    var x = Math.random();
    if(x < .4) {
        return "Default Password"
    }
    else if(x >= .4 && x < .7) {
        return "Outdated firmware"
    }
    else {
        return "Unknown"
    }


}



var n_switches = 6;
var switch_color = "#101011";
var switch_radius = .5

for (i = 1; i <= n_switches; i++)
    g.nodes.push({
        id: 's' + i,
        label: 'Switch ' + i,
        x: Math.random(),
        y: Math.random(),
        size: switch_radius,
        color: switch_color,
        critical: true,
        vulnerability: generate_vulnerability()
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