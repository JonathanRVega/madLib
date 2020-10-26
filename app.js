function createParagraph() {
    var wordOne = document.getElementById("input1").value;
    var wordTwo = document.getElementById("input2").value;
    var wordThree = document.getElementById("input3").value;
    var wordFour = document.getElementById("input4").value;
    var wordFive = document.getElementById("input5").value;

    var paragraph = '<p>It was a hot day. In fact it was so hot you could have cooked ' +wordTwo+' on the sidewalk.'+
    'Squigly sat on his front porch trying to eat his ' +wordFive+ ' before it melted.' +
    'Just as Squigly was about to go inside, he saw ' + wordOne + ' coming down the street.'+wordOne+' was skipping so '+
    wordFour+ ' that Squigly was sure '+wordOne+' would faint from the heat. When '+wordOne+ ' reached his front porch,'+
    'Squigly noticed that ' +wordOne+ ' wasn\'t even sweating.'+
    'How can you not be hot? asked Squigly, wiping the sweat from his forehead.'+
    'Hot, I\'m not hot, I\'m wearing my invention said ' +wordOne+ '. '+
    'What kind of invention is that? asked Squigly.'+
    'Frozen ' +wordThree+ ' of course, I heard it was going to be hot today so I just put'+
    ' my ' +wordThree+ ' in the freezer last night and today I feel great! It really works, you should try it.</p>';

    document.getElementById('answer').innerHTML = paragraph

}