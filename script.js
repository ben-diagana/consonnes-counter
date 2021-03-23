(function() {
    let countBtn = document.getElementById('countBtn')

    /* Compteur de nombre de consonnes
    * dans une chaine de caractères
    */
    function vowelsCounter(str) {
        let vowels = ['a', 'e', 'i', 'y', 'o', 'u']
        let textContent = str.split('')
        let vowelsCount = 0;
        //isNaN() : méthode qui retourne true si la chaine de caractère n'est pas un nombre
        //A voir dans : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN
        for(let i=0; i<textContent.length; i++) {
            if(vowels.includes(textContent[i].toLowerCase()) && isNaN(textContent[i]))
                vowelsCount++
        }

        return vowelsCount
    }

    function showText(textContent) {
        let vowelsCount = vowelsCounter(textContent)
        let divElement = document.getElementById('countedText')
        let spanText = document.querySelector('span')
        if(spanText) spanText.remove()
        let textLabel = document.createElement('span')
        textLabel.textContent = `Il y a : ${vowelsCount} vowels ${vowelsCount > 1 ? 's' : ''} dans la chaine : ${textContent}`
        divElement.appendChild(textLabel)

    }
      /*
    * Fonction de Callback pour l'event listener
    */
    function onCountBtnClick() {
        let textValue = document.getElementById('textContent').value
        if(textValue.length > 0)
            showText(textValue)
    }

    countBtn.addEventListener('click', onCountBtnClick)

})()
