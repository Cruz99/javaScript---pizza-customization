var CITDiscount = 0.1; //discount for CIT
//getting sections id's
var printDiscount = document.getElementById("before-discount");
var printTotalPrice = document.getElementById("after-discount");
var myForm = document.forms["myForm"]; // form
var emailString = document.getElementById("email"); // getting user email address

//size banners
var pizzaBannerPictureHTML = document.getElementById("size-picture");
var pizzaBannerSmall = "url('../images/25.png')";
var pizzaBannerMedium = "url('../images/30.png')";
var pizzaBannerLarge = "url('../images/35.png')";
var pizzaCustom = "url('img/cheese.png')";

var submitButton = document.getElementById("submit-button");

//HTML PICTURE SECTIONS
var pizzaPicture = document.getElementById("pizza-picture-base");
var pizzaToppingSalami = document.getElementById("pizza-picture-topping-salami");
var pizzaToppingMushrooms = document.getElementById("pizza-picture-topping-mushrooms");
var pizzaToppingTomatoe = document.getElementById("pizza-picture-topping-tomatoe");
var pizzaToppingBacon = document.getElementById("pizza-picture-topping-bacon");
var pizzaToppingOlives = document.getElementById("pizza-picture-topping-olives");
var pizzaToppingChili = document.getElementById("pizza-picture-topping-chili");
var pizzaToppingOnion = document.getElementById("pizza-picture-topping-onion");
var pizzaToppingChicken = document.getElementById("pizza-picture-topping-chicken");

//Toppings  IMAGES
pizzaPicture.style.backgroundImage = "url('images/workbench/templateTrans.png')";
pizzaToppingSalami.style.backgroundImage = "url('images/workbench/salami.png')";
pizzaToppingMushrooms.style.backgroundImage = "url('images/workbench/mushrooms.png')";
pizzaToppingTomatoe.style.backgroundImage = "url('images/workbench/tomatoe.png')";
pizzaToppingBacon.style.backgroundImage = "url('images/workbench/bacon.png')";
pizzaToppingOlives.style.backgroundImage = "url('images/workbench/olives.png')";
pizzaToppingChili.style.backgroundImage = "url('images/workbench/chili.png')";
pizzaToppingOnion.style.backgroundImage = "url('images/workbench/onion.png')";
pizzaToppingChicken.style.backgroundImage = "url('images/workbench/chicken.png')";
setPicturesNone();

//Defining arrays
//array html sections
var arrayPizzaSection = [pizzaPicture, pizzaToppingSalami, pizzaToppingMushrooms,
    pizzaToppingTomatoe, pizzaToppingBacon, pizzaToppingOlives, pizzaToppingChili,
    pizzaToppingOnion, pizzaToppingChicken
]
// array with images
var arrayPizzaImages = ["url('images/workbench/templateTrans.png')", "url('images/workbench/salami.png')",
    "url('images/workbench/mushrooms.png')", "url('images/workbench/tomatoe.png')",
    "url('images/workbench/bacon.png')", "url('images/workbench/olives.png')",
    "url('images/workbench/chili.png')", "url('images/workbench/onion.png')",
    "url('images/workbench/chicken.png')"
]

//Variables for tables: pizza styles, toppings, drinks
var inputs = document.getElementById("pizza-table").getElementsByTagName("input");
var inputsAddon = document.getElementById("add-on-table").getElementsByTagName("input");
var inputsDrinks = document.getElementById("drinks-table").getElementsByTagName("input");
//initializing onClick events for pre-defined pizza styles


//event listeners for Form
submitButton.addEventListener("click", function() {
    validateForm();
});
//event listener for email address (triggering when blur out)
emailString.addEventListener("blur", function() {
    setOrder();
});

var temp; // temporary section counter
//pizza radio buttons onclick events
// PIZZA table
for (var x = 0; x < inputs.length; x++)(function(x) {
    temp = document.getElementById(inputs[x].id);
    temp.addEventListener("click", function() {
        setStyle(inputs[x]);
        setOrder();
    }, false);
})(x);
//toppings checkboxes onclick events NOTE: eventListeners does not trigger checkboxes !!
for (var x = 0; x < inputsAddon.length; x++)(function(x) {
    temp = document.getElementById(inputsAddon[x].id);
    temp.onclick = function() {
        setCustom();
        setOrder();
    }
})(x);
//drinks checkboxes onclick events NOTE: eventListeners does not trigger checkboxes !!
for (var x = 0; x < inputsDrinks.length; x++)(function(x) {
    temp = document.getElementById(inputsDrinks[x].id);
    temp.onclick = function() {
        setOrder();
    }
})(x);


