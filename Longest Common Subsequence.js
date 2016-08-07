// https://www.youtube.com/watch?v=NnD96abizww


function longestCommonSubsequence(str1, str2) {
  var dp = [];

  for(var i = 0 ; i <= str1.length; i++) {
    dp.push([]);
    for(var j = 0; j <= str2.length; j++) {
      dp[i].push(0);
    }
  }

  var result = [];

  for(i = 1 ; i <= str1.length; i++) {
    for(j = 1; j <= str2.length; j++) {
      if(str1[i-1] === str2[j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
      }
    }
  }

  return dp[str1.length][str2.length];
}