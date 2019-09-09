function test() {
    try {
        const arr = [1];
        const arr2 = [1, 2];
        for (const x of arr) {
            console.log(x);
        }
        console.log(arr2);
        return true;
    } catch (err) {
        throw err;
    }
}

test();