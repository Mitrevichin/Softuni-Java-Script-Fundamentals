function sort(array) {
    array.sort(twoCritiria);
    array.forEach(element => console.log(element));

    function twoCritiria(curr, next) {
        if (curr.length === next.length) {
            return curr.localeCompare(next);
        }
        return curr.length - next.length
    }
}

sort(['alpha','beta','gamma']);