//setting style
function setStyle(value) {
    var sectionPicturePositionStyle = document.getElementById("secton-with-picture");
    setPicturesNone(); //initializing topping picures as none
    for (var x = 0; x < inputs.length; x++) {
        inputs[x].checked = false
        if (inputs[x].id == value.id) {
            inputs[x].checked = true;
        } else inputs[x].checked = false;
    }
    var idSize = value.id.split("-"); //getting a size of pizza by splitting it's ID
    var pizzaType = idSize[0]; //pizza type taken from id
    var picSize = idSize[1]; //size taken from id
    switch (picSize) { //switch to find picture sizes and styling it
        case picSize = "small":
            getPizzaPic(pizzaType); //getting pizza picture
            pizzaBannerPictureHTML.style.backgroundImage = "url('images/25.png')";
            for (var x = 0; x < arrayPizzaSection.length; x++) {
                arrayPizzaSection[x].style.width = "330px";
                arrayPizzaSection[x].style.height = "330px";
                pizzaBannerPictureHTML.style.width = "330px";
                pizzaBannerPictureHTML.style.height = "72px";
                sectionPicturePositionStyle.style.width = "70%";
                sectionPicturePositionStyle.style.marginLeft = "10%";
                sectionPicturePositionStyle.style.paddingRight = "5%";

            }
            break;
        case picSize = "medium":
            getPizzaPic(pizzaType);
            pizzaBannerPictureHTML.style.backgroundImage = "url('images/30.png')";
            for (var x = 0; x < arrayPizzaSection.length; x++) {
                arrayPizzaSection[x].style.width = "370px";
                arrayPizzaSection[x].style.height = "370px";
                pizzaBannerPictureHTML.style.width = "370px";
                pizzaBannerPictureHTML.style.height = "82px";
                sectionPicturePositionStyle.style.width = "70%";
                sectionPicturePositionStyle.style.marginLeft = "6.5%";
                sectionPicturePositionStyle.style.paddingRight = "15%";
            }
            break;
        case picSize = "large":
            getPizzaPic(pizzaType);
            pizzaBannerPictureHTML.style.backgroundImage = "url('images/35.png')";
            for (var x = 0; x < arrayPizzaSection.length; x++) {
                arrayPizzaSection[x].style.width = "390px";
                arrayPizzaSection[x].style.height = "390px";
                pizzaBannerPictureHTML.style.width = "390px";
                pizzaBannerPictureHTML.style.height = "88px";
                sectionPicturePositionStyle.style.width = "70%";
                sectionPicturePositionStyle.style.marginLeft = "4.5%";
                sectionPicturePositionStyle.style.paddingRight = "17%";
            }
            break;
        default:
            break;
    }
}

//setting up custom pizza images, loopking through the checkboxes and adding topping accordingly
function setCustom() {
    if (checkCustomSelected() == true) {
        pizzaPicture.style.backgroundImage = "url('images/workbench/templateTrans.png')";
        for (var x = 1; x < inputsAddon.length; x++) { // x = 1 because we wont to ommit base picture pizza
            if (inputsAddon[x - 1].checked == true) {
                arrayPizzaSection[x].style.backgroundImage = arrayPizzaImages[x];
            } else arrayPizzaSection[x].style.backgroundImage = "";
        }
    }
}
//If no custom pizza selected then it wont show the pizza (custom)
function checkCustomSelected() {
    var test = false;
    for (var i = (inputs.length - 3); i < inputs.length; i++) {
        if (inputs[i].checked == true) {
            test = true;
        }
    }
    return test;
}


//Setting picture backgrounds to none
function setPicturesNone() {
    pizzaPicture.style.backgroundImage = "";
    pizzaToppingSalami.style.backgroundImage = "";
    pizzaToppingMushrooms.style.backgroundImage = "";
    pizzaToppingTomatoe.style.backgroundImage = "";
    pizzaToppingBacon.style.backgroundImage = "";
    pizzaToppingOlives.style.backgroundImage = "";
    pizzaToppingChili.style.backgroundImage = "";
    pizzaToppingOnion.style.backgroundImage = "";
    pizzaToppingChicken.style.backgroundImage = "";
}

