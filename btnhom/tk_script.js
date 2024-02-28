// let data = {
//     labels: ['Đạt', 'Rớt'],
//     datasets: [{
//         data: [70, 30], // Số liệu đạt/rớt (ví dụ)
//         backgroundColor: [
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(255, 99, 132, 0.2)',
//         ],
//         borderColor: [
//             'rgba(75, 192, 192, 1)',
//             'rgba(255, 99, 132, 1)',
//         ],
//         borderWidth: 1
//     }]
// };

// // Tạo biểu đồ tròn
// var ctx = document.getElementById('pieChart').getContext('2d');
// var myPieChart = new Chart(ctx, {
//     type: 'pie',
//     data: data,
//     options: {
//         responsive: false, // Tắt tính năng đáp ứng
//         title: {
//             display: true,
//             text: 'Phần trăm sinh viên đạt/rớt'
//         }
//     }
// });



//pho diem

let dataPho = [
    ["0", 24],["0.25", 8],["0.5", 19],["0.75", 29],["1", 12],
    ["1.25", 236],["1.5", 322],["1.75", 360],["2", 701],["2.25", 898],
    ["2.5", 1267],["2.75", 1723],["3", 2716],["3.25", 3387],["3.5", 5146],
    ["3.75", 6487],["4", 9399],["4.25", 10932],["4.5", 14910],["4.75", 15080],
    ["5", 30381],["5.25", 29500],["5.5", 40146],["5.75", 44329],["6", 59442],
    ["6.25", 59616],["6.5", 72128],["6.75", 68899],["7", 79164],["7.25", 67295],
    ["7.5", 73821],["7.75", 63628],["8", 67629],["8.25", 50848],["8.5", 48855],
    ["8.75", 35518],["9", 26206],["9.25", 12073],["9.5", 4661],["9.75", 443],
    ["10", 1], ["9.8", 1000], ["8.6", 29345], ["7.2", 45000], ["6.4", 50700]
];
dataPho.sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]));
Highcharts.chart('pho_diem_chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Phổ điểm'
    },
    xAxis: {
        title: {
            text: 'Điểm'
        },
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Số lượng thí sinh'
        }
    },
    series: [{
        name: 'Số lượng thí sinh',
        data: dataPho,

        colorByPoint: false
    }]
  
});
// for export button
function exportToPDF() {
    alert("Đã tải xuống file PDF")
}
function exportToExcel() {
    alert("Đã tải xuống file Excel")
}