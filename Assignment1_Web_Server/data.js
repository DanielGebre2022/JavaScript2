

const seahawks = [
{number : 7, position : 'qb', year : 8, name : 'Gino Smith'},
{number : 20, position : 'rb', year : 4, name : 'Rashad Penny'},
{number : 32, position : 'rb', year : 6, name : 'Chris Carson'},
{number : 14, position : 'wr', year : 4, name : 'D.K. Metcalfe'},
{number : 16, position : 'wr', year : 9, name : 'Tyler Lockette'}
]


export const getAll = (item)  =>{
    const progress = seahawks.map((item) => {
        return {number : item.number, position : item.position, year : item.year, name : item.name}
        
    });

    return progress 
}


export const getItem = (value) => {
    return seahawks.find((item) => {
        return item["number"] == value;
        
    })
    
}
export const addItem = (array, element) => { 
    const i = seahawks.findIndex(player => player.number === element.number);
    if (i > -1) {
        seahawks[i] = element; 
        console.log(element.name + " exists already")
        return seahawks
    }
    else seahawks.push(element);
    console.log( element.name + " was successfully added")
    return seahawks;
}

export const deleteItem = (array, element) =>{
    for(var i=0; i < seahawks.length; i++) {
        if(seahawks[i].number == element )
        {
           const answer = seahawks.splice(i,1);
           console.log( answer[0].name  +  " was successfully deleted")
           return seahawks;
        }
     }
    
    console.log(element + " does not exist")
}