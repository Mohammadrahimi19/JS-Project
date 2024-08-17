var userList = [
    { 'id': 1, 'Name': ' reza', 'family': 'Rahimi' },
    { 'id': 2, 'Name': ' mohmmad', 'family': 'karimi' },
    { 'id': 3, 'Name': ' ali', 'family': 'Rahimi' },

    { 'id': 4, 'Name': ' msn', 'family': 'fasihi' },
    { 'id': 5, 'Name': ' farid', 'family': 'fahimi' },
    { 'id': 6, 'Name': ' yas', 'family': 'moradi' },

    { 'id': 7, 'Name': ' saeed', 'family': 'mosavi' },
    { 'id': 8, 'Name': ' aref', 'family': 'mohebi' },
    { 'id': 9, 'Name': ' maryam', 'family': 'kazmi' },

    { 'id': 10, 'Name': ' zahra', 'family': 'akbari' },
    { 'id': 11, 'Name': ' zohreh', 'family': 'fayaz' },
    { 'id': 12, 'Name': ' nazanin', 'family': 'hajilo' },


    { 'id': 13, 'Name': ' nazanin', 'family': 'hajilo' },
    { 'id': 14, 'Name': ' nazanin', 'family': 'hajilo' },

]

var $ = document
var userContainer = $.querySelector('.userlistContainer')
var btnPage = $.querySelector('.btnPages')

let currentPage = 1
let rowCount = 3



function displayBtns(allUser, rowCount, btnPage) {
    btnPage.innerHTML = ''
    var countBtn = Math.ceil(allUser.length / rowCount)

    for (let i = 1; i <= countBtn; i++) {
        var btn = btnGenraytor(i, allUser)
        btnPage.appendChild(btn)
    }
}



function btnGenraytor(page, allUsers) {
    let button = document.createElement('button')
    button.innerHTML = page
    button.classList.add(`btnPage${page}`)

    if (page === currentPage) {
        button.classList.add('active')
    }

    button.addEventListener('click', function () {
        currentPage = page
        console.log(currentPage);
        displayUserList(allUsers, rowCount, currentPage, userContainer)

        let prvBtn = document.querySelector('button.active')///برای پیدا کردن دکمه ایی که کلاس اکتیو رو داره 
        prvBtn.classList.remove('active')
        button.classList.add('active')
    })

    return button
}



function displayUserList(allUser, rowCount, currentPage, userContainer) {
    userContainer.innerHTML = ''
    let end = rowCount * currentPage
    let start = end - rowCount

    let paginatedUsers = allUser.slice(start, end)

    paginatedUsers.forEach(function (user) {
        let userElem = document.createElement('div')
        userElem.classList.add('item')
        userElem.innerHTML = user.Name + ' ' + user.family

        userContainer.append(userElem)

    });
}


displayUserList(userList, rowCount, currentPage, userContainer)
displayBtns(userList, rowCount, btnPage)

