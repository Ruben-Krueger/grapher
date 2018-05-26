 /**
 * Created by rubenkrueger on 5/25/18.
 */
 function Component(type, name, x, y, result, color, critical) {
     this.type = type;
     this.name = name;
     this.x = x;
     this.y = y;
     this.color = color;
     this.radius = 0.5;
     this.vulnerability = result;
     this.critical = critical;

 }

 var switches = [];
 var servers = [];
 var PLCs = [];
 var engines = [];

 var n_switches = [];
 var n_servers = [];
 var n_PLCs = [];
 var n_engines = [];

 var switch1 = new Component(Switch, "switch 1", 100, 100, "Unknown", "black", "False");
 var switch2 = new Component(Switch, "switch 2", 200, 200, "Unknown", "black", "False");
 var switch3 = new Component(Switch, "switch 3", 300, 300, "Unknown", "black", "False");
 var switch4 = new Component(Switch, "switch 4", 400, 100, "Unknown", "black", "False");
 var switch5 = new Component(Switch, "switch 5", 100, 100, "Unknown", "black", "False");



 // for (i = 1; i <= n_switches; i++)
 //     g.nodes.push({
 //         id: 's' + i,
 //         label: 'Switch ' + i,
 //         x: get_switchX(i),
 //         y: get_switchY(i),
 //         size: switch_radius,
 //         color: switch_color,
 //         critical: true,
 //         vulnerability: generate_vulnerability()
 //     });



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

