"use strict";

const addItemToCart = (itemName) => {
  //adds an item to the cart taken as a string//
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  //resets the cart//
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  //continues to add the total to the cart//
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.
//

$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.50);
});

$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
});