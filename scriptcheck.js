function checkoutFunction() {

    // Shipping and Billing variables

    const name = document.querySelector('#shipName');
    const address1 = document.querySelector('#shipAdd1');
    const address2 = document.querySelector('#shipAdd2');
    const city = document.querySelector('#shipCity');
    const state = document.querySelector('#shipState');
    const zip = document.querySelector('#shipZip');
    const email = document.querySelector('#shipEmail');

    const allShipping = [name, address1, address2, city, state, zip, email]

    const billName = document.querySelector('#billName');
    const billAddress1 = document.querySelector('#billAdd1');
    const billAddress2 = document.querySelector('#billAdd2');
    const billCity = document.querySelector('#billCity');
    const billState = document.querySelector('#billState');
    const billZip = document.querySelector('#billZip');
    const billEmail = document.querySelector('#billEmail');

    var checkBox = document.querySelector('#copyToBilling');

    var allBilling = [billName, billAddress1, billAddress2, billCity, billState, billZip, billEmail]
    // Billing info copy event listener and function
    checkBox.addEventListener('change', billingCopy)

    function billingCopy() {
        if (checkBox.checked) {
            billName.value = name.value
            billAddress1.value = address1.value
            billAddress2.value = address2.value
            billCity.value = city.value
            billState.value = state.value
            billZip.value = zip.value
            billEmail.value = email.value
        } else {
            allBilling.forEach(element => {
                element.value = ""
            });
        }
    }

    // Info event listener and function
    const subButton1 = document.querySelector('.infoSubmit')

    subButton1.addEventListener('click', giveInfoResult)

    function giveInfoResult() {
        if (
            name.value.length > 0 &&
            address1.value.length > 0 &&
            city.value.length > 0 &&
            state.value.length > 0 &&
            zip.value.length > 0 &&
            email.value.length > 0 &&
            billName.value.length > 0 &&
            billAddress1.value.length > 0 &&
            billCity.value.length > 0 &&
            billState.value.length > 0 &&
            billZip.value.length > 0 &&
            billEmail.value.length > 0
        ) alert("Thank You! Please proceed.")

        else {
            alert("Please fill out all fields in both the shipping and billing forms. If the billing information is identical to the shipping address, feel free to click on the checkbox to fill it in automatically")
        }
    }
    //Credit Card event listener and function

    const creditName = document.querySelector('.creditName')
    const creditNumber = document.querySelector('.creditNumber')
    const creditCVV = document.querySelector('.creditCVV')
    const creditExpire = document.querySelector('.creditExpire')
    const subButton2 = document.querySelector('.creditSubmit')
    const allCredit = [creditName, creditNumber, creditCVV, creditExpire]

    subButton2.addEventListener('click', giveCreditResult)

    function giveCreditResult() {
        allCredit.forEach(element => {
            element.value = ""
        });
    }

    //Recently viewed items (localstorage)

    const recentItem1 = document.querySelector('#recent1')
    const recentItem2 = document.querySelector('#recent2')
    const recentItem3 = document.querySelector('#recent3')
    const recentItem4 = document.querySelector('#recent4')
    const recentItem5 = document.querySelector('#recent5')

    recentItem1.innerHTML = localStorage.getItem('recentFirst')
    recentItem2.innerHTML = localStorage.getItem('recentSecond')
    recentItem3.innerHTML = localStorage.getItem('recentThird')
    recentItem4.innerHTML = localStorage.getItem('recentFourth')
    recentItem5.innerHTML = localStorage.getItem('recentFifth')

    //Cart items

    const boughtItem1 = document.querySelector('.boughtItem1')
    const boughtItem2 = document.querySelector('.boughtItem2')
    const boughtItem3 = document.querySelector('.boughtItem3')
    const boughtItem4 = document.querySelector('.boughtItem4')
    const boughtItem5 = document.querySelector('.boughtItem5')
    const boughtItem6 = document.querySelector('.boughtItem6')
    const boughtItem7 = document.querySelector('.boughtItem7')
    const boughtItem8 = document.querySelector('.boughtItem8')

    boughtItem1.value = JSON.parse(localStorage.getItem('cartItems'))[0] || ''
    boughtItem2.value = JSON.parse(localStorage.getItem('cartItems'))[1] || ''
    boughtItem3.value = JSON.parse(localStorage.getItem('cartItems'))[2] || ''
    boughtItem4.value = JSON.parse(localStorage.getItem('cartItems'))[3] || ''
    boughtItem5.value = JSON.parse(localStorage.getItem('cartItems'))[4] || ''
    boughtItem6.value = JSON.parse(localStorage.getItem('cartItems'))[5] || ''
    boughtItem7.value = JSON.parse(localStorage.getItem('cartItems'))[6] || ''
    boughtItem8.value = JSON.parse(localStorage.getItem('cartItems'))[7] || ''

    const boughtItems = [boughtItem1, boughtItem2, boughtItem3, boughtItem4, boughtItem5, boughtItem6, boughtItem7, boughtItem8]

    //Cart prices

    const boughtItem1price = document.querySelector('.boughtItem1price')
    const boughtItem2price = document.querySelector('.boughtItem2price')
    const boughtItem3price = document.querySelector('.boughtItem3price')
    const boughtItem4price = document.querySelector('.boughtItem4price')
    const boughtItem5price = document.querySelector('.boughtItem5price')
    const boughtItem6price = document.querySelector('.boughtItem6price')
    const boughtItem7price = document.querySelector('.boughtItem7price')
    const boughtItem8price = document.querySelector('.boughtItem8price')

    boughtItem1price.value = JSON.parse(localStorage.getItem('cartPrices'))[0] || 0
    boughtItem2price.value = JSON.parse(localStorage.getItem('cartPrices'))[1] || 0
    boughtItem3price.value = JSON.parse(localStorage.getItem('cartPrices'))[2] || 0
    boughtItem4price.value = JSON.parse(localStorage.getItem('cartPrices'))[3] || 0
    boughtItem5price.value = JSON.parse(localStorage.getItem('cartPrices'))[4] || 0
    boughtItem6price.value = JSON.parse(localStorage.getItem('cartPrices'))[5] || 0
    boughtItem7price.value = JSON.parse(localStorage.getItem('cartPrices'))[6] || 0
    boughtItem8price.value = JSON.parse(localStorage.getItem('cartPrices'))[7] || 0



    //Checkout button and total function

    const checkoutButton = document.querySelector('.checkoutButton')
    const total = document.querySelector('.total')
    const boughtItemsPrices = [boughtItem1price, boughtItem2price, boughtItem3price, boughtItem4price, boughtItem5price, boughtItem6price, boughtItem7price, boughtItem8price]

    let sumOfAll =
    parseFloat(boughtItem1price.value) +
    parseFloat(boughtItem2price.value) +
    parseFloat(boughtItem3price.value) +
    parseFloat(boughtItem4price.value) +
    parseFloat(boughtItem5price.value) +
    parseFloat(boughtItem6price.value) +
    parseFloat(boughtItem7price.value) +
    parseFloat(boughtItem8price.value);

    total.innerHTML = "Total: $" + sumOfAll
    checkoutButton.addEventListener('click', checkOut)

    function checkOut() {

        boughtItemsPrices.forEach(element => {

            element.value = element.value || 0
        })



        allBilling.forEach(element => {
            element.value = ""
        });
        allCredit.forEach(element => {
            element.value = ""
        });
        boughtItems.forEach(element => {
            element.value = ""
        });
        boughtItemsPrices.forEach(element => {
            element.value = ""
        });
        allShipping.forEach(element => {
            element.value = ""
        });

        alert("SUCCESS")
    }

}

module.exports = { checkoutFunction }