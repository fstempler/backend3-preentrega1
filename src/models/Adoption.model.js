import mongoose from "mongoose";

const adoptionSchema = new mongoose.Schema({
    petName: String,
    adopterName: String,
    date: { type: Date, default: Date.now },
});

export default mongoose.model('Adoption', adoptionSchema);

