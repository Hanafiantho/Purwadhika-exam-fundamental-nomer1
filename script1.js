lihatFun = () => {
    var bangunan = parseInt(document.getElementById('jenisBangunan').value),
        ukuran = parseInt(document.getElementById('ukuran').value)

    if (bangunan == 1) {
        var x = ''
        for (let i = 0 ; i < ukuran; i++) {
            for (let a = 0; a < ukuran; a++) {
                x += ' * '
            }
            x += '<br>'
        }
        document.getElementById('tampil').innerHTML = x
    } else if (bangunan == 2) {
        var x = ''
        for (let i = 0; i < ukuran; i++) {
            for (let a = 0; a <= i; a++) {
                x += ' * '
            }
            x += '<br>'
        }
        document.getElementById('tampil').innerHTML = x
    } else if (bangunan == 3) {
        var x = ''
        for (let b = 1; b <= ukuran; b++){
            for(let i = 1; i <= ukuran - b; i++){
                x += '&nbsp&nbsp&nbsp';
            }
            for(let i = 0; i < b; i++){
                x += '* ';
            }
            x += '<br>';
        }
        document.getElementById('tampil').innerHTML = x
    }
    return
}