
//Write a JavaScript program to converts a comma-separated values (CSV) string to an array.

//Arrow function
const csv_to_array = (data, delimiter = ',', omitFirstRow = false) =>
    data
        //Using .slice to omit first row 
        .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)

        //Using String.split('\n') to create a string for each row
        .split('\n')
        //Using String.split(delimiter) to separate the values in each row
        .map(v => v.split(delimiter));

console.log(csv_to_array('a,b\nc,d'));
console.log(csv_to_array('a*b\nc*d', '*'));
console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));
