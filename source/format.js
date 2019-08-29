const format = (args, cols) => {
    args = args.map(currVal => String(currVal));
    let lens = new Array(cols).fill(0);
    for(let i = 0; i < args.length; ++i){
        lens[i % cols] = Math.max(lens[i % cols], args[i].length);
    }

    let table = []
    for(let i = 0; i < args.length; i += cols) {
        table.push(args.slice(i, i+cols).map(
            (currVal, i) => ' '.repeat(lens[i % cols] - currVal.length) + currVal)
            .join(' '));
    }
    return table.join('\n');
}