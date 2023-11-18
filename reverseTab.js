function reverseTab(tab){
    res = []
    for(let i=tab.length-1 ; i >=0; i--){
        res.push(tab[i])
    }
    return res
}


console.log(reverseTab([1,2,3]))