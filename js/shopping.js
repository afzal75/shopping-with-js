const cartArray = [];

function display(cartProduct) {
    if(cartProduct.length > 5){
       return alert('ttt')
    }
    let totalPrice = 0;
    const tableBody = document.getElementById('cart-products')
    tableBody.innerHTML = '';

    

    for (let i = 0; i < cartProduct.length; i++) {
        const name = cartArray[i].productName;
        const price = cartArray[i].productPrice;

        totalPrice = totalPrice + price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
        <th>${i + 1}</th>
        <td>${name}</td>
        <td>${price}</td>
        `
        tableBody.appendChild(tr);
    }
    const tr = document.createElement('tr');

    tr.innerHTML = `
    <th></th>
    <td>Total Price</td>
    <td>${totalPrice}</td>
    `
    tableBody.appendChild(tr);
}

function addToCart(element) {
    // if(element.length > 4){
    //    return alert('no other player added to cart')
    // }
    // console.log(element.parentNode.parentNode.children);
    // console.log(element.parentNode.parentNode.children[0].innerText);
    // console.log(element.parentNode.parentNode.children[1].children[0].innerText);

    const productName = element.parentNode.parentNode.children[0].innerText;
    // console.log(productName);

    const productPrice = element.parentNode.parentNode.children[1].children[0].innerText;
    // console.log(productPrice);

    const productObj = {
        productName: productName,
        productPrice: parseInt(productPrice)
    }
    cartArray.push(productObj)
    // console.log(cartArray);
    // console.log(cartArray.length);

    document.getElementById('total-added-product').innerText = cartArray.length;
    display(cartArray);
}