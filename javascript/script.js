window.onload = function () {
    if (localStorage) {
        var list_items = new Map();
        var i = 0;

        function addItemToList(items) {
            list_items.set(i++, items);

            document.getElementById('items').innerHTML +=
                `<li id='items${i}'>${items}</li>`;

            document.getElementById('icons').innerHTML +=
                `<li>
                    <a href="#" id='checkIcon${i}'><i class="fa-solid fa-check"></i></a>
                    <a href="#" id='deleteIcon${i}'><i class="fa-regular fa-circle-xmark"></i></a>
                </li>`;
        }

        document.getElementById('todoForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent form submission

            var items = document.getElementById('textbox').value;
            addItemToList(items);
        });

        document.querySelector("body").addEventListener('click', function (event) {
            // Check if the clicked element is an icon
            var clickedIcon = event.target.closest('a');

            if (clickedIcon) {
                // Get the id from the clicked icon
                var iconId = clickedIcon.id;

                // Extract the type (checkIcon or deleteIcon) and item id from the icon id
                var [type, itemId] = iconId.split('Icon');

                // Depending on the type, you can perform actions for the clicked icon
                if (type === 'check' || type === 'delete') {
                    // Use itemId to identify the corresponding item
                    var itemElement = document.getElementById('items' + itemId);

                    if (itemElement) {
                        if (type === 'check') {
                            itemElement.style.textDecoration="line-through";
                            console.log('Check icon clicked for item ' + itemId);
                        } else if (type === 'delete') {
                            // Handle click on delete icon
                            console.log('Delete icon clicked for item ' + itemId);
                            itemElement.remove();
                            clickedIcon.closest('li').remove();
                        }
                    } else {
                        console.error('Item not found for icon ' + iconId);
                    }
                }
            }
        });
    }
}
