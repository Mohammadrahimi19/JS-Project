var user = [
    { id: 1, name: 'reza', family: 'rahimi' },
    { id: 2, name: 'amin', family: 'rahimi' },
    { id: 3, name: 'farkh', family: 'rahimi' }
]


console.log(hi);

let searchparams = new URLSearchParams(location.search)
let searchID = searchparams.get('id')
console.log('type ' + searchID + ': ' + typeof (searchID));///تایپ ای دی اینجا  به صورت استرینگ است یعنی کد بالا استرینگ برگردونده
var result = user.find(function (user) {
    return user.id === Number(searchID)//در اینجا میاد اون ای دی که از یو ار ال گرفته بود رو ابتدا تبدیل به اینت میکنه و بعدش میاد مقایسه میکنه
})
if (result) {
    console.log(result);
} else {
    console.log('Not Found');
}