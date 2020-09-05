// Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчийг 0, хоёрдугаар тоглогчийг 1 гэж тэмдэглэе.
var activePlayer = 0;

// Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

// Шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэй, 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.

// <div class="player-score" id="score-0">43</div>
// window.document.querySelector("#score-0").textContent = dice;

// document.querySelector("#score-1").innerHTML = "<em>Yes!<em>";

// Програм эхлэхэд бэлтгэе
document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-1").textContent = 0;
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
//shoog shideh  event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 sanamsargui toog avna
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  //shoonii zurgiig delgets deer gargana
  diceDom.style.display = "block";
  //buusan sanamsargui  toond hargalzah zurgiig gargah
  diceDom.src = "dice-" + diceNumber + ".png";
  // buusan too 1-s yalgaatai bol toglogchhin eeljiin onoog uurchilnu (nemegduulne)
  if (diceNumber != 1) {
    //1-s yalgaatai too buulaa. Buusan toog toglogchid nemne
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    //1 buusan bol toglogchiin eeliig solino
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // toglogchii eeljiig nuguu toglogch ruu shiljuulne
    //herev idevhitei toglogch ni 0 baival  idevhitei toglogschiig 1 bolgo ugui bol 0 bolgo
    activePlayer == 0 ? (activePlayer = 1) : (activePlayer = 0);
    //idevhitei toglogchiig  shiljuuleh (ulaan tseg)

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    
    //shoog tur alga bolgono
    diceDom.style.display="none";
  }
});
