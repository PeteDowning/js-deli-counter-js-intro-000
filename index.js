function takeANumber(line, name) {
  line.push(name)
  return "Welcome, $(name). You are number $(line.length) in line."
}

function nowServing(line) {
  if (line.length > 0) {
    return line[0]
    line.shift()
  } else {
    return "There is nobody waiting to be served!"
  }
}

function currentLine(line) {
  if (line.length > 0) {
    var output = "The line is currently: "
    "The line is currently: 1. Ada, 2. Grace"
  } else {
    return "The line is currently empty."
  }
}
