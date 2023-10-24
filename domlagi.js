const red = document.getElementById('red-card');
const yellow = document.getElementById('yellow-card');

var textRed = document.createElement('h2')
var textRedDown = document.createElement('p')
textRed.classList.add('text-judul') // INI UNTUK MENAMBAHKAN SUATU CLASS DI JS, BISA DI PANGGIL DI CSS
textRed.textContent = "Card"
textRed.style.fontWeight = "900"
textRed.style.margin = "30px"
textRed.style.fontSize = "40px"
textRed.style.fontFamily = "Nunito"
textRed.style.color = "#ffffff"
textRedDown.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pell"
textRedDown.style.margin = '30px'
textRedDown.style.color = '#ffffff'
var garisRed = document.createElement('hr')

red.append(textRed)
red.append(garisRed)
red.append(textRedDown)

var textYellow = document.createElement('h2')
var textYellowDown = document.createElement('p')
textYellow.textContent = "Card"
textYellow.style.fontWeight = "900"
textYellow.style.margin = "30px"
textYellow.style.fontSize = "40px"
textYellow.style.fontFamily = "Nunito"
textYellowDown.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pell'
textYellowDown.style.margin = "30px"
var garisYellow = document.createElement('hr')

yellow.append(textYellow)
yellow.append(garisYellow)
yellow.append(textYellowDown)