((rowIndex) => {
    if (rowIndex === 0) return [1]
    let response = [1,1]
    for (let i = 1; i < rowIndex; i++) {
        let temp = [1];
        let index = 0;
        while (index < i) {
            temp.push(response[index]+response[index+1])
            index++;
        }
        temp.push(1)
        response = temp
    }
    return response;
})(5)