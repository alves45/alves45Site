function title(document, title){
    var ElTile
    try{
        ElTile = document.getElementsByTagName('title')[0]
    }catch{
        ElTile = document.createElement('title')
        document.head.appendChild(ElTile)
        console.log(ElTile)
    }
    ElTile.innerHTML = title
}

exports.title = title