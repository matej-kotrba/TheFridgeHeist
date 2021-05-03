const canvas = document.getElementById('canvas')
var c = canvas.getContext("2d")
c.strokeStyle = 'rgba(0, 0, 0, 0)'

addEventListener('keydown', function (e) {
    console.log(e)
    var hezky = (1)
    console.log(hezky)

    console.log(e.code) 
    if (e.code == "KeyA") {
        player.aaa = true
    }
    if (e.code == "KeyD") { 
        player.ddd = true
    }

    if (e.code == "KeyW") {
        player.www = true
    }

    if (e.code == "KeyS") {
        player.sss = true
    }

    if (e.code == "KeyQ") {
        player.q = true
    }
    if (e.code == "KeyE") {
        player.e = true
    }

}
)
addEventListener('keyup', function (e) {
    if (e.code == "KeyA") {
        player.aaa = false
    }
    if (e.code == "KeyD") {
        player.ddd = false
    }

    if (e.code == "KeyW") {
        player.www = false
    }

    if (e.code == "KeyS") {
        player.sss = false
    }

    if (e.code == "KeyQ") {
        player.q = false
    }

    if (e.code == "KeyE") {
        player.e = false
    }
})