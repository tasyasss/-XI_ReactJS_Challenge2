// src/page/Konversi.js

// //4. konversi 1 biner
// import React from 'react';
// import Card from "../Components/Card"
// class Konversi extends React.Component{
//     constructor(){
//         super() // memanggil constructor milik superclass
//         this.state = {
//             biner: 0,
//             option: 10,
//             result: 0
//         }
//     }
//     bind = (event) => {
//         this.setState({[event.target.name] : event.target.value})
//     }
//     convertBiner = () => {
//         let biner = this.state.biner
//         let option = this.state.option

//         let hasil = parseInt(biner,2).toString(option)
//         this.setState({ result: hasil})
//     }
//     render(){
//         return (
//             <div className="container">
//                 <Card title="Konversi Bilangan Biner" tipe="dark">
//                     <h6>Bilangan Biner</h6>
//                     <input type="number" value={this.state.biner} name="biner" onChange={this.bind} className="form-control" />
//                     <br />

//                     <h6>Konversi Ke Bilangan</h6>
//                     <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
//                         <option value="8">Octal</option>
//                         <option value="10">Desimal</option>
//                         <option value="16">Hexa</option>
//                     </select>
//                     <br />

//                     <button className="btn btn-dark btn-block" onClick={this.convertBiner}>
//                         Convert</button>
//                     <br />

//                     <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
//                 </Card>
//             </div>
//         )
//     }
// }

// export default Konversi


// //4. konversi 2 oktal
// import React from 'react';
// import Card from "../Components/Card"
// class Konversi extends React.Component{
//     constructor(){
//         super() // memanggil constructor milik superclass
//         this.state = {
//             oktal: 0,
//             option: 10,
//             result: 0
//         }
//     }
//     bind = (event) => {
//         this.setState({[event.target.name] : event.target.value})
//     }
//     convertOktal = () => {
//         let oktal = this.state.oktal
//         let option = this.state.option

//         let hasil = parseInt(oktal,8).toString(option)
//         this.setState({ result: hasil})
//     }
//     render(){
//         return (
//             <div className="container">
//                 <Card title="Konversi Bilangan Oktal" tipe="dark">
//                     <h6>Bilangan Oktal</h6>
//                     <input type="number" value={this.state.oktal} name="oktal" onChange={this.bind} className="form-control" />
//                     <br />

//                     <h6>Konversi Ke Bilangan</h6>
//                     <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
//                         <option value="2">Biner</option>
//                         <option value="10">Desimal</option>
//                         <option value="16">Hexa</option>
//                     </select>
//                     <br />

//                     <button className="btn btn-dark btn-block" onClick={this.convertOktal}>
//                         Convert</button>
//                     <br />

//                     <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
//                 </Card>
//             </div>
//         )
//     }
// }

// export default Konversi



// //4. konversi 3 desimal
// import React from 'react';
// import Card from "../Components/Card"
// class Konversi extends React.Component{
//     constructor(){
//         super() // memanggil constructor milik superclass
//         this.state = {
//             desimal: 0,
//             option: 10,
//             result: 0
//         }
//     }
//     bind = (event) => {
//         this.setState({[event.target.name] : event.target.value})
//     }
//     convertDesimal = () => {
//         let desimal = this.state.desimal
//         let option = this.state.option

//         let hasil = parseInt(desimal,10).toString(option)
//         this.setState({ result: hasil})
//     }
//     render(){
//         return (
//             <div className="container">
//                 <Card title="Konversi Bilangan Desimal" tipe="dark">
//                     <h6>Bilangan Desimal</h6>
//                     <input type="number" value={this.state.desimal} name="desimal" onChange={this.bind} className="form-control" />
//                     <br />

//                     <h6>Konversi Ke Bilangan</h6>
//                     <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
//                         <option value="2">Biner</option>
//                         <option value="8">Oktal</option>
//                         <option value="16">Hexa</option>
//                     </select>
//                     <br />

//                     <button className="btn btn-dark btn-block" onClick={this.convertDesimal}>
//                         Convert</button>
//                     <br />

//                     <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
//                 </Card>
//             </div>
//         )
//     }
// }

// export default Konversi



//4. konversi 4 hexa
import React from 'react';
import Card from "../Components/Card"
class Konversi extends React.Component{
    constructor(){
        super() // memanggil constructor milik superclass
        this.state = {
            oktal: 0,
            option: 10,
            result: 0
        }
    }
    bind = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }
    convertOktal = () => {
        let oktal = this.state.oktal
        let option = this.state.option

        let hasil = parseInt(oktal,8).toString(option)
        this.setState({ result: hasil})
    }
    render(){
        return (
            <div className="container">
                <Card title="Konversi Bilangan Hexa" tipe="dark">
                    <h6>Bilangan Oktal</h6>
                    <input type="number" value={this.state.oktal} name="oktal" onChange={this.bind} className="form-control" />
                    <br />

                    <h6>Konversi Ke Bilangan</h6>
                    <select value={this.state.option} name= "option"  onChange={this.bind} className="form-control">
                        <option value="2">Biner</option>
                        <option value="10">Desimal</option>
                        <option value="16">Hexa</option>
                    </select>
                    <br />

                    <button className="btn btn-dark btn-block" onClick={this.convertOktal}>
                        Convert</button>
                    <br />

                    <input type="text" name="result" className="form-control" readOnly value={this.state.result} />
                </Card>
            </div>
        )
    }
}

export default Konversi
