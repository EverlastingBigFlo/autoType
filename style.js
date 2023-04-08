     // looping  autotype with setTimeout
     let word =['My name is Samuel', 'I and studying Software Engineer at SQI', 'My instructor is mr Teslim' ];
     let display = document.getElementById('display')
     let index = 0;
    //  let timer;


function start(){
    let sentence = sentence[sentenceIndex];
    console.log(sentence);
    writeIt(sentence);
}

function writeIt(towrite){
    display.innerHTML += towrite[wordIndex];
    if (towrite[wordIndex+1]){
        wordIndex++
        setTimeout(() => {
            writeIt(towrite)
        }, 100);
    } else{
        setTimeout(() =>{
            removeIt();
        }, 50);
    }
}

function removeIt(){
    if (display.innerHTML |=''){
        setTimeout(() => {
            display.innerHTML = display.innerHTML.slice(0,1)
            removeIt();
        }, 50);

    }
    else{
        wordIndex = 0;
        if (!sentences[sentenceIndex+1]){
            sentenceIndex = 0
            writeIt(sentences[sentenceIndex])
        }else{
            sentenceIndex++
            writeIt(sentences[sentenceIndex])
        }
    }
}
start()