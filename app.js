let api = 'https://frantic-waders-frog.cyclic.app/'
function list() {
    document.querySelector("#addData").innerHTML = ""
    let data = document.querySelector("#addData")
    // console.log(data);
    axios.post(`${api}todo`, {
        text: data.value
    })
        .then(function (response) {
            document.querySelector("#result").innerHTML = ""
            console.log(response.data)
            response.data.data.map(eachTodo => {
                renderItems(eachTodo)


            })
        })
        .catch(function (error) {
            // document.querySelector("#Wdata").innerHTML = error
            console.log(error);
        })
        data.value = ''
}
function allList() {
    axios.get(`${api}list`)
        .then(function (response) {
            document.querySelector("#result").innerHTML = ""
            console.log(response.data)
            response.data.data.map(eachTodo => {
                renderItems(eachTodo)
            })
        })
        .catch(function (error) {
            console.log(error);
        })
}
function removelist() {
    let code = prompt("Enter Password ")
    if (code === "12345") {
        axios.delete(`${api}remove`)
        renderItems()
    } else alert("Worng Password")
}

function renderItems(item) {
    if (item) {
        let todo = `<ul class="list-group list-group-horizontal rounded-0 bg-transparent">
    <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
      <p class="lead fw-normal mb-0">${item}</p>
    </li>
        </ul>`
        document.querySelector("#result").innerHTML += todo
    }else{
        document.querySelector("#result").innerHTML = ''
    }

}
allList()
// setInterval(allList, 5000)