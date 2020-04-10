
  const areaOne = document.getElementById('1')
  const areaTwo = document.getElementById('2')
  const areaThree = document.getElementById('3')
  const keywordList = document.getElementById('4')
  const masterList = document.getElementById('5')

  let finalStr;

  handleClear = (id) => {
    id === 1 &&  (areaOne.value = '')
    id === 2 &&  (areaTwo.value = '')
    id === 3 &&  (areaThree.value = '')
    id === 4 &&  (keywordList.value = '')
    id === 5 &&  (masterList.value = '')
    
  }

  handleGen = () => {
    const setOne = areaOne.value
    const setTwo = areaTwo.value
    const setThree = areaThree.value


    const arrOne = setOne.split(/\r?\n/);
    const arrTwo = setTwo.split(/\r?\n/);
    const arrThree = setThree.split(/\r?\n/);

    let setDouble = arrOne.map(itemOne => {
      return arrTwo.map(itemTwo => {
          return (`${itemOne} ${itemTwo}`
          )
        })
      
    })

    let TempMerged = [].concat.apply([], setDouble);


    let setTriple = TempMerged.map(item => {
      return arrThree.map(itemThree => {
        return `${item} ${itemThree}`
      })
    })
    
    let finalArray = [].concat.apply([], setTriple);
    console.log(finalArray.length);
    
    finalStr = finalArray.join('\r\n')
    keywordList.value = ''
    keywordList.value = finalStr
    
  }
  
  handleCopy = () => {
    masterList.value = masterList.value +'\r\n'+ finalStr
    
  }
  
