let remBtn = document.getElementById('remBtn');

remBtn.addEventListener('click', function () {
  let word = document.getElementById('inputEl').value;
  if (word === '') {
    alert('Enter a word');
    return;
  }
  let pattern = /[^a,e,i,o,u]/gi;
  let res = word.match(pattern).join('');
  document.getElementById('output').innerHTML = res;
});
