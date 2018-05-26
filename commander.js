new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Drug Interdiction", "Wartime Training Exercises", "Flight Operations", "Freedom of Navigation Operations"],
        datasets: [
            {
                label: "Vulnerabilities",
                backgroundColor: ["red", "#8e5ea2","#3cba9f","#e8c3b9"],
                data: [512,132,234,431]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Asset Vulnerability Count',
            fontSize: 30
        },
        responsive: false

    }
});


new Chart(document.getElementById("second-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Drug Interdiction", "Wartime Training Exercises", "Flight Operations", "Freedom of Navigation Operations"],
        datasets: [
            {
                label: "Vulnerabilities",
                backgroundColor: ["red", "#8e5ea2","#3cba9f","#e8c3b9"],
                data: [512,132,234,431]
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Asset Vulnerability Count',
            fontSize: 30
        },
        responsive: false

    }
});