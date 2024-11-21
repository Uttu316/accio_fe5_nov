import { Component } from "react";
import { api } from "../../services";

class LifeCycle extends Component {
  constructor() {
    console.log("Constructor")
    super();

    this.state  = {
        dogs:[]
    }
  }


  async getDogs(){
   try{
   const data =  await api({path:'/dogs'})
   if(data && data.data){
    const dogs = data.data;
    this.setState({dogs})
   }
   }catch(e){
    console.log(e)
   }
  }

  shouldComponentUpdate(nextProps,nextState){
    console.log("Component Should Update")
    if(this.state.dogs.length!==nextState.dogs.length){
        return true
    }
    return false
  }

  componentDidUpdate(){
    setTimeout(()=>{
        console.log("COmpont updated")
    },500)
    
  }

  componentWillUnmount(){
    console.log("I am unmounting")
  }

  componentDidMount(){
    console.log('ComponentDidMount')
    this.getDogs()
  }
  render() {
    console.log("Render",this.state)
    return (
      <div>
        <h1>Learn Life cycle methods</h1>

        <ul>
            {
                this.state.dogs.map((i)=>(
                    <li key={i.id}>{i.name}</li>
                ))
            }
        </ul>
      </div>
    );
  }
}
export default LifeCycle;
