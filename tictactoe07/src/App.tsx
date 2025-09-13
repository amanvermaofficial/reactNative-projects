import { StyleSheet, Text, View,Pressable } from 'react-native'
import React,{useState} from 'react'

export default function ActionCard() {
  const [boxes,setBoxes] = useState<(string|null)[]>(Array(9).fill(null))
  const [isXTurn,setIsXTurn] = useState(true)
  const [winner,setWinner] = useState<string | null>(null)
  const [isDraw,setIsDraw] = useState(false)
  const winningPatterns = [
  [0,1,2], [3,4,5], [6,7,8],   
  [0,3,6], [1,4,7], [2,5,8],   
  [0,4,8], [2,4,6]             
  ];

  const checkWinner = (boxes:(string|null)[]) => {
    winningPatterns.forEach((pattern)=>{
      const a = pattern[0]
      const b = pattern[1]
      const c = pattern[2]
      if(boxes[a]!==null && boxes[a]===boxes[b] && boxes[a]===boxes[c]){
        setWinner(boxes[a])
        return;
      }
    })

    if(!boxes.includes(null) && !winner){
      return setIsDraw(true)
    }
    return null
  }

  const reloadGame = ()=>{
    setBoxes(Array(9).fill(null))
    setIsXTurn(true)
    setWinner(null)
    setIsDraw(false)
  }

  const pressHandle = (val:number)=>{
    if(boxes[val]===null){
        const newBoxes = [...boxes]
        newBoxes[val] = isXTurn ? 'X' : 'O';
        setBoxes(newBoxes)
        checkWinner(newBoxes);
        setIsXTurn(!isXTurn)
    }
  }

  return (
    <View>
      <View style={styles.turn}>
      {winner ?(<Text style={{fontSize:24,textAlign:'center',color:'white',fontWeight:'500'}}>{winner} is winner</Text>) : ( <Text style={{fontSize:24,textAlign:'center',color:'white',fontWeight:'500'}}>Now {isXTurn ? 'X' : 'O'}'s Turn</Text>)}
         
      </View>
      <View  style={styles.boxes}>
      {boxes.map((box,index)=>(
        <Pressable key={index} onPress={()=>pressHandle(index)} disabled={winner!==null || boxes[index]!==null}>
        <View style={styles.box} ><Text style={styles.text}>{box}</Text></View>
        </Pressable>
      ))}
    </View>
     <Pressable style={{alignItems:'center',justifyContent:'center',marginTop:7}} onPress={reloadGame}>
       <View style={{padding:10,backgroundColor:'gray',width:150,borderRadius:5}}><Text style={{textAlign:'center',color:'white'}}>Reload the Game</Text></View>
     </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  turn:{
      padding:24,
      marginBottom:12,
      backgroundColor:'red'
  },
  boxes:{
  flex:1,
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'center',
  alignItems:'center'
  },
  box:{
    width:100,
    height:100,
    backgroundColor:'#AFEEEE',
    margin:5,
    justifyContent:'center',
    alignItems:'center'
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})