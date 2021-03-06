$.ajax({
    dataType: "json",
    url: 'data.json',

    success: function(data){
        console.log(data);
        returnedData(data.countries)
    },
    statusCode: {
        200: function() {
           console.log('OK');
        },
        302: function() {
           console.log('Temporarily moved');
           location.reload();
        },
        400: function() {
           console.log('Bad request');
        },
        401: function() {
           console.log('Unauthorised');
           location.reload();
        }   
    },
    error: function(xhr ,error , description){
        console.log('error');
    },
});

function returnedData(collection) {

    console.log(1,collection.length);
    for (var i = 0, len = collection.length; i < len; ++ i) {
        var list = collection[i].name;
        var myList = document.getElementById("retrieve");

        myList.innerHTML += '<option value="' + collection[i].name + '">' + collection[i].name + '</option>';
        
    }
}