var score_ctx = document.getElementById('score').getContext('2d');
        const xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        const yValues = [55, 49, 44, 24, 30];
        var background_1 = score_ctx.createLinearGradient(0, 0, 0, 600);
        background_1.addColorStop(0, '#7d4df3');
        background_1.addColorStop(1, '#e87bf8'); 
        new Chart("score", {
          type: "bar",
          data: {
            labels: xValues,
            datasets: [{
              backgroundColor: background_1,
              data: yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Overall Score Progress"
            }
          }
        });


        var kills_ctx = document.getElementById('kills').getContext('2d');
        const kills_xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        const kills_yValues = [55, 49, 44, 24, 30];
        var background_1 = kills_ctx.createLinearGradient(0, 0, 0, 600);
        background_1.addColorStop(0, '#7d4df3');
        background_1.addColorStop(1, '#e87bf8'); 
        new Chart("kills", {
          type: "line",
          data: {
            labels: kills_xValues,
            datasets: [{
              backgroundColor: background_1,
              data: kills_yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Overall kills Progress"
            }
          }
        });
        var weekly_ctx = document.getElementById('weekly').getContext('2d');
        const weekly_xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        const weekly_yValues = [55, 49, 44, 24, 30];
        var background_1 = weekly_ctx.createLinearGradient(0, 0, 0, 600);
        background_1.addColorStop(0, '#7d4df3');
        background_1.addColorStop(1, '#e87bf8'); 
        new Chart("weekly", {
          type: "bar",
          data: {
            labels: weekly_xValues,
            datasets: [{
              backgroundColor: background_1,
              data: weekly_yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Overall Weekly Progress"
            }
          }
        });
        var monthly_ctx = document.getElementById('monthly').getContext('2d');
        const monthly_xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
        const monthly_yValues = [55, 49, 44, 24, 30];
        var background_1 = monthly_ctx.createLinearGradient(0, 0, 0, 600);
        background_1.addColorStop(0, '#7d4df3');
        background_1.addColorStop(1, '#e87bf8'); 
        new Chart("monthly", {
          type: "bar",
          data: {
            labels: monthly_xValues,
            datasets: [{
              backgroundColor: background_1,
              data: monthly_yValues
            }]
          },
          options: {
            legend: {display: false},
            title: {
              display: true,
              text: "Overall monthly Progress"
            }
          }
        });