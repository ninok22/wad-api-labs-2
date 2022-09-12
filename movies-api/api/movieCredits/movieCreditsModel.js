import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const MovieCreditsSchema = new Schema({
    id: {type: Number},
    cast: [{
        adult: {type: Boolean},
        gender: {type: Number},
        id: {type: Number},
        known_for_department: {type: String},
        name: {type: String},
        original_name: {type: String},
        popularity: {type: Number},
        profile_path:{type: String},
        cast_id: {type: Number},
        charachter: {type: String},
        credit_id: {type: String},
        order: {type: Number}
    }],
    crew: [{
        adult: {type: Boolean},
        gender: {type: Number},
        id: {type: Number},
        known_for_department: {type: String},
        name: {type: String},
        original_name: {type: String},
        popularity: {type: Number},
        profile_path:{type: String},
        credit_id: {type: String},
        department: {type: String},
        job: {type: String}
    }]
})    

MovieCreditsSchema.statics.findByCreditDBId = function (id) {
    return this.findOne({ id: id });
};
  
export default mongoose.model('Movie Credits', MovieCreditsSchema);