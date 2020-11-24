const A = [3, 7,2,5, 4];

/**
 * Function to check value
 * @param arr
 * @param char
 * @param tar
 * @returns {boolean}
 */
function checkValue(arr, char, tar){
    let sum =0;
    for(let i=0; i <  arr.length; i++) {
        if((char >> i) & 1 === 1) {
            sum += arr[i];
        }
    }
    console.log(sum === tar)
    return sum === tar;
}

function getSolu(p, q, r, arr){
    let arr2 =Object.assign([], arr), x =0, y =0;

    for(let i=0; i <  arr.length; i++){
        if(p >> i === 1){
            arr2[i] =  'P';
        } else if(q >> x === 1){
            arr2[i] =  'Q';
            x++;
        }else if(r >> y === 1){
            arr2[i] =  'R';
            y++;
        }
    }
    console.log('getSolu', arr2)
    return arr2.toString();
}

function newArray(arr , value) {
    let arr2 = [], j =0;
    for(let i=0; i <  arr.length; i++) {
        if ((value >> i) & 1 === 0) {
            arr2[j++] = arr[i]
        }
    }
    return [...arr2];
}

function makeCurry(arr){
    let sum = 0;

    //P, Q and R
    for(let i=0; i <  arr.length; i++){
        sum += arr[i];

        if(sum % 3 > 0){
            console.log('Return from here?', sum)
            return 'noLuck';
        }
        let tar = sum/3;
        let max = 1 << arr.length;
        console.log('max value', max, sum)
        for(let j=0; j < max; j++){
            console.log(arr, j, tar)
            if(checkValue(arr, j, tar)){
                let arr2 = newArray(arr, j);
                let len = 1 << arr2.length ;
                for(let k=0; k < len; k++){
                    if(checkValue(arr2, k, tar)){
                        return getSolu(i, j, k, arr);
                    }
                }
            }
        }
    }
    console.log('Return from last', sum)
    return 'noLuck';
}


console.log(makeCurry(A))