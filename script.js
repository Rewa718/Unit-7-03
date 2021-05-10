// connect "Verify your age" button to "myFunction" function
document.getElementById('verify').addEventListener('click', myFunction)

function myFunction () {
  // get entnum and convert to integer
  const entnum = parseInt(document.getElementById('entnum').value)

  // check if entnum is more than 13
  if (entnum >= 13) {
    ('console.log').innerHTML = 'You can watch PG-13 movies alone'
  }
  else if (entnum >=17) {
    ('console.log').innerHTML = 'You can atch R-rated movies alone'
  }
  else if (entnum >=5) {
   ('console.log').innerHTML = 'You can watch G or PG rated movies alone'
  }
  else {
    ('console.log').innerHTML = 'Unfortunately, you cannot watch movies alone'
  } 
}