

function fillMissingBrackets(s) {
    const bracketMap = new Map()
    const splittedStrings =  s.split("")
    splittedStrings.forEach((element) => {
        bracketMap.set(element,(bracketMap.get(element) || 0) + 1 ) 
    })
    
    if(bracketMap.has("[")){
        const open =  bracketMap.get("[")
        const temp = bracketMap.get("]") || 0
        var b1 = open -temp
        bracketMap.set("?",bracketMap.get("?") - b1)
    }

    if(bracketMap.has("]")){
        const close =  bracketMap.get("]")
        const temp = bracketMap.get("[") || 0
        var b2 = close -temp
        bracketMap.set("?",bracketMap.get("?") - b2)
    }

    if(bracketMap.has("(")){
        const open =  bracketMap.get("(")
        const temp = bracketMap.get(")") || 0
        var b1 = open -temp
        bracketMap.set("?",bracketMap.get("?") - b1)
    }

    if(bracketMap.has(")")){
        const close =  bracketMap.get(")")
        const temp = bracketMap.get("(") || 0
        var b2 = close - temp
        bracketMap.set("?",bracketMap.get("?") - b2)
    }

    return bracketMap.get("?") == 0 ? 1 : 0
}

fillMissingBrackets("(((?")