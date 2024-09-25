const renderList = async() => {
    const response = await fetch('/lists')
    const data = await response.json()
    const mainContent = document.getElementById('main-content')

    if (data) {
        const table = document.createElement('table')
        const headerRow = document.createElement('tr')

        const headers = ["ID", "Model Name", "Developer", "Release Year", "Primary Use Case"]

        headers.forEach(headerText => {
            const header = document.createElement('th')
            header.textContent = headerText
            headerRow.appendChild(header)
        })

        table.appendChild(headerRow)

        data.map((item) => {
            

            const itemID = document.createElement('td')
            itemID.textContent = item.id

            const modelName = document.createElement('td')
            modelName.textContent = item.modelName

            const developer = document.createElement('td')
            developer.textContent = item.developer

            const releaseYear = document.createElement('td')
            releaseYear.textContent = item.releaseYear

            const useCase = document.createElement('td')
            useCase.textContent = item.primaryUseCase

            const tableRow = document.createElement('tr')
            tableRow.addEventListener('click', () => {
                window.location.href = `/lists/${item.id}`
            })

            tableRow.appendChild(itemID)
            tableRow.appendChild(modelName)
            tableRow.appendChild(developer)
            tableRow.appendChild(releaseYear)
            tableRow.appendChild(useCase)

            table.appendChild(tableRow)
        })

        mainContent.appendChild(table)
    } 
    else {
        const headerTitle = document.createElement('h2')
        headerTitle.textContent = 'No List Available'
        mainContent.appendChild(headerTitle)
    }
}
const path = window.location.pathname

if (path === "/"){
    renderList();
}

// if (requestedUrl){
//     window.location.href = '../404.html'
// }
// else{
//     renderList()
// }