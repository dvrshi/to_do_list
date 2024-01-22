window.onload = function () {
    if (localStorage) {
        var list_items = new Map();
        var i = 0;
        document.getElementById('todoForm').addEventListener('submit', function () {
            
            var items = document.getElementById('textbox').value;
            list_items[i++] = items;
            
        })
    }
} 
