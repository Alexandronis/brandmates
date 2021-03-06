// Bootstrap JS
var bootstrap = require('bootstrap');

// Charts
let apexLineChart = require('./apex-charts/line');
let apexBarChart = require('./apex-charts/bar');
let apexUsersChart = require('./apex-charts/users');
let apexSparkChart = require('./apex-charts/spark');
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip
} from 'chart.js';

// Libs
let datepicker = require('./datepicker');
import { Calendar } from '@fullcalendar/core';
import timegrid from '@fullcalendar/timegrid';
import daygrid from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import list from '@fullcalendar/list';
const { Dropzone } = require("dropzone");
Dropzone.autoDiscover = false;
Dropzone.options.previewa = {
    init: function() {
        Dropzone.options.previewaDropzone = false;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const isCalendarPage = window.location.pathname.includes('/pages/calendar');
    const isCreatePage = window.location.pathname.includes('/pages/create');

    if (isCreatePage) {
        // Images dropzone
        let myDropzone1 = new Dropzone("#dropzone-posts-1", {url: '/url1.json'});
        let myDropzone2 = new Dropzone("#dropzone-posts-2", {url: '/url2.json'});
        let myDropzone3 = new Dropzone("#dropzone-posts-3", {url: '/url3.json'});
        let myDropzone4 = new Dropzone("#dropzone-posts-4", {url: '/url4.json'});
        let myDropzone5 = new Dropzone("#dropzone-posts-5", {url: '/url5.json'});
        let myDropzone6 = new Dropzone("#dropzone-posts-6", {url: '/url6.json'});

        let myDropzoneS1 = new Dropzone("#dropzone-stories-1", {url: '/url1.json'});
        let myDropzoneS2 = new Dropzone("#dropzone-stories-2", {url: '/url2.json'});

        myDropzone1.on("addedfile", file => {
            console.log(`File added: ${file.name}`);
        });
    }

    if (isCreatePage) {
        // chart.js
        Chart.register(
            ArcElement,
            LineElement,
            BarElement,
            PointElement,
            BarController,
            BubbleController,
            DoughnutController,
            LineController,
            PieController,
            PolarAreaController,
            RadarController,
            ScatterController,
            CategoryScale,
            LinearScale,
            LogarithmicScale,
            RadialLinearScale,
            TimeScale,
            TimeSeriesScale,
            Decimation,
            Filler,
            Legend,
            Title,
            Tooltip
        );

        const ctx = document.getElementById('dateChart').getContext('2d');
        const ctxStory = document.getElementById('dateChartStory').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['0', '3', '6', '9', '12', '15', '18', '21'],
                datasets: [{
                    label: 'Best hours to post',
                    data: [0, 3, 7, 10, 10, 7, 3, 0],
                    backgroundColor: [
                        '#71A3F3',
                        '#71A3F3',
                        '#71A3F3',
                        '#71A3F3',
                        '#E3954A',
                        '#71A3F3',
                        '#71A3F3',
                        '#71A3F3',
                    ]
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            display: false,
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                        }
                    }
                },
            }
        });

        const myChartStory = new Chart(ctxStory, {
            type: 'bar',
            data: {
                labels: ['0', '3', '6', '9', '12', '15', '18', '21'],
                datasets: [{
                    label: 'Best hours to post',
                    data: [0, 3, 7, 10, 10, 7, 3, 0],
                    backgroundColor: [
                        '#71A3F3',
                        '#71A3F3',
                        '#71A3F3',
                        '#71A3F3',
                        '#E3954A',
                        '#71A3F3',
                        '#71A3F3',
                        '#71A3F3',
                    ]
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            display: false,
                            drawBorder: false,
                        },
                        ticks: {
                            display: false,
                        }
                    },
                    x: {
                        grid: {
                            display: false,
                        }
                    }
                },
            }
        });
    }

    if (isCreatePage) {
        // Fullcalendar Create
        const calendarEl = document.querySelector("#create-fullcalendar");
        let calendar = new Calendar(calendarEl, {
            plugins: [timegrid],
            headerToolbar: {
                // left: 'prev, next today',
                left: 'prev, next',
            },
            dayHeaderFormat: { weekday: 'short', day: 'numeric', omitCommas: true },
            initialView: 'timeGridWeek',
            validRange: function(today) {
                return {
                    start: today,
                };
            },
            events: 'https://fullcalendar.io/demo-events.json'
        });

        calendar.render();
    }

    // Radio functionality
    var checkedRadio = $('input[name = "flexRadioDefault"]');
    checkedRadio.click(function() {
        var isCustomRadio = $(this).attr("id") === 'flexRadioDefault3';

        if (isCustomRadio) {
            $('#customDateRadio').removeClass('d-none');
        } else {
            $('#customDateRadio').addClass('d-none');
        }
    });

    var checkedRadioStory = $('input[name = "flexRadioDefaultStory"]');
    checkedRadioStory.click(function() {
        var isCustomRadio = $(this).attr("id") === 'flexRadioDefaultStory3';

        if (isCustomRadio) {
            $('#customDateRadioStory').removeClass('d-none');
        } else {
            $('#customDateRadioStory').addClass('d-none');
        }
    });

    // Date picker
    $('#datepicker').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d',
        altField: "#datepicker-input",
    });
    $('#datepickerStory').datepicker({
        format: 'dd-mm-yyyy',
        startDate: '+1d',
        altField: "#datepicker-input-story",
    });

    // Scheduled switcher
    $('.scheduled-switcher a').click(function() {
        var switchA = $(this);
        var switchAll = $('#allSwitch');
        var switchSchedule = $('#scheduleSwitch');

        $('.scheduled-switcher a').removeClass('active');

        if (switchA.attr('id') === 'allSwitch') {
            switchAll.addClass('active');
        } else {
            switchSchedule.addClass('active');
        }
    });

    // Instagram hover block
    $('.instagram-item').hover(function () {
        $(this).find('.hover-block').toggleClass('is-hover');
     });
    // Instagram modal
    $('.phone-type-switcher .instagram-item').click(function() {
        var currentImage = $(this).find('img');
        var instagramModal = $('#postImageModal');
        var instagramModalImg = instagramModal.find('.instagram-image img');

        if (currentImage) {
            if (instagramModalImg) {
                instagramModalImg.attr('src', currentImage[0].src);
            }
        }
    });
    // Calendar page
    $('.all-filter').click(function() {
        $(this).toggleClass('active');
    });
    if (isCalendarPage) {
        const calendarEl = document.querySelector("#calendar-fullcalendar");
        let calendar = new Calendar(calendarEl, {
            plugins: [timegrid, daygrid, list, interaction],
            headerToolbar: {
                left: 'prev, title, next',
                center: 'listWeek',
                right: 'dayGridMonth, timeGridWeek, today'
            },
            dayHeaderFormat: { weekday: 'short', day: 'numeric', omitCommas: true },
            initialView: 'dayGridMonth',
            eventClick: function(event) {
                $("#schedule-edit").modal('show');
            },
            dateClick: function(date, jsEvent, view) {
                $('#schedule-add').modal('show');
            },
            selectable: true,
            selectHelper: true,
            editable: true,
            validRange: function(today) {
                return {
                    start: today,
                };
            },
            events: 'https://fullcalendar.io/demo-events.json'
        });

        calendar.render();
    }

    // Line chart
    const lineChartEl = document.querySelector("#chart-line");
    if(lineChartEl) {
        new apexLineChart().init(lineChartEl);
    }

    // Bar chart
    const barChartEl = document.querySelector("#chart-bar");
    if(barChartEl) {
        new apexBarChart().init(barChartEl);
    }

    // Users chart
    const usersChartEl = document.querySelector("#chart-users");
    if(usersChartEl) {
        new apexUsersChart().init(usersChartEl);
    }

    // Spark chart
    const sparkChartsEl = document.querySelectorAll("[data-toggle='spark-chart']");
    if(sparkChartsEl) {
        Array.prototype.forEach.call(sparkChartsEl , function(el) {
            new apexSparkChart().init(el);
        })
    }

    // Light Gallery
    const galleryEl = document.querySelector("#lightgallery");
    if(barChartEl) {
        new lightGallery().init(galleryEl);
    }

    // Datepicker
    const dateRangePickerEl = document.querySelector(".daterangepicker");
    if(dateRangePickerEl) {
        new datepicker().range('.daterangepicker');
    }

    const datepickerEl = document.querySelector(".datepicker");
    if(datepickerEl) {
        new datepicker().init('.datepicker');
    }
    
});
