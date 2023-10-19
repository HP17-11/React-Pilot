import CardComponent from "../card/card-component.component";
import "./cardlist.styles.css";

const CardList = ({monsters}) => 
 // const { monsters } = props;
   (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardComponent monster={monster} />;
      })}
    </div>
  );
//WITHOUT RETURN KEYWORD → ( ) => ( ); 
export default CardList;



// class CardList extends Component {
//   render() {
//     //console.log(this.props);
//     console.log("RENDER CARDLIST");
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <CardComponent monster={monster} />;
//         })}
        
//       </div>
//     );
//   }
// }
// export default CardList;
