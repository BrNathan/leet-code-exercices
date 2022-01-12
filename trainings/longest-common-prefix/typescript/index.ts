
function longestCommonPrefix(strs: string[]): string {

  let prefix = "";

  if (strs.length > 0) {

      let minimumLength = strs.map(a => a.length).sort((a, b) => a - b)[0];

      for (let index = 0; index < minimumLength; index++) {

          let letterOfFirstWord = strs[0][index];

          let isEveryWordsHaveThisLetter = strs.every(word => word[index] == letterOfFirstWord)

          if (isEveryWordsHaveThisLetter) {
              prefix += letterOfFirstWord
          }
          else {
              break;
          }
      }
  }

  return prefix;
};