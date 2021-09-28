function climbingLeaderboard(ranked, player) {
  let eachRank = [];
  let i = 0;
  let position = 1;
  let lastRank = ranked[i];
  player.reverse();
  player.map(p => {
    while(p < ranked[i]){
      i++;
      if(ranked[i] != lastRank){
        position++;
        lastRank = ranked[i];
      }
    }
    eachRank.unshift(position);
  });
  return eachRank;
}

let arrRanked = [100, 90, 90, 80, 75, 60];
let arrplayer = [50, 65, 77, 90, 102];

console.log(climbingLeaderboard(arrRanked, arrplayer));