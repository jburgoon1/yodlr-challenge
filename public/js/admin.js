const ul = document.querySelector('ul')


document.addEventListener('DOMContentLoaded', async function() {
    let res = await axios.get('http://localhost:3000/users/')
    console.log(res)

    res.data.map(users=>{
        const li = document.createElement('li')
        const name = `${users.firstName} ${users.lastName}`
    li.textContent = name
        ul.append(li)
    })

 }, false);