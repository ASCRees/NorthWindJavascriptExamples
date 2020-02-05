// Make sure that your javscript code doesn't use any ES6 funcitonality such as let of const or arrow functions
// Otherwise Chutpah wont recognise the tests and show them in the test explorer.
// Make sure that the chutzpah.json file is set up and points to the correct source and test directory

describe('Test CallWebApis',
    function () {
        it('Check it that displayoutput returns a string with a length greater than 0', function () {
            var response = {Products: [{ProductID:1,ProductName:"Steak"},
            {ProductID:2,ProductName:"Eggs"}]};
            var result = displayoutput(response.Products);
            expect(result.length).toBeGreaterThan(0);
        });
        
        it('Check it that displayoutput returns a string with a length equal to 0', function () {
            var response = {Products: []};
            var result = displayoutput(response.Products);
            expect(result.length).toBe(0);
        });
    });

