const format = (args, cols) => {
    let lens = new Array(cols).fill(0);
    let res = "";
    for(let i = 0; i < args.length; ++i){
        lens[i % cols] = Math.max(lens[i % cols], String(args[i]).length);
    }
    for(let i = 0; i < args.length; ++i) {
        if(i%cols != 0) res += ' ';
        res +=' '.repeat(lens[i%cols] - String(args[i]).length) + args[i];
        if(i%cols == cols-1 && i != args.length-1) res += '\n';
    }
    return res;
}