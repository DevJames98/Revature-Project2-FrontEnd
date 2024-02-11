import { connect } from "react-redux";
import { InventoryInfoComponent } from "./InventoryInfoComponent";
import { IState } from "../../reducers";



const mapStateToProps = (state:IState) => {
    return {
        typeId: state.searchInventoryByType.inventoryByType
    }
}

export default connect(mapStateToProps)(InventoryInfoComponent)