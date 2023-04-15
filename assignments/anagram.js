function makeAnagram(word1, word2) {
  // Write your code here
  // word1 => apple
  // word2 => snapple
  const word1FrequencyMap = {};
  const word2FrequencyMap = {};
  const charSet = new Set();

  for (let i = 0; i < word1.length; i++) {
    charSet.add(word1[i]);
    if (word1FrequencyMap[word1[i]]) {
      word1FrequencyMap[word1[i]] = word1FrequencyMap[word1[i]] + 1;
    } else {
      word1FrequencyMap[word1[i]] = 1;
    }
  }

  for (let i = 0; i < word2.length; i++) {
    charSet.add(word2[i]);
    // Ternary operator.
    // const variable = condition ? valueIfConditionIsTrue : valueIfConditionIsFalse;
    word2FrequencyMap[word2[i]] = word2FrequencyMap[word2[i]] ? word2FrequencyMap[word2[i]] + 1 : 1;
  }

  /* word1FrequencyMap
  {
    a: 1,
    p: 2,
    l: 1,
    e: 1
  }
   */
  /* word2FrequencyMap
  {
    s: 1,
    n: 1,
    a: 1,
    p: 2,
    l: 1,
    e: 1
   */

  // Set.
  // [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
  // [a, b, c, c, d, a]
  // [a,p, p, l, e, s, n, a, p, p, l, e]
  // charSet => Set(5) { 'a', 'p', 'l', 'e', 's', 'n' }
  let removalCount = 0;
  for (let char of charSet) {
    if (word1FrequencyMap[char] && word2FrequencyMap[char]) {
      removalCount += Math.abs(word1FrequencyMap[char] - word2FrequencyMap[char]);
      // For example:
      // word1 = a p p l e r
      // word2 = a a s n a p p l e
      // 1 - 3 = -2
    } else {
      removalCount += word1FrequencyMap[char] || word2FrequencyMap[char];
    }
  }
  return removalCount;
}

// const count = makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke');
// console.log(count);
