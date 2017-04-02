function outputMoji() {
  var n = document.inputform.moji.value;
  var str = new String(n);
  var code = {
    a:"Alpha",
    b:"Bravo",
    c:"Charlie",
    d:"Delta",
    e:"Echo",
    f:"Foxtrot",
    g:"Golf",
    h:"Hotel",
    i:"India",
    j:"Juliet",
    k:"Kilo",
    l:"Lima",
    m:"Mike",
    n:"November",
    o:"Oscar",
    p:"Papa"
  };
  var a = new String;

  for(var i = 0; i <= str.length; i++) {
    if(i == 0) {
      a += str + "のフォネティックコード以下の" + str.length + "個です。 <br>";
      continue;
    }

    a += code[str.charAt(i-1)] + "<br>";
  }
  document.getElementById("result").innerHTML = a;
}
