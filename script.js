let order = [];

function addToOrder(item) 
{
    order.push(item);
    renderOrder();
}

function renderOrder() 
{
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    order.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        orderList.appendChild(li);
    });
}

function checkout() 
{
    alert('Thank you for your order: ' + order.join(', '));
}
