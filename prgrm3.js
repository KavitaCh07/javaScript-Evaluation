let arr=[3,3,1,1,1,8,3,6,8,7,8];
function sortByFreq(array)
{
    let n=arr.length;
    let count=new Map();
    let index= new Map();
    for(let i=0;i<n;i++)
    {
        if(count.has(arr[i])){
            count.set(arr[i], count.get(arr[i])+1);
        }
        else {
            count.set(arr[i], 1);
            index.set(arr[i],i);
        }
    }
    let sort = function(n1,n2)
    {
        let freq1 = count.get(n1);
        let freq2 = count.get(n2);
        if(freq1 != freq2)
        {
            return count.get(n2)-count.get(n1);
        }
        else
        {
            return index.get(n1)-index.get(n2);
        }
    }
    array.sort(sort);
    console.log(array);
}
sortByFreq(arr);