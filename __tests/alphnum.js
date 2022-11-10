
  function testAlphNum(entree) {
    (/^[a-zA-Z0-9]+$/.test(entree)) ? res = true : res = false;
    return res;
  }

module.exports = {testAlphNum}
  

