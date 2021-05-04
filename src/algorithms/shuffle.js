export function shuffle(data) {
    let arr = data;
    let result = [];
    for (let i = 1; i <= data.length; i++) {
        const random = Math.floor(Math.random() * (data.length - i));
        result.push(arr[random]);
        arr[random] = arr[data.length - i];
      }
    return result;
}