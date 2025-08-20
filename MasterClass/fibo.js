function fib(count) {
    if (isNaN(count)) return;
    if (count <= 2) return 1;
    return fib(count - 1) + fib(count - 2);
}

fib(5);