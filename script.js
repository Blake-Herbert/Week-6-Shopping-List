const addItemInput = window.document.getElementById("addItemInput");
const addItemButton = window.document.getElementById("addItemButton");
const shoppingListItems = [];
addItemButton.addEventListener("click", function() {
    shoppingListItems.push(addItemInput.value);
    addItemInput.value = '';
    updateShoppingList();
});

function updateShoppingList() {
    const list = window.document.getElementById("list");
    list.innerHTML = '';
    for (i = 0; i < shoppingListItems.length; ++i) {
        const listItem = window.document.createElement('li');
        listItem.textContent = shoppingListItems[i];
        list.appendChild(listItem);
    }
    console.log(shoppingListItems);
}