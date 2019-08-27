//IP : [1,1,1,3,1,2,1,1,4,1]
//OP : [1,5,6,3,7,2,8,9,4,10]

const list = [1,1,1,3,1,2,1,1,4,1];
let obj = {};

for(let i = 0; i < list.length; i++){
  if(list[i] != 1) obj[list[i]] = i;
}

let idx = 0;
for(let i = 1; i < 11; i++){
  if(obj[i]){
    continue;
  }
  else{
    if(list[idx] != 1) ++idx;
    list[idx] = i;
    ++idx;
  }
}