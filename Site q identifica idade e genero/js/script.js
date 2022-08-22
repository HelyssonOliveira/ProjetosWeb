function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("Insira os dados e tente novamente")
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <=10){
                //Criança
                img.setAttribute('src' , 'img/foto-crianca-m.jpg')
            }else if(idade < 30){
                //Jovem
                img.setAttribute('src', 'img/foto jovem masculino.jpg')
            }else if(idade < 64){
                //Adulto
                img.setAttribute('src', 'img/foto adulto masculino.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/foto velho masculino.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <=10){
                //Criança
                img.setAttribute('src', 'img/foto criança feminino.jpg')
            }else if(idade < 30){
                //Jovem
                img.setAttribute('src', 'img/foto jovem feminino.jpg')
            }else if(idade < 64){
                //Adulto
                img.setAttribute('src', 'img/foto adulto feminino.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'img/foto velha feminino.jpg')
            }
        }else{
            genero = 'gênero indefinido'
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <Strong>${genero}</Strong> com <Strong>${idade}</Strong> anos.`
        res.appendChild(img)
    }
}