let api = `https://frantic-waders-frog.cyclic.app/`
function ClassName() {
    // Make it 
}
function list() {
    document.querySelector("#addData").innerHTML = ""
    let data = document.querySelector("#addData")
    // console.log(data);
    axios.post(`${api}todo`, {
        text: data.value,
    })
        .then(function (response) {
            console.log(response.data)
            allList()
        })
        .catch(function (error) {
            console.log(error);
        })
    data.value = ''
}
function allList() {
    axios.get(`${api}todo`)
        .then(function (response) {
            console.log(response.data)
            document.querySelector("#result").innerHTML = ""
            response.data.data.map(eachTodo => {
                renderItems(eachTodo.text)
            })
        })
        .catch(function (error) {
            console.log(error);
        })
}
function removelist() {
    axios.delete(`${api}todo`).then((res) => {
        console.log(res.data);
        allList()
    })
}
function renderItems(item) {
    if (item) {
        let todo = `<ul class="list-group list-group-horizontal rounded-0 bg-transparent">
    <li class="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
      <p class="lead fw-normal mb-0">${item}</p>
    </li>
        </ul>`
        document.querySelector("#result").innerHTML += todo
    } else {
        document.querySelector("#result").innerHTML = ''
    }

}
allList()
// setInterval(allList, 3000)
