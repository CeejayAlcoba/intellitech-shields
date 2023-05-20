import Barcode from "react-barcode";
const CustomBarcode = (id) => {
    return (<Barcode value={id} displayValue={false} />)
}
export { CustomBarcode };