((numRows) => {
    let response = []
    for (let i = 0; i < numRows; i++) {
        let row = []
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1)
            } else {
                row.push(response[i-1][j-1] + response[i-1][j])
            }   
        }
        response.push(row)
    }
    return response;
})(6)