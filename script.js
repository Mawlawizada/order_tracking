// Mock order database
const orders = [
    { code: "123ABC", status: "Processing", details: "Your order is being prepared." },
    { code: "456DEF", status: "Shipped", details: "Your order is on its way." },
    { code: "789GHI", status: "Delivered", details: "Your order has been delivered." },
    { code: "101JKL", status: "Cancelled", details: "Your order has been cancelled." }
  ];
  
  // Function to fetch order details by code
  function fetchOrderDetails(orderCode) {
    return orders.find(order => order.code === orderCode);
  }
  
  // Function to display order details or error
  function displayOrderDetails(order) {
    const orderInfo = document.getElementById("orderInfo");
    orderInfo.classList.remove("hidden");
  
    if (order) {
      orderInfo.innerHTML = `
        <p class="success"><strong>Status:</strong> ${order.status}</p>
        <p><strong>Details:</strong> ${order.details}</p>
      `;
    } else {
      orderInfo.innerHTML = `<p class="error">Order not found!</p>`;
    }
  }
  
  // Add event listener for the button
  document.getElementById("checkStatus").addEventListener("click", () => {
    const orderCode = document.getElementById("orderCode").value.trim(); // Get input value
    const order = fetchOrderDetails(orderCode); // Search for the order
    displayOrderDetails(order); // Show results
  });
  