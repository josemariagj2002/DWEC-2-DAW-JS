document.write(Math.random())
document.write("<br/>")
document.write(100 + Math.random() * 100)
document.write("<br/>")
min = parseInt(prompt('minimo del campo'))
max = parseInt(prompt('maximo del campo'))
document.write(min + Math.random() * (max - min))