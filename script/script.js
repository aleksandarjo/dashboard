// npx tailwindcss -i ./style/style.css -o ./style/output.css --watch

const avatarContent = document.querySelector("header article");
const avatar = document.querySelector("img[alt='avatar']");

avatar.addEventListener("click", () => {
  if (avatarContent.classList.contains("hidden")) {
    avatarContent.classList.remove("hidden");
    avatarContent.classList.add("block");
  } else {
    avatarContent.classList.remove("block");
    avatarContent.classList.add("hidden");
  }
});

const ctxTotalSells = document.getElementById("totalSells").getContext("2d");

const randomData = Array.from({ length: 31 }, () =>
  Math.floor(Math.random() * 20)
);
// total sells
const totalSells = new Chart(ctxTotalSells, {
  type: "line",
  data: {
    labels: Array.from({ length: 31 }, (_, i) => i + 1 + " Aug"),
    datasets: [
      {
        label: "Number of orders",
        data: randomData,
        spanGaps: true,
        borderColor: "rgb(198, 115, 255)",
        fill: false,
        borderWidth: 1.5,
        tension: 0.175,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          callback: function (value, index) {
            if (index === 0 || index === 14 || index === 30) {
              return this.getLabelForValue(index);
            }
            return "";
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
    animations: {
      animation: {
        duration: 2000,
        easing: "easeInOutQuad",
        loop: false,
      },
    },
  },
});

// total orders

const ctxTotalOrders = document.getElementById("totalOrders").getContext("2d");

const naplaceno = 52;
const nenaplaceno = 42;
const odbijeno = 6;

const totalOrders = new Chart(ctxTotalOrders, {
  type: "doughnut",
  data: {
    labels: ["Completed", "Pending payment", "Declined"],
    datasets: [
      {
        data: [naplaceno, nenaplaceno, odbijeno],
        backgroundColor: [
          "rgb(198, 115, 255)", // Completed
          "rgba(255, 255, 255, 0.9)", // Pending payment
          "rgb(255, 0, 0)", // Declined
        ],
        borderColor: [
          "rgb(198, 115, 255)", // Completed
          "rgba(255, 255, 255, 0.9)", // Pending payment
          "rgb(255, 0, 0)", // Declined
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    cutout: "90%",
    plugins: {
      doughnutlabel: {},
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false,
      },
      interaction: {
        mode: null,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  },
});
// new customers

const ctxNewCustomers = document
  .getElementById("newCustomers")
  .getContext("2d");
const newCustomers = new Chart(ctxNewCustomers, {
  type: "line",
  data: {
    labels: [
      "01 Aug",
      "02 Aug",
      "03 Aug",
      "04 Aug",
      "05 Aug",
      "06 Aug",
      "07 Aug",
    ],
    datasets: [
      {
        label: "New customers",
        data: [2, 4, 14, 7, 8, 11, 17],
        borderColor: "rgb(198, 115, 255)",
        borderWidth: 2,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
      },
    },

    scales: {
      x: {
        grid: {
          display: true,
        },
        ticks: {
          callback: function (value, index) {
            if (index === 0 || index === 6) {
              return this.getLabelForValue(index);
            } else {
              return "";
            }
          },
        },
      },
      y: {
        beginAtZero: true,
      },
    },

    interaction: {
      intersect: false,
      mode: "index",
    },

    animations: {
      animation: {
        duration: 2000,
        easing: "",
        loop: false,
      },
    },
  },
});

// best selling products

const ctxBestSellingProducts = document
  .getElementById("bestSellingProducts")
  .getContext("2d");
const bestSellingProducts = new Chart(ctxBestSellingProducts, {
  type: "bar",
  data: {
    labels: [
      "Jan 2024",
      "Feb 2024",
      "Mar 2024",
      "Apr 2024",
      "May 2024",
      "Jun 2024",
    ],
    datasets: [
      {
        label: "Memory Book",
        data: [10, 14, 11, 15, 13, 17],
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderWidth: 1,
      },
      {
        label: "Čuvar uspomena",
        data: [12, 15, 13, 17, 14, 6],
        backgroundColor: "rgba(198, 115, 255, 0.5)",
        borderColor: "rgb(198, 115, 255)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      tooltip: {
        displayColors: false,
      },
      legend: {
        display: false,
      },
    },
  },
});

// Email tracker

const ctxEmailTracker = document
  .getElementById("emailTracker")
  .getContext("2d");
const emailTracker = new Chart(ctxEmailTracker, {
  type: "pie",
  data: {
    labels: ["Opened Emails", "Unopened Emails"],
    datasets: [
      {
        label: "Emails",
        data: [60, 40],
        backgroundColor: ["rgb(198, 115, 255)", "rgba(255, 255, 255, 0.5)"],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
      },
    },
  },
});

// reviews table
