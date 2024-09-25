const renderModel = async () => {
    const requestedID = parseInt(window.location.href.split("/").pop())
    const response = await fetch("/lists")
    const data = await response.json()

    const modelContent = document.getElementById("model-content")
    let model

    if (data){
        model = data.find(model => model.id == requestedID)
        if (model){
            document.getElementById('model-name').textContent = model.modelName            
            document.getElementById('developer').textContent = model.developer
            document.getElementById('release-year').textContent = model.releaseYear
            document.getElementById('use-case').textContent = model.primaryUseCase
        }
        else {
            const noModel = document.createElement('h2')
            noModel.textContent = "No model available"
            modelContent.appendChild(noModel)
        }
    }
}

renderModel()