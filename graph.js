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
        critical: true
    });



// for (i = 0; i < E; i++)
//     g.edges.push({
//         id: 'e' + i,
//         source: 'n' + (Math.random() * N | 0),
//         target: 'n' + (Math.random() * N | 0),
//         size: Math.random(),
//         color: '#ccc',
//         type: 'curve',
//         hover_color: '#000'
//     });



// for (i = 0; i < N; i++)
//     g.nodes.push({
//         id: 'n' + i,
//         label: 'Node ' + i,
//         x: Math.random(),
//         y: Math.random(),
//         size: Math.random(),
//         color: '#666',
//         critical: true
//     });
//
// for (i = 0; i < E; i++)
//     g.edges.push({
//         id: 'e' + i,
//         source: 'n' + (Math.random() * N | 0),
//         target: 'n' + (Math.random() * N | 0),
//         size: Math.random(),
//         color: '#ccc',
//         type: 'curve',
//         hover_color: '#000'
//     });


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