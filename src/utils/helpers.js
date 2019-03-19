
export const applyDrag = (arr, dragResult) => {
  const { removedIndex, addedIndex, payload } = dragResult
  if (removedIndex === null && addedIndex === null) return arr

  const result = [...arr]
  let itemToAdd = payload

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0]
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd)
  }

  return result
}

export const generateItems = (count, creator) => {
  const result = []
  for (let i = 0; i < count; i++) {
    result.push(creator(i))
  }
  return result
}

export const getTargetImg = (item) => {
  return 'background-image:url(img/'+item+'.png)'
}

export const getItem = (item=null) => {
  if(item==null)
    return [{
      name:'',
      style:''
    }];
  return [{
    name:item,
    style:'background-image:url(img/'+item+'.png)',
    src:'img/'+item+'.png'
  }];
}

export const getItems = (count=null) => {
  if(count==null)
    return {};
  const result = ['apple', 'avocado', 'banan', 'blackberry', 'carrot'];

  const res = result.map(function(item){
    return {
      name:item,
      style:'background-image:url(img/'+item+'.png)',
      src:'img/'+item+'.png'
    };
  });
  // console.log(res);
  return res.slice(0, count);
}

export const getAllItems = () => {
  return ['apple', 'avocado', 'banan', 'blackberry', 'carrot'];
}