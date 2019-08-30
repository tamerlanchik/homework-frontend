const format = (args, cols) => {
    if(cols < 0) return '';

    args = args.map(currVal => String(currVal));
    let lens = new Array(cols).fill(0);
    //  Counting width of the columns
    for(let i = 0; i < args.length; ++i){
        lens[i % cols] = Math.max(lens[i % cols], args[i].length);
    }

    let table = [];
    for(let i = 0; i < args.length; i += cols) {
        //  Generating rows
        table.push(
            args.slice(i, i+cols)
            .map(   (currVal, j) => ' '.repeat(lens[j] - currVal.length) + currVal  )
            .join(' ')
        );
    }
    return table.join('\n');
}
