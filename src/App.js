import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Acceuil from './components/acceuil';
import AddArticle from './components/administrateur/artic/ajout'
import ListArt from './components/administrateur/artic/listArt';
import EditArticle from './components/administrateur/artic/modification';
import AddLogic from './components/administrateur/logic/addLogic';
import ListLogic from './components/administrateur/logic/listLogic';
import Boutique from './components/client/boutique';
import Detail from './components/client/detail';
import Login from './components/client/login';
import EditLogiciel from './components/administrateur/logic/editLogic';
import SignUp from './components/client/signUp';
import Panier from './components/client/panier';
import Boutique2 from './components/client/boutique2';
import Cart from './components/client/cart';
import Nav from './components/client/nav';
import SideNav from './components/administrateur/navSide';
import AddClient from './components/client/addClt';
import AddLivraison from './components/client/addLiv';
import AddCommande from './components/client/addCde';
import AddFacture from './components/client/addFct';
import addLigFac from './components/client/addLigFac';
import ListLig from './components/administrateur/ligFac/listLig';
import ListActivite from './components/administrateur/activ/listAct';
import ListClient from './components/client/cltList';
import ListFour from './components/administrateur/fourni/listFour';
import AddFournisseur from './components/administrateur/fourni/addFour';
import AddAct from './components/administrateur/activ/addAct';
import Apropos from './components/client/apropos';
import EditAct from './components/administrateur/activ/editAct';
import EditFournisseur from './components/administrateur/fourni/editFour';
import Footer from './components/client/footer';
import Logiciels from './components/client/logiciel';
import Activites from './components/client/activite';
import Contact from './components/client/contact';
import ListFacture from './components/administrateur/ligFac/listFact';
import Connection from './components/administrateur/connection';
import Venus from './components/administrateur/logic/venus';
function App() {
  return (
    <div className="App">
     <Router>
     <Nav />
        <Switch>
          <Route path="/admin" component={Connection}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/logiciels" component={Logiciels}></Route>
        <Route path="/venus" component={Venus}></Route>
        <Route path="/activites" component={Activites}></Route>
          <Route path="/addLiv" component={AddLivraison}></Route>
          <Route path="/addLig" component={addLigFac}></Route>
          <Route path="/addCde" component={AddCommande}></Route>
          <Route path="/addClt" component={AddClient}></Route>
          <Route path="/addFour" component={AddFournisseur}></Route>
          <Route path="/addAct" component={AddAct}></Route>
          <Route path="/addFact" component={AddFacture}></Route>
          <Route path="/nav" component={Nav}></Route>
          <Route path="/side" component={SideNav}></Route>
          <Route path="/apropos" component={Apropos}></Route>
          <Route path="/acceuil" component={Acceuil}></Route>
          <Route path="/articleList" component={ListArt}></Route>
          <Route path="/listLig" component={ListLig}></Route>          
          <Route path="/listAct" component={ListActivite}></Route>
          <Route path="/listClt" component={ListClient}></Route>
          <Route path="/listFour" component={ListFour}></Route>
          <Route path="/listFact" component={ListFacture}></Route>
          <Route exact path="/addArt" component={AddArticle}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/login" component={Login} exact></Route>
          <Route path="/editArt/:id" component={EditArticle}></Route>
          <Route path="/editAct/:id" component={EditAct}></Route>
          <Route path="/editFour/:id" component={EditFournisseur}></Route>
          <Route exact path="/addLog" component={AddLogic}></Route>
          <Route path="/logicielList" component={ListLogic}></Route>
          <Route path="/boutique" component={Boutique}></Route>
          <Route path="/boutique2" component={Boutique2}></Route>
          <Route path="/panier" component={Panier}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          <Route path="/editLog/:id" component={EditLogiciel}></Route>
          </Switch>
          </Router>
          <Footer />
    </div>
  );
}

export default App;
