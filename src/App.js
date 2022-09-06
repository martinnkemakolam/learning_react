import react, {Component} from "react";
import Tabs from "./body";

class App extends Component{


  state = {
    dynEle: [
      {
        heading: 'Word Of Advice',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum quidem corrupti necessitatibus? Porro sed totam quam inventore! Incidunt, facilis blanditiis veniam laboriosam rem ad nobis reprehenderit ut assumenda dolor?',
        likeCount: 0
      },
      {
        heading: 'Just keep trying',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum quidem corrupti necessitatibus? Porro sed totam quam inventore! Incidunt, facilis blanditiis veniam laboriosam rem ad nobis reprehenderit ut assumenda dolor?',
        likeCount: 0
      },
      {
        heading: 'And you will get it',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus harum quidem corrupti necessitatibus? Porro sed totam quam inventore! Incidunt, facilis blanditiis veniam laboriosam rem ad nobis reprehenderit ut assumenda dolor?',
        likeCount: 0
      }
    ],
    value: true,
    newArr: []
  }

  add=(arg)=>{
    let list = this.state.dynEle
    let listObj = list[arg]
    listObj.likeCount = listObj.likeCount + 1
    list[arg] = listObj
    this.setState({
      dynEle: list
    })
    // this.state.dynEle[arg].likeCount = this.state.dynEle[arg].likeCount + 1
    // console.log(this.state.dynEle[arg].likeCount)
  }


  func=()=>{
    let search = document.getElementsByClassName('search')[0]
    if (search.value.length > 0) {
     this.setState({
      value: false,
      newArr: this.state.dynEle.map((item, id)=>{
        if (search.value === item.heading) {
          return(
            <Tabs header ={item.heading} body={item.description} key={id} likeCount={item.likeCount} clickFunc={()=> this.add(id)}/>
          )
        }
     })
    })
    console.log(this.state.arr)
    }else{
      this.setState({
        value: true,
        arr : this.state.dynEle.map((item, id)=>{
          return(
            <Tabs header ={item.heading} body={item.description} key={id} likeCount={item.likeCount} clickFunc={()=> this.add(id)}/>
          )
        })
       })
    }
    console.log(this.state.arr)
  }
  render(){
    console.log(this.state)
    let array = this.state.dynEle.map((item, id)=>{
      return(
        <Tabs header ={item.heading} body={item.description} key={id} likeCount={item.likeCount} clickFunc={()=> this.add(id)}/>
      )
    })
    return(
      <div className="App">
      <header className="App-header" style={
        {
          'padding':'1rem',
          'textAlign': 'center',
          'background':'#232',
        }
      }>
        <input type={'search'} placeholder={'Search'} className='search' onInput={this.func}></input>
      </header>
      { this.state.value ? array : this.state.newArr}
    </div>
    )
  }
}

export default App;
