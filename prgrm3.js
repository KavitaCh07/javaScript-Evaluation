let a=[3,3,1,1,1,8,3,6,8,7,8];
function sortbyfrequency(array)
{
    let n=a.length;
    let keepCount=new Map();
    let keepIndex= new Map();
    for(let i=0;i<n;i++)
    {
        if(keepCount.has(a[i])){
            keepCount.set(a[i], keepCount.get(a[i])+1);
        }
        else {
            keepCount.set(a[i], 1);
            keepIndex.set(a[i],i);
        }
    }
    let sortLogic = function(n1,n2)
    {
        let freq1 = keepCount.get(n1);
        let freq2 = keepCount.get(n2);
        if(freq1 != freq2)
        {
            return keepCount.get(n2)-keepCount.get(n1);
        }
        else
        {
            return keepIndex.get(n1)-keepIndex.get(n2);
        }
    }
    array.sort(sortLogic);
    console.log(array);
}
sortbyfrequency(a);