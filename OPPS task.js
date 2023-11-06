
//!   Calculate the Uber Price
// class Uber{
//     constructor(vehicleType,kilometer){
//         this.vType = vehicleType
//         this.kms = kilometer
//         this.baseFare = this.vType ==="bike" ? 30 : this.vType ==="auto" ? 45 : this.vType ==="mini" ? 60 : this.vType==="sedan" ? 75 : this.vType ==="suv" ? 90 : console.log('Vehicle not Valid');
//         this.extraKms = this.vType ==="bike" ? 10 : this.vType ==="auto" ? 15 : this.vType ==="mini" ? 20 : this.vType==="sedan" ? 25 : this.vType ==="suv" ? 30 : console.log('Kilometer not Valid');
//     }
    
//   fareCalc(){
//         if(this.kms <3){
//            return this.baseFare = 5
//         }else{
//            return this.baseFare +(this.kms - 3) * this.extraKms;
//         }
//     }
// }
// let taxi = new Uber('mini',5)

// console.log(taxi.fareCalc());

// ***----------------------------------------------------***

//!   Person class Movie to get Rating 

// class Movie{
//     constructor(title,studio,rating="PG"){
//         this.title = title
//         this.studio = studio
//         this.rating = rating
//     }
//     static getPg(movies){
//         return movies.filter((e)=>e.rating==="PG")
//     }
// }

// let mOne = new Movie('TCasino Royale', 'Eon Productions', 'PG13')
// let mTwo = new Movie('Tamil Kudimagan', 'Lakshmi Creations','G')
// let mThree = new Movie('Raththam','Infiniti Film Ventures','PG13')
// let mFour = new Movie('Jailer', 'Sun Pictures')
// let mFive = new Movie('Thunivu', 'Zee Studios', 'G')
// let mSix = new Movie('Iraivan','Passion Studios')

// console.log(Movie.getPg([mOne,mTwo,mThree,mFour,mFive,mSix]));

// ***----------------------------------------------------***

//!   Person class to hold all the details 

// class Person{
//     constructor(name,dob,course,duration,place ){
//         this.name = name
//         this.dob = dob
//         this.course = course
//         this.duration = duration
//         this.place = place
//     }
//     get sName(){
//     return this.name
//     }
//     set sName(newName){
//         this.name = newName
//     }
//     get sDob(){
//     return this.dob
//     }
//     set sDob(newDob){
//         this.name = newDob
//     }
//     get sCourse(){
//     return this.course
//     }
//     set sCourse(newCourse){
//         this.name = newCourse
//     }
//     get sDuration(){
//     return this.duration
//     }
//     set sDuration(newDuration){
//         this.name = newDuration
//     }
//     get sPlace(){
//     return this.place
//     }
//     set sPlace(newPlace){
//         this.name = newPlace
//     }
// }
// let student = new Person('Giri', '13-07-1992', 'FUllStack', '3-Months','Chennai')

// student.sName = "Giri tharan"

// console.log(student.sPlace);

// ***----------------------------------------------------***