const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/Amit")
.then(() => console.log("connection successfull"))
.catch((err) => console.log(err));

//Schema//

const playSchema = new mongoose.Schema({
    name:{
        type : String,
        required : String,
        lowercase : true,
        // uppercase : true,
        // trim : true
        // minlength : 2,
        // maxlength : 30 

    },
    work : String,
    workno : Number
});

//create collection using model//

const Pateldata = new mongoose.model("Pateldata",playSchema);

// //insert document in collection

// const newDoc = new Pateldata({
//     name : "amit",
//     work : "student"
// })

// newDoc.save();

//insert document in collection using async function 

// const createDoc = async () =>{
//     try{
//         const newDoc = new Pateldata({
//             name : "karan",
//             work : "teacher"
//         })
        
//         const result = await newDoc.save();
//         console.log(result);

//     }catch(err){
//         console.log(err);
//     }
// }
// createDoc();


///insert multipal document //

const createDoc = async () => {
    try{
        // const aDoc = new Pateldata({
        //     name : "amit patel",
        //     work : "farmer",
        //     workno : 5
        // })
        // const bDoc = new Pateldata({
        //     name : "aasutosh",
        //     work : "teacher",
        //     workno : 15
        // })
        // const cDoc = new Pateldata({
        //     name : "Amit",
        //     work : "job",
        //     workno : 16
        // })
        const dDoc = new Pateldata({
            name : "RaM",
            work : "student",
            workno : 17
        })
        
        const result = await Pateldata.insertMany([dDoc]);
        console.log(result);

    }catch(err){
        console.log(err);
    }
}
createDoc();


//to read tha document//

// const readDoc = async () => {
//     const result = await Pateldata.find();
//     console.log(result);
// }
// readDoc();

///Comparison operater//

// const readDoc = async () => {
//     const result = await Pateldata.find({workno : {$gt : 10}});
//     console.log(result);
// }
// readDoc();

//Logical operater//

// const readDoc = async () => {
//     const result = await Pateldata.find({$or : [{work : "student"},{workno : 10}]})
//     .select({name : 1});
//     console.log(result);
// }
// readDoc();

//Sorting and Counting Query//

// const readDoc = async () => {
//     const result = await Pateldata
//     .find()
//     .select({name : 1})
//     // .count();
//     // .countDocuments();
//     // .sort();
//     // .sort({name : 1});
//     .sort({name : -1});
//     console.log(result);
// }
// readDoc();

//update the document using mongoose//

// const updataDoc = async (_id) => {
//     try{
//         // const result = await Pateldata.updateOne({_id},{
//         const result = await Pateldata.findByIdAndUpdate({_id},{
//             $set : {
//                 name : "Aasutosh Gupta" 
//             }
//         },{
//             new : true
//         })
//         console.log(result);
//     }catch(err){
//         console.log(err);

//     }
// }
    

// updataDoc("638d9d8b258b8c285b1253c4");

//delete the document//

// const deleteDoc = async (_id) => {
//     try{
//         // const result = await Pateldata.deleteOne({_id});
//         const result = await Pateldata.findByIdAndDelete({_id});

//         console.log(result);

//     }catch(err){
//         console.log(err);
//     }
    
// }

// deleteDoc("638d9d8b258b8c285b1253c6");