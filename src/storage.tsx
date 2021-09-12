import { storage } from "@forge/api";


// Create a key composed from the acronym
function acronymKey(acronym) {
    return `acronym-${acronym}`;
  }

const randomnumber = (min = 1, max = 1000) => {
return Math.floor(Math.random() * (max - min + 1) + min);
};




export async function getPattern(pattern) {
    const value  = await storage.get(acronymKey(pattern))
    if(value) {
        return  value.patternNumber
    }else {
        return randomnumber(1,1000)
    }
}

export async function savePattern(pattern, patternNumber) {
    return await storage.set(acronymKey(pattern),  {patternNumber}  );
}
