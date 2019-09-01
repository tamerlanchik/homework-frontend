/**
 * @description Creates a text table
 * with given number values
 * @param {Number[]} args 
 * @param {Number} cols The number of columns
 */

const format = (args, cols) => {
    if (!args || !cols || cols < 0) return '';

    args = args.map( currentValue => String(currentValue) );
    let columnWidth = new Array(cols).fill(0);

    //  Counting width of the columns
    for (let i = 0; i < args.length; ++i){
        columnWidth[i % cols] = Math.max(columnWidth[i % cols], args[i].length);
    }

    let table = [];
    for (let i = 0; i < args.length; i += cols) {
        //  Generating rows
        table.push(
            args.slice(i, i+cols)
            .map( (currentValue, j) => currentValue.padStart(columnWidth[j]) )
            .join(' ')
        );
    }
    return table.join('\n');
}