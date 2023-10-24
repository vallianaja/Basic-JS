// Loops
var groceries = ['Milk', 'Eggs', 'Cheese'];

for (var i=0; i<groceries.length; i++){
    console.log(groceries[i])
}


// Function
function listGroceries() {
    for (var i=0; i<groceries.length; i++){
        console.log(groceries[i])
    }
} 
listGroceries();


// Event Listeners
document.getElementById('box').addEventListener('click', function(){
    alert('i got clicked')
});