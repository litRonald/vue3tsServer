export default function useChangeArr(arr: any[], k: number) {
    for (let i = 0; i < k; i++) {
        const num = arr.pop();
        arr.unshift(num)
    }

    return arr
}