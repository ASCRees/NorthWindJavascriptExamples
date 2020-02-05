
var baseURL = 'http://localhost/NorthWindWebApis/products/{0}/';

String.prototype.format = function() {
    a = this;
    for (k in arguments) {
      a = a.replace("{" + k + "}", arguments[k])
    }
    return a
  }

  function displayoutput(products) {
    var len = products.length;
    var tr_str="";
    for (var i = 0; i < len; i++) {
        tr_str += "<tr>" +
            "<td align='center'>" + products[i].ProductID + "</td>" +
            "<td align='center'>" + products[i].ProductName + "</td>" +
            "<td align='center'>" + products[i].QuantityPerUnit + "</td>" +
            "<td align='center'>" + products[i].UnitPrice + "</td>" +
            "<td align='center'>" + products[i].UnitsInStock + "</td>" +
            "<td align='center'>" + products[i].UnitsOnOrder + "</td>" +
            "</tr>";
        
    }
    return tr_str;
}  

function displayResponse (response){
    var productsResponse=(response) => {
        if (!response.Products)
        {
            var prodArray= [];
            prodArray.push(response);
            return {Products:prodArray};
        }

        return response;
    }
    var products = productsResponse(response).Products;
    return displayoutput(products);

}



function outputResponse(response)
{
    $("#userTable tbody").empty();
    $("#userTable tbody").append(displayResponse (response));
}

function CallAjaxRequest(url,searchString) {
    $.ajax({
        url: baseURL.format(url) + searchString,
        type: 'get',
        dataType: 'JSON',
        success: function (response) {
            outputResponse(response);
        }
    });
}

function getMultipleProducts(searchString)
{
    var url = 'GetMultipleProducts'
    CallAjaxRequest(url,searchString);
}

function getSingleProducts(id)
{
    var url = 'GetSingleProduct'
    CallAjaxRequest(url,id);
}

function getSingleProductUsingFetch(id) // Using a promise to call the web api. Then get the response before pushing the output to be displayed
{
    var url = 'GetSingleProduct';
    fetch(  // Using the fetch command to asynchronously call the web api.
        
        baseURL.format(url) + id,
        { method: 'GET' }
    )
    .then(response => response.json())
    .then(data=> outputResponse(data))
     .catch( error => console.error('error:', error) );
}

