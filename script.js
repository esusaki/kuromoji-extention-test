kuromoji.builder({ dicPath: "./dict" }).build(function (err, tokenizer) {
    // tokenizer is ready

    const resultArea = document.getElementById('result');

    resultArea.innerHTML = 'loading...';

    var path = tokenizer.tokenize("すもももももももものうち");

    var ans = '';

    console.log(path);

    path.forEach((element)=>ans = ans +  ' ' + element.basic_form + '(' + element.pos  + ') ');

    ans += '<p>コンソールでもっといろいろな情報を見られます</p>'

    resultArea.innerHTML = ans;
});
