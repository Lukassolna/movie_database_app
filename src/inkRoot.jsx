import HomePage from "./presenters/homePagePresenter";
import Movie from "./presenters/moviePresenter";
import SearchResult from "./presenters/searchResultPresenter";
import User from "./presenters/userPresenter";
import Writers from "./presenters/writersPresenter";
import { RouterView, createRouter, createWebHashHistory } from "vue-router";
import "/src/admin.css";

export default
function inkRoot(props){

    return (  
    <div class="homepage">

        <RouterView model = {props.model}/>
         {/*<Movie/>
        <SearchResult/>
        <User/>
        <Writers/>
       
       */}
  
        
    </div>
    )

}



function makeRouter(props){
    const routes = [{
    path: "/",
    component: <HomePage model={props.model} /> ,
  },{ 
    path: "/movie",
    component: <Movie model={props.model}/>,
  },
  { 
    path: "/writers",
    component: <Writers model= {props.model}/>,
  },
  { 
    path: "/results",
    component: <SearchResult model= {props.model}/>,
  }]
  
  return createRouter({
    history: createWebHashHistory(),
    routes
  })
  }

  export {makeRouter}


/*
const = VueRoot={'
  setup(){
    
    return function renderACB(){
      if(myModel.user === undefiend)
        return <img src="https://brfenergi.se/iprog/loading.gif"></img>
      
      if(myModel.user === null)
        return <Auth auth={auth}/>;

      return (
        "!"myModel.ready && <img src="https://brfenergi.se/iprog/loading.gif"></img>
        <div class="homepage" >
          <HomePage>
        </div>

      )
    }
  }

}
  */