//Default pizza Styles
function getPizzaPic(name) {
    var pizzaType = name;
    switch (pizzaType) {
        case pizzaType = "margherita":
            pizzaPicture.style.backgroundImage = "url('images/workbench/templateTrans.png')";
            pizzaToppingMushrooms.style.backgroundImage = "url('images/workbench/mushrooms.png')";
            pizzaToppingTomatoe.style.backgroundImage = "url('images/workbench/tomatoe.png')";
            break;
        case pizzaType = "meatlover":
            pizzaPicture.style.backgroundImage = "url('images/workbench/templateTrans.png')";
            pizzaToppingBacon.style.backgroundImage = "url('images/workbench/bacon.png')";
            pizzaToppingSalami.style.backgroundImage = "url('images/workbench/salami.png')";
            pizzaToppingChicken.style.backgroundImage = "url('images/workbench/chicken.png')";
            break;
        case pizzaType = "pepperoni":
            pizzaPicture.style.backgroundImage = "url('images/workbench/templateTrans.png')";
            pizzaToppingSalami.style.backgroundImage = "url('images/workbench/salami.png')";
            pizzaToppingBacon.style.backgroundImage = "url('images/workbench/bacon.png')";
            break;
        case pizzaType = "chicago":
            pizzaPicture.style.backgroundImage = "url('images/workbench/templateTrans.png')";
            pizzaToppingTomatoe.style.backgroundImage = "url('images/workbench/tomatoe.png')";
            pizzaToppingSalami.style.backgroundImage = "url('images/workbench/salami.png')";
            pizzaToppingBacon.style.backgroundImage = "url('images/workbench/bacon.png')";
            pizzaToppingChicken.style.backgroundImage = "url('images/workbench/chicken.png')";
            pizzaToppingOlives.style.backgroundImage = "url('images/workbench/olives.png')";
            break;
        case pizzaType = "tomatoepie":
            pizzaPicture.style.backgroundImage = "url('images/workbench/templateTrans.png')";
            pizzaToppingTomatoe.style.backgroundImage = "url('images/workbench/tomatoe.png')";
            pizzaToppingChili.style.backgroundImage = "url('images/workbench/chili.png')";
            pizzaToppingOlives.style.backgroundImage = "url('images/workbench/olives.png')";
            break;
        case pizzaType = "custom":
            setCustom();
            break;
        default:
            break;
    }
}

//setting up order: price and value for pizza
function setOrder() {
    //variables
    var totalPrice = 0; //final price
    var pizzaSelected = false;
    var discount;

    //loopking through pizza inputs to check if any is selected - if so the form can be sent
    //adding up the price if any is selected
    for (var x = 0; x < inputs.length; x++) {
        if (inputs[x].checked == true) {
            totalPrice += parseFloat(inputs[x].value);
            checkedPizza = x;
            pizzaSelected = true;
        }
    }
    //looping thourhg addons and adding up to totalPrice
    for (var x = 0; x < inputsAddon.length; x++) {
        if (inputsAddon[x].checked == true) {
            totalPrice += parseFloat(inputsAddon[x].value);
        }
    }
    //loopking through drinks and adding up the price
    for (var x = 0; x < inputsDrinks.length; x++) {
        if (inputsDrinks[x].checked == true) {
            totalPrice += parseFloat(inputsDrinks[x].value);
        }
    }
    //finding the discount
    discount = applyDiscount(totalPrice);
    //getting total price after discount
    totalPrice = totalPrice - discount;
    //printing price to HTML
    printTotalPrice.innerHTML = totalPrice.toFixed(2) + "&#8364;";
    return pizzaSelected;
}


//validating the form (most of it is done in HTML
function validateForm() {
    if (setOrder() == true) {
        myForm.send(); //send form
    } else
    //if false, then throw error message
        window.alert("Make sure to select pizza before sending the order");
    event.preventDefault(); // .... and prevent from sending
}

//finding the discount
function applyDiscount(totalPrice) {
    var discount = 0;
    var emailString = document.getElementById("email"); // getting an email from the Form
    var discountFormValue = document.getElementById("discount");
    var discountString = "";

    if (emailString.value != "") { //if form email section is not empty then continue
        var emailAfterAt = emailString.value.split("@")[1]; // splitting email with deliminator
        if (emailAfterAt == "mycit.ie") { // if it equals to mycit - apply discount
            discount = CITDiscount * totalPrice;
            //print out stuff
            printDiscount.innerHTML = "10% Discount for CIT cusomers applied: " + discount.toFixed(2) + "&#8364;" + " !!";
            discountFormValue.value = discount.toFixed(2);
            //return the disocunt
            return discount;
        }
    } else
    //otherwise, dont print anythihng and return 0
        printDiscount.innerHTML = "";
    discountFormValue.value = 0;

    return discount;

}
